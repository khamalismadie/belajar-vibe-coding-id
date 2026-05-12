# 🛡️ Example: Automated Code Reviewer (Self-Critique)

Contoh ini mendemonstrasikan pola "Reflection" di mana AI mengevaluasi kodenya sendiri untuk mencapai kualitas tingkat senior.

## 1. The Vibe (Prompts)

### Prompt 1: Generation Phase
> "Tuliskan kode untuk sistem sistem autentikasi JWT di Node.js. Fokus pada fungsionalitas utama: login, register, dan middleware proteksi rute."

### Prompt 2: Critique Phase (The Reflection)
> "Sekarang, bertindaklah sebagai Senior Security Engineer. Review kode yang baru saja kamu buat. Cari celah keamanan seperti kelemahan hashing, token leak, atau SQL injection. Berikan daftar temuanmu."

### Prompt 3: Refinement Phase
> "Perbaiki kode tersebut berdasarkan temuan review tadi. Pastikan hasil akhirnya mengikuti standar keamanan OWASP terbaru."

## 2. Why it Works?
Pola ini memaksa AI untuk "berpikir dua kali" dan mengurangi kesalahan hingga 40% dibandingkan dengan *one-shot prompting*.

---
*Vibe Level: 3-4 (The Manager/Architect)*
