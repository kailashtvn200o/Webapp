import React from 'react';
import Link from 'next/link';
import Footer from './Footer';
import Header from './Header';

export default function Fabric() {
    return (
        <>
            <Header/>
            <div className='downtxt'>Select your fabric to your choice</div>
            <div className='rectangle'>
            
                <img className='img' src="static/img/new fab.jpg"></img>
                <Link href='/WomensPattern'>
                <div className='cottontxt'>Cotton</div>
                <div className='bottomtxt'>Shop Cotton</div>
                </Link>
            </div>
            <Footer />


        </>
    )
}
