import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PosScene } from "@/features/marketing/components/pos-scene";

const solutions = [
  {
    no: "01",
    name: "Retail",
    icon: "▦",
    text: "Dari gudang ke laporan, lebih terukur.",
    detail: "SKU, varian, barcode, dan stok per lokasi.",
  },
  {
    no: "02",
    name: "Distributor",
    icon: "◉",
    text: "Banyak lokasi, satu sumber data.",
    detail: "Warehouse, bin location, transfer, dan rekonsiliasi.",
  },
  {
    no: "03",
    name: "Tim Operasional",
    icon: "✳",
    text: "Hitung cepat, keputusan lebih pasti.",
    detail: "Mobile counting, approval variance, dan audit trail.",
  },
];
const questions = [
  [
    "Apakah bisa digunakan tanpa internet?",
    "PRD merancang operasional offline untuk perangkat terdaftar, maksimal 24 jam sejak autentikasi online terakhir dan mengikuti kebijakan usaha. Pembayaran terintegrasi tetap membutuhkan koneksi. Ketersediaan perlu dikonfirmasi sesuai tahap rilis.",
  ],
  [
    "Apakah bisa mengelola beberapa outlet?",
    "Rancangan Opnamora mendukung beberapa outlet dengan katalog, hak akses, serta laporan sesuai kebutuhan usaha. Seluruh outlet dalam satu tenant menggunakan mata uang yang sama.",
  ],
  [
    "Apakah semua printer bisa digunakan?",
    "Dukungan printer, scanner, dan cash drawer mengikuti platform serta pengujian kompatibilitas. Tidak semua model dapat dijamin berfungsi.",
  ],
  [
    "Bagaimana dengan QRIS dan pembayaran digital?",
    "QRIS terintegrasi dan payment gateway termasuk cakupan produk. Aktivasi mengikuti dukungan provider; status dibayar hanya diberikan setelah konfirmasi provider.",
  ],
  [
    "Apakah semua fitur sudah tersedia?",
    "Halaman ini menggambarkan visi produk berdasarkan PRD. Demo dashboard menggunakan data contoh. Konfirmasikan kesiapan fitur dan perangkat sebelum penggunaan operasional.",
  ],
];

