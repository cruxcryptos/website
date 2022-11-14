import SectionHeading from '../../../components/SectionHeading'
import SecVideoArea from './SecVideoArea'

const SecDemoVideo = ({ img }) => {
  return (
    <div className="bgpreto" id='gameplay'>
      <section className="demo-video section-before section-padding-100">
        <div className="container">
          <SectionHeading
            data-aos="fade-up"
            data-aos-delay="300"
            title="Glimpse at Pre-Alpha Stage"
            text="We are focused on developing the game. While it runs, we decided to unveil a bit the curtain on the Alpha Stage of our world."
          />
          <SecVideoArea img={img} />
        </div>
      </section>
    </div>
  )
}

export default SecDemoVideo
