import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger animasi saat komponen ini dimuat di browser
  useEffect(() => {
    // Kasih sedikit delay biar nunggu navbar turun dulu
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center bg-gray-900">
      
      <div className={`absolute inset-0 w-full h-full z-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <video 
          autoPlay loop muted playsInline
          className="w-full h-full object-cover scale-105" 
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
      </div>

      <button className="absolute left-4 md:left-8 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full text-white transition-all">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </button>

      <div className="relative z-10 container mx-auto px-12 md:px-24 h-full flex flex-col lg:flex-row items-center justify-between gap-8 pt-16">
        
        {/* Foto Pejabat muncul dari bawah */}
        <div className={`flex-1 w-full flex justify-center lg:justify-start items-end h-full pt-10 transform transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[550px]">
            <div className="absolute bottom-0 w-full h-full bg-white/10 border-2 border-white/20 rounded-t-[100px] backdrop-blur-md flex flex-col items-center justify-end pb-8 shadow-2xl">
              <svg className="w-32 h-32 text-white/50 mb-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
              <div className="bg-red-700/90 text-white px-6 py-2 rounded-md font-bold shadow-lg text-center backdrop-blur-sm border border-red-500">
                <p className="text-sm md:text-base">Nama Pejabat 1, ST., MT.</p>
                <p className="text-[10px] md:text-xs font-normal">Kepala Dinas PUPR</p>
              </div>
            </div>
          </div>
        </div>

        {/* Teks tipografi meluncur dari arah kanan */}
        <div className={`flex-1 w-full text-center lg:text-right pb-10 lg:pb-0 transform transition-all duration-1000 delay-500 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
          <p className="text-yellow-400 font-bold tracking-widest uppercase text-sm md:text-lg mb-2 drop-shadow-md">
            Pemerintah Kabupaten Purwodadi
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight drop-shadow-2xl uppercase font-serif">
            Membangun <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">Infrastruktur</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-200 mt-2 tracking-wide drop-shadow-lg uppercase">
            Memajukan Daerah
          </h2>
          <p className="text-white/90 italic text-sm md:text-lg mt-8 border-r-4 border-yellow-500 pr-4 inline-block drop-shadow-md">
            "Sambut pembangunan dengan sepenuh hati, saatnya berinovasi agar menjadi daerah yang lebih baik lagi"
          </p>
        </div>

      </div>

      <button className="absolute right-4 md:right-8 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full text-white transition-all">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
      </button>

    </section>
  );
};

export default HeroSection;