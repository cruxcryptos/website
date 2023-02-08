import ReactPlayer from 'react-player'

const Embedvideo = (props) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={props.url}
        width='100%'
        height='100%'
      />
    </div>
  )
}

const SecVideoArea = ({ img }) => {

  return (
    <div
      className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 extra"
      data-aos="fade-up"
      style={{zIndex:'20'}}
    >
      <Embedvideo url={'https://youtu.be/yKlM2DZaG1I'} />
    </div>
  )
}

export default SecVideoArea
