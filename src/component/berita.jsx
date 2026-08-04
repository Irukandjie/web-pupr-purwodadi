import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal.jsx';

const BeritaSection = () => {
  const [activeTab, setActiveTab] = useState('Berita');
  const menuTabs = ['Berita', 'Dasar Hukum', 'Album Peta'];

  // --- BERITA DI-UPDATE MENGGUNAKAN GAMBAR & JUDUL BARU SESUAI REFERENSI ---
  const beritaData = [
    {
      id: 1, kategori: "Kegiatan", tanggal: "01 Desember 2020",
      judul: "Penandatanganan Kontrak Kegiatan Pembangunan Jalan Dana Banprov 2020 di Kabupaten Grobogan",
      ringkasan: "Langkah awal dimulainya proyek perbaikan infrastruktur jalan utama guna menunjang mobilitas warga secara maksimal.",
      gambar: "https://i.ibb.co.com/7J5XfWxq/Rapat.jpg" 
    },
    {
      id: 2, kategori: "Infrastruktur", tanggal: "30 November 2020",
      judul: "Peningkatan Jalan Monggot-Bangsri Kecamatan Geyer Telah dimulai",
      ringkasan: "Proyek jalan ini ditargetkan selesai dalam waktu dekat menggunakan material cor beton kualitas tinggi untuk beban logistik.",
      gambar: "https://i.ibb.co.com/cXvkFj5M/Jalan.jpg" 
    },
    {
      id: 3, kategori: "Kunjungan", tanggal: "29 November 2020",
      judul: "Kunjungan Lapangan Tim BPK Perwakilan Provinsi Jawa Tengah di kegiatan Peningkatan Jl. Monggot Bangsri (Banprov 2020)",
      ringkasan: "Tim audit melakukan inspeksi standar kualitas material dan proses pengerjaan jalan agar dipastikan sesuai spesifikasi.",
      gambar: "https://i.ibb.co.com/gFcbSPf4/Kunjungan.jpg" 
    }
  ];

  // Data PDF 
  const dasarHukumData = [
    {
      id: 1,
      judul: "UU Nomor 26 Tahun 2007 Tentang Penataan Ruang",
      file: "908235_UU Nomor 26 Tahun 2007.pdf",
      size: "2.4 MB",
      date: "26 April 2007",
      preview: "https://placehold.co/400x600/fef2f2/dc2626?text=UU+No.26+Tahun+2007",
      delay: "delay-100"
    },
    {
      id: 2,
      judul: "Permen PU No. 16/PRT/M/2009 Ttg Pedoman Penyusunan RTRW Kabupaten",
      file: "281160_PermenPU16-2009.pdf",
      size: "1.8 MB",
      date: "27 Juli 2009",
      preview: "https://placehold.co/400x600/fef2f2/dc2626?text=Permen+PU+No.16/2009",
      delay: "delay-200"
    }
  ];

  return (
    <section className="py-20 bg-[#FAFAFA] min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <ScrollReveal direction="up" className="mb-12">
          <span className="inline-block py-1.5 px-4 rounded-full bg-red-100 text-red-600 font-bold text-[10px] tracking-widest uppercase mb-4 shadow-sm border border-red-200">
            Pusat Data
          </span>
          <h2 className="text-4xl md:text-[46px] font-black text-slate-800 leading-tight mb-4">
            Portal Informasi Publik
          </h2>
          <p className="text-slate-500 max-w-2xl text-lg">
            Temukan berita terbaru, arsip dasar hukum, dan galeri dokumentasi terkait kegiatan DPUPR Kabupaten Grobogan.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay="delay-100" className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex w-full lg:w-auto gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
            {menuTabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === tab ? 'bg-red-600 text-white shadow-md transform -translate-y-0.5' : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-80">
            <svg className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input type="text" placeholder={`Cari di ${activeTab}...`} className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-red-500/50 focus:border-red-500 outline-none transition-all" />
          </div>
        </ScrollReveal>

        {activeTab === 'Berita' && (
          <>
            {/* Highlight Berita (Berita Pertama) */}
            <ScrollReveal direction="up" className="mb-10">
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col md:flex-row hover:shadow-[0_20px_40px_-15px_rgba(220,38,38,0.2)] hover:border-red-200 transition-all duration-500 group cursor-pointer relative hover:-translate-y-1">
                
                {/* Efek Spotlight Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>

                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img src={beritaData[0].gambar} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Berita Utama" />
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full z-20 shadow-md">Berita Utama</span>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-20">
                  <p className="text-sm font-bold text-gray-400 mb-2">{beritaData[0].tanggal}</p>
                  <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-red-600 transition-colors duration-300">{beritaData[0].judul}</h3>
                  <p className="text-slate-500 mb-6 leading-relaxed">{beritaData[0].ringkasan}</p>
                  <span className="font-bold text-red-600 flex items-center gap-2 group-hover:text-amber-500 transition-colors">Baca Selengkapnya <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
                </div>
              </div>
            </ScrollReveal>

            {/* Grid Berita Lainnya */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {beritaData.slice(1).map((item) => (
                <ScrollReveal key={item.id} direction="up">
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(220,38,38,0.2)] hover:border-red-200 transition-all duration-500 flex flex-col h-full group cursor-pointer relative hover:-translate-y-1">
                    
                    {/* Efek Spotlight Gradient */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>

                    <div className="h-60 overflow-hidden relative">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                      <img src={item.gambar} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Thumbnail" />
                      <span className="absolute top-4 left-4 bg-white/95 text-slate-800 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm z-20">{item.kategori}</span>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20">
                      <p className="text-xs font-bold text-gray-400 mb-2">{item.tanggal}</p>
                      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-red-600 transition-colors duration-300 line-clamp-3">{item.judul}</h3>
                      <p className="text-sm text-slate-500 mb-6 line-clamp-2 flex-grow">{item.ringkasan}</p>
                      <span className="font-bold text-red-600 text-sm mt-auto group-hover:text-amber-500 transition-colors">Baca Selengkapnya →</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </>
        )}

        {/* --- TAB DASAR HUKUM --- */}
        {activeTab === 'Dasar Hukum' && (
          <div className="flex flex-col gap-5">
            {dasarHukumData.map((item) => (
              <ScrollReveal key={item.id} direction="up" delay={item.delay}>
                <div className="group relative bg-white border border-gray-100 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(220,38,38,0.15)] hover:border-red-200 transition-all duration-500 z-10 hover:z-20 hover:-translate-y-1 overflow-hidden">
                  
                  {/* Spotlight Hukum */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(220,38,38,0.05),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gray-100 rounded-l-2xl group-hover:bg-red-600 transition-colors duration-500"></div>

                  <div className="flex items-start md:items-center gap-5 pl-3 w-full md:w-auto relative z-10">
                    <div className="relative shrink-0 group/icon cursor-help">
                      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-50 text-red-600 group-hover/icon:bg-red-600 group-hover/icon:text-white transition-colors duration-500 shadow-sm">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-widest shadow-sm">PDF</div>
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
                      <h4 className="text-[15px] md:text-[17px] font-bold text-[#2D3748] group-hover:text-red-600 transition-colors leading-relaxed mb-2">
                        {item.judul}
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 text-[13px] text-gray-500 font-medium">
                        <span className="flex items-center gap-1.5">
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

                  <a href={`/${item.file}`} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto shrink-0 px-8 py-3 rounded-full border-2 border-red-600 text-red-600 font-bold hover:bg-red-600 hover:text-white flex items-center justify-center gap-2 transition-all duration-300 relative z-10">
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
