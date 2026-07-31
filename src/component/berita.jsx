import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal.jsx';

const BeritaSection = () => {
  const [activeTab, setActiveTab] = useState('Berita');
  const menuTabs = ['Berita', 'Dasar Hukum', 'Album Peta'];

  // Data Berita (Gw tambahin 'ringkasan' buat isi popup card-nya)
  const beritaData = [
    {
      id: 1,
      kategori: "Kegiatan",
      tanggal: "01 Desember 2020",
      waktu: "04:45 WIB",
      judul: "Penandatanganan Kontrak Kegiatan Pembangunan Jalan Dana Banprov 2020 di Kabupaten Grobogan",
      ringkasan: "Langkah awal dimulainya proyek perbaikan infrastruktur jalan utama guna menunjang mobilitas dan roda ekonomi warga setempat secara maksimal.",
      gambar: "https://placehold.co/600x400/1e293b/ffffff?text=Rapat+Kontrak",
      delay: "delay-100"
    },
    {
      id: 2,
      kategori: "Infrastruktur",
      tanggal: "30 November 2020",
      waktu: "01:00 WIB",
      judul: "Peningkatan Jalan Monggot-Bangsri Kecamatan Geyer Telah Dimulai",
      ringkasan: "Proyek jalan ini ditargetkan selesai dalam waktu dekat, menggunakan material cor beton kualitas tinggi untuk menahan beban kendaraan berat logistik.",
      gambar: "https://placehold.co/600x400/475569/ffffff?text=Pembangunan+Jalan",
      delay: "delay-300"
    },
    {
      id: 3,
      kategori: "Kunjungan",
      tanggal: "29 November 2020",
      waktu: "15:00 WIB",
      judul: "Kunjungan Lapangan Tim BPK Perwakilan Provinsi Jawa Tengah di Kegiatan Peningkatan Jl. Monggot Bangsri",
      ringkasan: "Tim audit melakukan inspeksi standar kualitas material dan proses pengerjaan jalan agar dipastikan sesuai dengan spesifikasi teknis yang disepakati.",
      gambar: "https://placehold.co/600x400/334155/ffffff?text=Kunjungan+Lapangan",
      delay: "delay-500"
    }
  ];

  const dasarHukumData = [
    {
      id: 1,
      judul: "UU Nomor 26 Tahun 2007 Tentang Penataan Ruang",
      file: "908235_UU Nomor 26 Tahun 2007.pdf",
      size: "2.4 MB",
      date: "12 Okt 2023",
      preview: "https://placehold.co/400x600/f1f5f9/64748b?text=Cover+UU+No.26/2007",
      delay: "delay-100"
    },
    {
      id: 2,
      judul: "Permen PU No. 16 Th 2009 Ttg Pedoman Penyusunan RTRW Kabupaten",
      file: "281160_PermenPU16-2009.pdf",
      size: "1.8 MB",
      date: "05 Nov 2023",
      preview: "https://placehold.co/400x600/f1f5f9/64748b?text=Cover+Permen+16/2009",
      delay: "delay-200"
    }
  ];

  return (
    <section id="berita" className="py-16 md:py-24 bg-white relative min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        
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

        <ScrollReveal direction="up" delay="delay-100" className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 bg-gray-50 p-3 rounded-2xl border border-gray-100 shadow-sm">
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
          <div className="relative w-full lg:w-80 group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400 group-focus-within:text-amber-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <input type="text" placeholder={`Cari di ${activeTab}...`} className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-all duration-300 shadow-sm" />
          </div>
        </ScrollReveal>

        {/* --- TAB BERITA --- */}
        {activeTab === 'Berita' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beritaData.map((item) => (
              <ScrollReveal key={item.id} direction="up" delay={item.delay}>
                
                {/* Pastikan div utama punya class 'relative' */}
                <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 flex flex-col h-full cursor-pointer">
                  
                  {/* ======================================================= */}
                  {/* POPUP CARD SUMMARY (Melayang & Muncul saat di-hover) */}
                  <div className="absolute left-4 right-4 top-[25%] bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-[0_20px_50px_rgb(0,0,0,0.25)] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:-translate-y-4 transition-all duration-500 z-40 border border-white/60 pointer-events-none">
                    <div className="flex items-center gap-2 mb-3">
                      {/* Animasi Ping Indicator */}
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                      </span>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Sekilas Info</span>
                    </div>
                    <p className="text-[13px] text-gray-700 leading-relaxed">
                      {item.ringkasan}
                    </p>
                  </div>
                  {/* ======================================================= */}

                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    {/* Overlay hitam tipis biar popup lebih kebaca */}
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/30 transition-colors duration-500 z-10"></div>
                    <img src={item.gambar} alt={item.judul} className="w-full h-full object-cover transform group-hover:scale-110 group-hover:blur-[2px] transition-all duration-700 ease-in-out" />
                    <div className="absolute top-4 left-4 z-20 transition-opacity duration-300 group-hover:opacity-0">
                      <span className="bg-white/95 backdrop-blur-sm text-[#2D3748] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">{item.kategori}</span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-gray-400 text-xs font-medium mb-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      <span>{item.tanggal}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full mx-1"></span>
                      <span>{item.waktu}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#2D3748] leading-snug mb-4 group-hover:text-amber-600 transition-colors line-clamp-3">{item.judul}</h3>
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <span className="inline-flex items-center gap-2 text-amber-600 font-bold text-sm transition-colors group-hover:text-amber-700">
                        Baca Selengkapnya
                        <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* --- TAB DASAR HUKUM --- */}
        {activeTab === 'Dasar Hukum' && (
          <div className="flex flex-col gap-5">
            {dasarHukumData.map((item) => (
              <ScrollReveal key={item.id} direction="up" delay={item.delay}>
                <div className="group relative bg-white border border-gray-100 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 z-10 hover:z-20">
                  
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gray-100 rounded-l-2xl group-hover:bg-amber-500 transition-colors duration-500"></div>

                  <div className="flex items-start md:items-center gap-5 pl-2 w-full md:w-auto">
                    <div className="relative shrink-0 group/icon cursor-help">
                      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-amber-50 text-amber-500 group-hover/icon:bg-amber-500 group-hover/icon:text-white transition-colors duration-500">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <div className="absolute -bottom-1 -right-1 bg-red-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-widest shadow-sm">PDF</div>
                      </div>

                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-48 bg-white rounded-xl shadow-[0_20px_50px_rgb(0,0,0,0.15)] border border-gray-100 opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible group-hover/icon:-translate-y-2 transition-all duration-300 pointer-events-none z-50">
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-gray-100 rotate-45"></div>
                        <div className="relative rounded-xl overflow-hidden bg-white z-10 p-2">
                          <div className="h-56 bg-gray-100 rounded-lg overflow-hidden relative border border-gray-200/60">
                            <img src={item.preview} alt="Preview Dokumen" className="w-full h-full object-cover opacity-90" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3">
                              <span className="text-white text-[11px] font-bold leading-tight">Pratinjau Halaman 1</span>
                              <span className="text-gray-300 text-[9px] mt-1">Klik unduh untuk baca penuh</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col">
                      <h4 className="text-[15px] md:text-base font-bold text-[#2D3748] group-hover:text-amber-600 transition-colors leading-relaxed mb-2 line-clamp-2">
                        {item.judul}
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 text-[13px] text-gray-500 font-medium">
                        <span className="flex items-center gap-1.5 truncate max-w-[200px] md:max-w-none">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                          {item.file}
                        </span>
                        <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                          {item.size}
                        </span>
                        <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  <a href="#" className="w-full md:w-auto shrink-0 px-6 py-2.5 rounded-full border-2 border-amber-500 text-amber-600 font-bold hover:bg-amber-500 hover:text-white flex items-center justify-center gap-2 transition-all duration-300">
                    Unduh
                    <svg className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  </a>

                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* --- TAB ALBUM PETA --- */}
        {activeTab === 'Album Peta' && (
          <ScrollReveal direction="up">
            <div className="w-full bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-16 flex flex-col items-center justify-center text-center">
              <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              <h4 className="text-xl font-bold text-gray-500 mb-2">Data Album Peta Belum Tersedia</h4>
              <p className="text-gray-400 text-sm max-w-md">Konten untuk halaman Album Peta sedang dalam tahap pembaruan sistem. Silakan kembali lagi nanti.</p>
            </div>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
};

export default BeritaSection;
