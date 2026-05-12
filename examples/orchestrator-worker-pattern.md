# 🤖 Example: Orchestrator-Worker Agent Pattern

Pola ini menunjukkan kematangan Vibe Coding (Level 4-5) di mana AI bertindak sebagai tim otonom yang saling berkolaborasi.

## 1. The Vibe (Prompts)

### Prompt 1: Arsitektur Agen
> "Bangun sistem agen untuk riset pasar otomatis. Saya ingin ada satu agen 'Orchestrator' yang menerima topik riset, lalu membagi tugas ke 3 agen worker:
> 1. Agen Peneliti: Mencari data terbaru di internet.
> 2. Agen Analis: Menganalisis tren dari data tersebut.
> 3. Agen Penulis: Merangkum semuanya menjadi artikel blog yang SEO-friendly."

### Prompt 2: Tool Integration
> "Berikan agen Peneliti akses ke Search API (seperti Tavily atau Serper). Pastikan agen Analis mendapatkan output mentah dari Peneliti untuk diproses."

### Prompt 3: Feedback Loop
> "Tambahkan instruksi ke Orchestrator untuk mengecek hasil akhir dari Penulis. Jika hasilnya kurang dari 1000 kata atau nadanya terlalu kaku, minta Penulis untuk merevisi bagian tersebut."

## 2. Technical Concept
- **Multi-Agent Systems:** Menggunakan framework seperti CrewAI atau smolagents.
- **Delegation:** Orchestrator mengelola state dan alur kerja antar worker.

---
*Vibe Level: 4 (The Architect)*
