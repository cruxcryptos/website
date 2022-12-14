import image1 from '../../../assets/img/tokenomics/crux_grow.png'
import image2 from '../../../assets/img/tokenomics/crux_liquidity.png'
import image3 from '../../../assets/img/tokenomics/crux_reflections.png'
import SectionHeading from '../../../components/SectionHeading'
const SecOurServices = ({ data }) => {
  return (
    <div className="bgpreto">
      <section
        className="our_services_area section-padding-100-70 clearfix videocrux"
        id="services"
      >
        <div className="container">
          <SectionHeading title="Tokenomics" />

          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4" data-aos="fade-up">
              <div className="service_single_content text-left mb-100">
                <div className="service_icon">
                  <img src={image3} alt="" />
                </div>
                <div className="title-holder-tokenomics">
                  <h4 className="tokenomics-title">2% - REFLECTIONS</h4>
                </div>
                <div className="description-holder-tokenomics">
                  <p>
                    Each transaction with $CRUX will have a 2% fee that will be
                    redistributed to all current holders. While you hold, you
                    will be receiving more $CRUX.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4" data-aos="fade-up">
              <div className="service_single_content text-left mb-100">
                <div className="service_icon">
                  <img src={image2} alt="" />
                </div>
                <div className="title-holder-tokenomics">
                  <h4 className="tokenomics-title">2% - LIQUIDITY</h4>
                </div>
                <div className="description-holder-tokenomics">
                  <p>
                    2% of each transaction will be added to the liquidity locked
                    pool, this allows our ecosystem to grow and be secured
                    with strength on the market.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4" data-aos="fade-up">
              <div className="service_single_content text-left mb-100">
                <div className="service_icon">
                  <img src={image1} alt="" />
                </div>

                <div className="title-holder-tokenomics">
                  <h4 className="tokenomics-title">4% - GROWTH</h4>
                </div>
                <div className="description-holder-tokenomics">
                  <p>
                    4% of each transaction will be allocated to Ecosystem
                    growth, it includes marketing and development needs for
                    the project to grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tokenomics-extra-info">
              <p>
                The total fee per transaction is 8%, thus the slippage of our
                protocol.
              </p>
              <p className="tokenomics-extra-info minus-tokenomics">
                The fee is charged automatically on each transaction that
                occurs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SecOurServices
