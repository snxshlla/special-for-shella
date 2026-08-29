# Special For Shella 💕

Website personal appreciation yang warm, cute, dan romantic untuk seseorang spesial.

## Fitur Utama

✨ **Opening Screen** - Halaman pembuka dengan animasi fade
💬 **Pesan Personal** - Pesan panjang yang hangat dan personal
📸 **Photo Gallery** - Galeri foto dengan caption (responsive)
🎯 **Quiz Game** - Seberapa kenal kamu sama aku? (5 pertanyaan)
❤️ **Catch The Heart** - Mini game menangkap hati (15 detik)
💌 **Open When** - Pesan untuk berbagai mood (capek, sedih, kangen, seneng)
🎵 **Music Player** - Player musik dengan kontrol play/pause
🎈 **Floating Hearts** - Animasi hati yang melayang lembut
⬆️ **Back to Top** - Tombol untuk kembali ke atas

## Struktur Folder

```
special-for-shella/
├── index.html
├── style.css
├── script.js
├── music.mp3
├── README.md
└── images/
    ├── photo1.jpg
    ├── photo2.jpg
    ├── photo3.jpg
    ├── photo4.jpg
    └── photo5.jpg
```

---

## 📖 Panduan Untuk Pemula

### 1. Cara Memasukkan Foto

**SANGAT MUDAH!** Anda tidak perlu mengubah kode HTML sama sekali.

Langkah-langkah:
1. Buka folder `images` di dalam project Anda
2. Masukkan 5 foto Anda dengan nama persis seperti ini:
   - `photo1.jpg`
   - `photo2.jpg`
   - `photo3.jpg`
   - `photo4.jpg`
   - `photo5.jpg`

Website akan otomatis mengambil foto dari folder tersebut.

**Jika foto belum ada?** Jangan khawatir! Website akan menampilkan "photo coming soon 📷" dan tidak akan error.

---

### 2. Cara Mengganti Caption Foto

Caption adalah tulisan kecil di bawah setiap foto.

**Buka file `script.js`** dan cari bagian ini di paling atas (baris 1-30):

```javascript
// ============================================
// EDIT FOTO DAN CAPTION DI SINI
// ============================================

const GALLERY_PHOTOS = [
    {
        filename: 'photo1.jpg',
        caption: 'salah satu foto kmu yg bikin aku senyum sendiri'
    },
    {
        filename: 'photo2.jpg',
        caption: 'ga tau kenapa aku suka bgt liat foto ini'
    },
    // ... dst
];
```

Untuk mengganti caption:
- Hapus teks dalam `'...'` setelah kata `caption:`
- Ketik caption baru Anda
- **Jangan hapus tanda petik `'` di awal dan akhir**

**Contoh:**
```javascript
{
    filename: 'photo1.jpg',
    caption: 'Ini adalah caption baru saya'
}
```

---

### 3. Cara Mengganti Musik

File musik harus bernama `music.mp3` dan diletakkan di folder utama (sama tempat dengan `index.html`).

Langkah-langkah:
1. Siapkan file musik Anda
2. Ubah nama menjadi persis: `music.mp3`
3. Letakkan di folder utama project
4. Musik akan otomatis diputar setelah user membuka website

**Format:** MP3, WAV, atau format audio lainnya yang didukung browser

**Jika musik belum ada?** Website tetap berjalan normal, hanya status music player akan menunjukkan "Unavailable".

---

### 4. Cara Mengganti Teks Ucapan (Quiz, Game, Open When)

Semua teks ucapan ada di file `script.js` dan sudah diberi label JELAS.

#### A. Mengganti Pertanyaan Quiz

Cari bagian ini (sekitar baris 60):

```javascript
// ============================================
// EDIT JAWABAN QUIZ DI SINI
// ============================================

const QUIZ_QUESTIONS = [
    {
        question: 'Kalau aku lagi gabut, biasanya aku paling pengen...',
        options: ['tidur', 'cht an sama kamu', 'makan', 'main game'],
        correctAnswer: 1
    },
    // ... dst
];
```

**Untuk mengubah pertanyaan:**
- Ubah teks dalam `'...'` setelah `question:`

**Untuk mengubah pilihan jawaban:**
- Ubah teks dalam array `['...', '...', '...', '...']`

**Untuk mengubah jawaban benar:**
- Ubah angka `correctAnswer: 1` (0 = pilihan pertama, 1 = pilihan kedua, dst)

#### B. Mengganti Pesan Hasil Quiz

Cari bagian ini (sekitar baris 95):

```javascript
const QUIZ_MESSAGES = {
    5: 'gila kmu kenal aku banget 😭💕',
    4: 'lumayan kenal aku, tapi masih harus sering ngobrol sama aku 🥺',
    // ... dst
};
```

Ubah teks dalam `'...'` sesuai kebutuhan Anda.

#### C. Mengganti Pesan Game Catch The Heart

Cari bagian ini (sekitar baris 108):

