import Link from "next/link";
import Image from "next/image";
export function Footer() {
  return (
    <footer className="site-footer">
      <Link href="/" className="wordmark">
        <Image src="/stokloka-logo.png" alt="StokLoka" width={2103} height={748} className="brand-logo" />
      </Link>
      <p>Satu sumber data untuk keputusan yang lebih tenang.</p>
      <span>© {new Date().getFullYear()} Opnamora</span>
      <a href="#main">Kembali ke atas ↑</a>
    </footer>
  );
}
