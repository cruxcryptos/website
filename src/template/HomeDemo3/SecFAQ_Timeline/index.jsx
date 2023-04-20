import SectionHeading from '../../../components/SectionHeading'
import SingleFAQArea from './SingleFAQArea'
const SecFAQ_Timeline = ({FQAInfo , DocElementTitle}) => {

  return (
    <section className="faq-timeline-area section-padding-100">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-7 col-md-12 mb-5">
                    <SectionHeading        title={[
          <span style={{ color: '#E6791B' }}> Revolutionizing</span>,
          ' Cryptocurrency Trading with ',
          <span style={{ color: '#E6791B' }}> Ai</span>,

        ]}
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
                    />

                    <div className="dream-faq-area">
                        <div className="panel-group" id="accordionFourLeft" data-aos="fade-up">
                            {FQAInfo && FQAInfo.map((item , key) => (
                                <>
                                    <SingleFAQArea key={key} text={item.text} ID={item.ID} />
                                </>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}

export default SecFAQ_Timeline;