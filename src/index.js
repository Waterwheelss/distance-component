import { render } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import { CSSTransition } from 'react-transition-group';
import LineTo from 'react-lineto';
import Dot from './Dot';
import ShowBox from './ShowBox';
import Arrow from './Arrow'
import './style';

const data = [
  {
    name: '碧澄三期',
    text: '15km',
  },
  {
    name: '台北車站',
    text: '30km'
  },
  {
    name: '台北101',
    text: '45km',
  },
  {
    name: '台北102',
    text: '60km',
  },
  {
    name: '台北103',
    text: '75km',
  },
]

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [isHoverOn, setIsHoverOn] = useState(null);
  const [offsets, setOffsets] = useState(null);
  const dotsOffset = useRef(null);

  useEffect(() => {
    const dots = document.body.querySelectorAll('.distance__dot');
    const dotsOffset = [];
    dots.forEach((dot) => {
      dotsOffset.push(dot.offsetParent.offsetWidth - dot.offsetWidth - dot.offsetLeft);
    })

    setOffsets(dotsOffset);
  }, [])

  const dotStateHandler = (key) => {
    if (isActive) {
      if (isActive === key) {
        return 'active'
      } else {
        return 'inactive'
      }
    }

    return 'default'
  }

  const renderDots = (data) => data.map((dot, key) => {
    const offsetRight = offsets ? offsets[key] : null

    if (key === 0) {
      return <Dot isMain name={dot.name} onClick={onClickHandler(key)} offsetRight={offsetRight} />
    } else if (key === data.length - 1) {
      return <Dot isLast name={dot.name} onClick={onClickHandler(key)} dotState={dotStateHandler(key)} offsetRight={offsetRight} />
    }

    return <Dot name={dot.name} onClick={onClickHandler(key)} dotState={dotStateHandler(key)} offsetRight={offsetRight} />
  })

  const onClickHandler = (key) => {
    if(isActive) {
      return
    }

    return () => setIsActive(key)
  }


  return (
    <>
      <div style={{ marginTop: '100px' }}>
        <div className="distance" style={{ margin: 'auto' }}>
          {renderDots(data)}
          <CSSTransition
            in={isActive}
            timeout={300}
            classNames="showBox"
            unmountOnExit
          >
            <ShowBox text={data[isActive] ? data[isActive].text : ''} />
          </CSSTransition>
          <button className="distance__arrowButton" onClick={() => setIsActive(false)}>
            <Arrow />
          </button>
        </div>
      </div>
      <LineTo from="distance__dot--main" to="distance__dot--last" borderColor="#000" borderWidth={2} />
      {/* {isActive &&
        <LineTo from="distance__dot--main" to="distance__dot--active" borderColor="#1661B4" borderWidth={2} />
      } */}
    </>
  );
}

render(<App />, document.querySelector('#distance-component'))