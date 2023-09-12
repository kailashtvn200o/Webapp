import React from 'react';

//import Images from '../src/Images/new fab.jpg'
import Footer from './Footer';
import Header from './Header';
import Link from 'next/link';

export default function MenFabric() {
    return (
        <>
            <Header/>
            <div className='downtxt'>Select your fabric to your choice</div>
            <div className='rectangle'>
            
                <img className='img' src="static/img/menshirt.jpg"></img>
                <Link href='/Patterns'>
                <div className='cottontxt'>Cotton
                </div>
                <div className='bottomtxt'>Shop Cotton</div>
                </Link>

            </div>
            <Footer />


        </>
    )
}
