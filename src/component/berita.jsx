import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal.jsx';

const BeritaSection = () => {
  const [activeTab, setActiveTab] = useState('Berita');
  const menuTabs = ['Berita', 'Dasar Hukum', 'Album Peta'];

  const beritaData = [
    {
      id: 1, kategori: "Kegiatan", tanggal: "01 Desember 2020",
      judul: "Penandatanganan Kontrak Kegiatan Pembangunan Jalan Dana Banprov",
      ringkasan: "Langkah awal dimulainya proyek perbaikan infrastruktur jalan utama guna menunjang mobilitas warga.",
      gambar: "https://placehold.co/600x400/1e293b/ffffff"
    },
    {
      id: 2, kategori: "Infrastruktur", tanggal: "30 November 2020",
      judul: "Peningkatan Jalan Monggot-Bangsri Kecamatan Geyer Telah Dimulai",
      ringkasan: "Proyek jalan ini ditargetkan selesai dalam waktu dekat menggunakan material cor beton kualitas tinggi.",
      gambar: "https://placehold.co/600x400/475569/ffffff"
    },
    {
      id: 3, kategori: "Kunjungan", tanggal: "29 November 2020",
      judul: "Kunjungan Lapangan Tim BPK Perwakilan Provinsi Jawa Tengah",
      ringkasan: "Tim audit melakukan inspeksi standar kualitas material dan proses pengerjaan jalan agar sesuai standar.",
      gambar: "https://placehold.co/600x400/334155/ffffff"
    },
    {
      id: 4, kategori: "Rapat", tanggal: "15 November 2020",
      judul: "Rapat Koordinasi Evaluasi Tata Ruang Q4 2020",
      ringkasan: "Pembahasan mendalam mengenai penataan ruang terbuka hijau di area publik Kabupaten Grobogan.",
      gambar: "https://placehold.co/600x400/64748b/ffffff"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <ScrollReveal direction="up" className="mb-12">
          <span className="inline-block py-1.5 px-4 rounded-full bg-red-600 text-white font-bold text-[10px] tracking-widest uppercase mb-4 shadow-sm border border-red-700">
            Pusat Data
          </span>
          <h2 className="text-4xl md:text-[46px] font-black text-slate-800 leading-tight mb-4">
            Portal Informasi Publik
          </h2>
          <p className="text-slate-500 max-w-2xl text-lg">
            Temukan berita terbaru, arsip dasar hukum, dan galeri dokumentasi terkait kegiatan DPUPR Kabupaten Grobogan.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay="delay-100" className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 bg-white p-3 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex w-full lg:w-auto gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
            {menuTabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === tab ? 'bg-red-600 text-white shadow-md transform -translate-y-0.5' : 'text-gray-500 hover:bg-red-50 hover:text-red-600'
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
            <ScrollReveal direction="up" className="mb-10">
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm flex flex-col md:flex-row hover:shadow-lg hover:border-red-200 transition-all group cursor-pointer">
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                  <img src={beritaData[0].gambar} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">Berita Utama</span>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <p className="text-sm font-bold text-gray-400 mb-2">{beritaData[0].tanggal}</p>
                  <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-red-600 transition-colors">{beritaData[0].judul}</h3>
                  <p className="text-slate-500 mb-6 leading-relaxed">{beritaData[0].ringkasan}</p>
                  <span className="font-bold text-red-600 flex items-center gap-2">Baca Selengkapnya <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beritaData.slice(1).map((item) => (
                <ScrollReveal key={item.id} direction="up">
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:border-red-200 transition-all flex flex-col h-full group cursor-pointer">
                    <div className="h-52 overflow-hidden relative">
                      <img src={item.gambar} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      <span className="absolute top-3 left-3 bg-red-600 text-white shadow-sm text-[11px] font-bold px-3 py-1.5 rounded-full">{item.kategori}</span>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-xs font-bold text-gray-400 mb-2">{item.tanggal}</p>
                      <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-red-600 line-clamp-2">{item.judul}</h3>
                      <p className="text-sm text-slate-500 mb-6 line-clamp-2 flex-grow">{item.ringkasan}</p>
                      <span className="font-bold text-red-600 text-sm mt-auto group-hover:text-amber-500 transition-colors">Baca Selengkapnya →</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default BeritaSection;