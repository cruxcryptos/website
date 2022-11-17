import CountUp from 'react-countup';
import imageGif from './../../../../assets/img/gifs/gif_crux_gameplay.gif'

const SecWelcomeMeter2 = ({img}) => {

  return (
    <div className="col-12 col-lg-6" data-aos="fade-up">
        <div className="welcome-meter">
            <img src={imageGif} className="img-responsive center-block moremargin" alt="" />
            <div className="growing-company text-center mt-30">
                <p>* Rendered on <span className="counter">PRE-ALPHA Development</span> stage</p>
            </div>
        </div>
    </div>
  );
}

export default SecWelcomeMeter2;