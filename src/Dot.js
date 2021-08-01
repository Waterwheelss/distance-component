import { createRef } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks'
import DotIcon from './DotIcon'
import MainDotIcon from './MainDotIcon'

const Dot = ({ isMain, isLast, dotState = 'main', name, className = '', onClick, offsetRight = null }) => {
  // const dotRef = useRef(null);
  // const [right, setRight] = useState(null)

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(dotRef);
  //     const offsetRight = dotRef.current.offsetParent.offsetWidth - dotRef.current.offsetWidth - dotRef.current.offsetLeft;
  //     console.log(offsetRight)
  //     setRight(offsetRight)  
  //   }, 100);
  // }, [])

  const getStyle = () => {
    if (offsetRight === null) {
      return {}
    }

    return {
      position: 'absolute',
      opacity: 1,
      right: offsetRight,
      transition: '0.4s'
    }
  }

  return (
    <button style={getStyle()} className={`distance__dot ${dotState}`} onClick={onClick}>
      <span className={`distance__dotIconContainer distance__dot--${dotState} ${isLast ? 'distance__dot--last' : ''} ${isMain ? 'distance__dot--main' : ''} ${className}`}>
        {isMain ?
          <MainDotIcon />
          :
          <DotIcon />
        }
      </span>
      <span className="distance__dotText" dangerouslySetInnerHTML={{__html: name}} />
    </button>
  )
}

export default Dot;