const Li_A = ({nameIco,hreference}) => <li><a href={hreference}><i className={nameIco} aria-hidden="true"></i></a></li>

const SecVerticalSocial = ({data}) => {

  return (
    <div className="vertical-social">
        <ul>
            {data && data.map((item , key) => (
                    <Li_A nameIco={item.nameIco}  hreference={item.linkref}/>
                ))
            }
            
        </ul>                  
    </div>
  );
}

export default SecVerticalSocial;