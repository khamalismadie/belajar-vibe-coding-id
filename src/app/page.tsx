"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, Layers, Code, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Komunitas Vibe Coding Pertama di Indonesia</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-transparent">
              Coding Bukan Lagi Soal Sintaks, Tapi <span className="text-primary italic">Niat.</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Membangun masa depan software engineering dengan pendekatan Vibe-First. 
              Gunakan kekuatan AI untuk mewujudkan ide Anda secepat pikiran.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link href="/docs/vibe-coding-101">
                <Button size="lg" className="h-12 px-8 text-lg gap-2 w-full sm:w-auto">
                  Mulai Belajar <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/prompts">
                <Button size="lg" variant="outline" className="h-12 px-8 text-lg w-full sm:w-auto">
                  Lihat Prompt Gallery
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="h-8 w-8 text-yellow-500" />,
              title: "Kecepatan Ekstrim",
              desc: "Membangun aplikasi dari nol hingga deploy dalam hitungan menit."
            },
            {
              icon: <Target className="h-8 w-8 text-blue-500" />,
              title: "Fokus pada Intent",
              desc: "Lupakan boilerplate. Fokus pada logika bisnis dan pengalaman pengguna."
            },
            {
              icon: <Layers className="h-8 w-8 text-purple-500" />,
              title: "Aksesibilitas Luas",
              desc: "Semua orang bisa jadi developer. Cukup deskripsikan ide Anda."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leveling Preview */}
      <section className="container mx-auto px-4 py-20 rounded-3xl bg-muted/50 border border-border">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Tangga Kemahiran Vibe Coding</h2>
            <p className="text-muted-foreground">Dari menulis baris demi baris, hingga menjadi Visioner.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "The Monk", "Copilot User", "Junior Manager", "Senior Manager", "The Architect", "The Visionary"
            ].map((level, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary">
                  {i}
                </div>
                <span className="text-xs font-medium text-center">{level}</span>
              </div>
            ))}
          </div>
          <Link href="/docs/leveling">
            <Button variant="link" className="text-primary mt-8">
              Pelajari detail leveling &rarr;
            </Button>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 text-center space-y-8 py-20">
        <Code className="h-16 w-16 mx-auto text-muted-foreground/30" />
        <h2 className="text-4xl font-bold tracking-tight">Siap Bergabung dengan Masa Depan?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Mulai kontribusi di repositori open-source kami dan bantu bangun ekosistem 
          Vibe Coding terbesar di Indonesia.
        </p>
        <Link href="https://github.com/khamal/belajar-vibe-coding-id" target="_blank">
          <Button size="lg" className="rounded-full px-12">
            Kontribusi Sekarang
          </Button>
        </Link>
      </section>
    </div>
  );
}