export default function HomePage() {
  const demo = (process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:3001") + "/login";
  return (
    <>
      <Navbar />
      <main id="main">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> TEMAN TUMBUH USAHA ANDA
            </p>
            <h1>
              Stok akurat.
              <br />
              Keputusan <em>tenang.</em>
            </h1>
            <p className="hero-description">
              Dari campaign sampai approval variance. Satukan counting, stok, dan operasional
              dalam satu ruang kerja yang lebih dapat dipercaya.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href={demo}>
                Jelajahi demo <span>↗</span>
              </a>
              <a className="button-text" href="#fitur">
                Kenali Opnamora <span>↓</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="mini-devices">▱ ◫</span>
              <span>
                Dirancang untuk Android & web.
                <br />
                <strong>Mengikuti ritme usaha Anda.</strong>
              </span>
            </div>
          </div>
          <PosScene />
        </section>
        <section className="capability-strip" aria-label="Cakupan produk">
          <span>SATU EKOSISTEM</span>
          <b>Campaign opname</b>
          <i>✦</i>
          <b>Multi-warehouse</b>
          <i>✦</i>
          <b>Offline-first</b>
          <i>✦</i>
          <b>Approval & audit</b>
        </section>
        <section id="solusi" className="section-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">DIBUAT UNTUK OPERASIONAL YANG AKURAT</p>
              <h2>
                Beda lokasi.
                <br />
                <em>Tetap satu sumber data.</em>
              </h2>
            </div>
            <p>
              Warung kopi, toko favorit, atau layanan andalan. Alur kerja menyesuaikan kebutuhan
              usaha, bukan sebaliknya.
            </p>
          </div>
          <div className="solution-grid">
            {solutions.map((item) => (
              <article className="solution-card" key={item.name}>
                <div className="solution-top">
                  <span>{item.no}</span>
                  <span className="solution-icon">{item.icon}</span>
                </div>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
                <small>{item.detail}</small>
              </article>
            ))}
          </div>
          <p className="section-footnote">
            Menjual barang dan jasa sekaligus? Profil usaha campuran juga masuk dalam rancangan
            produk.
          </p>
        </section>
        <section id="fitur" className="section-shell features-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">LEBIH SEDIKIT KERUMITAN</p>
              <h2>
                Semua yang penting.
                <br />
                <em>Lebih mudah terlihat.</em>
              </h2>
            </div>
            <span className="outline-pill">RANCANGAN FITUR PRODUK</span>
          </div>
          <div className="bento-grid">
            <article className="bento bento-main">
              <div>
                <span className="feature-number">01 / KENDALI USAHA</span>
                <h3>
                  Satu pandangan.
                  <br />
                  Banyak keputusan baik.
                </h3>
                <p>
                  Pantau penjualan, aktivitas kasir, serta laporan lintas outlet dari Back Office.
                </p>
              </div>
              <div className="mini-report">
                <div>
                  <b>Ringkasan usaha</b>
                  <small>Ilustrasi</small>
                </div>
                <p>Penjualan per hari</p>
                <div
                  className="bar-chart"
                  role="img"
                  aria-label="Ilustrasi grafik penjualan tujuh hari"
                >
                  {[38, 60, 48, 75, 55, 92, 72].map((height, i) => (
                    <span key={i} style={{ height: height + "%" }} />
                  ))}
                </div>
                <div className="chart-days">
                  <span>Sen</span>
                  <span>Sel</span>
                  <span>Rab</span>
                  <span>Kam</span>
                  <span>Jum</span>
                  <span>Sab</span>
                  <span>Min</span>
                </div>
              </div>
            </article>
            <article className="bento">
              <span className="feature-number">02 / KATALOG & STOK</span>
              <div className="stack-illustration" aria-hidden="true">
                <i>▦</i>
                <i>▦</i>
                <i>▦</i>
              </div>
              <h3>Lebih rapi di balik layar.</h3>
              <p>
                Kelola varian, satuan, dan pergerakan stok. Temukan anomali untuk ditindaklanjuti.
              </p>
            </article>
            <article className="bento bento-lime">
              <span className="feature-number">03 / HARGA PER CHANNEL</span>
              <div className="channel-pills">
                <span>Dine-in</span>
                <span>Takeaway</span>
                <span>Delivery</span>
              </div>
              <h3>
                Beda channel,
                <br />
                harga tetap terarah.
              </h3>
              <p>
                Atur harga sesuai outlet dan channel. Riwayat transaksi mempertahankan harga saat
                penjualan.
              </p>
            </article>
          </div>
        </section>
        <section className="offline-section">
          <div className="offline-inner">
            <div className="offline-visual" aria-hidden="true">
              <div className="signal-ring">
                <span>↻</span>
              </div>
              <div className="offline-label">
                Simpan lokal <span>→</span> Sinkronkan kembali
              </div>
            </div>
            <div>
              <p className="eyebrow">KONEKSI BUKAN SELALU SEMPURNA</p>
              <h2>
                Siap menghadapi
                <br />
                <em>hari yang tak terduga.</em>
              </h2>
              <p>
                Opnamora dirancang agar operasional tetap punya jalan saat internet terganggu. Data
                disinkronkan kembali ketika perangkat terhubung.
              </p>
              <div className="offline-facts">
                <span>
                  Sesi offline maksimal <b>24 jam</b>
                </span>
                <span>
                  Pembayaran terintegrasi <b>perlu koneksi</b>
                </span>
              </div>
              <small>
                Memerlukan autentikasi online sebelumnya, perangkat terdaftar, dan kebijakan usaha
                yang sesuai. Konflik stok dapat memerlukan rekonsiliasi.
              </small>
            </div>
          </div>
        </section>
        <section className="section-shell workflow">
          <p className="eyebrow">DARI MEJA SAMPAI PEMBAYARAN</p>
          <h2>
            Tim terhubung.
            <br />
            <em>Pesanan lebih terarah.</em>
          </h2>
          <div className="workflow-line">
            {[
              { n: "01", title: "Catat pesanan", text: "Pilih meja, tipe pesanan, dan modifier." },
              { n: "02", title: "Teruskan ke dapur", text: "Arahkan item ke station yang sesuai." },
              {
                n: "03",
                title: "Pantau pembayaran",
                text: "Lihat status konfirmasi, lalu siapkan struk.",
              },
            ].map((step) => (
              <article key={step.n}>
                <span>{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="faq" className="section-shell faq-section">
          <div>
            <p className="eyebrow">MARI KENALI LEBIH DEKAT</p>
            <h2>
              Punya
              <br />
              <em>pertanyaan?</em>
            </h2>
            <p>Beberapa hal sebelum memulai.</p>
          </div>
          <div>
            {questions.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="closing-section">
          <span className="closing-spark" aria-hidden="true">
            ✳
          </span>
          <p className="eyebrow">LANGKAH BERIKUTNYA, BERSAMA</p>
          <h2>
            Ruang baru untuk
            <br />
            usaha <em>bertumbuh.</em>
          </h2>
          <a href={demo} className="button-primary">
            Lihat demo dashboard <span>↗</span>
          </a>
          <p className="closing-note">
            Jelajahi tampilan dengan data contoh. Ketersediaan fitur mengikuti tahap rilis.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
