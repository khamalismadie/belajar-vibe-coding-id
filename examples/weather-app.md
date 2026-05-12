# 🌤️ Example: Weather App (Vibe-First)

Ini adalah contoh proyek mini yang dibangun menggunakan pendekatan **Vibe Coding**. Fokus utamanya adalah bagaimana kita merubah "Niat" menjadi aplikasi fungsional tanpa menulis kode logika secara manual.

## 1. The Vibe (Prompts)

Untuk membangun aplikasi ini, berikut adalah urutan prompt yang digunakan pada AI (Claude/GPT/Gemini):

### Prompt 1: Dasar Aplikasi
> "Buatkan saya aplikasi cuaca sederhana menggunakan React dan Tailwind CSS. Saya ingin ada input untuk nama kota, dan menampilkan suhu, kondisi (awan/hujan), serta kelembapan. Gunakan data mock (dummy) dulu saja."

### Prompt 2: Integrasi API
> "Sekarang hubungkan aplikasi tersebut dengan OpenWeatherMap API. Tambahkan handling untuk 'City not found' dan tampilkan loading spinner saat data sedang diambil."

### Prompt 3: UI Polish
> "Tingkatkan tampilannya. Gunakan background gradasi yang berubah sesuai waktu (pagi/malam). Tambahkan ikon yang sesuai dari Lucide React."

## 2. The Result (The Code)

Berikut adalah komponen React utama hasil dari "vibe" di atas:

```tsx
import React, { useState, useEffect } from 'react';
import { Search, Cloud, Sun, Droplets, Wind, AlertCircle } from 'lucide-react';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city) return;
    
    setLoading(true);
    setError('');
    
    // Simulasi Fetch API (Ganti dengan API Key Anda)
    try {
      // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
      // const data = await response.json();
      
      // Data Mock untuk Demonstrasi
      setTimeout(() => {
        if (city.toLowerCase() === 'jakarta') {
          setWeather({
            name: 'Jakarta',
            temp: 32,
            condition: 'Cerah Berawan',
            humidity: 70,
            wind: 12
          });
        } else {
          setError('Kota tidak ditemukan atau API Key belum diset.');
        }
        setLoading(false);
      }, 1000);
      
    } catch (err) {
      setError('Gagal mengambil data cuaca.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[400px] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
        <form onSubmit={fetchWeather} className="relative mb-8">
          <input
            type="text"
            placeholder="Cari kota (misal: Jakarta)..."
            className="w-full bg-white/20 border-none rounded-2xl py-4 px-6 pr-12 text-white placeholder-white/60 focus:ring-2 focus:ring-primary outline-none transition-all"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors">
            <Search size={24} />
          </button>
        </form>

        {loading && <div className="text-center text-white">Mencari data...</div>}
        
        {error && (
          <div className="flex items-center gap-2 text-red-300 bg-red-900/20 p-4 rounded-2xl">
            <AlertCircle size={20} />
            <p>{error}</p>
          </div>
        )}

        {weather && !loading && (
          <div className="text-center text-white space-y-6">
            <div className="flex justify-center">
              <Sun className="h-24 w-24 text-yellow-400 animate-pulse" />
            </div>
            <div className="space-y-1">
              <h2 className="text-5xl font-bold">{weather.temp}°C</h2>
              <p className="text-xl text-white/80">{weather.name}</p>
              <p className="font-medium">{weather.condition}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <Droplets className="mx-auto mb-2 opacity-60" />
                <p className="text-xs opacity-60">Kelembapan</p>
                <p className="font-bold">{weather.humidity}%</p>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <Wind className="mx-auto mb-2 opacity-60" />
                <p className="text-xs opacity-60">Kecepatan Angin</p>
                <p className="font-bold">{weather.wind} km/h</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
```

---
*Ingin membuat aplikasi seperti ini? Mulailah dengan mendeskripsikan 'Vibe' Anda ke AI.*
