import React from 'react';
import ScrollReveal from './ScrollReveal';

const HeroSection = () => {
  return (
    <section id="hero" className="w-full bg-white pt-6 pb-10">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <ScrollReveal direction="up">
          <div className="relative w-full h-[450px] rounded-[2rem] overflow-hidden flex shadow-sm border border-red-50">
            
            {/* Latar Belakang Gradient Soft Pink */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-50 via-red-50/80 to-white z-0"></div>

            {/* Pattern Dots */}
            <div className="absolute inset-0 opacity-20 z-0" style={{ backgroundImage: 'radial-gradient(#ef4444 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            {/* Bagian Teks (Kiri) */}
            <div className="relative z-20 flex-1 flex flex-col justify-center p-12 md:p-16 w-full md:w-1/2 text-slate-800">
              <span className="text-[11px] font-bold tracking-widest uppercase mb-4 text-red-500">SINTARAMA</span>
              <h1 className="text-4xl md:text-[42px] font-black leading-tight mb-6 tracking-tight max-w-xl text-slate-800">
                Sistem Informasi Tata Ruang Masyarakat Kabupaten Grobogan
              </h1>
              <p className="text-slate-500 text-base md:text-lg mb-10 max-w-md leading-relaxed">
                Platform informasi publik yang menyediakan akses mudah terhadap data, layanan, dan informasi terkini dari DPUPR Kabupaten Grobogan.
              </p>
              <div>
                <button className="bg-white text-red-600 border-2 border-red-500 px-8 py-3.5 rounded-full font-bold shadow-sm hover:bg-red-50 transition-all flex items-center gap-3 group">
                  Jelajahi Layanan
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </div>

            {/* Bagian Gambar Gedung (Kanan) dengan Fade Edge */}
            <div className="absolute right-0 top-0 w-full md:w-[55%] h-full z-10 flex justify-end">
              <div className="absolute inset-0 bg-gradient-to-r from-red-50 via-transparent to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1541888049-74d320fb7240?q=80&w=2070&auto=format&fit=crop" 
                alt="Gedung DPUPR Grobogan" 
                className="w-full h-full object-cover object-center"
              />
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;