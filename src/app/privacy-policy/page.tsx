import { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, Eye, UserCheck, Database, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Kebijakan Privasi - Shoes4Us",
  description: "Kebijakan privasi dan perlindungan data pengguna Shoes4Us",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-center text-gray-600 mb-2">
            Terakhir diperbarui: 19 Oktober 2025
          </p>
          <p className="text-center text-gray-700 leading-relaxed">
            Shoes4Us berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda.
            Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan,
            dan melindungi informasi Anda.
          </p>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          
          {/* 1. Informasi yang Kami Kumpulkan */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                1. Informasi yang Kami Kumpulkan
              </h2>
            </div>
            <div className="ml-9 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  1.1 Informasi yang Anda Berikan
                </h3>
                <p className="text-gray-700 mb-2">
                  Kami mengumpulkan informasi yang Anda berikan secara langsung ketika:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Membuat akun (nama, email, password)</li>
                  <li>Melakukan pemesanan (alamat pengiriman, nomor telepon)</li>
                  <li>Menghubungi customer service</li>
                  <li>Memberikan ulasan produk</li>
                  <li>Berlangganan newsletter</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  1.2 Informasi yang Dikumpulkan Secara Otomatis
                </h3>
                <p className="text-gray-700 mb-2">
                  Ketika Anda menggunakan website kami, kami secara otomatis mengumpulkan:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Alamat IP dan lokasi geografis</li>
                  <li>Jenis browser dan perangkat</li>
                  <li>Halaman yang Anda kunjungi</li>
                  <li>Waktu dan durasi kunjungan</li>
                  <li>Cookie dan teknologi pelacakan serupa</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  1.3 Informasi Pembayaran
                </h3>
                <p className="text-gray-700">
                  Informasi pembayaran Anda diproses secara aman melalui penyedia
                  layanan pembayaran pihak ketiga yang terpercaya. Kami tidak
                  menyimpan informasi kartu kredit lengkap di server kami.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Bagaimana Kami Menggunakan Informasi Anda */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                2. Bagaimana Kami Menggunakan Informasi Anda
              </h2>
            </div>
            <div className="ml-9 space-y-3 text-gray-700">
              <p>Kami menggunakan informasi yang dikumpulkan untuk:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Memproses pesanan:</strong> Mengelola dan mengirimkan pesanan Anda
                </li>
                <li>
                  <strong>Komunikasi:</strong> Mengirim konfirmasi pesanan, update pengiriman,
                  dan informasi penting lainnya
                </li>
                <li>
                  <strong>Personalisasi:</strong> Memberikan rekomendasi produk yang sesuai
                  dengan preferensi Anda
                </li>
                <li>
                  <strong>Peningkatan layanan:</strong> Menganalisis penggunaan website untuk
                  meningkatkan pengalaman pengguna
                </li>
                <li>
                  <strong>Keamanan:</strong> Mencegah penipuan dan aktivitas yang melanggar
                  hukum
                </li>
                <li>
                  <strong>Marketing:</strong> Mengirimkan promosi dan penawaran khusus
                  (dengan persetujuan Anda)
                </li>
                <li>
                  <strong>Kepatuhan hukum:</strong> Memenuhi kewajiban hukum dan peraturan
                  yang berlaku
                </li>
              </ul>
            </div>
          </section>

          {/* 3. Berbagi Informasi dengan Pihak Ketiga */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                3. Berbagi Informasi dengan Pihak Ketiga
              </h2>
            </div>
            <div className="ml-9 space-y-3 text-gray-700">
              <p>
                Kami tidak menjual atau menyewakan informasi pribadi Anda kepada pihak ketiga.
                Namun, kami dapat berbagi informasi dengan:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Penyedia layanan:</strong> Perusahaan yang membantu kami
                  mengoperasikan bisnis (pengiriman, pembayaran, hosting)
                </li>
                <li>
                  <strong>Partner bisnis:</strong> Dengan persetujuan eksplisit Anda
                </li>
                <li>
                  <strong>Otoritas hukum:</strong> Jika diwajibkan oleh hukum atau untuk
                  melindungi hak kami
                </li>
                <li>
                  <strong>Merger atau akuisisi:</strong> Jika terjadi perubahan kepemilikan
                  bisnis
                </li>
              </ul>
            </div>
          </section>

          {/* 4. Keamanan Data */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                4. Keamanan Data
              </h2>
            </div>
            <div className="ml-9 space-y-3 text-gray-700">
              <p>
                Kami menerapkan langkah-langkah keamanan teknis dan organisasi untuk
                melindungi data pribadi Anda, termasuk:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Enkripsi SSL/TLS untuk transmisi data</li>
                <li>Password terenkripsi dengan hashing yang aman</li>
                <li>Firewall dan sistem keamanan jaringan</li>
                <li>Akses terbatas ke data pribadi</li>
                <li>Audit keamanan berkala</li>
                <li>Backup data secara rutin</li>
              </ul>
              <p className="mt-3">
                Meskipun kami berusaha maksimal untuk melindungi data Anda, tidak ada sistem
                yang 100% aman. Kami mendorong Anda untuk menjaga keamanan password Anda.
              </p>
            </div>
          </section>

          {/* 5. Hak Privasi Anda */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                5. Hak Privasi Anda
              </h2>
            </div>
            <div className="ml-9 space-y-3 text-gray-700">
              <p>Anda memiliki hak untuk:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Akses:</strong> Meminta salinan data pribadi yang kami simpan
                </li>
                <li>
                  <strong>Koreksi:</strong> Memperbaiki data yang tidak akurat atau tidak lengkap
                </li>
                <li>
                  <strong>Penghapusan:</strong> Meminta penghapusan data pribadi Anda
                </li>
                <li>
                  <strong>Pembatasan:</strong> Membatasi pemrosesan data Anda
                </li>
                <li>
                  <strong>Portabilitas:</strong> Menerima data Anda dalam format yang dapat dibaca mesin
                </li>
                <li>
                  <strong>Keberatan:</strong> Menolak pemrosesan data untuk tujuan marketing
                </li>
                <li>
                  <strong>Penarikan persetujuan:</strong> Menarik persetujuan yang telah Anda berikan
                </li>
              </ul>
              <p className="mt-3">
                Untuk menggunakan hak-hak ini, silakan hubungi kami melalui email atau
                customer service.
              </p>
            </div>
          </section>

          {/* 6. Cookie dan Teknologi Pelacakan */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                6. Cookie dan Teknologi Pelacakan
              </h2>
            </div>
            <div className="ml-9 space-y-3 text-gray-700">
              <p>Kami menggunakan cookie dan teknologi serupa untuk:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Menjaga sesi login Anda</li>
                <li>Mengingat preferensi Anda</li>
                <li>Menganalisis traffic website</li>
                <li>Menampilkan iklan yang relevan</li>
              </ul>
              <p className="mt-3">
                Anda dapat mengatur preferensi cookie melalui pengaturan browser Anda.
                Namun, menonaktifkan cookie dapat mempengaruhi fungsionalitas website.
              </p>
            </div>
          </section>

          {/* 7. Penyimpanan Data */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                7. Penyimpanan Data
              </h2>
            </div>
            <div className="ml-9 space-y-3 text-gray-700">
              <p>
                Kami menyimpan data pribadi Anda selama diperlukan untuk tujuan yang
                dijelaskan dalam kebijakan ini atau sesuai dengan persyaratan hukum.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Data akun: Selama akun Anda aktif</li>
                <li>Data transaksi: Minimal 5 tahun untuk keperluan akuntansi dan pajak</li>
                <li>Data marketing: Hingga Anda berhenti berlangganan</li>
                <li>Data log: 12 bulan</li>
              </ul>
            </div>
          </section>

          {/* 8. Privasi Anak-anak */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                8. Privasi Anak-anak
              </h2>
            </div>
            <div className="ml-9 space-y-3 text-gray-700">
              <p>
                Layanan kami tidak ditujukan untuk anak-anak di bawah usia 13 tahun.
                Kami tidak secara sengaja mengumpulkan informasi pribadi dari anak-anak.
                Jika Anda adalah orang tua dan mengetahui bahwa anak Anda memberikan
                informasi pribadi kepada kami, silakan hubungi kami.
              </p>
            </div>
          </section>

          {/* 9. Perubahan Kebijakan Privasi */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                9. Perubahan Kebijakan Privasi
              </h2>
            </div>
            <div className="ml-9 space-y-3 text-gray-700">
              <p>
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu.
                Perubahan akan diposting di halaman ini dengan tanggal "Terakhir diperbarui"
                yang baru. Kami mendorong Anda untuk meninjau kebijakan ini secara berkala.
              </p>
              <p>
                Untuk perubahan material, kami akan memberikan pemberitahuan yang lebih
                mencolok (misalnya melalui email atau pemberitahuan di website).
              </p>
            </div>
          </section>

          {/* 10. Kontak Kami */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                10. Hubungi Kami
              </h2>
            </div>
            <div className="ml-9 space-y-3 text-gray-700">
              <p>
                Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau ingin
                menggunakan hak privasi Anda, silakan hubungi kami:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-3">
                <p><strong>Shoes4Us</strong></p>
                <p>Email: privacy@shoes4us.com</p>
                <p>Telepon: +62 812-3456-7890</p>
                <p>Alamat: Jl. Sepatu Stylish No. 123, Jakarta 12345, Indonesia</p>
                <p className="mt-2">
                  Jam Operasional: Senin - Jumat, 09:00 - 18:00 WIB
                </p>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="border-t pt-6 mt-8">
            <p className="text-sm text-gray-600 text-center">
              Dengan menggunakan layanan Shoes4Us, Anda menyetujui pengumpulan dan
              penggunaan informasi sesuai dengan kebijakan privasi ini.
            </p>
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
