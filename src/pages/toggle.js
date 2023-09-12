//This is not the main page for home screen carousel.js is the main page
import React, { useState } from 'react';
import Link from 'next/link';
const ToggleSwitch = () => {
  const [showimgone, setshowimageone] = useState(true)
  const [showimgtwo, setshowimagetwo] = useState(false)
  const onclickone = () => {
    setshowimagetwo(false)
    setshowimageone(true)
  }
  const onclicktwo = () => {
    setshowimagetwo(true)
    setshowimageone(false)
  }
  return (
    <><div className="toggleContainer">
      <label className="toggleSwitch nolabel" onClick={() => { }}>
        <input type="checkbox" />
        <a></a>
        <span>
          <span className="left-span" onClick={onclickone}>Men</span>
          <span className="right-span"  onClick={onclicktwo}>Women</span>
        </span>
      </label>
      <div className='mytxt'>categories
      </div>
      <div className='container'>
        {showimgone ?
          <>
          <Link href="/MenFabric">
          <img className='img12' src="static/img/images1.jpg" />
            <div className='imgtxt'>Shirt</div>
            </Link></> : null}
            
        {showimgtwo ?
          <>
          <Link href="/Fabric">
          <img className='img13' src="static/img/images3.jpg" />
            <div className='imgtxt1'>Kurthi</div>
            </Link>
            </> : null}
      </div>
    </div></>
  );
};
export default ToggleSwitch;
