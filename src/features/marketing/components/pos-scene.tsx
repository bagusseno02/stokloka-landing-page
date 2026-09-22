"use client";

import { useState, type CSSProperties } from "react";

const views = [
  {
    name: "Kafe",
    products: ["Kopi susu", "Matcha latte", "Croissant", "Americano"],
    icons: ["☕", "🍵", "🥐", "☕"],
    total: "Rp72.000",
  },
  {
    name: "Retail",
    products: ["Roti gandum", "Susu segar", "Kopi bubuk", "Teh hijau"],
    icons: ["🍞", "🥛", "☕", "🍵"],
    total: "Rp86.000",
  },
  {
    name: "Jasa",
    products: ["Konsultasi", "Perawatan", "Servis ringan", "Paket layanan"],
    icons: ["✦", "◈", "⚙", "✧"],
    total: "Rp150.000",
  },
];

export function PosScene() {
  const [view, setView] = useState(0);
  const [angle, setAngle] = useState({ x: 9, y: -16 });
  const [interactive, setInteractive] = useState(true);
  const data = views[view];
  return (
    <div className="scene-wrap">
      <div className="scene-orbit orbit-one" />
      <div className="scene-orbit orbit-two" />
      <div
        className="scene"
        onPointerMove={(event) => {
          if (
            !interactive ||
            event.pointerType !== "mouse" ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
          )
            return;
          const rect = event.currentTarget.getBoundingClientRect();
          setAngle({
            x: 9 - ((event.clientY - rect.top) / rect.height - 0.5) * 12,
            y: -16 + ((event.clientX - rect.left) / rect.width - 0.5) * 18,
          });
        }}
        onPointerLeave={() => setAngle({ x: 9, y: -16 })}
      >
        <div
          className="terminal"
          style={{ "--rx": `${angle.x}deg`, "--ry": `${angle.y}deg` } as CSSProperties}
        >
          <div className="terminal-back" />
          <div className="terminal-screen">
            <div className="screen-top">
              <b>
                opnamora<span>●</span>
              </b>
              <span>Outlet Utama · Demo</span>
            </div>
            <div className="screen-body">
              <div className="screen-products">
                <div className="screen-heading">
                  Menu favorit <span>⌕</span>
                </div>
                <div className="screen-search">Temukan produk...</div>
                <div className="product-tiles">
                  {data.products.map((product, index) => (
                    <div key={product}>
                      <span aria-hidden="true">{data.icons[index]}</span>
                      <b>{product}</b>
                      <small>Produk contoh</small>
                    </div>
                  ))}
                </div>
              </div>
              <div className="screen-order">
                <b>Pesanan #024</b>
                <small>Contoh pesanan</small>
                <div className="order-item">
                  {data.products[0]}
                  <span>2×</span>
                </div>
                <div className="order-item">
                  {data.products[2]}
                  <span>1×</span>
                </div>
                <div className="order-total">
                  <small>Total ilustrasi</small>
                  <strong>{data.total}</strong>
                </div>
                <div className="screen-pay">Lanjut pembayaran →</div>
              </div>
            </div>
          </div>
          <div className="terminal-neck" />
          <div className="terminal-base" />
        </div>
        <div className="float-card receipt">
          <span className="tiny-label">RAPI, SAMPAI DETAILNYA</span>
          <b>
            Satu transaksi.
            <br />
            Semua tercatat.
          </b>
          <div className="receipt-lines">
            <i />
            <i />
            <i />
          </div>
          <span className="receipt-mark">✓ Struk digital</span>
        </div>
        <div className="float-card stock">
          <span className="stock-icon">↗</span>
          <div>
            <b>Stok lebih terlihat</b>
            <small>Setiap outlet, satu pandangan</small>
          </div>
        </div>
      </div>
      <div className="scene-controls">
        <div aria-label="Jenis usaha" className="scene-tabs">
          {views.map((item, index) => (
            <button key={item.name} aria-pressed={view === index} onClick={() => setView(index)}>
              {item.name}
            </button>
          ))}
        </div>
        <button
          className="motion-toggle"
          aria-pressed={interactive}
          onClick={() => {
            setInteractive(!interactive);
            setAngle({ x: 9, y: interactive ? 0 : -16 });
          }}
        >
          {interactive ? "Tampilan datar" : "Tampilan 3D"}
        </button>
      </div>
      <p className="scene-caption">
        ILUSTRASI PRODUK · DATA DEMO · GESER POINTER UNTUK MENJELAJAHI
      </p>
    </div>
  );
}
