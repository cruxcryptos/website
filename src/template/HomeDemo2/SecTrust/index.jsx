import SectionHeading from '../../../components/SectionHeading'
import SecSingleCoolFact from './SecSingleCoolFact'

const SecTrust = ({ data }) => {
  return (
    <div className='bgpreto'>
    <section className="trust-section section-padding-100"  id='highlights'>
      <SectionHeading
        title="Our Metaverse"
        text="Enter our MMOG and help the human race fight against the enemy."
        text2="Our game features the Play to Earn concept, combining a unique economy with a huge world to fight and explore with friends."
      />

      <div className="container">
        <SecSingleCoolFact data={data} />
      </div>
    </section>
    </div>
  )
}

export default SecTrust
