import gifland from '../../../../assets/img/gifs/sectionsolidpoints/lands.gif'
import gifmulti from '../../../../assets/img/gifs/sectionsolidpoints/multiplayer.gif'
import gifnft from '../../../../assets/img/gifs/sectionsolidpoints/nftmarketplace.gif'
import gifquests from '../../../../assets/img/gifs/sectionsolidpoints/quests.gif'
import gifstaking from '../../../../assets/img/gifs/sectionsolidpoints/staking.gif'
import gifunique from '../../../../assets/img/gifs/sectionsolidpoints/uniqueitems.gif'

import Tilt from 'react-parallax-tilt'

const SecSingleCoolFact = ({ data }) => {
  return (
    <>
      <div className="row">
        <div className="col-sm" data-aos="fade-up" 
      style={{zIndex:'20'}}>
          <Tilt
            glareEnable={true}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            glareColor={'rgb(255,0,0)'}
            glareBorderRadius={'16px'}
          >
            <div className="trust-item text-center">
              <div className="ico-platform-logo">
                <img src={gifmulti} alt="land" />
              </div>
              <h4>Multiplayer</h4>
              <p>
                Play with your friends, either by grouping as a team to fight
                the undead or compete between each others for resources and
                weapons.
              </p>
            </div>
          </Tilt>
        </div>

        <div className="col-sm" data-aos="fade-up" 
      style={{zIndex:'20'}}>
        <Tilt
            glareEnable={true}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            glareColor={'rgb(198,132,27)'}
            glareBorderRadius={'16px'}
          >
          <div className="trust-item text-center">
            <div className="ico-platform-logo">
              <img src={gifquests} alt="land" />
            </div>
            <h4>P2E Quests</h4>
            <p>
              Our play to earn system has missions that once accomplished, you win
              rewards that can be claimable, sold or swapped on the NFT
              marketplace.
            </p>
          </div>
          </Tilt>
        </div>
        <div className="col-sm" data-aos="fade-up" 
      style={{zIndex:'20'}}>
        <Tilt
            glareEnable={true}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            glareColor={'rgb(255,0,0)'}
            glareBorderRadius={'16px'}
          >
          <div className="trust-item text-center">
            <div className="ico-platform-logo">
              <img src={gifunique} alt="land" />
            </div>
            <h4>Unique Assets</h4>
            <p>
              Leverage your skills with unique items on the journey against the
              undead. They provide increased stats to make you stronger.
            </p>
          </div>
          </Tilt>
        </div>
      </div>

      <div className="row">
        <div className="col-sm" data-aos="fade-up" 
      style={{zIndex:'20'}}>
        <Tilt
            glareEnable={true}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            glareColor={'rgb(198,132,27)'}
            glareBorderRadius={'16px'}
          >
          <div className="trust-item text-center">
            <div className="ico-platform-logo">
              <img src={gifstaking} alt="land" />
            </div>
            <h4>Staking In-Game</h4>
            <p>
              Our crypto economy includes a stake system where players will earn
              rewards based on their stake with CRUX.{' '}
            </p>
          </div>
          </Tilt>
        </div>{' '}
        <div className="col-sm" data-aos="fade-up" 
      style={{zIndex:'20'}}>
        <Tilt
            glareEnable={true}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            glareColor={'rgb(255,0,0)'}
            glareBorderRadius={'16px'}
          >
          <div className="trust-item text-center">
            <div className="ico-platform-logo">
              <img src={gifland} alt="land" />
            </div>
            <h4>Land and Plots</h4>
            <p>
              To protect yourself, you can own a land and build on it. From
              baracks to military headquarters.
            </p>
          </div>
          </Tilt>
        </div>
        <div className="col-sm" data-aos="fade-up" 
      style={{zIndex:'20'}}>
        <Tilt
            glareEnable={true}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            glareColor={'rgb(198,132,27)'}
            glareBorderRadius={'16px'}
          >
          <div className="trust-item text-center">
            <div className="ico-platform-logo">
              <img src={gifnft} alt="land" />
            </div>
            <h4>NFT Marketplace</h4>
            <p>
              Platform that will enable users to trade/buy/sell assets obtained
              on the game.
            </p>
          </div>
          </Tilt>
        </div>
      </div>
    </>
  )
}

export default SecSingleCoolFact