```javascript
const GAME_MESSAGES = {
    low: 'kayaknya hatinya susah ditangkep ya 😅',
    medium: 'lumayan, kamu ternyata jago juga 😊',
    high: 'segitu banyak hati yg kamu tangkep, sisain satu buat aku dong 💕'
};
```

**Penjelasan:**
- `low` = pesan untuk score rendah (< 10)
- `medium` = pesan untuk score sedang (10-20)
- `high` = pesan untuk score tinggi (> 20)

#### D. Mengganti Pesan Open When

Cari bagian ini (sekitar baris 117):

```javascript
const OPEN_WHEN_MESSAGES = {
    tired: 'udahh istirahat dulu, gausah mikirin apa\'...',
    sad: 'gapapa klo hari ini lagi ga baik...',
    miss: 'nahh kan kangen aku...',
    happy: 'nahh gini dongg, aku seneng klo kmu lagi seneng...'
};
```

Ubah teks sesuai kebutuhan Anda.

---

### 5. Cara Menjalankan Website

#### Di Komputer:

**Cara 1 - Langsung (Paling Mudah):**
1. Buka folder project `special-for-shella`
2. Double-click file `index.html`
3. Website akan terbuka di browser Anda

**Cara 2 - Menggunakan Live Server (VSCode):**
1. Buka folder project di VSCode
2. Click kanan pada `index.html`
3. Pilih "Open with Live Server"
4. Website akan terbuka otomatis

**Cara 3 - Command Line:**
```bash
# Windows: buka Command Prompt di folder project
python -m http.server 8000

# Mac/Linux: buka Terminal di folder project
python3 -m http.server 8000
```
Kemudian buka browser dan pergi ke: `http://localhost:8000`

---

### 6. Cara Membuka Website di HP

#### Cara A - Lewat Browser (Paling Mudah):

**Jika Komputer dan HP di WiFi yang sama:**

1. **Di Komputer**, buka Command Prompt (Windows) atau Terminal (Mac/Linux)
2. Masuk ke folder project Anda:
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
4. Cari IP address komputer Anda. Di Windows:
   ```bash
   ipconfig
   ```
   Lihat "IPv4 Address" (contoh: 192.168.1.100)

5. **Di HP**, buka browser (Chrome, Safari, Firefox)
6. Ketik di address bar: `http://192.168.1.100:8000`
7. Website akan terbuka di HP Anda!

#### Cara B - Upload ke GitHub Pages (Gratis):

1. Pastikan folder project sudah di-upload ke GitHub
2. Di GitHub, buka repository `special-for-shella`
3. Pergi ke **Settings** → **Pages**
4. Di bagian "Source", pilih **main branch** → Save
5. Tunggu beberapa menit
6. GitHub akan memberikan link (contoh: `https://snxshlla.github.io/special-for-shella`)
7. Buka link itu di HP Anda dari browser apapun!

---

## 🎨 Cara Mengubah Warna

Jika ingin mengubah warna website, buka file `style.css` dan cari bagian ini di paling atas:

```css
:root {
    --primary-pink: #FFB6D9;
    --soft-pink: #FFC0E0;
    --dark-pink: #FF99C8;
    --white: #FFFFFF;
    --text-dark: #5A5A5A;
    --text-light: #8B8B8B;
}
```

Ubah kode warna (contoh `#FFB6D9`) dengan warna pilihan Anda. Gunakan color picker online untuk menemukan warna yang tepat.

---

## 🐛 Troubleshooting

**P: Website tidak mau dibuka**
- Pastikan nama file adalah `index.html` (huruf kecil semua)
- Pastikan file HTML, CSS, JS ada di folder yang sama

**P: Foto tidak muncul**
- Pastikan nama foto persis: `photo1.jpg`, `photo2.jpg`, dll (huruf kecil, tanpa spasi)
- Pastikan foto ada di folder `images`
- Periksa format: harus JPG atau PNG

**P: Musik tidak muncul**
- Pastikan file bernama persis `music.mp3`
- Pastikan file ada di folder utama (sama tempat `index.html`)

**P: Quiz/Game tidak berfungsi**
- Buka Developer Tools (F12) dan lihat Console apakah ada error
- Refresh halaman (Ctrl+R atau Cmd+R)

**P: Animasi melambat di HP**
- Ini normal di HP lama. Animasi akan tetap berjalan, hanya lebih lambat.

---

## ✨ Tips Mengedit

1. **Selalu backup** file sebelum mengubah (buat copy)
2. **Jangan hapus** tanda petik, kurung, atau tanda koma
3. **Gunakan text editor** yang baik: VSCode, Sublime, Notepad++
4. **Jangan mengubah** struktur HTML kecuali Anda tahu apa yang Anda lakukan
5. **Refresh browser** setelah mengedit (Ctrl+R atau Cmd+R)

---

## 🎁 Selamat Menggunakan!

Website ini dibuat dengan hati untuk orang spesial. Semoga website ini bisa membuat hari mereka lebih berwarna. 💕

Selamat menggunakan! 🎉

---

**Dibuat dengan ❤️ untuk Shella**
