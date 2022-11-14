const Span = () => <span></span>

const SectionHeading = ({title , text, text2}) => {

  return (
    <div  className="section-heading text-center">
        
        <h2 data-aos="fade-up" data-aos-delay='300'>{title}</h2>
        <p data-aos="fade-up" data-aos-delay='400'>{text}</p>
        <p data-aos="fade-up" data-aos-delay='400'>{text2}</p>
    </div>
  );
}

export default SectionHeading;