import CountUp from 'react-countup';
import imageGif from './../../../../assets/img/gifs/gif_crux_metaverse.gif'

import Tilt from 'react-parallax-tilt'
const SecWelcomeMeter = () => {

  return (
    <div className="col-12 col-lg-6" data-aos="fade-up">
      
      <Tilt>
        <div className="welcome-meter"                 s          style={{
            backgroundColor: '#E6791B',
            borderRadius: '28px',
            border: '1px solid #E6791B',
            boxShadow: ' -1px 2px 30px -2px rgb(175 54 54)',
            padding: '12px',
          }}>
            <img src={imageGif} className="img-responsive center-block" alt="aboutuscrux" />
            <div className="growing-company text-center mt-30">
                <p>* Rendered on <span className="counter">PRE-ALPHA Development</span> stage</p>
            </div>
        </div>
        </Tilt>
    </div>
  );
}

export default SecWelcomeMeter;