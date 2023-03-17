import { IconBase } from 'react-icons'
import SectionHeading from '../../../components/SectionHeading'
import SecSingleCoolFact from './SecSingleCoolFact'

const SecTrustPlatform = ({ data }) => {
  return (
    <div className='bgpreto'>
    <section className="trust-section2 section-padding-100"  id='highlights'>
      <IconBase></IconBase>
      <SectionHeading
        title="Revolutionizing Cryptocurrency Trading with AI"
        text="A unique platform that leverages the power of artificial intelligence and machine learning to provide real-time market analysis, social sentiment, and on-chain data for traders to make informed decisions."
        text2=""
      />

      <div className="container">
        <SecSingleCoolFact data={data} />
      </div>
    </section>
    </div>
  )
}

export default SecTrustPlatform
