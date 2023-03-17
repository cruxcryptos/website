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
            backgroundColor: '#030303',
            width:'80%'
          }}
        >
          <Player
            src="https://assets6.lottiefiles.com/packages/lf20_QfNoy6FscI.json"
            className="player"
            loop
            autoplay
          />
        </div>
      </Tilt>
    </div>
  )
}

export default SecWelcomeMeter2
