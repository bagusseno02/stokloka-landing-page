"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link href="/" className="wordmark" aria-label="StokLoka beranda">
          <Image src="/stokloka-logo.png" alt="StokLoka" width={2103} height={748} className="brand-logo" preload />
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Tutup ✕" : "Menu ☰"}
        </button>
        <nav
          id="site-nav"
          className={open ? "nav-links is-open" : "nav-links"}
          aria-label="Navigasi utama"
        >
          <a onClick={() => setOpen(false)} href="#solusi">
            Solusi usaha
          </a>
          <a onClick={() => setOpen(false)} href="#fitur">
            Fitur
          </a>
          <a onClick={() => setOpen(false)} href="#faq">
            FAQ
          </a>
          <a
            className="nav-cta"
            href={(process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:3001") + "/login"}
          >
            Masuk dashboard <span>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
