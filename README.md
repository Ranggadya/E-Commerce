# 👟 Shoes4Us E-Commerce Platform

Platform e-commerce modern untuk penjualan sepatu dengan antarmuka yang elegan dan user-friendly. Dibangun dengan Next.js 14, TypeScript, dan TailwindCSS.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8)
![React](https://img.shields.io/badge/React-18.3-61dafb)
![License](https://img.shields.io/badge/License-MIT-green)

> **Repository:** [https://github.com/Ranggadya/E-Commerce](https://github.com/Ranggadya/E-Commerce)

## 📋 Daftar Isi

- [Tentang Project](#-tentang-project)
- [Fitur Utama](#-fitur-utama)
- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
- [Prerequisites](#-prerequisites)
- [Instalasi & Setup](#-instalasi--setup)
- [Menjalankan Project](#-menjalankan-project)
- [Struktur Folder](#-struktur-folder)
- [Konfigurasi](#-konfigurasi)
- [Development](#-development)
- [Troubleshooting](#-troubleshooting)
- [Build & Deployment](#-build--deployment)
- [Tim Pengembang](#-tim-pengembang)
- [Contributing](#-contributing)
- [Lisensi](#-lisensi)

## ⚡ Quick Start

Ingin langsung mencoba? Ikuti 3 langkah ini:

```bash
# 1. Clone repository
git clone https://github.com/Ranggadya/E-Commerce.git
cd E-Commerce

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

Buka browser dan akses **http://localhost:3000** 🎉

---

## 🎯 Tentang Project

**Shoes4Us** adalah platform e-commerce modern yang dikembangkan sebagai proyek akhir mata kuliah Pemrograman Berbasis Platform (PBP) Universitas Diponegoro. Platform ini menyediakan pengalaman berbelanja sepatu online yang seamless dengan antarmuka yang elegan dan user-friendly.

### 🎨 Preview

```
┌─────────────────────────────────────────────────┐
│  🏠 Homepage                                    │
│  • Hero Carousel dengan promosi terbaru        │
│  • Featured Products showcase                  │
│  • Category navigation                         │
│  • Why Choose Us section                       │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  👟 Product Catalog                            │
│  • Advanced filters (category, price, sort)    │
│  • Search functionality                        │
│  • Pagination                                  │
│  • Responsive grid layout                      │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  🛒 Shopping Cart                              │
│  • Add/remove items                            │
│  • Update quantity                             │
│  • Real-time price calculation                 │
│  • Seamless checkout flow                      │
└─────────────────────────────────────────────────┘
```

### 🌟 Key Features

**Untuk Pengguna:**
- ✅ Sistem autentikasi pengguna yang aman
- ✅ Manajemen keranjang belanja real-time
- ✅ Proses checkout yang mudah dan intuitif
- ✅ Multiple payment methods
- ✅ Pelacakan pesanan real-time
- ✅ Review dan rating produk
- ✅ Wishlist untuk save produk favorit
- ✅ Global search dengan autocomplete
- ✅ Responsive design (Mobile, Tablet, Desktop)

**Untuk Admin:**
- ✅ Admin dashboard dengan statistik
- ✅ Manajemen produk (CRUD operations)
- ✅ Manajemen pesanan
- ✅ User management

**Legal & Support:**
- ✅ Kebijakan Privasi lengkap
- ✅ Syarat & Ketentuan
- ✅ FAQ dengan search & filter
- ✅ Contact form dengan multiple channels

## ✨ Fitur Utama

### 🛍️ Untuk Pengguna
- **Katalog Produk**: Jelajahi koleksi sepatu dengan filter dan pencarian
- **Detail Produk**: Lihat informasi lengkap, gambar, dan review produk
- **Keranjang Belanja**: Kelola item dengan mudah
- **Checkout Aman**: Proses pembayaran yang aman dan terintegrasi
- **Pelacakan Pesanan**: Monitor status pesanan secara real-time
- **Wishlist**: Simpan produk favorit untuk dibeli nanti
- **Review & Rating**: Baca dan tulis review produk

### 👨‍💼 Untuk Admin
- **Dashboard**: Pantau penjualan dan statistik
- **Manajemen Produk**: Tambah, edit, dan hapus produk
- **Manajemen Pesanan**: Kelola dan update status pesanan
- **Manajemen User**: Kelola akun pengguna

### 🎨 UI/UX
- **Responsive Design**: Optimal di semua perangkat
- **Dark/Light Mode**: (Coming soon)
- **Loading States**: Skeleton loading untuk UX yang lebih baik
- **Error Handling**: Pesan error yang jelas dan informatif
- **Toast Notifications**: Feedback instan untuk setiap aksi

## 🛠️ Teknologi yang Digunakan

### Frontend
- **Next.js 14.2** - React framework dengan App Router
- **React 18.3** - Library UI
- **TypeScript 5.0** - Type safety
- **TailwindCSS 3.4** - Utility-first CSS framework
- **React Hot Toast** - Notifikasi toast yang cantik
- **React Icons** - Koleksi icon
- **Lucide React** - Icon set modern
- **React Loading Skeleton** - Loading placeholder

### Backend (Coming Soon)
- **Next.js API Routes** - Backend API
- **Prisma** - ORM untuk database
- **PostgreSQL/MySQL** - Database relasional
- **NextAuth.js** - Authentication
- **Zod** - Schema validation

### Tools & Others
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## � Prerequisites

Sebelum memulai, pastikan Anda telah menginstall:

| Software | Version | Download Link |
|----------|---------|---------------|
| **Node.js** | 18.0 atau lebih tinggi | [nodejs.org](https://nodejs.org/) |
| **npm** | 9.0 atau lebih tinggi | (Included with Node.js) |
| **Git** | Latest | [git-scm.com](https://git-scm.com/) |

### Verifikasi Instalasi

Buka terminal/command prompt dan jalankan:

```bash
node --version
# Output: v18.x.x atau lebih tinggi

npm --version
# Output: 9.x.x atau lebih tinggi

git --version
# Output: git version 2.x.x
```

---

## 📦 Instalasi & Setup

### Langkah 1: Clone Repository

Clone project dari GitHub:

```bash
# Clone menggunakan HTTPS
git clone https://github.com/Ranggadya/E-Commerce.git

# Atau clone menggunakan SSH (jika sudah setup SSH key)
git clone git@github.com:Ranggadya/E-Commerce.git

# Masuk ke folder project
cd E-Commerce
```

**💡 Tips:** Jika download lambat, Anda bisa download sebagai ZIP dari GitHub:
1. Buka https://github.com/Ranggadya/E-Commerce
2. Klik tombol hijau "Code" → "Download ZIP"
3. Extract file ZIP
4. Buka terminal di folder hasil extract

---

### Langkah 2: Install Dependencies

Install semua package yang dibutuhkan:

```bash
npm install
```

**⏱️ Waktu:** Proses ini membutuhkan waktu 2-5 menit tergantung koneksi internet Anda.

**Expected Output:**
```
added 388 packages, and audited 389 packages in 41s
148 packages are looking for funding
found 0 vulnerabilities
```

**❗ Jika Ada Error:**
- Pastikan Node.js versi 18+
- Hapus folder `node_modules` dan file `package-lock.json`, lalu install ulang
- Coba gunakan `npm install --legacy-peer-deps`
- Gunakan `npm cache clean --force` kemudian install ulang

---

### Langkah 3: Setup Environment Variables (Optional)

Project ini sudah bisa jalan tanpa database untuk development (menggunakan mock data).

**Untuk development sederhana:**
- ✅ Langkah ini bisa **DILEWATI** 
- Project akan jalan dengan mock data

**Untuk production dengan database:**

1. Copy file `.env.example` menjadi `.env.local`:
   ```bash
   # Windows (PowerShell)
   Copy-Item .env.example .env.local

   # Mac/Linux
   cp .env.example .env.local
   ```

2. Edit `.env.local` dan isi konfigurasi:
   ```env
   # Database (Optional - untuk production)
   DATABASE_URL="postgresql://user:password@localhost:5432/shoes4us"
   
   # Authentication (Optional)
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   ```

**🔐 Generate NEXTAUTH_SECRET:**
```bash
# Windows (PowerShell)
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# Mac/Linux
openssl rand -base64 32
```

---

## 🚀 Menjalankan Project

### Development Mode

Jalankan development server:

```bash
npm run dev
```

**Expected Output:**
```
> shoes4us-ecommerce@0.1.0 dev
> next dev

  ▲ Next.js 14.2.33
  - Local:        http://localhost:3000

 ✓ Starting...
 ✓ Ready in 1694ms
```

### Akses Aplikasi

Buka browser dan akses:
- **URL:** [http://localhost:3000](http://localhost:3000)
- **Status:** Server akan auto-reload saat Anda edit code

### Halaman yang Tersedia

| Route | Deskripsi |
|-------|-----------|
| `/` | Homepage dengan featured products |
| `/product` | Daftar semua produk |
| `/product/[id]` | Detail produk |
| `/Cart` | Keranjang belanja |
| `/login` | Halaman login |
| `/checkout` | Proses checkout |
| `/payment` | Halaman pembayaran |
| `/status-pesanan` | Tracking pesanan |
| `/Admin-Dashboard` | Dashboard admin |
| `/privacy-policy` | Kebijakan privasi |
| `/terms-of-service` | Syarat & ketentuan |
| `/contact` | Halaman kontak |
| `/faq` | Frequently Asked Questions |

### Stop Server

Untuk menghentikan server:
- Tekan `Ctrl + C` di terminal
- Ketik `Y` jika diminta konfirmasi

---

## 📁 Struktur Folder

```
shoes4us/
├── public/                    # Static assets
│   ├── logo.jpg
│   └── sepatu1-12.jpeg
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── api/              # API routes (Backend)
│   │   ├── Admin-Dashboard/  # Admin panel
│   │   ├── Cart/             # Shopping cart
│   │   ├── checkout/         # Checkout flow
│   │   ├── contact/          # Contact page
│   │   ├── faq/              # FAQ page
│   │   ├── login/            # Login page
│   │   ├── order/            # Order history
│   │   ├── payment/          # Payment page
│   │   ├── privacy-policy/   # Privacy policy
│   │   ├── product/          # Product pages
│   │   ├── status-pesanan/   # Order tracking
│   │   ├── terms-of-service/ # Terms of service
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Homepage
│   │   └── globals.css       # Global styles
│   │
│   ├── components/           # React components
│   │   ├── empty-states/    # Empty state components
│   │   ├── skeletons/       # Loading skeletons
│   │   ├── AuthProvider.tsx
│   │   ├── CartContext.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   │
│   ├── lib/                  # Utility libraries
│   │   ├── utils/
│   │   │   └── format.ts    # Formatting helpers
│   │   └── password-strength.ts
│   │
│   ├── types/                # TypeScript types (Coming soon)
│   └── exceptions/           # Custom error classes
│       ├── AppError.ts
│       └── AuthError.ts
│
├── .env.example              # Environment variables template
├── .gitignore
├── next.config.js            # Next.js configuration
├── package.json
├── postcss.config.js
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── README.md
```

## ⚙️ Konfigurasi

### Environment Variables

Buat file `.env.local` di root project:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/shoes4us"

# Authentication
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
NEXTAUTH_URL="http://localhost:3000"

# Payment Gateway (Midtrans - Optional)
MIDTRANS_SERVER_KEY="your-server-key"
MIDTRANS_CLIENT_KEY="your-client-key"

# Email Service (Optional)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# Other Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Tailwind Configuration

Kustomisasi theme di `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#000000',
      secondary: '#ffffff',
    },
  },
}
```

## �️ Development

### Available Scripts

Project ini memiliki beberapa npm scripts yang tersedia:

| Command | Deskripsi |
|---------|-----------|
| `npm run dev` | Jalankan development server dengan hot-reload |
| `npm run build` | Build project untuk production |
| `npm start` | Jalankan production server |
| `npm run lint` | Check code quality dengan ESLint |

**Contoh Penggunaan:**

```bash
# Development - untuk coding
npm run dev

# Build - sebelum deploy
npm run build

# Production - jalankan hasil build
npm start

# Lint - check code quality
npm run lint
```

### Development Workflow

**1. Setup Development Environment**
```bash
# Install dependencies
npm install

# Jalankan dev server
npm run dev

# Buka http://localhost:3000
```

**2. Membuat Perubahan**
```bash
# Edit files di src/app atau src/components
# Server akan auto-reload setiap kali save

# Check linting
npm run lint

# Fix linting issues
npm run lint -- --fix
```

**3. Testing Manual**
- Buka halaman yang diubah di browser
- Test di berbagai ukuran layar (responsive)
- Check console untuk errors
- Test user flow (login, add to cart, checkout, dll)

### Code Style Guidelines

**ESLint Configuration:**
- Project menggunakan `eslint-config-next`
- Automatic code quality checks
- Best practices enforcement

**Jalankan Linter:**
```bash
# Check issues
npm run lint

# Auto-fix issues
npm run lint -- --fix
```

### Git Workflow

**1. Clone dan Setup**
```bash
git clone https://github.com/Ranggadya/E-Commerce.git
cd E-Commerce
npm install
```

**2. Buat Branch Baru**
```bash
# Untuk fitur baru
git checkout -b feature/nama-fitur

# Untuk bug fix
git checkout -b fix/nama-bug

# Untuk dokumentasi
git checkout -b docs/update-readme
```

**3. Commit Changes**
```bash
# Stage changes
git add .

# Commit dengan pesan yang jelas
git commit -m "feat: tambah halaman wishlist"
git commit -m "fix: perbaiki bug cart calculation"
git commit -m "docs: update README installation steps"
```

**Commit Message Convention:**
- `feat:` untuk fitur baru
- `fix:` untuk bug fix
- `docs:` untuk dokumentasi
- `style:` untuk perubahan styling
- `refactor:` untuk refactoring code
- `test:` untuk testing
- `chore:` untuk maintenance

**4. Push dan Pull Request**
```bash
# Push ke GitHub
git push origin feature/nama-fitur

# Buat Pull Request di GitHub
# https://github.com/Ranggadya/E-Commerce/pulls
```

---

## 🐛 Troubleshooting

### Problem: `npm install` Gagal

**Error:** `EACCES: permission denied`

**Solution:**
```bash
# Windows: Run as Administrator
# Mac/Linux:
sudo npm install

# Atau gunakan nvm (recommended)
```

---

**Error:** `node-gyp` rebuild failed

**Solution:**
```bash
# Windows: Install build tools
npm install --global windows-build-tools

# Mac: Install Xcode Command Line Tools
xcode-select --install

# Linux:
sudo apt-get install build-essential
```

---

### Problem: Port 3000 Sudah Digunakan

**Error:** `Port 3000 is already in use`

**Solution 1 - Gunakan port lain:**
```bash
# Windows
set PORT=3001 && npm run dev

# Mac/Linux
PORT=3001 npm run dev
```

**Solution 2 - Kill process di port 3000:**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

---

### Problem: Module Not Found

**Error:** `Module not found: Can't resolve '@/components/...'`

**Solution:**
```bash
# Hapus node_modules dan reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Next.js cache
rm -rf .next
npm run dev
```

---

### Problem: TypeScript Errors

**Error:** `Type '...' is not assignable to type '...'`

**Solution:**
```bash
# Update TypeScript
npm install typescript@latest

# Check tsconfig.json
# Pastikan "strict": true,

# Restart TypeScript server
# VS Code: Ctrl+Shift+P > "TypeScript: Restart TS Server"
```

---

### Problem: Styling Tidak Muncul

**Error:** Tailwind classes tidak bekerja

**Solution:**
```bash
# Check tailwind.config.ts
# Pastikan content paths benar

# Rebuild
rm -rf .next
npm run dev

# Check globals.css
# Pastikan @tailwind directives ada
```

---

### Problem: Database Connection Error

**Error:** `PrismaClient is unable to connect`

**Solution:**
```bash
# Check .env.local
# Pastikan DATABASE_URL benar

# Test connection
npx prisma db push

# Regenerate Prisma client
npx prisma generate
```

---

### Problem: Build Gagal

**Error:** `npm run build` error

**Solution:**
```bash
# Clear cache
rm -rf .next node_modules
npm install

# Check for errors
npm run lint

# Build with verbose
npm run build -- --debug
```

---

### Masih Bermasalah?

1. **Check GitHub Issues:** [https://github.com/Ranggadya/E-Commerce/issues](https://github.com/Ranggadya/E-Commerce/issues)
2. **Buat Issue Baru:** Sertakan:
   - Error message lengkap
   - Node.js version (`node --version`)
   - npm version (`npm --version`)
   - OS yang digunakan
   - Langkah-langkah reproduce error
3. **Contact:** Email support@shoes4us.com

---

## 📦 Build & Deployment

### Build untuk Production

**1. Build Project**
```bash
# Build production bundle
npm run build
```

**Expected Output:**
```
✓ Compiled successfully
✓ Collecting page data
✓ Generating static pages (x/x)
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    2.5 kB         100 kB
├ ○ /contact                            1.8 kB          98 kB
├ ○ /faq                                2.1 kB          99 kB
└ ...

○  (Static)  automatically rendered as static HTML
```

**2. Test Production Build Locally**
```bash
# Start production server
npm start

# Akses http://localhost:3000
```

---

### Deploy ke Vercel (Recommended) ⚡

Vercel adalah platform terbaik untuk Next.js (dibuat oleh tim yang sama).

**Langkah Deploy:**

**1. Persiapan**
```bash
# Pastikan code sudah di-commit
git add .
git commit -m "ready for deployment"
git push origin main
```

**2. Login ke Vercel**
- Buka [vercel.com](https://vercel.com)
- Sign up/Login dengan GitHub account

**3. Import Project**
- Click "Add New Project"
- Select repository: `Ranggadya/E-Commerce`
- Click "Import"

**4. Configure Project**
```
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

**5. Environment Variables** (Optional)
```
DATABASE_URL=your_production_database_url
NEXTAUTH_SECRET=your_production_secret
NEXTAUTH_URL=https://your-domain.vercel.app
```

**6. Deploy**
- Click "Deploy"
- Wait 2-3 minutes
- Your site is live! 🎉

**Auto-Deploy:**
- Setiap push ke `main` branch akan auto-deploy
- Preview deploy untuk setiap Pull Request

---

### Deploy ke Netlify

**Via Netlify CLI:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

**Via Netlify Website:**
1. Login ke [netlify.com](https://netlify.com)
2. "Add new site" → "Import from Git"
3. Select GitHub repo
4. Build settings:
   ```
   Build command: npm run build
   Publish directory: .next
   ```
5. Deploy!

---

### Deploy ke Railway

**Langkah Deploy:**

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize
railway init

# Deploy
railway up
```

**Environment Variables:**
```bash
railway variables set DATABASE_URL=your_db_url
railway variables set NEXTAUTH_SECRET=your_secret
```

---

### Deploy ke Digital Ocean App Platform

**1. Buat App**
- Login ke Digital Ocean
- Apps → "Create App"
- Connect GitHub repository

**2. Configure**
```yaml
name: shoes4us
services:
  - name: web
    github:
      repo: Ranggadya/E-Commerce
      branch: main
    build_command: npm run build
    run_command: npm start
    environment_slug: node-js
```

**3. Environment Variables**
- Add all required env vars
- Deploy!

---

### Deploy ke VPS (Manual)

**Server Requirements:**
- Ubuntu 20.04+ / CentOS 8+
- Node.js 18+
- Nginx (reverse proxy)
- PM2 (process manager)

**Setup Server:**

```bash
# 1. Update system
sudo apt update && sudo apt upgrade -y

# 2. Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# 3. Install PM2
sudo npm install -g pm2

# 4. Clone project
git clone https://github.com/Ranggadya/E-Commerce.git
cd E-Commerce

# 5. Install dependencies
npm install

# 6. Build
npm run build

# 7. Start with PM2
pm2 start npm --name "shoes4us" -- start
pm2 save
pm2 startup

# 8. Configure Nginx
sudo nano /etc/nginx/sites-available/shoes4us
```

**Nginx Configuration:**
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/shoes4us /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# SSL with Let's Encrypt
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

### Environment Variables untuk Production

**Required:**
```env
NODE_ENV=production
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-production-secret
```

**Optional:**
```env
DATABASE_URL=postgresql://...
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

---

### Post-Deployment Checklist

- [ ] ✅ Site accessible via domain
- [ ] ✅ SSL certificate active (HTTPS)
- [ ] ✅ All pages loading correctly
- [ ] ✅ Images loading
- [ ] ✅ Forms working
- [ ] ✅ Database connected
- [ ] ✅ Email notifications working
- [ ] ✅ Payment gateway tested
- [ ] ✅ Error monitoring setup
- [ ] ✅ Analytics configured
- [ ] ✅ Performance optimized (Lighthouse score > 90)

---

## 👥 Tim Pengembang

**Kelompok PBP 2 Kelas E**

- **RANGGADYA ADITAMA RAMADHANI** - 2406012314096
- **RETNO EKA TRIATRY** - 24060123140188
- **SHAFIYAH** - 24060123140143
- **STEPHEN MICHAEL SIRAIT** - 24060123140193
- **YELISA LORIAN** - 24060123130082

## 📄 Lisensi

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Kami sangat menghargai kontribusi dari siapa pun! Berikut cara berkontribusi:

### Cara Berkontribusi

**1. Fork Repository**
- Klik tombol "Fork" di [https://github.com/Ranggadya/E-Commerce](https://github.com/Ranggadya/E-Commerce)
- Clone fork Anda:
  ```bash
  git clone https://github.com/YOUR-USERNAME/E-Commerce.git
  cd E-Commerce
  ```

**2. Setup Development Environment**
```bash
# Install dependencies
npm install

# Create branch untuk fitur baru
git checkout -b feature/amazing-feature

# Jalankan development server
npm run dev
```

**3. Buat Perubahan**
- Edit code sesuai kebutuhan
- Test perubahan Anda
- Pastikan code lulus linting: `npm run lint`
- Commit dengan pesan yang jelas:
  ```bash
  git add .
  git commit -m "feat: add amazing feature"
  ```

**4. Push dan Submit PR**
```bash
# Push ke fork Anda
git push origin feature/amazing-feature

# Buka GitHub dan create Pull Request
```

### Guidelines

**Code Style:**
- Follow ESLint rules
- Use TypeScript untuk type safety
- Write clean, readable code
- Add comments untuk logic yang complex

**Commit Messages:**
- `feat:` untuk fitur baru
- `fix:` untuk bug fixes
- `docs:` untuk dokumentasi
- `style:` untuk formatting
- `refactor:` untuk code refactoring
- `test:` untuk testing
- `chore:` untuk maintenance tasks

**Pull Request:**
- Berikan deskripsi yang jelas
- Reference issue jika ada (Closes #123)
- Include screenshots untuk UI changes
- Pastikan semua tests pass
- Request review dari maintainer

### Areas Needing Contribution

**🔴 High Priority:**
- [ ] Backend API routes implementation
- [ ] Database integration (Prisma + PostgreSQL)
- [ ] Authentication system (NextAuth.js)
- [ ] Payment gateway integration
- [ ] Admin dashboard functionality

**🟡 Medium Priority:**
- [ ] Product review system
- [ ] Wishlist functionality
- [ ] Advanced search & filters
- [ ] Email notifications
- [ ] Order tracking system

**🟢 Low Priority:**
- [ ] Dark mode
- [ ] Multi-language support
- [ ] PWA features
- [ ] Social media sharing
- [ ] Product recommendations

### Reporting Bugs

Temukan bug? [Buat issue](https://github.com/Ranggadya/E-Commerce/issues/new) dengan informasi:
- **Deskripsi bug:** Jelaskan apa yang terjadi
- **Steps to reproduce:** Cara reproduce bug
- **Expected behavior:** Apa yang seharusnya terjadi
- **Screenshots:** Jika applicable
- **Environment:**
  - OS: [e.g. Windows 11]
  - Browser: [e.g. Chrome 120]
  - Node version: [e.g. 18.17.0]

### Feature Requests

Punya ide fitur baru? [Buat feature request](https://github.com/Ranggadya/E-Commerce/issues/new) dengan:
- **Problem:** Masalah yang ingin diselesaikan
- **Solution:** Solusi yang Anda usulkan
- **Alternatives:** Alternatif solusi lain
- **Additional context:** Screenshot, mockup, dll

---

## ❓ FAQ

### Pertanyaan Umum

**Q: Apakah project ini production-ready?**  
A: Project ini masih dalam tahap development. Backend API routes belum diimplementasikan. Saat ini menggunakan mock data untuk demo purposes.

**Q: Apakah saya perlu database untuk menjalankan project?**  
A: Tidak, Anda bisa menjalankan project tanpa database. Project akan berjalan dengan mock data untuk development.

**Q: Bagaimana cara menambahkan produk baru?**  
A: Saat ini produk di-hardcode. Untuk menambahkan produk, Anda perlu implement backend API dan database terlebih dahulu.

**Q: Apakah ada authentication yang bekerja?**  
A: UI authentication sudah ada, namun backend belum diimplementasikan. Anda perlu implement NextAuth.js untuk authentication yang sesungguhnya.

**Q: Bagaimana cara kontribusi?**  
A: Fork repository ini, buat perubahan di branch baru, dan submit Pull Request. Lihat section [Contributing](#-contributing) untuk detail.

**Q: Kenapa ada error 404 untuk API routes?**  
A: Backend API belum diimplementasikan. Ini adalah area yang membutuhkan kontribusi. Lihat `src/app/api/` untuk struktur yang dibutuhkan.

**Q: Apakah bisa digunakan untuk project komersial?**  
A: Ya, project ini menggunakan MIT License yang memperbolehkan penggunaan komersial dengan attribution.

**Q: Node version berapa yang direkomendasikan?**  
A: Node.js 18.x atau lebih tinggi. Gunakan LTS version untuk stability terbaik.

---

## 📚 Resources & Documentation

### Official Documentation
- 📘 [Next.js Documentation](https://nextjs.org/docs)
- 📗 [React Documentation](https://react.dev)
- 📙 [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- 📕 [TailwindCSS Docs](https://tailwindcss.com/docs)

### Learning Resources
- [Next.js Tutorial](https://nextjs.org/learn)
- [TypeScript for Beginners](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- [React Hooks Guide](https://react.dev/reference/react)
- [TailwindCSS Tutorial](https://tailwindcss.com/docs/installation)

### Useful Tools
- [VS Code](https://code.visualstudio.com/) - Recommended IDE
- [Postman](https://www.postman.com/) - API testing
- [Figma](https://www.figma.com/) - Design mockups
- [GitHub Desktop](https://desktop.github.com/) - Git GUI

### VS Code Extensions (Recommended)
```
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- ESLint
- Prettier
- Auto Rename Tag
- GitLens
- Path Intellisense
- JavaScript and TypeScript Nightly
```

---

## 📊 Project Status

| Feature | Status | Priority |
|---------|--------|----------|
| Frontend UI | ✅ Complete | - |
| Responsive Design | ✅ Complete | - |
| Routing | ✅ Complete | - |
| State Management | ✅ Complete | - |
| **Backend API** | ❌ Todo | 🔴 High |
| **Database Integration** | ❌ Todo | 🔴 High |
| **Authentication** | ❌ Todo | 🔴 High |
| Payment Gateway | ❌ Todo | 🟡 Medium |
| Email Service | ❌ Todo | 🟡 Medium |
| Admin Dashboard | 🟡 Partial | 🟡 Medium |
| Testing | ❌ Todo | 🟢 Low |
| Documentation | ✅ Complete | - |

**Legend:**
- ✅ Complete
- 🟡 Partial / In Progress
- ❌ Todo / Not Started

---

## 📞 Kontak & Support

### Tim Pengembang
- **Email:** support@shoes4us.com
- **GitHub:** [https://github.com/Ranggadya/E-Commerce](https://github.com/Ranggadya/E-Commerce)
- **Issues:** [Report Bug / Request Feature](https://github.com/Ranggadya/E-Commerce/issues)

### Social Media
- **Instagram:** [@shoes4us](https://instagram.com/shoes4us)
- **Facebook:** [Shoes4Us Official](https://facebook.com/shoes4us)
- **Twitter:** [@shoes4us](https://twitter.com/shoes4us)

### Get Help
- 📖 **Documentation:** Baca README ini dengan lengkap
- 🐛 **Bug Report:** [Create an issue](https://github.com/Ranggadya/E-Commerce/issues/new)
- 💡 **Feature Request:** [Create an issue](https://github.com/Ranggadya/E-Commerce/issues/new)
- 💬 **Discussion:** [GitHub Discussions](https://github.com/Ranggadya/E-Commerce/discussions)
- 📧 **Email:** support@shoes4us.com (Response time: 1-2 business days)

---

## 🙏 Acknowledgments

Project ini tidak akan terwujud tanpa bantuan dari:

### Technologies
- [Next.js](https://nextjs.org) - The React Framework for Production
- [React](https://react.dev) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org) - Typed JavaScript
- [TailwindCSS](https://tailwindcss.com) - Utility-first CSS framework
- [React Hot Toast](https://react-hot-toast.com) - Toast notifications
- [Lucide Icons](https://lucide.dev) - Beautiful icon set

### Inspirations & References
- [Vercel E-commerce Template](https://demo.vercel.store/)
- [Next.js Commerce](https://github.com/vercel/commerce)
- [Shadcn UI](https://ui.shadcn.com/)

### Special Thanks
- Dosen Pengampu Mata Kuliah PBP
- Universitas Diponegoro
- Open source community

---

## 📈 Statistics

![GitHub Stars](https://img.shields.io/github/stars/Ranggadya/E-Commerce?style=social)
![GitHub Forks](https://img.shields.io/github/forks/Ranggadya/E-Commerce?style=social)
![GitHub Issues](https://img.shields.io/github/issues/Ranggadya/E-Commerce)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Ranggadya/E-Commerce)
![GitHub Last Commit](https://img.shields.io/github/last-commit/Ranggadya/E-Commerce)
![GitHub Contributors](https://img.shields.io/github/contributors/Ranggadya/E-Commerce)

---

## ⭐ Show Your Support

Jika project ini membantu Anda, jangan lupa untuk:
- ⭐ **Star** repository ini
- 🍴 **Fork** untuk kontribusi Anda
- 📢 **Share** ke teman-teman Anda
- 🐛 **Report bugs** yang Anda temukan
- 💡 **Suggest features** yang Anda inginkan

---

## 📜 Changelog

### Version 1.0.0 (October 2025)
- ✅ Initial release
- ✅ Complete frontend UI
- ✅ Responsive design
- ✅ Legal pages (Privacy Policy, Terms of Service)
- ✅ Support pages (Contact, FAQ)
- ✅ Comprehensive documentation

### Upcoming (v2.0.0)
- 🔲 Backend API implementation
- 🔲 Database integration
- 🔲 Authentication system
- 🔲 Payment gateway
- 🔲 Admin dashboard features

---

<div align="center">

### **Made with ❤️ by Kelompok PBP 2 Kelas E**

**Universitas Diponegoro - 2025**

---

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

**[⬆ Back to Top](#-shoes4us-e-commerce-platform)**

</div>
