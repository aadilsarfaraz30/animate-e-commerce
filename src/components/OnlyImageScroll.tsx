/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useRef } from 'react'
import style from './OnlyImageScroll.module.css'
import image1 from '../assest/product-image2.png'
import image2 from '../assest/product-image3.png'

const OnlyImageScroll = () => {
    const containerRef = useRef<any>(null);
    const leftSectionRef = useRef<any>(null);
  
    useEffect(() => {
      const handleScroll = (e:any) => {
        const container = containerRef.current;
        const leftSection = leftSectionRef.current;
        // console.log('leftSection', window.innerHeight)
        console.log('leftSection height:', leftSection.offsetHeight);

        if (container && leftSection) {
          const maxScrollTop = leftSection.scrollHeight - leftSection.clientHeight;
        //   console.log('maxScrollTop', maxScrollTop)
        //   console.log('leftSection.scrollTop', leftSection.scrollHeight)
        //   console.log('leftSection.scrollTop', leftSection.clientHeight)
          console.log('leftSection.scrollTop', leftSection.scrollTop)
        // console.log('window.scrollY',window.scrollY)
          if (leftSection.scrollTop < maxScrollTop ) {
            leftSection.scrollTop += e.deltaY;
            e.preventDefault();
          }
         

        }
      };
  
      const container = containerRef.current;
      container && container.addEventListener('wheel', handleScroll);
  
      return () => {
        container && container.removeEventListener('wheel', handleScroll);
      };
    }, []);

  return (
    <div  ref={containerRef}>
        <div className={style.container}>
        <section className={style.leftSection} ref={leftSectionRef}>
      <img src={image1} height={'100%'} alt="Product Image 1" />    
      <img src={image2} height={'100%'} alt="Product Image 2" />    
      {/* <img src={image1} height={'100%'} alt="Product Image 2" />     */}
    </section>
    <section className={style.rightSection}></section>
        </div>
        <div className={style.bottom}>
    
        </div>
  </div>
  )
}

export default OnlyImageScroll