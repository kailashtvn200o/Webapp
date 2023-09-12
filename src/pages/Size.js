import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Size() {
    const [selectedButton, setSelectedButton] = useState(null);

    // Define a function to handle button clicks
    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };

    return (
        <>

            <Header />
            <div className='nxtxt'>Available sizes</div>
            <div className='buttonContainer'>

                <div className='rectangle0'>

                    <div className='rectangle1'>
                        <div className='rectangletxt1'>
                            <div className={selectedButton === 'rectangletxt1' ? 'black' : ''}
                                onClick={() => handleButtonClick('rectangletxt1')}>
                                S
                            </div>
                        </div>


                        <div className='rectangletxt2'>
                            <div className={selectedButton === 'rectangletxt2' ? 'black' : ''}
                                onClick={() => handleButtonClick('rectangletxt2')}>
                                M
                            </div>
                        </div>


                        <div className='rectangletxt3'>
                            <div className={selectedButton === 'rectangletxt3' ? 'black' : ''}
                                onClick={() => handleButtonClick('rectangletxt3')}>
                                L
                            </div>
                        </div>
                    </div>

                </div>
                <div className='sizetxt'>
                    Size Chart
                </div>
                <img className='chart' src='static/img/image 92.jpg'/>
            </div>
            <Footer />
        </>


    )
}