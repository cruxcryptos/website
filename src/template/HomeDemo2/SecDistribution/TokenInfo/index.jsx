const TokenInfo = ({text , title}) => {

  return (
    <div className="token-info">
        <div className="info-wrapper">
            <div className="token-descr-title"> {title}</div>
            <div className="token-descr">{text}</div>
        </div>
    </div>
  );
}

export default TokenInfo;