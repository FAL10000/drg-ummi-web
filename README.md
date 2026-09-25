# Praktek Dokter Gigi drg. Ummi Kaltsum — Website

Website resmi praktik dokter gigi mandiri keluarga **drg. Ummi Kaltsum**, berlokasi di Panunggangan Barat, Kec. Cibodas, Kota Tangerang.

Dibangun dengan **React**, **TypeScript**, **Tailwind CSS**, dan **Vite** berdasarkan visual design system dari Google Stitch.

---

## 🌟 Fitur Utama

1. **Desain Editorial & Tenang (Stitch Source of Truth)**
   - Mengikuti typography dan visual hierarchy Stitch: *Playfair Display* (serif), *Plus Jakarta Sans* (sans), dan *JetBrains Mono* (mono).
   - Palet warna: Navy (`#172A3A`), Slate (`#243B53`), Linen White (`#FAF9F6`), Light Blue (`#F1F6FA`), dan WhatsApp Green (`#25D366`).

2. **Pusat Informasi Bisnis Terpadu**
   - Seluruh data bisnis (nama klinik, kontak, nomor WhatsApp, alamat, jadwal, layanan, fasilitas, FAQ) terpusat di satu berkas konfigurasi: [`src/config/business.ts`](./src/config/business.ts).

3. **Integrasi WhatsApp Booking Otomatis**
   - Tautan WhatsApp dinamis dengan pesan pembuka pre-filled untuk konsultasi umum, jadwal malam, rute alamat, serta setiap jenis layanan.

4. **Jadwal & Kebijakan Janji Temu Malam**
   - Jadwal reguler: Senin–Jumat 16.00–20.00 WIB, Sabtu 09.00–16.00 WIB.
   - Jam malam hingga 21.00 WIB ditegaskan secara tegas sebagai **By Appointment Only** (tidak melayani walk-in larut malam).

5. **Aset Gambar Lokal (`/public/images`)**
   - Menggunakan aset ilustrasi dan dokumentasi visual lokal di [`/public/images/`](./public/images/) tanpa hotlink gambar eksternal yang rentan putus.

6. **SEO & Structured Data (JSON-LD)**
   - Komponen [`DentistJsonLd.tsx`](./src/components/DentistJsonLd.tsx) menyematkan schema `Dentist` dari Schema.org lengkap dengan geolocation, jam operasional, rating agregat, dan kontak resmi.

7. **GA4 Event Tracking Hooks**
   - Utilitas [`src/utils/analytics.ts`](./src/utils/analytics.ts) melacak event interaksi penting seperti `whatsapp_booking_click`, `google_maps_click`, `phone_call_click`, dan `faq_interaction`.

8. **Optimasi Mobile-First**
   - Header responsif dengan menu drawer mobile dan bilah navigasi melayang (*sticky floating bottom bar*) untuk akses cepat ke peta dan WhatsApp.

9. **Interactive Concept Switcher (Multi-Concept Preview)**
   - Tombol melayang (*floating switcher*) di pojok kanan atas untuk berpindah seketika (*instant switch*) di antara 4 konsep visual Stitch:
     - 💎 **Flagship Editorial** (Desain Utama: Navy & Slate Editorial)
     - 🌿 **Concept 1: Japanese Minimal** (Tenang, Arsitektural, & Vertikal)
     - 🏡 **Concept 2: Warm Neighborhood Family** (Ramah, Terracotta & Homey)
     - ⚡ **Concept 3: Bold Contemporary** (Swiss Typographic & Modern Kontras Tinggi)
   - Pilihan konsep tersimpan di `localStorage` peramban.

---

## 🛠️ Panduan Menjalankan

### Menjalankan Development Server:
```bash
npm run dev
```

### Membangun Versi Produksi:
```bash
npm run build
```

### Preview Hasil Build Produksi:
```bash
npm run preview
```
