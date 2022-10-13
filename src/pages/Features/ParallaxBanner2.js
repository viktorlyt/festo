import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import features_banner2 from '../../images/features_banner5.png';

export const ParallaxBanner2 = () => {

  return (
    <div className='features__banner3box'>
      <Parallax 
        pages={1}
        style={{
          overflow: 'hidden',
          zIndex: '-100',
        }}
      >
        <ParallaxLayer 
          offset={0}
          speed={-0.2}
          className='features__banner5'
          style={{ 
            height: '824px',
            filter: 'brightness(50%)'
          }}
        >
          <img src={features_banner2} alt='banner'></img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={5}
        >
          <div className='features__banner2--text'>
            <span className='features__banner2--text-text1'>NO</span>
            <br />
            <span className='features__banner2--text-text2'>
              More Stressful Party Planning
            </span>
          </div>
        </ParallaxLayer>
      </Parallax>


      
    </div>
  );
};