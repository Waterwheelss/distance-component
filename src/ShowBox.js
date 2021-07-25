const ShowBox = ({ text }) => {
  return (
    <div className="distance__showBox">
      <div className="showBox__textContainer">
        {text}
      </div>
      <div className="showBox__placeholder">placeholder</div>
    </div>
  )
}

export default ShowBox;