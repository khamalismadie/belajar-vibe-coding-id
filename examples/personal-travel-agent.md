# ✈️ Example: Personal Travel Agent (RAG & Tool Use)

Contoh ini menunjukkan bagaimana AI dapat berinteraksi dengan dunia nyata dan data pribadi pengguna untuk memberikan hasil yang sangat personal.

## 1. The Vibe (Prompts)

### Prompt 1: User Context (RAG)
> "Buatkan agen asisten perjalanan. Agen ini harus membaca file `preferences.json` saya yang berisi budget, destinasi favorit, dan alergi makanan saya. Gunakan ini sebagai konteks dasar."

### Prompt 2: Real-time Search (Tool Use)
> "Berikan agen kemampuan untuk mencari tiket pesawat dan hotel secara real-time. Jika saya bilang 'Cari tiket ke Jepang bulan depan', agen harus mengecek kalender saya (API Google Calendar) dan mencari tiket di tanggal yang kosong."

### Prompt 3: Dynamic Itinerary
> "Hasil akhirnya harus berupa itinerary harian yang interaktif. Jika saya tidak suka satu jadwal, saya bisa bilang 'Ganti museum dengan taman safari' dan agen harus mengatur ulang seluruh logistik di hari itu."

## 2. Key Technology
- **Retrieval-Augmented Generation (RAG):** Menghubungkan LLM dengan data pribadi.
- **Function Calling:** Menghubungkan LLM dengan API eksternal.

---
*Vibe Level: 4 (The Architect)*
