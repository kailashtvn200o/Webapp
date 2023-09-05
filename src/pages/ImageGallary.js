import Head from 'next/head';
import React, { useState } from 'react';



const Imagegallery = () => {
    const [showimgone, setshowimageone] = useState(true)
    const [showimgtwo, setshowimagetwo] = useState(false)
    const [showimgthree, setshowimagethree] = useState(false)

    const onclickone = () => {
        setshowimagetwo(false)
        setshowimagethree(false)
        setshowimageone(true)
    }
    const onclicktwo = () => {
        setshowimagetwo(true)
        setshowimagethree(false)
        setshowimageone(false)
    }
    const onclickthree = () => {
        setshowimagethree(true)
        setshowimagetwo(false)
        setshowimageone(false)
    }
    return (
        <>
            <Head>
                <link rel='sty.css' />
            </Head>

                <div className='home-banner-02'>
                    <div className="container">
                        <div className={`row  align-items-center`}>
                            <div className="col col-md-12 col-lg-6 col-xl-6 p-80px-tb md-p-30px-b sm-p-60px-t m-50px-t">
                                <div className="home-text-center p-50px-r md-p-0px-r">
                                    <h2 className="font11">Do you want to be incharge of your own style & fashion</h2>
                                    <div className='malan'>
                                        <ol>

                                            <li className='lii1' onClick={onclickone }>Choose your fabric</li>
                                            <p className='zli1'>Find a fabric that suits your style</p>
                                            <li className='lii2' onClick={onclicktwo}>Provide accurate measurements</li>
                                            <p className='zli2'>Outfit requirments your exact measurements</p>
                                            <li className='lii3' onClick={onclickthree}>We will deliver your outfit to your doorstep</li>
                                            <p className='zli3'>We will deliver your outfit to your doorstep</p>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-6 col-xl-6 home-right m-50px-t md-m-0px-t">
                            
                                <div className='container'>
                                <div className="home-right-inner1">
                                

                                    {showimgone ?
                                        <img className='imgii1' src='static/img/Onclick1.webp' alt="Zone 10" /> : null}
                                    {showimgtwo ?
                                        <img className='imgii1' src='static/img/Onclick2.webp' alt="Zone 10" /> : null}
                                    {showimgthree ?
                                        <img className='imgii1' src='static/img/Onclick3.webp' alt="Zone 10" /> : null}
                                
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>


                </>
                );
};

                export default Imagegallery;
