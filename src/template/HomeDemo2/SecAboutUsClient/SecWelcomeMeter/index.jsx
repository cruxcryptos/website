import CountUp from 'react-countup';
import imageGif from './../../../../assets/img/gifs/gif_crux_metaverse.gif'

const SecWelcomeMeter = () => {

  return (
    <div className="col-12 col-lg-6" data-aos="fade-up">
        <div className="welcome-meter">
            <img src={imageGif} className="img-responsive center-block" alt="" />
            <div className="growing-company text-center mt-30">
                <p>* Rendered on <span className="counter">Alpha Development</span> stage</p>
            </div>
        </div>
    </div>
  );
}

export default SecWelcomeMeter;