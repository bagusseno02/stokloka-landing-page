import { Card } from "@/components/ui/card";
const features = [
  {
    title: "Kasir yang teratur",
    text: "Kelola transaksi, metode pembayaran, dan struk dalam satu alur.",
  },
  { title: "Stok yang terlihat", text: "Pantau persediaan dan catat perubahan stok setiap hari." },
  {
    title: "Laporan yang jelas",
    text: "Lihat ringkasan penjualan untuk membantu keputusan usaha.",
  },
];
export function FeatureGrid() {
  return (
    <section id="fitur" className="pb-24">
      <h2 className="mb-8 text-3xl font-semibold">Dari buka toko sampai tutup kasir.</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={feature.title}>
            <p className="mb-8 text-sm text-primary">0{index + 1}</p>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{feature.text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
