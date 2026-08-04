import React, { useEffect, useRef, useState } from 'react';

const ServicesSection = () => {
  // Tambahin state & ref buat scroll animation kayak di section sambutan
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 } // Trigger kalau 15% kartu kelihatan
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const services = [
    {
      id: 1, title: "SINTARAMA",
      desc: "Sistem Informasi Tata Ruang Masyarakat",
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>,
      themeColor: "text-amber-500", themeBorder: "border-amber-500", themeBgLight: "bg-amber-50", themeBgHover: "group-hover/btn:bg-amber-500", delay: "delay-100"
    },
    {
      id: 2, title: "Lapor Solusi AWP",
      desc: "Kanal aduan untuk melaporkan kerusakan infrastruktur Kabupaten Purwodadi secara cepat.",
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>,
      themeColor: "text-red-600", themeBorder: "border-red-600", themeBgLight: "bg-red-50", themeBgHover: "group-hover/btn:bg-red-600", delay: "delay-300"
    },
    {
      id: 3, title: "PPID",
      desc: "Layanan Keterbukaan Informasi Publik Dinas Pekerjaan Umum Kabupaten Purwodadi.",
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      themeColor: "text-emerald-500", themeBorder: "border-emerald-500", themeBgLight: "bg-emerald-50", themeBgHover: "group-hover/btn:bg-emerald-500", delay: "delay-500"
    }
  ];

  return (
    <section id="layanan" ref={sectionRef} className="py-24 bg-[#FCF5F5] relative overflow-hidden">
      
      <div className="absolute top-10 left-10 opacity-20 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="2" fill="#ef4444" /></pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Animasi Muncul dari Bawah */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-3">Layanan Kami</h3>
          <h2 className="text-3xl md:text-5xl font-black text-[#2D3748] leading-tight">
            Layanan yang kami tawarkan dirancang khusus untuk memenuhi kebutuhan Anda.
          </h2>
        </div>

        {/* Grid Cards munculnya berurutan sesuai 'delay' di array data */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-700 ease-out border border-gray-100 flex flex-col items-center text-center h-full transform ${isVisible ? `translate-y-0 opacity-100 ${service.delay}` : 'translate-y-24 opacity-0'}`}
            >
              
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 ${service.themeBgLight} ${service.themeColor}`}>
                {service.icon}
              </div>

              <h4 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">{service.desc}</p>

              <a 
                href={`#${service.title.toLowerCase().replace(/\s/g, '-')}`}
                className={`group/btn mt-auto relative overflow-hidden flex items-center justify-center w-40 h-12 rounded-full font-semibold transition-all duration-700 ease-in-out border-2 ${service.themeColor} ${service.themeBorder} ${service.themeBgHover} hover:text-white`}
              >
                <span className="absolute flex items-center gap-2 transition-all duration-700 ease-in-out transform group-hover/btn:translate-x-12 group-hover/btn:opacity-0">
                  Klik disini
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                </span>
                <span className="absolute transition-all duration-700 ease-in-out transform -translate-x-12 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;