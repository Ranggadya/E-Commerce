import { Metadata } from "next";
import Link from "next/link";
import { FileText, ShoppingBag, CreditCard, Package, AlertCircle, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan - Shoes4Us",
  description: "Syarat dan ketentuan penggunaan layanan Shoes4Us",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-center justify-center mb-4">
            <FileText className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Syarat dan Ketentuan
          </h1>
          <p className="text-center text-gray-600 mb-2">
            Terakhir diperbarui: 19 Oktober 2025
          </p>
          <p className="text-center text-gray-700 leading-relaxed">
            Mohon baca syarat dan ketentuan ini dengan seksama sebelum menggunakan layanan kami.
          </p>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          
          {/* 1. Penerimaan Syarat */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                1. Penerimaan Syarat
              </h2>
            </div>
            <div className="ml-9 space-y-3 text-gray-700">
              <p>
                Dengan mengakses dan menggunakan website Shoes4Us, Anda menyetujui untuk terikat
                dengan syarat dan ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun
                dari syarat ini, Anda tidak boleh menggunakan layanan kami.
              </p>
              <p>
                Kami berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan berlaku
                segera setelah diposting di website. Penggunaan Anda yang berkelanjutan setelah
                perubahan merupakan penerimaan Anda terhadap syarat yang direvisi.
              </p>
            </div>
          </section>

          {/* 2. Akun Pengguna */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <ShoppingBag className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                2. Akun Pengguna
              </h2>
            </div>
            <div className="ml-9 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  2.1 Pendaftaran Akun
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Anda harus berusia minimal 18 tahun atau memiliki izin orang tua/wali</li>
                  <li>Informasi yang Anda berikan harus akurat, lengkap, dan terkini</li>
                  <li>Anda bertanggung jawab untuk menjaga kerahasiaan password Anda</li>
                  <li>Satu akun hanya boleh digunakan oleh satu orang</li>
                  <li>Anda bertanggung jawab atas semua aktivitas yang terjadi di akun Anda</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  2.2 Penangguhan dan Penghapusan Akun
                </h3>
                <p className="text-gray-700 mb-2">
                  Kami berhak menangguhkan atau menghapus akun Anda jika:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Melanggar syarat dan ketentuan ini</li>
                  <li>Memberikan informasi palsu</li>
                  <li>Terlibat dalam aktivitas penipuan</li>
                  <li>Melakukan pelanggaran hukum</li>
                  <li>Tidak aktif selama 24 bulan berturut-turut</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Produk dan Harga */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Package className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                3. Produk dan Harga
              </h2>
            </div>
            <div className="ml-9 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  3.1 Informasi Produk
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Kami berusaha menampilkan produk seakurat mungkin</li>
                  <li>Warna produk dapat berbeda tergantung layar perangkat Anda</li>
                  <li>Kami tidak menjamin ketersediaan stok produk</li>
                  <li>Spesifikasi produk dapat berubah tanpa pemberitahuan sebelumnya</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  3.2 Harga
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Semua harga dalam Rupiah (IDR) dan sudah termasuk PPN</li>
                  <li>Harga dapat berubah sewaktu-waktu tanpa pemberitahuan</li>
                  <li>Kesalahan harga yang jelas merupakan kesalahan sistem tidak mengikat</li>
                  <li>Kami berhak membatalkan pesanan jika terjadi kesalahan harga</li>
                  <li>Biaya pengiriman ditambahkan saat checkout</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  3.3 Ketersediaan Produk
                </h3>
                <p className="text-gray-700">
                  Jika produk yang Anda pesan tidak tersedia, kami akan menghubungi Anda untuk
                  menawarkan alternatif atau pengembalian dana penuh.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Pemesanan dan Pembayaran */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                4. Pemesanan dan Pembayaran
              </h2>
            </div>
            <div className="ml-9 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  4.1 Proses Pemesanan
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Pesanan dianggap final setelah pembayaran dikonfirmasi</li>
                  <li>Kami akan mengirimkan konfirmasi pesanan ke email Anda</li>
                  <li>Kami berhak menolak atau membatalkan pesanan dalam kondisi tertentu</li>
                  <li>Pesanan yang dibatalkan akan dikembalikan dana penuh</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  4.2 Metode Pembayaran
                </h3>
                <p className="text-gray-700 mb-2">Kami menerima pembayaran melalui:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Kartu kredit/debit (Visa, Mastercard)</li>
                  <li>Transfer bank</li>
                  <li>QRIS</li>
                  <li>E-wallet</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  4.3 Keamanan Pembayaran
                </h3>
                <p className="text-gray-700">
                  Semua transaksi diproses melalui gateway pembayaran yang aman dan terenkripsi.
                  Kami tidak menyimpan informasi kartu kredit lengkap Anda.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  4.4 Faktur dan Bukti Pembayaran
                </h3>
                <p className="text-gray-700">
                  Faktur elektronik akan dikirimkan ke email Anda setelah pembayaran dikonfirmasi.
                  Simpan faktur ini sebagai bukti transaksi.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Pengiriman */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Package className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                5. Pengiriman
              </h2>
            </div>
            <div className="ml-9 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  5.1 Wilayah Pengiriman
                </h3>
                <p className="text-gray-700">
                  Kami mengirim ke seluruh Indonesia. Biaya dan estimasi pengiriman
                  bervariasi berdasarkan lokasi dan jasa kurir yang dipilih.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  5.2 Waktu Pengiriman
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Pesanan diproses dalam 1-2 hari kerja</li>
                  <li>Estimasi pengiriman: 2-7 hari kerja (tergantung lokasi)</li>
                  <li>Hari libur nasional dapat mempengaruhi waktu pengiriman</li>
                  <li>Force majeure dapat menyebabkan keterlambatan</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  5.3 Pelacakan Pesanan
                </h3>
                <p className="text-gray-700">
                  Nomor resi akan dikirim ke email Anda setelah pesanan dikirim.
                  Anda dapat melacak pesanan melalui website kurir atau halaman tracking kami.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  5.4 Risiko Pengiriman
                </h3>
                <p className="text-gray-700">
                  Setelah barang diserahkan ke kurir, risiko kerusakan atau kehilangan
                  menjadi tanggung jawab kurir. Kami akan membantu klaim jika diperlukan.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Pengembalian dan Penukaran */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                6. Pengembalian dan Penukaran
              </h2>
            </div>
            <div className="ml-9 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  6.1 Kebijakan Pengembalian
                </h3>
                <p className="text-gray-700 mb-2">
                  Anda dapat mengembalikan produk dalam 7 hari sejak diterima jika:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Produk rusak atau cacat</li>
                  <li>Produk tidak sesuai pesanan</li>
                  <li>Ukuran tidak sesuai (dengan syarat dan ketentuan)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  6.2 Syarat Pengembalian
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Produk dalam kondisi baru dan tidak digunakan</li>
                  <li>Label dan tag masih terpasang</li>
                  <li>Kemasan asli masih lengkap</li>
                  <li>Disertai bukti pembelian</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  6.3 Produk yang Tidak Dapat Dikembalikan
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Produk sale/diskon (kecuali rusak/cacat)</li>
                  <li>Produk custom atau pesanan khusus</li>
                  <li>Produk yang sudah digunakan</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  6.4 Proses Pengembalian Dana
                </h3>
                <p className="text-gray-700">
                  Pengembalian dana akan diproses dalam 7-14 hari kerja setelah produk
                  kami terima dan verifikasi. Dana akan dikembalikan ke metode pembayaran asli.
                </p>
              </div>
            </div>
          </section>

          {/* 7. Hak Kekayaan Intelektual */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                7. Hak Kekayaan Intelektual
              </h2>
            </div>
            <div className="ml-9 space-y-3 text-gray-700">
              <p>
                Semua konten di website ini (teks, gambar, logo, video, desain) adalah
                milik Shoes4Us atau pemberi lisensi kami dan dilindungi oleh hukum hak cipta.
              </p>
              <p>Anda tidak boleh:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Menyalin, memodifikasi, atau mendistribusikan konten kami</li>
                <li>Menggunakan konten untuk tujuan komersial tanpa izin</li>
                <li>Menghapus tanda hak cipta atau merek dagang</li>
                <li>Melakukan reverse engineering pada website</li>
              </ul>
            </div>
          </section>

          {/* 8. Larangan Penggunaan */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                8. Larangan Penggunaan
              </h2>
            </div>
            <div className="ml-9 space-y-3 text-gray-700">
              <p>Anda dilarang menggunakan layanan kami untuk:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Aktivitas ilegal atau melanggar hukum</li>
                <li>Penipuan atau penyalahgunaan sistem</li>
                <li>Mengirim spam atau konten berbahaya</li>
                <li>Melanggar hak orang lain</li>
                <li>Mengumpulkan data pengguna lain tanpa izin</li>
                <li>Menggunakan bot atau automated tools</li>
                <li>Mengganggu operasi website</li>
              </ul>
            </div>
          </section>

          {/* 9. Batasan Tanggung Jawab */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                9. Batasan Tanggung Jawab
              </h2>
            </div>
            <div className="ml-9 space-y-3 text-gray-700">
              <p>
                Shoes4Us tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Kerugian tidak langsung atau konsekuensial</li>
                <li>Kehilangan data atau keuntungan</li>
                <li>Gangguan layanan karena force majeure</li>
                <li>Kesalahan atau kelalaian dalam konten</li>
                <li>Kerusakan akibat virus atau malware</li>
              </ul>
              <p className="mt-3">
                Tanggung jawab kami terbatas pada nilai pembelian produk yang bermasalah.
              </p>
            </div>
          </section>

          {/* 10. Hukum yang Berlaku */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                10. Hukum yang Berlaku
              </h2>
            </div>
            <div className="ml-9 space-y-3 text-gray-700">
              <p>
                Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan
                hukum Republik Indonesia.
              </p>
              <p>
                Setiap perselisihan akan diselesaikan melalui musyawarah. Jika tidak
                tercapai kesepakatan, perselisihan akan diselesaikan di Pengadilan Negeri
                Jakarta Pusat.
              </p>
            </div>
          </section>

          {/* 11. Hubungi Kami */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                11. Hubungi Kami
              </h2>
            </div>
            <div className="ml-9 space-y-3 text-gray-700">
              <p>
                Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, hubungi kami:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-3">
                <p><strong>Shoes4Us</strong></p>
                <p>Email: support@shoes4us.com</p>
                <p>Telepon: +62 812-3456-7890</p>
                <p>WhatsApp: +62 812-3456-7890</p>
                <p>Alamat: Jl. Sepatu Stylish No. 123, Jakarta 12345, Indonesia</p>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="border-t pt-6 mt-8">
            <p className="text-sm text-gray-600 text-center">
              Dengan melakukan pemesanan, Anda menyatakan bahwa Anda telah membaca,
              memahami, dan menyetujui syarat dan ketentuan ini.
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <Link
            href="/"
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Kembali ke Beranda
          </Link>
          <Link
            href="/privacy-policy"
            className="bg-white text-black border-2 border-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Kebijakan Privasi
          </Link>
        </div>
      </div>
    </div>
  );
}
