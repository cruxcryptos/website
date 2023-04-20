import gifland from '../../../../assets/img/gifs/sectionsolidpoints/lands.gif'
import gifmulti from '../../../../assets/img/gifs/sectionsolidpoints/multiplayer.gif'
import gifnft from '../../../../assets/img/gifs/sectionsolidpoints/nftmarketplace.gif'
import gifquests from '../../../../assets/img/gifs/sectionsolidpoints/quests.gif'
import gifstaking from '../../../../assets/img/gifs/sectionsolidpoints/staking.gif'
import gifunique from '../../../../assets/img/gifs/sectionsolidpoints/uniqueitems.gif'
import { Player } from '@lottiefiles/react-lottie-player'
import Tilt from 'react-parallax-tilt'

const SecSingleCoolFact = ({ data }) => {
  return (
    <>
      <div className="row">
        <div className="col-sm" data-aos="fade-up" style={{ zIndex: '20' }}>
          <Tilt
            glareEnable={true}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            glareColor={'rgb(255,0,0)'}
            glareBorderRadius={'16px'}
          >
            <div className="trust-item2 text-center">
              <div className="ico-platform-logo">
                <Player
                  src="https://assets2.lottiefiles.com/packages/lf20_9wq5moym.json"
                  className="player"
                  loop
                  autoplay
                  style={{ margin: 'auto', maxWidth: '50%' }}
                />
              </div>
              <h4>Real-time Analysis</h4>
              <p>
                Get up-to-the-minute insights and analysis of the cryptocurrency
                market with our AI-powered financial platform
              </p>
            </div>
          </Tilt>
        </div>

        <div className="col-sm" data-aos="fade-up" style={{ zIndex: '20' }}>
          <Tilt
            glareEnable={true}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            glareColor={'rgb(198,132,27)'}
            glareBorderRadius={'16px'}
          >
            <div className="trust-item2 text-center">
              <div className="ico-platform-logo">
                {' '}
                <Player
                  src="https://assets8.lottiefiles.com/private_files/lf30_cskc46wd.json"
                  className="player"
                  loop
                  autoplay
                  style={{ margin: 'auto', maxWidth: '80%' }}
                />
              </div>
              <h4>Social Sentiment</h4>
              <p>
                Stay on top of market trends and sentiment analysis with our
                platform, providing you with valuable insights into the crypto
                space.
              </p>
            </div>
          </Tilt>
        </div>
        <div className="col-sm" data-aos="fade-up" style={{ zIndex: '20' }}>
          <Tilt
            glareEnable={true}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            glareColor={'rgb(255,0,0)'}
            glareBorderRadius={'16px'}
          >
            <div className="trust-item2 text-center">
              <div className="ico-platform-logo">
                {' '}
                <Player
                  src="https://assets8.lottiefiles.com/packages/lf20_kndsasgl.json"
                  className="player"
                  loop
                  autoplay
                  style={{ margin: 'auto', maxWidth: '50%' }}
                />
              </div>
              <h4>On-chain Data</h4>
              <p>
                Our platform provides comprehensive on-chain data analytics,
                allowing you to make informed decisions based on the latest
                data.
              </p>
            </div>
          </Tilt>
        </div>
      </div>

      <div className="row">
        <div className="col-sm" data-aos="fade-up" style={{ zIndex: '20' }}>
          <Tilt
            glareEnable={true}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            glareColor={'rgb(198,132,27)'}
            glareBorderRadius={'16px'}
          >
            <div className="trust-item2 text-center">
              <div className="ico-platform-logo">
                <Player
                  src="https://assets3.lottiefiles.com/packages/lf20_cohxzcyi.json"
                  className="player"
                  loop
                  autoplay
                  style={{ margin: 'auto', maxWidth: '50%' }}
                />
              </div>
              <h4>Reliable Trading Tools</h4>
              <p>
                Our trading tools are designed to be reliable and efficient,
                giving you the tools you need to make the best trades possible.{' '}
              </p>
            </div>
          </Tilt>
        </div>{' '}
        <div className="col-sm" data-aos="fade-up" style={{ zIndex: '20' }}>
          <Tilt
            glareEnable={true}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            glareColor={'rgb(255,0,0)'}
            glareBorderRadius={'16px'}
          >
            <div className="trust-item2 text-center">
              <div className="ico-platform-logo">
                {' '}
                <Player
                  src="https://assets5.lottiefiles.com/packages/lf20_nfbtru7n.json"
                  className="player"
                  loop
                  autoplay
                  style={{ margin: 'auto', maxWidth: '60%' }}
                />
              </div>
              <h4>Subscription Model</h4>
              <p>
                Exclusive subscription-based service where the revenue will be
                airdropped to all CRUX holders.
              </p>
            </div>
          </Tilt>
        </div>
        <div className="col-sm" data-aos="fade-up" style={{ zIndex: '20' }}>
          <Tilt
            glareEnable={true}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            glareColor={'rgb(198,132,27)'}
            glareBorderRadius={'16px'}
          >
            <div className="trust-item2 text-center">
              <div className="ico-platform-logo">
                {' '}
                <Player
                  src="https://assets9.lottiefiles.com/packages/lf20_ofa3xwo7.json"
                  className="player"
                  loop
                  autoplay
                  style={{ margin: 'auto', maxWidth: '50%' }}
                />
              </div>
              <h4>Automated Trading</h4>
              <p>
                Our platform supports automated trading with bots, allowing
                traders to take advantage of algorithmic trading strategies and
                execute trades automatically, 24/7.
              </p>
            </div>
          </Tilt>
        </div>
      </div>
    </>
  )
}

export default SecSingleCoolFact
