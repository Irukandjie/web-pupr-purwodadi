import React, { useState, useEffect } from 'react';

// Import semua komponen yang udah kita bikin
import LoadingScreen from './component/LoadingScreen.jsx';
import NavbarPUPR from './component/navbar.jsx';
import HeroSection from './component/hero.jsx';
import SambutanSection from './component/sambutan.jsx';
import ServicesSection from './component/services.jsx';
import SistemInformasiSection from './component/sistem-informasi.jsx';

function App() {
  // State buat ngontrol layar loading
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Durasi loading layarnya (2 detik)
    const timer = setTimeout(() => {
      // 1. Mulai efek menghilang perlahan (fade out)
      setIsFadingOut(true); 
      
      // 2. Tunggu efek fade out selesai (0.7 detik), baru hapus komponennya
      setTimeout(() => {
        setIsLoading(false);
      }, 700);
      
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen nutupin full layar di awal */}
      {isLoading && <LoadingScreen isFadingOut={isFadingOut} />}

      {/* Konten Utama Website */}
      <div className="min-h-screen bg-gray-50 font-sans scroll-smooth">
        
        {/* 1. Navbar Sticky */}
        <NavbarPUPR />
        
        {/* 2. Hero Video Parallax */}
        <HeroSection />
        
        {/* 3. Sambutan Kepala Dinas */}
        <SambutanSection />
        
        {/* 4. Layanan Kami (3 Kartu) */}
        <ServicesSection />

        {/* 5. Sistem Informasi Infrastruktur (9 Kartu) */}
        <SistemInformasiSection />

      </div>
    </>
  );
}

export default App;
