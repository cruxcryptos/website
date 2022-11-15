import mainlogo from '../../../../assets/img/core-img/crux_logo.png'
import imagedollar from '../../../../assets/img/svg/img-dollar.png'

function SecWelcomeContent({ img }) {
  return (
    <div className="welcome-content">
      <div className="promo-section">
        <div className="integration-link">
          <span className="integration-icon">
            <img src={imagedollar} width="24" height="24" alt="" />
          </span>
          <span className="integration-text">
            Pre-sale date to be annouced soon.
          </span>
        </div>
      </div>
      <div className="bgpretohero">
        <div className="logomaincrux">
          <img className="logomaincruximage" src={mainlogo} alt="logocrux" />
        </div>
        <h1 className="hero-title">P2E OPEN WORLD</h1>
        <p className="hero-desc">
          $CRUX is a utility token that powers a Survival MMORPG Game with a token-based economy
          (Play-to-Earn) system on Binance Smart Chain. You can earn more $CRUX simply by holding.
        </p>
        <p className="hero-desc">
        The enemy forces are
          unleashed, compete with friends or fight against them, the main goal
          is to survive the undead.
        </p>
        <p className="hero-desc">
          <span className="statusspan">Current Status:</span> Gathering initial
          community.
        </p>
        <div className="dream-btn-group centeredButtons">
          <a href="https://t.me/cruxmmorpg" className="btn dream-btn mr-3">
            Join our telegram
          </a>
        </div>
      </div>
    </div>
  )
}

export default SecWelcomeContent
