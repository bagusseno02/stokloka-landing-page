# Opnamora landing-page

Next.js App Router, TypeScript strict, Tailwind CSS v4.

## Menjalankan
```sh
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Batas layer
- src/app: routing, layout, metadata, Route Handler. Page mendelegasikan UI ke features.
- src/components/ui: komponen dasar reusable.
- src/components/layout: shell, navigasi, footer.
- src/features: domain fitur; components, hooks, data, dan types sesuai kebutuhan.
- src/lib: konfigurasi dan client pihak ketiga. API client server-only.
- src/utils: fungsi murni tanpa dependency UI.
- src/types: kontrak lintas fitur. Schema fitur berada di fitur pemiliknya.
- public: aset statis.

Server Components menjadi default. Client Components hanya untuk interaksi.
Token desain terpusat di globals.css memakai @theme Tailwind v4.
Route group tidak menjadi segmen URL; _components privat bagi kelompok route.

Dashboard adalah demo publik, bukan area berautentikasi. Login, MFA, cookie sesi,
otorisasi, dan integrasi transaksi perlu diimplementasikan sebelum memakai data nyata.
Jangan memasukkan token atau secret ke NEXT_PUBLIC_*.
Server Actions ditambahkan pada fitur saat ada mutasi nyata, bukan stub.
Backend Go tetap menangani aturan bisnis dan database.

Referensi: https://nextjs.org/docs,
https://google.github.io/styleguide/tsguide.html,
skill tailwind-design-system dari wshobson/agents.
# stokloka-landing-page
