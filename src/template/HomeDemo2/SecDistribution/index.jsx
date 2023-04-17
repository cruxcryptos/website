import SectionHeading from '../../../components/SectionHeading'
import TokenInfo from './TokenInfo'


const SecDistribution = ({ img, data }) => {
  return (
    <section className="token-distribution ">
      <div className="container">
        <SectionHeading        title={[
          <span style={{ color: '#E6791B' }}> $CRUX</span>,
          ' METRICS',

        ]}
          text2="Upon releasing CRUX to the public, for the sustainability and growth we decided to split the supply in the following way."
        />

        <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-up">
          <h2 className="text-center mb-30">Allocation</h2>
          <div className="token-allocation">
            <img src={img} className="center-block" alt="tokenomics_crux" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-up" 
      style={{zIndex:'20'}}>
          <div className="token-info-wapper"></div>
          <h2 className="text-center mb-30">Metrics</h2>
          <TokenInfo title="Name: " text="CRUX" />{' '}
          <TokenInfo title="Ticker: " text="$CRUX" />{' '}
          <TokenInfo title="Max supply: " text="1,000,000,000 CRUX" />{' '}
          <TokenInfo title="Staked: " text="Coming soon." />{' '}
        </div>
      </div>
    </section>
  )
}

export default SecDistribution
