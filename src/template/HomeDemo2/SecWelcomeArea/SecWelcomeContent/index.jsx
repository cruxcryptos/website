import mainlogo from '../../../../assets/img/core-img/crux_logo.png'
import imagedollar from '../../../../assets/img/svg/img-dollar.png'

import { VerticalSocial } from './../../../../data/data-containers/data-HomeDemo2'
import { Player } from '@lottiefiles/react-lottie-player'
import SecHorizSocial from './../../SecHorizontalSocial/index'

function SecWelcomeContent({ img }) {
  return (
    <div className="welcome-content">
      <h1 style={{ display: 'none' }}>
        CRUX CRYPTOS - Join the Revolution of AI-powered Gaming with CRUX
        CRYPTO.
      </h1>
      <div className="bgpretohero" style={{ paddingTop: '70px' }}>
        <div>
          <Player
            src="https://assets8.lottiefiles.com/packages/lf20_6e0qqtpa.json"
            className="player"
            loop
            autoplay
            style={{ margin: 'auto', width: '30%' }}
          />
        </div>
        <h1 className="hero-title">The Future of <span classname='reallyimportant'>Play to Earn </span> Powered by AI</h1>
        <p className="hero-desc">
          CRUX is a community driven token that powers a financial platform,
          providing access to market analysis, social sentiment, and on-chain
          data through Artificial Intelligence integration. Holders can earn
          more CRUX while participating in a survival MMORPG game on Metaverse,
          where they can compete with friends and fight against the undead to
          stay alive.
        </p>
        <p className="hero-desc">
          <span className="statusspan">Current Status:</span> <br />
          <span style={{ fontWeight: 600 }}>FAIRLAUNCH NOW</span>
          <br />
          <span style={{ fontWeight: 600, color: 'yellow' }}>
            Join telegram for info.
          </span>
        </p>
        {/* <div className="dream-btn-group centeredButtons" style={{marginBottom:'10px'}}>
          <a href="https://dx.app/dxsaleview?saleID=162&chain=BNB" className="btn dream-btn mr-3">
            PRESALE
          </a>
        </div> */}
        <div
          className="dream-btn-group centeredButtons"
          style={{ marginBottom: '10px' }}
        >
          <a href="https://t.me/CRUX_CRYPTOS" className="btn dream-btn mr-3">
            Join our telegram
          </a>
        </div>

        <div
          className="dream-btn-group centeredButtons"
          style={{ paddingBottom: '22px' }}
        >
          <a
            href="https://crux-mmorpg.gitbook.io/"
            className="btn dream-btn3 mr-3"
          >
            Whitepaper
          </a>
        </div>
        <div className="dream-btn-group centeredButtons">
          <SecHorizSocial data={VerticalSocial} />
        </div>
      </div>
    </div>
  )
}
function SecWelcomeContent2({ img }) {
  return (
    <div className="welcome-content">
      <div className="promo-section">
        <div className="integration-link">
          <span className="integration-icon">
            <img src={img} width="24" height="24" alt="" />
          </span>
          <span className="integration-text" style={{color:'yellow'}}>
            KYC AND AUDIT DONE
          </span>
        </div>
      </div>
      <h1>The Future Of <span classname='reallyimportant' style={{color:'#E6791B'}}>Play to Earn </span> Powered By <span classname='reallyimportant' style={{color:'#E6791B'}}>Ai</span></h1>
      <p>
        CRUX is a community driven token that powers a financial platform,
        providing access to market analysis, social sentiment, and on-chain data
        through Artificial Intelligence integration.
        <br />
        Holders can earn more CRUX while participating in a survival MMORPG game
        on Metaverse, where they can compete with friends and fight against the
        undead to stay alive.
      </p>
      <div
        className="dream-btn-group"
        style={{ marginBottom: '10px' }}
      >
        <a href="https://pancakeswap.finance/swap?outputCurrency=0xD641156213ad80A007993a1D9cE80085414CFF39" className="btn dream-btn mr-3">
          BUY NOW on PANCAKESWAP
        </a>
        <a href="https://t.me/CRUX_CRYPTOS" className="btn dream-btn mr-3">
          Join our telegram
        </a>
      </div>
      <div
        className="dream-btn-group"
        style={{ marginBottom: '10px' }}
      >
        
        <a
          href="https://www.dextools.io/app/en/bnb/pair-explorer/0x686dc6b3daacd24d1deec2418df9996704f75031"
          className="btn dream-btn3 mr-3"
        >
          Chart
        </a>
        <a
          href="https://crux-mmorpg.gitbook.io/"
          className="btn dream-btn3 mr-3"
        >
          Whitepaper
        </a>
        <a
          href="/audit"
          className="btn dream-btn3 mr-3"
        >
          Audit
        </a>
    </div>
    </div>
  )
}

export { SecWelcomeContent, SecWelcomeContent2 }
