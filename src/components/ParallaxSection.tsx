import { useEffect, useRef, useState } from 'react';
import styles from './ParallaxSection.module.css';
import image from '../assest/dashboard-footer.png'

const ParallaxSection = ({url}:any) => {
  const parallaxRef = useRef(null);
  const parallaxImageRef = useRef(null);
  const [textAtTop, setTextAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
    //   console.log(scrollY)
      //@ts-ignore
      const rect = parallaxRef.current.getBoundingClientRect();
      const isAtTop = rect.top - 190 <= 0;
      setTextAtTop(isAtTop);
      //@ts-ignore
      parallaxRef.current.style.transform =  `translateY(-${scrollY * 0.4}px)`;
      
      //@ts-ignore
      // parallaxRef.current.style.position = isAtTop ? 'fixed' : 'absolute';
      //@ts-ignore
    //   parallaxImageRef.current.style.transitionDelay = `${scrollY * 0.1}s`;
    //   parallaxImageRef.current.style.transform =  `translateY(${scrollY * 0.2}px)` ;
    //@ts-ignore
    // parallaxImageRef.current.style.transform =  `translateY(${scrollY * 0.6}px)`
    //   parallaxImageRef.current.style.transform =  `translateY(${scrollY * 1.2}px)`
  //@ts-ignore
  // parallaxImageRef.current.style.position
  //@ts-ignore
      // parallaxImageRef.current.style.backgroundPositionY =   `${scrollY}px` // just scrolling the text
      parallaxImageRef.current.style.backgroundPositionY =   `${scrollY * 0.3}px` 
      //@ts-ignore
      // parallaxImageRef.current.style.transform =   `translateY(-${scrollY }px) `;
        
        
    //   if (isAtTop) {
    //     //@ts-ignore
    //     // parallaxImageRef.current.style.transform = `translateY(-${scrollY * 0.2}px)`;
    //   } else {
    //     //@ts-ignore
    //     parallaxImageRef.current.style.transform = `none`;
    //   }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  useEffect(() => {
      //@ts-ignore
    //   parallaxImageRef.current.style.position = textAtTop ? 'absolute' : 'fixed';
      
    //   parallaxImageRef.current.style.overflowY = textAtTop ? 'scroll' : 'hidden';

  }, [textAtTop]);
  //@ts-ignore
//   console.log('textAtTop', parallaxImageRef.current.style);

  return (
    <div className={styles.parallaxSection}>
      <div ref={parallaxRef} className={styles.parallaxText}>
        Your scrolling text goes here
      </div>
      <div
        ref={parallaxImageRef}
        style={{
        //    position: textAtTop ? 'absolute' : 'fixed', 
        // overflowY: textAtTop ? 'scroll' : 'hidden',
          backgroundImage: `url(${url})`,
            
        //   transform: textAtTop ? 'none' : 'translateY(0)', // Add conditional transform
        }}
        className={styles.parallaxBackground}
      />
    </div>
  );
};

export default ParallaxSection;
