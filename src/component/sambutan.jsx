import React, { useEffect, useRef, useState } from 'react';

const SambutanSection = () => {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section id="sambutan" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 via-white to-red-50/30 relative overflow-hidden rounded-[2rem] border border-gray-100 shadow-sm mx-4 md:mx-0">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
          
          <div className={`w-full md:w-1/3 flex justify-center shrink-0 transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-red-600/10 translate-x-3 translate-y-3 blur-sm transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4 rounded-xl"></div>
              <img src="https://placehold.co/400x550/dc2626/ffffff?text=Foto+Kadin" alt="Kepala Dinas PUPR" className="relative z-10 w-full max-w-[280px] h-auto shadow-lg border-4 border-white object-cover transition-transform duration-300 group-hover:-translate-y-1 rounded-xl" />
            </div>
          </div>

          <div className={`w-full md:w-2/3 transform transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            <h3 className="text-red-600 font-bold tracking-widest uppercase mb-6 text-sm md:text-base flex items-center gap-3">
              <span className="w-8 h-[2px] bg-red-600 block"></span> Sambutan
            </h3>
            
            <div className="text-gray-600 leading-relaxed text-justify space-y-4 text-[15px] md:text-lg">
              <p>
                Website Dinas Pekerjaan Umum Kabupaten Purwodadi hadir sebagai sarana
                informasi publik yang transparan dan mudah diakses, guna mendukung
                pelayanan infrastruktur yang berkualitas bagi masyarakat. Melalui media
                ini, kami berupaya menyajikan informasi mengenai program, kegiatan,
                serta kebijakan di bidang pekerjaan umum secara akurat dan terkini.
              </p>
              <p>
                Kami berharap keberadaan website ini dapat memperkuat komunikasi
                antara pemerintah dan masyarakat, serta menjadi bagian dari upaya
                mewujudkan tata kelola pemerintahan yang efektif, terbuka, dan
                akuntabel.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200">
              <p className="text-gray-500 mb-1 italic">Salam hormat,</p>
              <p className="font-black text-slate-800 text-xl group-hover:text-red-600 transition-colors">SUWARTO, S.E., M.T.</p>
              <p className="text-red-600 font-semibold text-sm">Kepala Dinas Pekerjaan Umum Kabupaten Purwodadi</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SambutanSection;