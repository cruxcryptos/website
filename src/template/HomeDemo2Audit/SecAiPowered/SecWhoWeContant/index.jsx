
import image from './../../../../assets/img/line-blood.png';

const Span = () => <span></span>

const SecWhoWeContant = () => {

  return (
    <div className="col-12 col-lg-6" id='story'>
        <div className="who-we-contant zombie">
          {/* <div className='zombie' data-aos="fade-up" >
            <img src={image} alt="zombie crux"></img>
          </div> */}
            <h4 data-aos="fade-up"><span style={{color:'#E6791B'}}>New</span> Gaming Paradigm</h4>
            <p style={{color:'black'}} data-aos="fade-up"> The game is designed to challenge your skills, your wits and your bravery as you fight against hordes of undead enemies. It's a new paradigm in gaming where players can earn real value while having fun. By holding CRUX tokens, players can participate in the game's token-based economy, earning rewards for their skills and achievements. The value of these tokens is tied to the success of the game, creating a unique symbiotic relationship between players and the game's creators.</p>

        </div>
    </div>
  );
}

export default SecWhoWeContant;