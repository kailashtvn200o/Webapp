import React from 'react'
import Footer from './Footer';
import Link from 'next/link';
import Header from './Header'
export default function Pattern() {
  return (

    <>
    <Header/>
   
      <div className='downtxt1'>Select any pattern to your choice</div>
      <div>
      <Link href="/Size">
        <img className='image1' src="static/img/image1.jpg" 
      /> </Link>
      <Link href="/Size">
        <img className='image2' src="static/img/image2.jpg"  /></Link>
        <Link href="/Size">
        <img className='image3' src="static/img/image3.jpg"  /></Link>
      </div>
      <div>
        <img className='image4' src="static/img/image4.jpg"  />
        <img className='image5' src="static/img/image5.jpg"  />
        <img className='images6' src="static/img/images6.jpg" />
      </div>
     

      <Footer/>
    </>
  )
}
