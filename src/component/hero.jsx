import React from 'react';
import ScrollReveal from './ScrollReveal';

const HeroSection = () => {
  return (
    <section id="hero" className="w-full bg-white pt-6 pb-10">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <ScrollReveal direction="up">
          {/* 1. Container: Ganti fixed height jadi responsif (min-h-[550px] di mobile, h-[450px] di desktop) */}
          <div className="relative w-full min-h-[550px] md:min-h-0 md:h-[450px] rounded-[2rem] overflow-hidden flex shadow-sm border border-red-50 bg-red-50/20">
            
            {/* 2. Gambar Background: Dipindah ke paling belakang (z-0) dan ukurannya disesuaikan */}
            <div className="absolute inset-0 md:right-0 md:left-auto md:w-[60%] h-full z-0 flex justify-end">
              <img 
                src="https://i.ibb.co.com/27J8xbpv/HEROSECTION.jpg" 
                alt="Background SINTARAMA" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 3. Gradient Overlay: Di mobile gradasinya dari Atas ke Bawah (biar teks kebaca). Di PC Kiri ke Kanan. */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/30 md:bg-gradient-to-r md:from-red-50 md:via-red-50/95 md:to-transparent z-10"></div>

            {/* Pattern Dots (Tambahan pointer-events-none biar gak ganggu klik tombol) */}
            <div className="absolute inset-0 opacity-20 z-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ef4444 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            {/* 4. Bagian Teks: Padding, margin, dan ukuran disesuaikan untuk layar kecil */}
            <div className="relative z-20 flex-1 flex flex-col justify-center p-8 pt-12 md:p-16 w-full md:w-1/2 text-slate-800">
              
              <span className="text-[10px] md:text-[11px] font-bold tracking-widest uppercase mb-3 md:mb-4 text-red-600 bg-red-100/50 w-fit px-4 py-1.5 rounded-full backdrop-blur-sm border border-red-100">
                SINTARAMA
              </span>
              
              <h1 className="text-3xl md:text-[42px] font-black leading-tight mb-4 md:mb-6 tracking-tight max-w-xl text-slate-800">
                Sistem Informasi Tata Ruang Masyarakat Kabupaten Grobogan
              </h1>
              
              <p className="text-slate-600 md:text-slate-500 text-sm md:text-lg mb-8 md:mb-10 max-w-md leading-relaxed font-medium md:font-normal">
                Platform informasi publik yang menyediakan akses mudah terhadap data, layanan, dan informasi terkini dari DPUPR Kabupaten Grobogan.
              </p>
              
              <div>
                {/* 5. Tombol: Full-width dan warna solid di mobile, ukuran fit di PC. Ditambah efek active:scale-95 biar tactile pas di-tap */}
                <button className="bg-red-600 md:bg-white text-white md:text-red-600 border-2 border-red-600 md:border-red-500 px-6 py-3.5 md:px-8 md:py-3.5 rounded-full font-bold shadow-lg md:shadow-sm hover:bg-red-700 md:hover:bg-red-50 active:scale-95 transition-all duration-300 flex items-center justify-center md:justify-start gap-3 group w-full md:w-fit">
                  Jelajahi Layanan
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
