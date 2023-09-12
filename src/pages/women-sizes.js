import React, { useState } from 'react';
import Link from 'next/link';
import Footer from './Footer';
import Header from './Header'
export default function Womens() {
    const [selectedButton, setSelectedButton] = useState(null);

    // Define a function to handle button clicks
    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };

    return (
        <>
            <Header />
            <Link className="nav-btn nav-link" href="/Collor">Next</Link>
            <div className='page'>

                <div className='nxtxt'>Available Sizes</div>
                <div className='buttonContainer'>

                    <div className='rectangle'>

                        <div className='rectangle11'>
                        <div className='rectangletxt1'>
                            <div className={selectedButton === 'rectangletxt1' ? 'black' : ''}
                                onClick={() => handleButtonClick('rectangletxt1')}>
                                XS
                            </div>
                        </div>


                        <div className='rectangletxt2'>
                            <div className={selectedButton === 'rectangletxt2' ? 'black' : ''}
                                onClick={() => handleButtonClick('rectangletxt2')}>
                                S
                            </div>
                        </div>


                        <div className='rectangletxt3'>
                            <div className={selectedButton === 'rectangletxt3' ? 'black' : ''}
                                onClick={() => handleButtonClick('rectangletxt3')}>
                                M
                            </div>
                        </div>
                        <div className='rectangletxt4'>
                            <div className={selectedButton === 'rectangletxt4' ? 'black' : ''}
                                onClick={() => handleButtonClick('rectangletxt4')}>
                                L
                            </div>
                        </div>
                        </div>
                        <div className='rectangle12'>
                        <div className='rectangletxt5'>
                            <div className={selectedButton === 'rectangletxt5' ? 'black' : ''}
                                onClick={() => handleButtonClick('rectangletxt5')}>
                                XL
                            </div>
                        </div>
                        <div className='rectangletxt6'>
                            <div className={selectedButton === 'rectangletxt6' ? 'black' : ''}
                                onClick={() => handleButtonClick('rectangletxt6')}>
                                2XL
                            </div>
                        </div>
                        <div className='rectangletxt7'>
                            <div className={selectedButton === 'rectangletxt7' ? 'black' : ''}
                                onClick={() => handleButtonClick('rectangletxt7')}>
                                3XL
                            </div>
                        </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className='size1'>Size Chart</div>
            <img className='chart' src='static/img/image 92.jpg'/>
            <Footer />
        </>
    )
} 