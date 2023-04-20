const Li_A = ({nameIco,hreference}) => <li><a href={hreference}><i className={nameIco} aria-hidden="true"></i></a></li>

const SecHorizSocial = ({data}) => {

  return (

    <div className="socialhorizontalholder">
        <ul id="socialhoriz">
            {data && data.map((item , key) => (
                    <Li_A nameIco={item.nameIco}  hreference={item.linkref}/>
                ))
            }
        </ul>                  
    </div>
  );
}

export default SecHorizSocial;