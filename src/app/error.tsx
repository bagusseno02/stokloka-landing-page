"use client";

import { Button } from "@/components/ui/button";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main id="main" className="mx-auto max-w-xl px-6 py-24">
      <h1 className="text-3xl font-semibold">Halaman belum dapat ditampilkan.</h1>
      <p className="my-6 text-muted-foreground">Silakan coba kembali.</p>
      <Button onClick={reset}>Coba lagi</Button>
    </main>
  );
}
