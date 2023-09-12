import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModelViewer from './Modelviewer';

export default function Collor() {
    const [showimgone, setshowimageone] = useState(true)
    const [showimgtwo, setshowimagetwo] = useState(false)
    const [showimgthree, setshowimagethree] = useState(false)
    const [showimgfour, setshowimagefour] = useState(false)
    const onclickone = () => {
        setshowimagetwo(false)
        setshowimageone(true)
        setshowimagethree(false)
        setshowimagefour(false)

    }
    const onclicktwo = () => {
        setshowimagetwo(true)
        setshowimageone(false)
        setshowimagethree(false)
        setshowimagefour(false)
    }
    const onclickthree = () => {
        setshowimagetwo(false)
        setshowimageone(false)
        setshowimagethree(true)
        setshowimagefour(false)
    }
    const onclickfour = () => {
        setshowimagetwo(false)
        setshowimageone(false)
        setshowimagethree(false)
        setshowimagefour(true)
    }
    return (
        <>
        <ModelViewer/>
            <div className='rectangle21'>
                <div className='collor' onClick={onclickone}>COLLOR</div>
                <div className='back' onClick={onclicktwo}>BACKS</div>
                <div className='plackets' onClick={onclickthree}>PLACKETS</div>
                <div className='sleeves' onClick={onclickfour}>SLEEVES</div>
            </div>
            <div class="container">
                <div class="row">
                    {showimgone ?
                        <>
                            <div class="col-2">
                                <img className='img1' src="static/img/Group1.jpg" />
                            </div>
                            <div class="col-2">
                                <img className='img2' src="static/img/Group2.jpg" />
                            </div>
                            <div class="col-2">
                                <img className='img3' src="static/img/Group 3.jpg" />
                            </div>
                            <div class="col-2">
                                <img className='img4' src="static/img/Group4.jpg" />
                            </div>
                            <div class="col-2">
                                <img className='img5' src="static/img/Group 5.jpg" />
                            </div>
                            <div class="col-2">
                                <img className='img6' src="static/img/Group6.jpg"/>
                            </div>
                        </> : null}
                    <div class="container">
                        <div class="row">
                            {showimgtwo ?
                                <>
                                    <div class="col-2">
                                        <img className='image1' src="static/img/Darts.jpg" />
                                    </div>
                                    <div class="col-2">
                                        <img className='image2' src="static/img/Deep Darts.jpg" />
                                    </div>
                                    <div class="col-2">
                                        <img className='image3' src="static/img/Side Pleats.jpg" />
                                    </div>
                                    <div class="col-2">
                                        <img className='image4' src="static/img/No Pleats.jpg" />
                                    </div>
                                    <div class="col-2">
                                        <img className='image5' src="static/img/Box Pleats.jpg" />
                                    </div>

                                </> : null}
                            <div class="container">
                                <div class="row">
                                    {showimgthree ?
                                        <>
                                            <div class="col-2">
                                                <img className='imc1' src="static/img/Concealed Placket.jpg" />
                                            </div>
                                            <div class="col-2">
                                                <img className='imc2' src="static/img/French Placket.jpg" />
                                            </div>
                                            <div class="col-2">
                                                <img className='imc3' src="static/img/Regular Placket.jpg" />
                                            </div>
                                        </> : null}
                                </div>
                            </div>
                            <div class="container">
                                <div class="row">
                                    {showimgfour ?
                                        <>
                                            <div class="col-2">
                                                <img className='ime1' src="static/img/Short Sleeves.jpg" />
                                            </div>
                                            <div class="col-2">
                                                <img className='ime2' src="static/img/Long Sleeves.jpg" />
                                            </div>
                                        </> : null}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
