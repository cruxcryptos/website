import mainlogo from '../../../../assets/img/core-img/crux_logo.png'
import imagedollar from '../../../../assets/img/svg/img-dollar.png'

import { VerticalSocial } from './../../../../data/data-containers/data-HomeDemo2'
import { Player } from '@lottiefiles/react-lottie-player'
import SecHorizSocial from './../../SecHorizontalSocial/index'

function SecWelcomeContent({ img }) {
  return (
    <div className="welcome-content">
      <h1 style={{ display: 'none' }}>
      CRUX CRYPTOS - Join the Revolution of AI-powered Gaming with CRUX CRYPTO.
      </h1>
      <div className="bgpretohero" style={{paddingTop:'70px'}}>
        <div>
         <Player
            src="https://assets8.lottiefiles.com/packages/lf20_6e0qqtpa.json"
            className="player"
            loop
            autoplay
            style={{margin:'auto', width:'30%'}}
          />
        </div>
        <h1 className="hero-title">The Future of Play to Earn Powered by AI</h1>
        <p className="hero-desc">
          CRUX is a community driven token that powers a financial platform,
          providing access to market analysis, social sentiment, and on-chain
          data through Artificial Intelligence integration. Holders can earn
          more CRUX while participating in a survival MMORPG game on Metaverse,
          where they can compete with friends and fight against the undead to
          stay alive.
        </p>
        <p className="hero-desc">
          <span className="statusspan">Current Status:</span> Gathering initial
          community for ICO.
        </p>
        <div className="dream-btn-group centeredButtons" style={{paddingBottom:'22px'}}>
          <a href="https://crux-mmorpg.gitbook.io/" className="btn dream-btn3 mr-3">
            Whitepaper
          </a>
        </div>
        <div className="dream-btn-group centeredButtons">
          <a href="https://t.me/CRUX_CRYPTOS" className="btn dream-btn mr-3">
            Join our telegram
          </a>
        </div>
        <div className="dream-btn-group centeredButtons">
          <SecHorizSocial data={VerticalSocial} />
        </div>
      </div>
    </div>
  )
}

export default SecWelcomeContent
