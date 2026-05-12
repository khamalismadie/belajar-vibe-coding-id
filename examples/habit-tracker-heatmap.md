# 📊 Example: Habit Tracker with Heatmap (Vibe-First)

Aplikasi ini mendemonstrasikan bagaimana Vibe Coding dapat digunakan untuk membangun UI yang kompleks dan interaktif tanpa menyentuh logika CSS atau state management yang rumit secara manual.

## 1. The Vibe (Prompts)

### Prompt 1: Dasar & Estetika
> "Bangun aplikasi Habit Tracker satu halaman menggunakan React dan Tailwind CSS. Saya ingin temanya sangat minimalis dengan warna pastel (latte/soft cream). Berikan sudut-sudut yang sangat bulat (rounded-3xl) dan efek glassmorphism pada kartu utamanya."

### Prompt 2: Heatmap Grid
> "Tambahkan grid heatmap seperti di profil GitHub untuk melacak progress 30 hari terakhir. Setiap kotak grid mewakili satu hari. Jika diklik, kotak akan berubah warna menjadi hijau mint dan status hari tersebut tersimpan sebagai 'Selesai'."

### Prompt 3: Persistence
> "Gunakan `localStorage` agar data habit saya tidak hilang saat browser di-refresh. Tambahkan juga fitur untuk menambah nama habit baru secara dinamis."

## 2. Key Architecture (The Outcome)

Aplikasi ini menggunakan:
- **State:** `useState` untuk menyimpan array habit dan status harian.
- **Persistence:** `useEffect` untuk sinkronisasi dengan `window.localStorage`.
- **UI:** Grid sistem Tailwind dengan transisi warna yang smooth.

---
*Vibe Level: 2 (The Pilot)*
