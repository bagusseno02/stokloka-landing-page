import { Card } from "@/components/ui/card";
export function Hero() {
  return (
    <section className="grid items-center gap-12 py-20 md:grid-cols-2">
      <div>
        <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-primary">
          Satu tempat, semua operasional
        </p>
        <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
          Usaha lebih rapi.
          <br />
          <span className="text-primary">Jualan lebih tenang.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
          Satukan kasir, stok, dan laporan. Beri diri Anda lebih banyak waktu untuk pelanggan dan
          ide berikutnya.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:3001"}
          className="mt-8 inline-block rounded-xl bg-primary px-6 py-4 font-semibold text-white"
        >
          Jelajahi demo dashboard ↗
        </a>
      </div>
      <div className="rounded-3xl bg-muted p-8">
        <p className="mb-6 text-sm font-medium text-primary">GAMBARAN OPERASIONAL</p>
        <Card>
          <p className="text-sm text-muted-foreground">Semua aktivitas, satu pandangan</p>
          <h2 className="mt-3 text-2xl font-semibold">Siap untuk hari yang produktif.</h2>
          <div className="mt-8 space-y-3">
            {["Penjualan tercatat", "Stok terpantau", "Tim terhubung"].map((item) => (
              <p key={item} className="rounded-xl bg-background p-4">
                <span className="mr-3 text-primary">✓</span>
                {item}
              </p>
            ))}
          </div>
        </Card>
        <p className="mt-4 text-xs text-muted-foreground">Ilustrasi fitur Opnamora.</p>
      </div>
    </section>
  );
}
