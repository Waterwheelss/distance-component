import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks';
import { CSSTransition } from 'react-transition-group';
import LineTo from 'react-lineto';
import Dot from './Dot';
import ShowBox from './ShowBox';
import Arrow from './Arrow'

const data = [
  {
    name: '碧澄三期',
    text: '15',
    drive: '5',
  },
  {
    name: '捷運新店總站',
    text: '2.6',
    drive: '5',
  },
  {
    name: '碧潭風景區',
    text: '2.8',
    drive: '5',
  },
  {
    name: '小碧潭商圈',
    text: '3.7',
    drive: '6',
  },
  {
    name: '國道三號<br>新店交流道',
    text: '4',
    drive: '10',
  },
  {
    name: 'Costco中和店',
    text: '10',
    drive: '12',
  },
  {
    name: '慈濟醫院',
    text: '6',
    drive: '13',
  },
  {
    name: '敦南商圈',
    text: '12',
    drive: '15',
  },
  {
    name: '公館夜市',
    text: '9',
    drive: '15',
  },
  {
    name: '信義商圈',
    text: '13',
    drive: '20',
  },
  {
    name: '台北車站',
    text: '14',
    drive: '22',
  },
]

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [offsets, setOffsets] = useState(null);

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
    if (isActive) {
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
            <ShowBox text={data[isActive] ? data[isActive].text + ' km | ' + data[isActive].drive + '分鐘' : ''} />
          </CSSTransition>
          <button className="distance__arrowButton" onClick={() => setIsActive(false)}>
            <Arrow />
          </button>
        </div>
      </div>
      <LineTo from="distance__dot--main" to="distance__dot--last" borderColor="#000" borderWidth={2} within="custom-banner" className="distance-component__lineto" />
    </>
  );
}