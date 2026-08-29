# 🎁 Setup Guide - Special For Shella

Panduan lengkap untuk setup dan menjalankan website untuk pertama kalinya.

---

## ✅ File yang Sudah Ada

Semua file sudah tersedia di repository ini:

```
special-for-shella/
├── index.html          ✅ File HTML (jangan diubah)
├── style.css           ✅ File CSS (styling website)
├── script.js           ✅ File JavaScript (logika website)
├── .gitignore          ✅ File untuk GitHub
├── README.md           ✅ Panduan lengkap
├── SETUP.md            ✅ File ini
├── music-placeholder.txt
└── images/             📁 FOLDER KOSONG (siap untuk foto)
    └── .gitkeep
```

---

## 🚀 Step 1: Download Project

### Cara A - Download ZIP (Paling Mudah untuk Pemula)

1. Pergi ke: https://github.com/snxshlla/special-for-shella
2. Klik tombol hijau **"Code"** 
3. Klik **"Download ZIP"**
4. Extract file ZIP ke folder komputer Anda
5. Buka folder `special-for-shella`

### Cara B - Menggunakan Git

```bash
git clone https://github.com/snxshlla/special-for-shella.git
cd special-for-shella
```

---

## 📸 Step 2: Masukkan Foto

**INI ADALAH LANGKAH PALING PENTING!**

1. Siapkan 5 foto Anda
2. **RENAME** setiap foto dengan PERSIS seperti ini:
   - `photo1.jpg`
   - `photo2.jpg`
   - `photo3.jpg`
   - `photo4.jpg`
   - `photo5.jpg`

3. **PINDAHKAN** semua foto ke folder `images`

**Hasil akhirnya harus seperti ini:**
```
images/
├── photo1.jpg
├── photo2.jpg
├── photo3.jpg
├── photo4.jpg
└── photo5.jpg
```

**PENTING:**
- Huruf harus kecil (jangan `Photo1.jpg`)
- Harus format JPG atau PNG
- Nama folder harus `images` (bukan Images atau IMG)

**Jika foto belum ada?** Website tetap berjalan dengan placeholder "photo coming soon 📷"

---

## 🎵 Step 3: Tambahkan Musik (Opsional)

**Langkah ini opsional. Jika tidak, musik player akan menunjukkan "Unavailable"**

1. Siapkan file musik Anda (MP3, WAV, atau format audio lainnya)
2. **RENAME** menjadi persis: `music.mp3`
3. **PINDAHKAN** ke folder utama (sama tempat dengan `index.html`)

**Hasil akhirnya:**
```
special-for-shella/
├── index.html
├── music.mp3          ← File musik di sini
├── style.css
└── script.js
```

**Tips:**
- Sebaiknya ukuran file di bawah 5MB agar cepat load
- Musik akan otomatis diputar saat user membuka website
- User bisa pause/play dengan tombol musik

---

## ✏️ Step 4: Edit Konten (OPSIONAL)

Jika ingin mengedit teks, caption, pertanyaan quiz, dll, lihat file `README.md`.

Semua teks yang bisa diedit sudah diberi label JELAS di file `script.js`.

---

## ▶️ Step 5: Jalankan Website

### Cara A - Double-Click HTML (PALING MUDAH)

1. Buka folder `special-for-shella`
2. **Double-click** file `index.html`
3. Website akan terbuka di browser Anda secara otomatis

**Selesai!** ✅

---

### Cara B - Menggunakan VSCode (Recommended)

1. Buka VSCode
2. Buka folder `special-for-shella` (File → Open Folder)
3. Install extension **"Live Server"** (jika belum)
4. Click kanan pada `index.html`
5. Pilih **"Open with Live Server"**
6. Website akan terbuka otomatis

---

### Cara C - Menggunakan Python (Untuk Advanced)

**Windows:**
```bash
cd path\to\special-for-shella
python -m http.server 8000
```

**Mac/Linux:**
```bash
cd path/to/special-for-shella
python3 -m http.server 8000
```

