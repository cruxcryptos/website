import SectionHeading from '../../../components/SectionHeading'

const SecTeam = ({ data }) => {


  return (
    <section
      className="our_team_area section-padding-0-0 clearfix teambg"
      id="team"
    >

      <div className="container extrapaddingtop" style={{paddingBottom:'22px'}}>
        <div className="row">
          <div className="col-12">
            <SectionHeading
              title={<span style={{color:'#E6791B'}}>Our Team</span>}
              text="The heart of CRUX that works behind the scenes. More to be announced. "
            />
          </div>
        </div>

        <div className="row aligncenter">
          {data &&
            data.map((item, key) => (
              <div className="col-md-4" data-aos="fade-up">
                <div className="single-team-member">
                  <div className="team-member-thumb">
                    <img src={item.img} className="center-block" alt="" />
                  </div>
                  <div className="team-info">
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                  </div>
                                               <div className="team-social-icon">
                                {/* <a href={'https://t.me/'+item.telegramslug}><i className="fa fa-telegram"></i></a> */}
                                {/* <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-skype"></i></a> */}
                            </div> 
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default SecTeam
