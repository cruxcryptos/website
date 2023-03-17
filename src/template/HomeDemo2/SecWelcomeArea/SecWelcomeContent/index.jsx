import mainlogo from '../../../../assets/img/core-img/crux_logo.png'
import imagedollar from '../../../../assets/img/svg/img-dollar.png'

import { VerticalSocial } from './../../../../data/data-containers/data-HomeDemo2'

import SecHorizSocial from './../../SecHorizontalSocial/index'

function SecWelcomeContent({ img }) {
  return (
    <div className="welcome-content">
      <h1 style={{ display: 'none' }}>
        CRUX Cryptos - MMORPG Play-to-Earn Metaverse Game - Survival
      </h1>
      <div className="promo-section">
        <div className="integration-link">
          <span className="integration-icon">
            <img
              src={imagedollar}
              width="24"
              height="24"
              alt="fundo crux metaverse"
            />
          </span>
          <span className="integration-text">
            Pre-sale date to be annouced soon.
          </span>
        </div>
      </div>
      <div className="bgpretohero">
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
