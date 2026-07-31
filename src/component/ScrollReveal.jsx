import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ 
  children, 
  direction = 'up', // Pilihan: 'up', 'down', 'left', 'right', 'none'
  delay = 'delay-0', // Pilihan: 'delay-75', 'delay-100', 'delay-300', 'delay-500', dll
  duration = 'duration-1000', // Kecepatan animasi
  className = '', 
  threshold = 0.15 // Seberapa banyak elemen harus masuk layar sebelum animasi jalan (0.15 = 15%)
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Kalau elemen masuk layar, set jadi true
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve biar animasinya cuma jalan sekali pas pertama kali di-scroll
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold, // Trigger animasi pas elemen kelihatan 15%
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  // Nentuin dari mana elemennya bakal muncul
  const getDirectionClass = () => {
    switch (direction) {
      case 'up': return 'translate-y-20'; // Meluncur dari bawah ke atas
      case 'down': return '-translate-y-20'; // Meluncur dari atas ke bawah
      case 'left': return '-translate-x-20'; // Meluncur dari kiri ke kanan
      case 'right': return 'translate-x-20'; // Meluncur dari kanan ke kiri
      default: return 'translate-y-0 translate-x-0'; // Cuma fade in (nggak gerak)
    }
  };

  return (
    <div
      ref={ref}
      className={`transform transition-all ease-out ${duration} ${delay} ${className} ${
        isVisible 
          ? 'opacity-100 translate-y-0 translate-x-0' // Posisi akhir (normal)
          : `opacity-0 ${getDirectionClass()}` // Posisi awal (ngumpet)
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
