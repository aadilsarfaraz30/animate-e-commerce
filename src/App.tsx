import React from 'react';
import './App.scss';
import OnlyImageScroll from './components/OnlyImageScroll';


function App() {
  return (
    <div className="">
        {/* <Header/>
        <Main/> */}
        {/* <img style={{
          width: '100%',
        }} src={img} alt="dashboard-footer"/> */}
        {/* <ParallaxBanner  
        // layers={[{ image: img, speed: -15 }]}
        layers={[
          {
            image: 'https://laz-img-cdn.alicdn.com/images/ims-web/TB1LLFTsljTBKNjSZFuXXb0HFXa.jpg_1200x1200.jpg',
            speed: -20,
          },
        ]}
        style={{ aspectRatio: '2 / 1' }}
        >
        <
        </ParallaxBanner> */}
         {/* <ParallaxSection url={image}/>
         <ParallaxSection url={"https://laz-img-cdn.alicdn.com/images/ims-web/TB1LLFTsljTBKNjSZFuXXb0HFXa.jpg_1200x1200.jpg"}/> */}
    <OnlyImageScroll/>
    </div>
  );
}

export default App;
