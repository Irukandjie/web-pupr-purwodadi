import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal.jsx';

const BeritaSection = () => {
  // State buat nentuin menu mana yang lagi aktif diklik
  const [activeTab, setActiveTab] = useState('Berita');

  // Daftar menu sesuai yang ada di gambar referensi lu
  const menuTabs = ['Berita', 'Dasar Hukum', 'Album Peta'];

  const beritaData = [
    {
      id: 1,
      kategori: "Kegiatan",
      tanggal: "01 Desember 2020",
      waktu: "04:45 WIB",
      judul: "Penandatanganan Kontrak Kegiatan Pembangunan Jalan Dana Banprov 2020 di Kabupaten Grobogan",
      gambar: "https://placehold.co/600x400/1e293b/ffffff?text=Rapat+Kontrak",
      delay: "delay-100"
    },
    {
      id: 2,
      kategori: "Infrastruktur",
      tanggal: "30 November 2020",
      waktu: "01:00 WIB",
      judul: "Peningkatan Jalan Monggot-Bangsri Kecamatan Geyer Telah Dimulai",
      gambar: "https://placehold.co/600x400/475569/ffffff?text=Pembangunan+Jalan",
      delay: "delay-300"
    },
    {
      id: 3,
      kategori: "Kunjungan",
      tanggal: "29 November 2020",
      waktu: "15:00 WIB",
      judul: "Kunjungan Lapangan Tim BPK Perwakilan Provinsi Jawa Tengah di Kegiatan Peningkatan Jl. Monggot Bangsri",
      gambar: "https://placehold.co/600x400/334155/ffffff?text=Kunjungan+Lapangan",
      delay: "delay-500"
    }
  ];

  return (
    <section id="berita" className="py-16 md:py-24 bg-white relative min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Title */}
        <ScrollReveal direction="up" className="mb-10 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
            <span className="w-12 h-[2px] bg-amber-500 block"></span>
            <h3 className="text-sm font-bold tracking-widest text-amber-500 uppercase">
              Pusat Data & Publikasi
            </h3>
          </div>
          <h2 className="text-3xl md:text-[40px] font-black text-[#2D3748] leading-tight">
            Portal Informasi
          </h2>
        </ScrollReveal>

        {/* Tab Menu & Search Bar (Flex Responsive) */}
        <ScrollReveal direction="up" delay="delay-100" className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 bg-gray-50 p-3 rounded-2xl border border-gray-100 shadow-sm">
          
          {/* Menu Tab Kategori */}
          <div className="flex w-full lg:w-auto gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
            {menuTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-amber-500 text-white shadow-md transform -translate-y-0.5'
                    : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Kotak Pencarian */}
          <div className="relative w-full lg:w-80 group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400 group-focus-within:text-amber-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder={`Cari di ${activeTab}...`} 
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-all duration-300 shadow-sm"
            />
          </div>
        </ScrollReveal>

        {/* Dynamic Content: Cuma nampilin grid berita kalau tab "Berita" yang diklik */}
        {activeTab === 'Berita' ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beritaData.map((item) => (
                <ScrollReveal key={item.id} direction="up" delay={item.delay}>
                  <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full cursor-pointer">
                    
                    <div className="relative h-56 overflow-hidden bg-gray-100">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                      <img 
                        src={item.gambar} 
                        alt={item.judul}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-white/95 backdrop-blur-sm text-[#2D3748] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                          {item.kategori}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-gray-400 text-xs font-medium mb-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{item.tanggal}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full mx-1"></span>
                        <span>{item.waktu}</span>
                      </div>

                      <h3 className="text-lg font-bold text-[#2D3748] leading-snug mb-4 group-hover:text-amber-600 transition-colors line-clamp-3">
                        {item.judul}
                      </h3>

                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <span className="inline-flex items-center gap-2 text-amber-600 font-bold text-sm transition-colors group-hover:text-amber-700">
                          Baca Selengkapnya
                          <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="up" delay="delay-500" className="mt-12 flex justify-center">
              <a href="#" className="px-8 py-3 bg-gray-900 text-white rounded-full font-bold text-sm hover:bg-amber-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                Lihat Semua Berita
              </a>
            </ScrollReveal>
          </>
        ) : (
          /* Tampilan kalau user ngeklik tab "Dasar Hukum" atau "Album Peta" */
          <ScrollReveal direction="up">
            <div className="w-full bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-16 flex flex-col items-center justify-center text-center">
              <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <h4 className="text-xl font-bold text-gray-500 mb-2">Data {activeTab} Belum Tersedia</h4>
              <p className="text-gray-400 text-sm max-w-md">
                Konten untuk halaman {activeTab} sedang dalam tahap pembaruan sistem. Silakan kembali lagi nanti.
              </p>
            </div>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
};

export default BeritaSection;