import React, { useEffect, useRef, useState } from 'react';

const SambutanSection = () => {
  // State buat nge-track apakah section ini udah kelihatan di layar atau belum
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Setting observer buat ngedeteksi scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Kalau masuk viewport (layar), trigger animasinya
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stop observe biar animasinya cuma jalan sekali aja
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // Trigger animasi kalau 20% bagian section udah kelihatan
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      id="informasi" 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-br from-[#e0f2fe] via-[#f3e8ff] to-[#fce7f3] relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
          
          {/* Kolom Foto Kiri (Animasi Slide dari Kiri) */}
          <div 
            className={`w-full md:w-1/3 flex justify-center shrink-0 transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
            }`}
          >
            <div className="relative group">
              {/* Efek bayangan di belakang foto biar lebih 3D/Pop-out */}
              <div className="absolute inset-0 bg-black/10 translate-x-3 translate-y-3 blur-sm transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"></div>
              
              {/* Foto Kepala Dinas - Ganti src pakai foto aslinya nanti */}
              <img 
                src="https://placehold.co/400x550/ff0000/ffffff?text=Foto+Kadin" 
                alt="Kepala Dinas PUPR" 
                className="relative z-10 w-full max-w-[280px] h-auto shadow-md border-4 border-white object-cover transition-transform duration-300 group-hover:-translate-y-1"
              />
            </div>
          </div>

          {/* Kolom Teks Kanan (Animasi Fade Up dari Bawah dengan Delay) */}
          <div 
            className={`w-full md:w-2/3 transform transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
          >
            <h3 className="text-[#ec4899] font-bold tracking-widest uppercase mb-6 text-sm md:text-base">
              Sambutan
            </h3>
            
            <div className="text-gray-700 leading-relaxed text-justify space-y-4 text-[15px] md:text-base">
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

            {/* Bagian Tanda Tangan / Nama */}
            <div className="mt-10 pt-6 border-t border-gray-300/50">
              <p className="text-gray-600 mb-2 italic">Salam hormat,</p>
              <p className="font-bold text-[#1e293b] text-lg">ADALAH, S.E., M.T.</p>
              <p className="text-gray-500 text-sm">Kepala Dinas Pekerjaan Umum Kabupaten Purwodadi</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SambutanSection;