Kemudian buka browser dan pergi ke: `http://localhost:8000`

---

## 📱 Step 6: Buka di HP

### Cara A - Same WiFi Network (PALING MUDAH)

**Syarat: Komputer dan HP harus terhubung ke WiFi yang sama**

1. Di Komputer, buka Command Prompt atau Terminal
2. Masuk ke folder project:
   ```bash
   cd path/to/special-for-shella
   ```

3. Jalankan server:
   ```bash
   python -m http.server 8000
   ```
   atau
   ```bash
   python3 -m http.server 8000
   ```

4. Cari IP address komputer. Di Windows, ketik:
   ```bash
   ipconfig
   ```
   Lihat "IPv4 Address" (contoh: `192.168.1.100`)

5. Di HP, buka browser (Chrome, Firefox, Safari)
6. Ketik di address bar: `http://192.168.1.100:8000`
7. Website akan terbuka di HP! 🎉

---

### Cara B - Upload ke GitHub Pages (GRATIS & PERMANENT)

Ini cara paling bagus jika ingin sharing link ke orang lain.

1. Pastikan repository sudah di-push ke GitHub (semua file ada di GitHub)
2. Di GitHub, buka repository Anda
3. Pergi ke **Settings** (tab settings)
4. Di sidebar kiri, klik **Pages**
5. Di bagian "Source", pilih branch **main** → Save
6. Tunggu 1-2 menit
7. GitHub akan memberikan link, contoh:
   ```
   https://snxshlla.github.io/special-for-shella/
   ```
8. Buka link itu dari HP atau komputer apapun! 🌍

**Keuntungan:** Bisa dibuka dari device apapun, kapan saja, tanpa perlu komputer nyala.

---

## 🎨 Struktur Konten & Edit Area

Semua teks yang bisa diedit ada di file `script.js`:

### Area 1: Foto & Caption (Baris 1-30)
```javascript
// EDIT FOTO DAN CAPTION DI SINI
const GALLERY_PHOTOS = [...]
```

### Area 2: Quiz Questions (Baris 32-60)
```javascript
// EDIT JAWABAN QUIZ DI SINI
const QUIZ_QUESTIONS = [...]
```

### Area 3: Quiz Result Messages (Baris 62-70)
```javascript
const QUIZ_MESSAGES = {...}
```

### Area 4: Game Messages (Baris 72-80)
```javascript
const GAME_MESSAGES = {...}
```

### Area 5: Open When Messages (Baris 82-90)
```javascript
const OPEN_WHEN_MESSAGES = {...}
```

---

## 🐛 Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Website tidak bisa dibuka | Pastikan double-click `index.html`, bukan file lain |
| Foto tidak muncul | Nama foto harus persis `photo1.jpg` dll, ada di folder `images` |
| Musik tidak diputar | Nama file harus persis `music.mp3`, di folder utama |
| Quiz/Game tidak jalan | Refresh browser (Ctrl+R) atau buka Console (F12) cek error |
| Animasi lambat di HP | Normal di HP lama. Coba restart browser |
| Error "Cannot find module" | Pastikan semua file ada di folder yang sama |
| Tidak bisa buka di HP | Pastikan HP dan komputer di WiFi sama, cek IP address |

---

## ✨ Tips

1. **Test di HP dulu sebelum memberikan ke orang** - Pastikan semua foto sudah ada dan musik berfungsi
2. **Buat backup folder project** - Jika ingin eksperimen, copy folder dulu
3. **Jangan ubah HTML** - Cukup edit file `script.js` untuk konten
4. **Refresh browser setelah edit** - Tekan Ctrl+R atau Cmd+R
5. **Gunakan text editor yang baik** - VSCode, Sublime, atau Notepad++ (bukan Notepad)

---

## 📞 Perlu Bantuan?

Lihat file `README.md` untuk panduan lengkap setiap fitur.

---

## 🎉 Selesai!

Website siap digunakan. Selamat memberikan surprise ke Shella! 💕

**Made with ❤️ for Shella**
