import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const PROMPTS_DIR = path.join(process.cwd(), 'prompts');

console.log('\n🚀 Tambah Prompt Baru ke Galeri\n');

rl.question('Judul Prompt (misal: Debug React Error): ', (title) => {
  rl.question('Kategori (misal: UI, Debug, Refactor): ', (category) => {
    rl.question('Deskripsi Singkat: ', (description) => {
      rl.question('Isi Prompt (The Vibe): ', (promptContent) => {
        
        const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        const fileName = `${slug}.md`;
        const filePath = path.join(PROMPTS_DIR, fileName);

        const content = `---
title: "${title}"
category: "${category}"
description: "${description}"
slug: "${slug}"
---

# ${title}

## Deskripsi
${description}

## Prompt
> "${promptContent}"

## Hasil yang Diharapkan
- [Isi hasil yang diharapkan di sini]

---
*Kategori: ${category} | Tool: AI*
`;

        fs.writeFileSync(filePath, content);
        console.log(`\n✅ Berhasil! Prompt baru disimpan di: prompts/${fileName}`);
        rl.close();
      });
    });
  });
});
