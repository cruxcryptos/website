import CountUp from 'react-countup'
import imageGif from './../../../../assets/img/gifs/gif_crux_gameplay.gif'
import { Player } from '@lottiefiles/react-lottie-player'
import Tilt from 'react-parallax-tilt'
const SecWelcomeMeter2 = ({ img }) => {
  return (
    <div className="col-12 col-lg-6" data-aos="fade-up">
      <Tilt>
        <div
          className="welcome-meter"
          style={{
            backgroundColor: '#E6791B',
            borderRadius: '28px',
            border: '1px solid #E6791B',
            boxShadow: ' -1px 2px 30px -2px rgb(175 54 54)',
            padding: '12px',
          }}
        >
          <img
            src={imageGif}
            style={{width:'100%',paddingTop:'12px'}}
            className="img-responsive center-block"
            alt="aboutuscrux"
          />
          <div className="growing-company text-center mt-30">
            <p>
              * Rendered on{' '}
              <span className="counter">PRE-ALPHA Development</span> stage
            </p>
          </div>
        </div>
      </Tilt>
    </div>
  )
}

export default SecWelcomeMeter2
