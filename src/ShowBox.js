const ShowBox = ({ text }) => {
  return (
    <div className="distance__showBox">
      <div className="showBox__textContainer">
        <span className="showBox__text">{text}</span>
      </div>
    </div>
  )
}

export default ShowBox;