import { HomeDemo2Dollar } from '../../../utils/allImgs'

import SecWelcomeContent from './SecWelcomeContent'
import imageGif from './../../../assets/img/gifs/gif_crux_gameplay.gif'
import imageICO from './../../../assets/img/crux_ico.png'

import Tilt from 'react-parallax-tilt'

const DIV = () => <div className="dream-blip blip1 blip2 blip3 blip4 "></div>

const SecWelcomeArea = () => {
  return (
    <section
      className="welcome_area clearfix dzsparallaxer auto-init none fullwidth"
      data-options={{ direction: 'normal' }}
      id="home"
    >
      <div className="divimage dzsparallaxer--target Home1WelcomeAreaIMG"></div>

      <div className="hero-content transparent">
        {Array(4)
          .fill()
          .map((item, key) => (
            <DIV />
          ))}

        <div className="container h-100">
          <div
            className="row h-100 align-items-center"
          >
            <div className="col-12 col-lg-6 col-md-12">
              <SecWelcomeContent img={HomeDemo2Dollar} />
            </div>

            <div className="col-12 col-lg-6 col-md-12" style={{paddingTop:'500px'}}>
            <Tilt
            glareEnable={false}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            glareColor={'rgb(198,132,27)'}
            
            glareBorderRadius={'16px'}
          >
          <img className='boxgifhero' style={{marginTop:'-10px',borderRadius:'12px', border:'1px solid #C6841B', opacity:'0.9',padding:'12px',width:'90%'}}src={imageICO} alt='crux gif metaverse'></img>
              
              </Tilt>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecWelcomeArea
