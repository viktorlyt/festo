import { Parallax } from 'react-parallax';
// import features_banner2 from '../../images/features_banner5.png';

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

export const ParallaxBanner1 = () => (
      <Parallax
        className='features__banner2'
        bgImage={image1}
        strength={500}
        bgImageStyle={{
          filter: 'brightness(50%)',
        }}
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