import SectionHeading from '../../../components/SectionHeading'

const SecPartners = ({data}) => {

  return (
    <section className="partners" >
        <div className="container">
            <div className="row" style={{paddingTop:'60px'}}>
                {data && data.map((item , key) => (
                    <div className="col-lg-2 col-sm-6" data-aos="fade-up" key={key}>
                        <div className="partner-box">
                            <img src={item.img} alt="" className="center-bock" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}

export default SecPartners;