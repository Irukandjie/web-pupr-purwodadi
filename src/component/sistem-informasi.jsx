import React from 'react';
import ScrollReveal from './ScrollReveal'; 

const SistemInformasiSection = () => {
  const sistemData = [
    {
      id: 1, title: "Jalan PU", desc: "Data dan informasi jaringan jalan di Kabupaten Grobogan",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />, color: "blue"
    },
    {
      id: 2, title: "Drainase PU", desc: "Database drainase dan serapan air",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />, color: "cyan"
    },
    {
      id: 3, title: "Irigasi PU", desc: "Informasi sistem irigasi dan sumber air",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />, color: "emerald"
    },
    {
      id: 4, title: "Leger Jalan", desc: "Database jalan, jembatan, dan lager",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />, color: "amber"
    },
    {
      id: 5, title: "Simojan", desc: "Penjualan data inventaris/ jembatan dan penyusunan proyek pemeliharaannya.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />, color: "purple"
    },
    {
      id: 6, title: "Pedestrian", desc: "Statistik dan peta ruas pedestrian Grobogan",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />, color: "red"
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <ScrollReveal direction="up" className="flex items-center gap-3 mb-8">
          <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          <h2 className="text-[24px] font-black text-slate-800">Layanan Unggulan</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sistemData.map((item) => (
            <ScrollReveal key={item.id} direction="up" delay={item.delay}>
              <div className="bg-white rounded-2xl p-6 flex flex-col h-full border border-gray-200 shadow-sm hover:border-red-300 hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-${item.color}-50 text-${item.color}-600 group-hover:bg-${item.color}-500 group-hover:text-white transition-colors`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                  </div>
                  <h4 className="text-[17px] font-bold text-slate-800">{item.title}</h4>
                </div>
                <p className="text-gray-500 text-[13px] leading-relaxed mb-6 flex-grow">{item.desc}</p>
                <a href="#" className="w-full py-2.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all border-2 border-red-100 text-red-600 hover:bg-red-600 hover:border-red-600 hover:text-white">
                  Kunjungi <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SistemInformasiSection;