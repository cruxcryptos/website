
const SingleFAQArea = ({text , ID, answer}) => {

  return (
  	<>
	    <dt className="wave" data-toggle="collapse" data-target={`#${ID}`}>{text}</dt>
	    <dd data-aos="fade-up" id={ID} className="collapse">
	        <p>{answer}</p>
	    </dd>

  	</>
  );
}

export default SingleFAQArea;