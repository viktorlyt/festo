import { useEffect, useState } from 'react';

export const ParallaxBanner1 = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className='features__banner3box'>
      <div 
        className='features__banner3'
        style={{ 
          transform: `translateY(${ offsetY * 0.5}px)` 
        }}
      ></div>
      <div className='features__banner2--text'>
        <span className='features__banner2--text-text1'>NO</span>
        <br />
        <span className='features__banner2--text-text2'>
          More Stressful Party Planning
        </span>
      </div>
    </div>
  );
};