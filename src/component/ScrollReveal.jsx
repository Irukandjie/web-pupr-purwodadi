import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ 
  children, 
  direction = 'up',  // Pilihan arah: 'up', 'down', 'left', 'right', 'none'
  delay = 'delay-0', // Pilihan delay: 'delay-100', 'delay-300', 'delay-500', dst
  duration = 'duration-1000', 
  className = ''     // Kalau lu mau nambahin class Tailwind tambahan
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Biar animasinya jalan sekali aja
          }
        });
      },
      { threshold: 0.15 } // Trigger animasi pas 15% elemen udah kelihatan di layar
    );

    if (ref.current) observer.observe(ref.current);
    
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // Menentukan posisi awal elemen sebelum dia muncul ke layar
  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return 'translate-y-24';
      case 'down': return '-translate-y-24';
      case 'left': return '-translate-x-24';
      case 'right': return 'translate-x-24';
      case 'none': return '';
      default: return 'translate-y-24';
    }
  };

  return (
    <div
      ref={ref}
      className={`transform transition-all ease-out ${duration} ${delay} ${className} ${
        isVisible 
          ? 'opacity-100 translate-y-0 translate-x-0' 
          : `opacity-0 ${getInitialTransform()}`
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;