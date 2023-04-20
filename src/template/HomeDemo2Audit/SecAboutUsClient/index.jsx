import SecWelcomeMeter from './SecWelcomeMeter'
import SecWelcomeMeter2 from './SecWelcomeMeter2'
import SecWhoWeContant from './SecWhoWeContant'
import SecWhoWeContant2 from './SecWhoWeContant2'

const SecAboutUsClient = ({ img, img2 }) => {
  return (
    <section
      className="about-us-area section-padding-0-100 clearfix"
      id="about"
    >
      <div className="container">
        <div className="row align-items-center">
          <SecWelcomeMeter />
          <SecWhoWeContant />
          <div className='add-margin-gifs'>
            <SecWhoWeContant2 />
            <SecWelcomeMeter2 />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecAboutUsClient
