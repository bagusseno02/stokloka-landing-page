import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-xl px-6 py-24">
      <h1 className="text-3xl font-bold">Halaman tidak ditemukan</h1>
      <Link href="/" className="mt-6 inline-block underline">
        Kembali ke beranda
      </Link>
    </main>
  );
}
