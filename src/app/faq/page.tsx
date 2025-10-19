"use client";

import { useState } from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, Search, Package, CreditCard, Truck, RefreshCw, Shield } from "lucide-react";

type FAQCategory = {
  id: string;
  title: string;
  icon: React.ReactNode;
  questions: {
    question: string;
    answer: string;
  }[];
};

const faqData: FAQCategory[] = [
  {
    id: "order",
    title: "Pemesanan",
    icon: <Package className="w-6 h-6" />,
    questions: [
      {
        question: "Bagaimana cara memesan produk?",
        answer: "Pilih produk yang Anda inginkan, klik 'Tambah ke Keranjang', lalu lanjutkan ke checkout. Anda perlu login atau register terlebih dahulu untuk melanjutkan pemesanan.",
      },
      {
        question: "Apakah saya harus membuat akun untuk berbelanja?",
        answer: "Ya, Anda perlu membuat akun untuk melakukan pemesanan. Ini membantu kami melacak pesanan Anda dan memberikan pengalaman belanja yang lebih personal.",
      },
      {
        question: "Apakah saya bisa membatalkan pesanan?",
        answer: "Anda dapat membatalkan pesanan dalam waktu 1 jam setelah pemesanan jika pesanan belum diproses. Hubungi customer service kami untuk bantuan pembatalan.",
      },
      {
        question: "Berapa lama pesanan saya diproses?",
        answer: "Pesanan Anda akan diproses dalam 1-2 hari kerja. Anda akan menerima email konfirmasi setelah pesanan diproses dan siap dikirim.",
      },
    ],
  },
  {
    id: "payment",
    title: "Pembayaran",
    icon: <CreditCard className="w-6 h-6" />,
    questions: [
      {
        question: "Metode pembayaran apa saja yang diterima?",
        answer: "Kami menerima pembayaran melalui Kartu Kredit/Debit (Visa, Mastercard), Transfer Bank, QRIS, dan berbagai E-wallet (GoPay, OVO, Dana, dll).",
      },
      {
        question: "Apakah transaksi pembayaran aman?",
        answer: "Ya, semua transaksi diproses melalui gateway pembayaran yang aman dan terenkripsi. Kami tidak menyimpan informasi kartu kredit Anda di server kami.",
      },
      {
        question: "Kapan pembayaran saya akan dikonfirmasi?",
        answer: "Pembayaran kartu kredit dan e-wallet dikonfirmasi otomatis. Untuk transfer bank, konfirmasi dilakukan dalam 1x24 jam setelah kami menerima bukti transfer.",
      },
      {
        question: "Bagaimana jika pembayaran saya gagal?",
        answer: "Jika pembayaran gagal, Anda akan menerima notifikasi dan dapat mencoba lagi. Pastikan saldo mencukupi dan koneksi internet stabil.",
      },
    ],
  },
  {
    id: "shipping",
    title: "Pengiriman",
    icon: <Truck className="w-6 h-6" />,
    questions: [
      {
        question: "Berapa lama waktu pengiriman?",
        answer: "Estimasi pengiriman: 2-7 hari kerja tergantung lokasi Anda. Jakarta & sekitarnya: 2-3 hari, Jawa: 3-5 hari, Luar Jawa: 5-7 hari.",
      },
      {
        question: "Apakah ada ongkos kirim?",
        answer: "Ya, biaya pengiriman bervariasi berdasarkan lokasi dan berat paket. Anda dapat melihat biaya pengiriman saat checkout sebelum menyelesaikan pembayaran.",
      },
      {
        question: "Bagaimana cara melacak pesanan saya?",
        answer: "Setelah pesanan dikirim, Anda akan menerima nomor resi melalui email. Gunakan nomor resi ini untuk melacak paket di website kurir atau di halaman 'Status Pesanan' kami.",
      },
      {
        question: "Apakah pengiriman tersedia ke seluruh Indonesia?",
        answer: "Ya, kami mengirim ke seluruh Indonesia. Namun, untuk wilayah terpencil mungkin memerlukan waktu lebih lama.",
      },
      {
        question: "Apa yang harus dilakukan jika paket belum sampai?",
        answer: "Jika paket belum sampai sesuai estimasi, cek tracking terlebih dahulu. Jika ada masalah, hubungi customer service kami dan kami akan membantu koordinasi dengan kurir.",
      },
    ],
  },
  {
    id: "return",
    title: "Pengembalian & Penukaran",
    icon: <RefreshCw className="w-6 h-6" />,
    questions: [
      {
        question: "Bagaimana kebijakan pengembalian barang?",
        answer: "Anda dapat mengembalikan produk dalam 7 hari sejak diterima jika produk rusak, cacat, atau tidak sesuai pesanan. Produk harus dalam kondisi baru dengan tag masih terpasang.",
      },
      {
        question: "Apakah saya bisa menukar produk dengan ukuran berbeda?",
        answer: "Ya, Anda dapat menukar produk dengan ukuran lain jika tersedia. Hubungi customer service dalam 7 hari setelah menerima produk untuk proses penukaran.",
      },
      {
        question: "Berapa lama proses pengembalian dana?",
        answer: "Pengembalian dana diproses dalam 7-14 hari kerja setelah produk kami terima dan verifikasi. Dana akan dikembalikan ke metode pembayaran asal.",
      },
      {
        question: "Siapa yang menanggung ongkir pengembalian?",
        answer: "Jika produk cacat/rusak/salah kirim, kami yang menanggung ongkir. Jika alasan pribadi (ukuran tidak pas, tidak suka), pembeli yang menanggung ongkir return.",
      },
      {
        question: "Apakah produk sale/diskon bisa dikembalikan?",
        answer: "Produk sale/diskon tidak dapat dikembalikan kecuali produk cacat atau rusak.",
      },
    ],
  },
  {
    id: "product",
    title: "Produk",
    icon: <Package className="w-6 h-6" />,
    questions: [
      {
        question: "Apakah produk yang dijual original?",
        answer: "Ya, 100% produk yang kami jual adalah original dan berkualitas. Kami bekerja sama langsung dengan distributor resmi.",
      },
      {
        question: "Bagaimana cara memilih ukuran yang tepat?",
        answer: "Setiap produk memiliki size chart. Ukur kaki Anda dan cocokkan dengan size chart. Jika masih ragu, hubungi customer service untuk rekomendasi.",
      },
      {
        question: "Apakah warna produk sama dengan foto?",
        answer: "Kami berusaha menampilkan warna seakurat mungkin, namun warna dapat sedikit berbeda tergantung pengaturan layar perangkat Anda.",
      },
      {
        question: "Apakah ada garansi produk?",
        answer: "Produk dilindungi garansi cacat produksi selama 30 hari. Garansi tidak mencakup kerusakan akibat pemakaian normal atau kelalaian pengguna.",
      },
      {
        question: "Bagaimana cara merawat sepatu?",
        answer: "Bersihkan sepatu secara teratur dengan kain lembut, hindari mesin cuci, simpan di tempat kering, dan gunakan shoe tree untuk menjaga bentuk.",
      },
    ],
  },
  {
    id: "account",
    title: "Akun & Keamanan",
    icon: <Shield className="w-6 h-6" />,
    questions: [
      {
        question: "Bagaimana cara mengubah password?",
        answer: "Login ke akun Anda, masuk ke pengaturan profil, pilih 'Ubah Password', masukkan password lama dan password baru, lalu simpan.",
      },
      {
        question: "Lupa password, bagaimana cara reset?",
        answer: "Klik 'Lupa Password' di halaman login, masukkan email terdaftar, dan kami akan mengirimkan link reset password ke email Anda.",
      },
      {
        question: "Apakah data pribadi saya aman?",
        answer: "Ya, kami sangat serius dalam melindungi data pribadi Anda. Semua data dienkripsi dan disimpan dengan aman. Baca Kebijakan Privasi kami untuk detail lengkap.",
      },
      {
        question: "Bagaimana cara menghapus akun?",
        answer: "Untuk menghapus akun, hubungi customer service kami dengan menyertakan alasan penghapusan. Proses penghapusan memerlukan waktu 7-14 hari kerja.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const toggleQuestion = (categoryId: string, questionIndex: number) => {
    const key = `${categoryId}-${questionIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  const filteredFAQs = faqData
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          searchQuery === "" ||
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter(
      (category) =>
        (activeCategory === "all" || category.id === activeCategory) &&
        category.questions.length > 0
    );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan yang Sering Diajukan
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang Shoes4Us
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari pertanyaan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8 overflow-x-auto">
          <div className="flex gap-3 min-w-max">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeCategory === "all"
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Semua
            </button>
            {faqData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.icon}
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Content */}
        {filteredFAQs.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Tidak ada hasil ditemukan
            </h3>
            <p className="text-gray-600 mb-4">
              Coba kata kunci lain atau hubungi customer service kami
            </p>
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredFAQs.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((item, index) => {
                    const key = `${category.id}-${index}`;
                    const isOpen = openIndex === key;

                    return (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleQuestion(category.id, index)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition"
                        >
                          <span className="font-semibold text-gray-900 pr-4">
                            {item.question}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                              isOpen ? "transform rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 pt-2 text-gray-700 bg-gray-50 border-t">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-sm p-8 mt-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">
            Masih punya pertanyaan?
          </h3>
          <p className="mb-6 opacity-90">
            Tim customer service kami siap membantu Anda
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Hubungi Kami
            </Link>
            <a
              href="mailto:support@shoes4us.com"
              className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
            >
              Email Support
            </a>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
