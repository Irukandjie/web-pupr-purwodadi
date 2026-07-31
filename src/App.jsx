import React, { useState, useEffect } from 'react';

// Import semua komponen
import LoadingScreen from './component/LoadingScreen.jsx';
import NavbarPUPR from './component/navbar.jsx';
import HeroSection from './component/hero.jsx';
import SambutanSection from './component/sambutan.jsx';
import ServicesSection from './component/services.jsx';
import SistemInformasiSection from './component/sistem-informasi.jsx';
import BeritaSection from './component/berita.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  
  // Deteksi URL yang lagi dibuka sekarang
  const currentPath = window.location.pathname;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true); 
      setTimeout(() => setIsLoading(false), 700);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen isFadingOut={isFadingOut} />}

      <div className="min-h-screen bg-gray-50 font-sans scroll-smooth">
        
        {/* Navbar selalu muncul di semua halaman */}
        <NavbarPUPR />
        
        {/* LOGIKA PEMISAH HALAMAN */}
        {currentPath.includes('/berita') ? (
          
          /* JIKA URL ADALAH /berita, TAMPILKAN INI SAJA */
          <div className="pt-8">
            <BeritaSection />
          </div>

        ) : (

          /* JIKA BERADA DI BERANDA (/), TAMPILKAN SEMUA INI */
          <>
            <HeroSection />
            <SambutanSection />
            <ServicesSection />
            <SistemInformasiSection />
          </>

        )}

      </div>
    </>
  );
}

export default App;
