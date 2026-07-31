import React from 'react';
import ScrollReveal from './ScrollReveal.jsx'; 

const SistemInformasiSection = () => {
  const sistemData = [
    {
      id: 1,
      title: "Jalan PU",
      desc: "Jalan Purwodadi Dalam Angka. Ringkasan Statistik Jalan Kabupaten Purwodadi",
      delay: "delay-100"
    },
    {
      id: 2,
      title: "Drainase PU",
      desc: "Database Drainase dan Sempadan Sungai Kabupaten Purwodadi",
      delay: "delay-300"
    },
    {
      id: 3,
      title: "Irigasi PU",
      desc: "Sistem Informasi Geografis (WebGIS) Irigasi DPU-SDA",
      delay: "delay-500"
    },
    {
      id: 4,
      title: "Leger Jalan",
      desc: "Database Jalan, Jembatan, dan Leger DPU Kabupaten Purwodadi",
      delay: "delay-100"
    },
    {
      id: 5,
      title: "Simojan",
      desc: "Penyajian data inventarisasi jembatan dan penyusunan program pemeliharaannya.",
      delay: "delay-300"
    },
    {
      id: 6,
      title: "Pedestrian",
      desc: "Statistik dan peta ruas pedestrian Kabupaten Purwodadi",
      delay: "delay-500"
    },
    {
      id: 7,
      title: "Sungai PU",
      desc: "Resume Statistik dan Daftar Sungai di Wilayah Kabupaten Purwodadi",
      delay: "delay-100"
    },
    {
      id: 8,
      title: "Airbaku",
      desc: "Sistem Informasi Air Baku Pemerintah Kabupaten Purwodadi",
      delay: "delay-300"
    },
    {
      id: 9,
      title: "SIGAB",
      desc: "Informasi lokasi genangan banjir secara realtime di Kabupaten Purwodadi.",
      delay: "delay-500"
    }
  ];

  return (
    <section id="sistem-informasi" className="py-24 bg-[#FAFAFA] relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Section */}
        <ScrollReveal direction="up" className="flex flex-col items-center text-center mb-16">
          <div className="mb-6 flex flex-col items-center justify-center">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="20" r="4.5" fill="#dc2626"/>
              <path d="M34 18H50" stroke="#334155" strokeWidth="3" strokeLinecap="round"/>
              <path d="M34 24H44" stroke="#334155" strokeWidth="3" strokeLinecap="round"/>
              <path d="M26 40C22.6863 40 20 37.3137 20 34C20 30.6863 22.6863 28 26 28" stroke="#334155" strokeWidth="3" strokeLinecap="round"/>
              <path d="M32 32H48" stroke="#334155" strokeWidth="3" strokeLinecap="round"/>
              <path d="M32 38H44" stroke="#334155" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          
          <h2 className="text-3xl md:text-[38px] font-bold text-[#2D3748] leading-tight mb-2">
            Sistem Informasi Infrastruktur
          </h2>
          <h2 className="text-3xl md:text-[38px] font-bold text-[#2D3748] leading-tight">
            Kabupaten Purwodadi
          </h2>
        </ScrollReveal>

        {/* Grid Cards (3 Kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {sistemData.map((item) => (
            <ScrollReveal key={item.id} direction="up" delay={item.delay}>
              <div className="group bg-white rounded-xl p-10 flex flex-col items-center text-center h-full border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                
                {/* Icon Card (Browser Window Style) */}
                <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="16" width="40" height="28" rx="4" stroke="#334155" strokeWidth="3"/>
                    <path d="M10 26H50" stroke="#334155" strokeWidth="3"/>
                    <path d="M20 36H40" stroke="#dc2626" strokeWidth="4" strokeLinecap="round"/>
                    {/* Dots style Mac */}
                    <circle cx="16" cy="21" r="2" fill="#dc2626"/>
                    <circle cx="23" cy="21" r="2" fill="#334155"/>
                    <circle cx="30" cy="21" r="2" fill="#334155"/>
                  </svg>
                </div>

                {/* Konten Teks */}
                <h4 className="text-[20px] font-bold text-[#2D3748] mb-4">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-8 flex-grow px-2">
                  {item.desc}
                </p>

                {/* Tombol Kunjungi dengan efek animasi dari Services */}
                <a 
                  href="#" 
                  className="group/btn mt-auto relative overflow-hidden flex items-center justify-center w-36 h-11 rounded-full font-bold transition-all duration-700 ease-in-out border-2 text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                >
                  {/* Teks Utama (Kunjungi) */}
                  <span className="absolute flex items-center gap-2 transition-all duration-700 ease-in-out transform group-hover/btn:translate-x-12 group-hover/btn:opacity-0">
                    Kunjungi
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>

                  {/* Ikon Pengganti (Meluncur dari Kiri) */}
                  <span className="absolute transition-all duration-700 ease-in-out transform -translate-x-12 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
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