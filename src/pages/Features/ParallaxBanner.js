import { Parallax } from 'react-parallax';
import features_banner2 from '../../images/features_banner6.png';

export const ParallaxBanner = () => (
    <Parallax
      className='features__banner2parallax'
      bgImage={features_banner2}
      strength={-200}
    >
      <div className='features__banner2--text' style={{ height: 824 }}>
        <span className='features__banner2--text-text1'>NO</span>
        <br />
        <span className='features__banner2--text-text2'>
          More Stressful Party Planning
        </span>
      </div>
    </Parallax>
);