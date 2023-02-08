import SectionHeading from '../../../components/SectionHeading'
import SingleFAQArea from './SingleFAQArea'
import gifcrux from '../../../assets/img/gifs/crux_faqs.gif'

const SecFAQ_Timeline = ({ FQAInfo, DocElementTitle }) => {
  return (
    <section className="faq-timeline-area section-padding-100 faqsbg" id="faqs">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 col-md-12 mb-5">
            <SectionHeading
              title="Frequently Asked Questions"
              text="We decided to open this section to answered FAQs regarding $CRUX. We will build a FAQs page dedicated only to the game ecosystem."
            />

            <div className="dream-faq-area">
              <div
                className="panel-group"
                id="accordionFourLeft"
                data-aos="fade-up"
              >
                {FQAInfo &&
                  FQAInfo.map((item, key) => (
                    <>
                      <SingleFAQArea
                        key={key}
                        text={item.text}
                        ID={item.ID}
                        answer={item.answer}
                      />
                    </>
                  ))}
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-5 offset-lg-0 col-md-8 offset-md-2 col-sm-10 offset-sm-1 mt-5">
            <div className="faqs-gif-holder" data-aos="fade-up">
              <img
                src={gifcrux}
                style={{
                  borderRadius: '28px',
                  border: '1px solid rgb(175, 54, 54)',
                  boxShadow: ' -1px 2px 30px -2px rgb(175 54 54)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecFAQ_Timeline
