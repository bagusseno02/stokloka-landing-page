import { test, expect } from "@playwright/test";

// Boundary widths around the mobile navigation breakpoint, plus short landscape.
for (const viewport of [
  { width: 320, height: 568 },
  { width: 360, height: 640 },
  { width: 760, height: 600 },
  { width: 761, height: 600 },
  { width: 1024, height: 600 },
  { width: 1440, height: 900 },
  { width: 844, height: 390 },
]) {
  for (const reducedMotion of ["reduce", "no-preference"] as const) {
    test(`layout ${viewport.width}x${viewport.height} motion=${reducedMotion}`, async ({
      page,
    }) => {
      await page.setViewportSize(viewport);
      await page.emulateMedia({ reducedMotion });
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      await page.goto("/");
      await expect(page.locator("h1")).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
        viewport.width,
      );
      const toggle = page.getByRole("button", { name: /Menu/ });
      if (await toggle.isVisible()) {
        const nav = page.getByRole("navigation", { name: "Navigasi utama" });
        await expect(nav).toBeHidden();
        await toggle.click();
        await expect(nav).toBeVisible();
        await nav.getByRole("link", { name: "FAQ", exact: true }).click();
        await expect(nav).toBeHidden();
        await expect(toggle).toHaveAttribute("aria-expanded", "false");
      }
      expect(errors).toEqual([]);
    });
  }
}

for (const path of ["/missing-page", "/fitur/tidak-ada", "/login"]) {
  test(`unknown route ${path} returns 404 and offers recovery`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { name: "Halaman tidak ditemukan" })).toBeVisible();
    await page.getByRole("link", { name: "Kembali ke beranda" }).click();
    await expect(page).toHaveURL("/");
    await expect(page.locator("h1")).toBeVisible();
  });
}

test("blocked image requests do not block content, navigation or FAQ", async ({ page }) => {
  await page.route("**/*", (route) =>
    route.request().resourceType() === "image" ? route.abort() : route.continue(),
  );
  await page.goto("/");
  await expect(page.locator("h1")).toBeVisible();
  await expect(page.getByRole("link", { name: /Lihat demo dashboard/ }).first()).toBeVisible();
  await page.locator("summary").first().click();
  await expect(page.locator("details").first()).toHaveAttribute("open", "");
});

test("FAQ toggles every open/closed combination independently", async ({ page }) => {
  await page.goto("/");
  const entries = page.locator("details");
  const count = await entries.count();
  expect(count).toBe(5);
  // Gray code traverses all 32 states while changing only one FAQ per step.
  for (let step = 0; step < 1 << count; step++) {
    const mask = step ^ (step >> 1);
    for (let index = 0; index < count; index++) {
      const entry = entries.nth(index);
      const wanted = Boolean(mask & (1 << index));
      if ((await entry.evaluate((el) => (el as HTMLDetailsElement).open)) !== wanted) {
        await entry.locator("summary").focus();
        await page.keyboard.press("Enter");
      }
      await expect.poll(() => entry.evaluate((el) => (el as HTMLDetailsElement).open)).toBe(wanted);
    }
  }
});

test("unknown fragment does not break page or valid anchor recovery", async ({ page }) => {
  await page.goto("/#not-a-section");
  await expect(page.locator("h1")).toBeVisible();
  await page
    .getByRole("navigation", { name: "Navigasi utama" })
    .getByRole("link", { name: "Fitur", exact: true })
    .click();
  await expect(page).toHaveURL(/#fitur$/);
  await expect(page.locator("#fitur")).toBeInViewport();
});
