import { IconBase } from 'react-icons'
import SectionHeading from '../../../components/SectionHeading'
import SecSingleCoolFact from './SecSingleCoolFact'

const SecTrustPlatform = ({ data }) => {
  return (
    <div className='bgpreto'>
    <section className="trust-section2 section-padding-100"  id='highlights'>
      <IconBase></IconBase>
      <SectionHeading
        title={[
          <span style={{ color: '#E6791B' }}> Revolutionizing</span>,
          ' Cryptocurrency Trading with ',
          <span style={{ color: '#E6791B' }}> Ai</span>,

        ]}
        text2="A unique platform that leverages the power of artificial intelligence and machine learning to provide real-time market analysis, social sentiment, and on-chain data for traders to make informed decisions."
        
      />

      <div className="container">
        <SecSingleCoolFact data={data} />
      </div>
    </section>
    </div>
  )
}

export default SecTrustPlatform
