import SectionHeading from './SectionHeading'
import SecTelegramText from './SecTelegramText'
import SecSocialList from './SecSocialList'

const SecSubscribe = ({data}) => {

  return (
    <section className="container" style={{paddingBottom: '0px'}} id="start">
        <div className="subscribe fundopreto">
            <div className="row">
                    <div className="subscribe-wrapper">
                        <SectionHeading />
                        <div className="service-text">
                            <SecTelegramText />
                        </div>
                </div>
                
            </div>
        </div>  
    </section>
  );
}

export default SecSubscribe;