import React, { useEffect, useRef, useState } from 'react';

// Easing super mahal: lambat di akhir, ngasih kesan elemen itu "berat" dan "premium"
const EASE_OUT_EXPO = 'cubic-bezier(0.19, 1, 0.22, 1)'; 

const ScrollReveal = ({ 
  children, 
  direction = 'up',   // 'up', 'down', 'left', 'right', 'none'
  delay = 0,          
  duration = 1400,    // Diperlama dikit jadi 1.4 detik biar efek cinematic-nya kerasa
  scale = 0.92,       // Skala awal lebih kecil biar efek pop-out lebih dramatis
  blur = true,        // EFEK BARU: Cinematic focus reveal (blur to sharp)
  threeD = true,      // EFEK BARU: Efek lipatan 3D membuka ke layar
  enableFloat = false, // Efek melayang bolak-balik
  className = ''      
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

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
      { threshold: 0.25 } 
    );

    if (ref.current) observer.observe(ref.current);
    
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // Logic 3D & Pergerakan yang super presisi pakai inline-style
  const getHiddenStyle = () => {
    let transform = 'perspective(1200px) '; // Kedalaman 3D

    // Efek flip 3D berdasarkan arah datangnya elemen
    if (threeD) {
      if (direction === 'up') transform += 'rotateX(-12deg) ';
      else if (direction === 'down') transform += 'rotateX(12deg) ';
      else if (direction === 'left') transform += 'rotateY(-12deg) ';
      else if (direction === 'right') transform += 'rotateY(12deg) ';
    }

    // Arah pergerakan translasi
    switch (direction) {
      case 'up': transform += 'translateY(40px) '; break;
      case 'down': transform += 'translateY(-40px) '; break;
      case 'left': transform += 'translateX(-40px) '; break;
      case 'right': transform += 'translateX(40px) '; break;
      default: break;
    }
    
    transform += `scale(${scale})`;

    return {
      opacity: 0,
      filter: blur ? 'blur(16px)' : 'none', // Blur tingkat tinggi saat belum muncul
      transform: transform,
    };
  };

  const getVisibleStyle = () => {
    return {
      opacity: 1,
      filter: 'blur(0px)', // Fokus tajam
      transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px) translateX(0px) scale(1)',
    };
  };

  // Menggabungkan durasi transisi
  const transitionStyle = {
    transitionProperty: 'transform, opacity, filter',
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: EASE_OUT_EXPO,
    ...(isVisible ? getVisibleStyle() : getHiddenStyle())
  };

  return (
    <div
      ref={ref}
      // Wrapper luar untuk efek kilauan CSS (Shimmer) yang dari index.css
      className={`scroll-reveal-shimmer-wrapper ${isVisible ? 'scroll-reveal-active' : ''} ${className}`}
    >
      <div
        // Inner wrapper 1: Eksekusi animasi masuk (Blur, 3D, Opacity, Transform)
        className="scroll-reveal-shimmer will-change-transform"
        style={transitionStyle}
      >
        {/* Inner wrapper 2: Efek melayang statis (Float) yang aktif SETELAH elemen selesai muncul */}
        <div 
          className={`transition-all duration-1000 ${isVisible && enableFloat ? 'animate-float-aesthetic' : ''}`}
          style={isVisible && enableFloat ? { animationDelay: `${duration * 0.7}ms` } : {}}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ScrollReveal;
