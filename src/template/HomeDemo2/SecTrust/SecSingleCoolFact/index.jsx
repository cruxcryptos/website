import gifland from '../../../../assets/img/gifs/sectionsolidpoints/lands.gif'
import gifmulti from '../../../../assets/img/gifs/sectionsolidpoints/multiplayer.gif'
import gifnft from '../../../../assets/img/gifs/sectionsolidpoints/nftmarketplace.gif'
import gifquests from '../../../../assets/img/gifs/sectionsolidpoints/quests.gif'
import gifstaking from '../../../../assets/img/gifs/sectionsolidpoints/staking.gif'
import gifunique from '../../../../assets/img/gifs/sectionsolidpoints/uniqueitems.gif'



const SecSingleCoolFact = ({ data }) => {
  return (
    <>
      <div className="row">
        <div className="col-sm" data-aos="fade-up">
          <div className="trust-item text-center">
            <div className="ico-platform-logo">
              <img src={gifmulti} alt='land'/>
            </div>
            <h4>Multiplayer</h4>
            <p>Play with your friends, either by grouping as a team to fight the undead or compete between each others for resources and weapons.</p>
          </div>
        </div>
        <div className="col-sm" data-aos="fade-up">
          <div className="trust-item text-center">
            <div className="ico-platform-logo">
              <img src={gifquests} alt='land'/>
            </div>
            <h4>P2E Quests</h4>
            <p>Our world features missions that once accomplished, you can win rewards that can be claimable and sold or swapped.</p>
          </div>
        </div>
        <div className="col-sm" data-aos="fade-up">
          <div className="trust-item text-center">
            <div className="ico-platform-logo">
              <img src={gifunique} alt='land'/>
            </div>
            <h4>Unique Assets</h4>
            <p>Leverage your skills with unique items on the journey against the undead. They provide stats increase to make your character stronger.</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm" data-aos="fade-up">
          <div className="trust-item text-center">
            <div className="ico-platform-logo">
              <img src={gifstaking} alt='land'/>
            </div>
            <h4>Staking In-Game</h4>
            <p>Our economy includes a stake system where players will earn rewards based on their stake. </p>
          </div>
        </div>{' '}
        <div className="col-sm" data-aos="fade-up">
          <div className="trust-item text-center">
            <div className="ico-platform-logo">
              <img src={gifland} alt='land'/>
            </div>
            <h4>Land and Plots</h4>
            <p>To protect yourself, you can own a land and build on it. From baracks to military headquarters.</p>
          </div>
        </div>
        <div className="col-sm" data-aos="fade-up">
          <div className="trust-item text-center">
            <div className="ico-platform-logo">
              <img src={gifnft} alt='land'/>
            </div>
            <h4>NFT Marketplace</h4>
            <p>Platform that will enable users to trade/buy/sell assets obtained on the game.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SecSingleCoolFact
