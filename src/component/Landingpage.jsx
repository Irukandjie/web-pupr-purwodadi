import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import HeroSection from './hero';
import SistemInformasiSection from './sistem-informasi';

export default function LandingPage({ onNavigate }) {
  // State buat ganti-ganti tab di Portal Informasi
  const [activeTab, setActiveTab] = useState('Berita Terbaru');

  // --- BERITA DI-UPDATE MENGGUNAKAN GAMBAR BARU ---
  const beritaBeranda = [
    {
      kategori: "Kegiatan", date: "01 Desember 2020",
      title: "Penandatanganan Kontrak Kegiatan Pembangunan Jalan...",
      img: "https://i.ibb.co.com/r2sfXYzX/Kontrak.jpg" // Gambar Kontrak
    },
    {
      kategori: "Infrastruktur", date: "30 November 2020",
      title: "Peningkatan Jalan Monggot-Bangsri Kecamatan Geyer...",
      img: "https://i.ibb.co.com/F400nVPm/Jalan.jpg" // Gambar Jalan
    },
    {
      kategori: "Kunjungan", date: "29 November 2020",
      title: "Kunjungan Lapangan Tim BPK Perwakilan Provinsi...",
      img: "https://i.ibb.co.com/KjSHrSp5/Kunjungan.jpg" // Gambar Kunjungan
    }
  ];

  const dasarHukumBeranda = [
    {
      id: 1, judul: "UU Nomor 26 Tahun 2007 Tentang Penataan Ruang",
      file: "908235_UU Nomor 26 Tahun 2007.pdf", size: "2.4 MB", date: "26 April 2007"
    },
    {
      id: 2, judul: "Permen PU No. 16/PRT/M/2009 Ttg Pedoman Penyusunan RTRW",
      file: "281160_PermenPU16-2009.pdf", size: "1.8 MB", date: "27 Juli 2009"
    }
  ];

  const layananKami = [
    { title: "SINTARAMA", desc: "Sistem Informasi Tata Ruang Masyarakat", color: "amber", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> },
    { title: "Lapor Solusi AWP", desc: "Kanal aduan untuk melaporkan kerusakan infrastruktur...", color: "red", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9" /> },
    { title: "PPID", desc: "Layanan Keterbukaan Informasi Publik Dinas...", color: "emerald", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7" /> }
  ];

  return (
    <div className="bg-white min-h-screen">
      <HeroSection />
      <SistemInformasiSection />

      <section className="py-12 bg-white border-t border-gray-50">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-stretch">
            
            {/* =========================================
                KIRI: PORTAL INFORMASI 
                ========================================= */}
            <div className="xl:col-span-7 flex flex-col h-full">
              
              <div className="flex justify-between items-center mb-6">
                <ScrollReveal direction="up" className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9" /></svg>
                  <h2 className="text-[20px] font-bold text-slate-800">Portal Informasi</h2>
                </ScrollReveal>
                <a href="#" onClick={() => onNavigate('berita')} className="text-red-600 text-sm font-bold hover:text-amber-500 transition-colors">Lihat Semua</a>
              </div>

              {/* Tabs Interaktif */}
              <ScrollReveal direction="up" delay="delay-100" className="flex gap-2 mb-6">
                <button 
                  onClick={() => setActiveTab('Berita Terbaru')}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-colors shadow-sm ${activeTab === 'Berita Terbaru' ? 'bg-red-600 text-white' : 'bg-white text-gray-500 hover:bg-red-50 hover:text-red-600 border border-gray-200'}`}
                >
                  Berita Terbaru
                </button>
                <button 
                  onClick={() => setActiveTab('Dasar Hukum')}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-colors shadow-sm ${activeTab === 'Dasar Hukum' ? 'bg-red-600 text-white' : 'bg-white text-gray-500 hover:bg-red-50 hover:text-red-600 border border-gray-200'}`}
                >
                  Dasar Hukum
                </button>
                <button 
                  onClick={() => setActiveTab('Album Foto')}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-colors shadow-sm ${activeTab === 'Album Foto' ? 'bg-red-600 text-white' : 'bg-white text-gray-500 hover:bg-red-50 hover:text-red-600 border border-gray-200'}`}
                >
                  Album Foto
                </button>
              </ScrollReveal>

              {/* Konten Tab Berita */}
              {activeTab === 'Berita Terbaru' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-grow">
                  {beritaBeranda.map((item, idx) => (
                    <ScrollReveal key={idx} direction="up" delay={`delay-${(idx+1)*100}`} className="flex">
                      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-200 cursor-pointer group transition-all duration-300 flex flex-col w-full">
                        <div className="h-36 bg-gray-200 relative overflow-hidden">
                          <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                          <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded shadow-sm">{item.kategori}</span>
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                          <p className="text-[11px] font-bold text-gray-400 mb-2">{item.date}</p>
                          <h4 className="text-[14px] font-bold text-slate-800 leading-snug mb-4 group-hover:text-red-600 transition-colors flex-grow">{item.title}</h4>
                          <span className="text-red-600 text-[12px] font-bold group-hover:text-amber-500 flex items-center gap-1.5 mt-auto transition-colors">
                            Baca Selengkapnya 
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                          </span>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              )}

              {/* Konten Tab Dasar Hukum */}
              {activeTab === 'Dasar Hukum' && (
                <div className="flex flex-col gap-4 flex-grow">
                  {dasarHukumBeranda.map((item, idx) => (
                    <ScrollReveal key={idx} direction="up" delay={`delay-${(idx+1)*100}`}>
                      <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm hover:shadow-md transition-all group">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                          </div>
                          <div>
                            <h4 className="text-[14px] font-bold text-slate-800 mb-1 group-hover:text-red-600 transition-colors">{item.judul}</h4>
                            <div className="flex items-center gap-3 text-[11px] text-gray-500 font-medium">
                              <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg> {item.file}</span>
                              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                              <span>{item.size}</span>
                            </div>
                          </div>
                        </div>
                        <a href="#" className="shrink-0 w-full md:w-auto px-5 py-2 bg-white border-2 border-red-100 text-red-600 text-[12px] font-bold rounded-full hover:bg-red-600 hover:text-white transition-colors flex justify-center items-center gap-2">
                          Unduh <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        </a>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              )}

              {/* Konten Tab Album Foto (Placeholder) */}
              {activeTab === 'Album Foto' && (
                <div className="flex items-center justify-center flex-grow bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                  <p className="text-gray-400 font-medium text-sm">Album Foto Belum Tersedia</p>
                </div>
              )}
            </div>

            {/* =========================================
                KANAN: LAYANAN KAMI 
                ========================================= */}
            <div className="xl:col-span-5 flex flex-col h-full">
              <div className="flex justify-between items-center mb-6 xl:mb-[72px]">
                <ScrollReveal direction="up" className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <h2 className="text-[20px] font-bold text-slate-800">Layanan Kami</h2>
                </ScrollReveal>
                <a href="#" className="text-red-600 text-sm font-bold hover:text-amber-500 transition-colors">Lihat Semua</a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 flex-grow">
                {layananKami.map((svc, idx) => (
                  <ScrollReveal key={idx} direction="up" delay={`delay-${(idx+1)*100}`} className="flex">
                    <div className={`bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col w-full hover:border-${svc.color}-300 hover:shadow-xl transition-all duration-300 group`}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-${svc.color}-50 text-${svc.color}-600 mb-5 group-hover:bg-${svc.color}-500 group-hover:text-white transition-colors duration-300`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{svc.icon}</svg>
                      </div>
                      <h4 className={`text-[15px] font-bold text-slate-800 mb-3 group-hover:text-${svc.color}-600 transition-colors`}>{svc.title}</h4>
                      <p className="text-[12px] text-gray-500 leading-relaxed mb-6 flex-grow">{svc.desc}</p>
                      <a href="#" className={`text-[12px] font-bold py-2 px-4 rounded-full border border-${svc.color}-200 text-${svc.color}-600 text-center hover:bg-${svc.color}-50 mt-auto transition-colors`}>
                        Klik disini →
                      </a>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
