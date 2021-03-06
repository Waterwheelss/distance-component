const MainDotIcon = () => {
  return (
    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <circle cx="16.5" cy="16.5" r="12.5" fill="white" fill-opacity="0.81" />
        <circle cx="16.5" cy="16.5" r="12.5" stroke="black" stroke-opacity="0.2" stroke-width="4" />
        <circle cx="16.5" cy="16.5" r="12.5" stroke="#C4C4C4" stroke-opacity="0.54" stroke-width="4" />
        <circle cx="16.5" cy="16.5" r="12.5" stroke="#1C70F9" stroke-width="4" />
      </g>
      <circle cx="16.5" cy="16.5" r="6.25" fill="#727272" />
      <defs>
        <filter id="filter0_d" x="0" y="0" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>

  )
}

export default MainDotIcon;