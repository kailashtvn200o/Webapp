import Head from 'next/head';
import { Inter } from 'next/font/google';

import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ImageGallery from './ImageGallary';
import Footer from './Footer';






const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    console.log(styles)

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownClick = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };


    return (
        <>
            <Head>

                <title>Design Your Signature Look: Thooni Custom Clothing App</title>

                <meta name="description" content="Design Your Signature Look: Thooni Custom Clothing App" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/Logo.ico" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />



                <link href="static/plugin/font-awesome/css/fontawesome-all.min.css" rel="stylesheet" />
                <link href="static/plugin/themify-icons/themify-icons.css" rel="stylesheet" />


                <link href="static/plugin/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="static/plugin/owl-carousel/css/owl.carousel.min.css" rel="stylesheet" />
                <link href="static/plugin/magnific/magnific-popup.css" rel="stylesheet" />


                <link href="static/css/sty.css" rel="stylesheet" />
                <link href="static/css/color/default.css" rel="stylesheet" id="color_theme" />

                <link rel="icon" href="favicon.ico" />
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>



            </Head>

            <div className={inter.className}>
                <a href="https://api.whatsapp.com/send?phone=+917358295552&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." className="float">
                    <i className="fab fa-whatsapp my-float"></i>
                </a>



                <header>
                    <nav className="navbar header-nav navbar-expand-lg header-nav-light">
                        <div className="container">
                            <img className='imglogo' src="static/img/Logo.png" alt="none" ></img>
                            <a className="navbar-brand">
                                THOONI
                            </a>
                            


                            <div className="collapse navbar-collapse justify-content-end" id="navbar">
                                <ul className="navbar-nav ml-auto">
                                    <li><Link className='nav-link' href="/aboutus">About us</Link></li>
                                    <li><Link className="nav-link" href="#Testimonal">Testimonial</Link></li>
                                    <li><Link className="nav-link" href="#ContactUs">Designer Consultation</Link></li>
                                   <li><Link className="nav-btn nav-link" href="/Login">Login</Link></li>
                                </ul>
                                


                            </div>
                            <div className="navbar-dropdown">
                                    <i className='bx bx-menu' onClick={handleDropdownClick}></i>


                                    {isDropdownOpen && (
                                        <div className="dropdown-content">
                                            <div> <Link href="/aboutus" className="dropdown-item">About Us</Link></div>
                                            <div><Link href="#Testimonal" className="dropdown-item">Testimonial</Link></div>
                                            <div> <Link href="#contatus" className="dropdown-item">Designer Consultation</Link></div>
                                        </div>

                                    )}
                                </div>
                        </div>
                    </nav>

                </header>

                <main>
                    <section id="home1" className="home-banner-01 gray-bg-g ">
                        <div className="container">
                            <div className={`row  align-items-center ${styles.fixBannerHeight1}`}>
                                <div className="col col-md-12 col-lg-6 col-xl-6 p-80px-tb md-p-30px-b sm-p-60px-t m-50px-t">
                                    <div className="home-text-center p-50px-r md-p-0px-r">
                                        <h1 className="font-alt">Perfect fit, home delivered</h1>
                                        <p>Click to download our app now</p>
                                        <div className="subscribe-box2">
                                            <Link href="https://play.google.com/store/apps/details?id=com.thooni.thooni"><img className='gplys0' src="../static/img/google.png"/></Link>
                                            <Link href="https://apps.apple.com/in/app/thooni/id6452012641"><img className='gply' src="../static/img/apple.png" alt="none" /></Link>
                                        </div>
                                    </div>
                                </div> <div className="col-md-12 col-lg-6 col-xl-6 home-right m-50px-t md-m-0px-t">
                                    <div className="font-alt">
                                        <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false} centerMode={true} showStatus={false} showArrows={false}>
                                            <div className={`${styles.bannerImg}`}>
                                                <img src="static/img/i1.webp" alt="none" />

                                            </div>
                                            <div className={`${styles.bannerImg}`}>
                                                <img src="static/img/i2.webp" alt="none" />

                                            </div>
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/****find the right dress section  */}


                    <section id="blog" className="section ">
                        <div className="container">
                            <div className="row justify-content-center m-45px-b md-m-25px-b">
                                <div className="col-md-10 col-lg-8 col-xl-7">
                                    <div className="section-title text-center">



                                        <h2 >All our products are custom made</h2>
                                        <h4>Avoid the hassle of going to your tailor's shop and waiting for a long time to get your dress.Sit back and relax</h4>

                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-3 m-15px-tb">
                                    <div>
                                        <div className="img">
                                            <img src="static/img/model_01.webp" alt="none" />
                                        </div>
                                        <div >
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 m-15px-tb">
                                    <div>
                                        <div className="img">
                                            <img src="static/img/model_02.webp" alt="none" />
                                        </div>
                                        <div >
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 m-15px-tb">
                                    <div>
                                        <div className="img">
                                            <img src="static/img/model_03.webp" alt="none" />
                                        </div>
                                        <div >
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 m-15px-tb">
                                    <div>
                                        <div className="img">
                                            <img src="static/img/model_04.webp" alt="none" />
                                        </div>
                                        <div >
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/*note1*/}
                    <section className='b1'>

                        <ImageGallery />

                    </section>


                    {/**what users say */}

                    <section id='Testimonal' className="section testimonial-section ">
                        <div className="container">
                            <div className="row justify-content-center m-60px-b md-m-40px-b">
                                <div className="col-md-10 col-lg-8 col-xl-7">
                                    <div className="section-title text-center1">
                                        <div className="yogi">What our users say</div>
                                        <div className="title-border"><span className="lg"></span><span className="md"></span><span className="sm"></span></div>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-12">
                                    <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false} centerMode={true} showStatus={false} showArrows={false}>
                                        <div className="testimonial-col">
                                            <div className="say">
                                                <p>The Thooni app is a game-changer for custom clothing! It offers a seamless experience, exceptional quality, and the ability to create unique, personalized garments. Highly recommended!</p>
                                            </div>
                                            <div className="user">
                                                <div className="name">
                                                    <span>Kavya Reddy</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="testimonial-col">
                                            <div className="say">
                                                <p>I'm thrilled with the Thooni app's personalized clothing options. The app is easy to navigate, the materials are high-quality, and the end results are always stylish and unique.</p>
                                            </div>
                                            <div className="user">
                                                <div className="name">
                                                    <span>Nithya Nair </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="testimonial-col">
                                            <div className="say">
                                                <p>Thooni app has revolutionized my wardrobe. The app's seamless design process, excellent customer service, and top-notch garments make it my top choice for custom clothing. Highly recommended!</p>
                                            </div>
                                            <div className="user">
                                                <div className="name">
                                                    <span>Devika Iyer </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="testimonial-col">
                                            <div className="say">
                                                <p>As a fashion enthusiast, the Thooni app has become my secret weapon. It offers endless customization possibilities, outstanding craftsmanship, and delivers garments that truly make a statement.</p>
                                            </div>
                                            <div className="user">
                                                <div className="name">
                                                    <span>Ananya Rao</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="testimonial-col">
                                            <div className="say">
                                                <p>The Thooni app is a hidden gem in the world of fashion. Its wide selection of customizable clothing, attention to detail, and prompt delivery have made it my favorite go-to app.</p>
                                            </div>
                                            <div className="user">
                                                <div className="name">
                                                    <span>Meera Menon</span>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="testimonial-col">
                                            <div className="say">
                                                <p>I can't praise the Thooni app enough! It combines creativity, convenience, and quality seamlessly. With every order, I get custom-made clothing that fits perfectly and reflects my personal style.</p>
                                            </div>
                                            <div className="user">
                                                <div className="name">
                                                    <span>Shalini Rajan</span>
                                                </div>
                                            </div>

                                        </div>
                                    </Carousel>

                                </div>
                            </div>
                        </div>
                    </section>

                    {/**contact us */}

                    <section id="contatus" className="section1">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-4 col-lg-6 m-15px-tb">
                                    <h2>Contact our designer to curate your unique style</h2>
                                    <div className="contact-form m-50px-l md-m-0px-l">

                                        <form className="contactform" method="POST" action="https://formspree.io/f/mnqkawqk">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <div className="form-group">
                                                        <input name="name" type="text" placeholder="Name" className="validate form-control" required="" />
                                                        <span className="input-focus-effect"></span>
                                                    </div>
                                                </div>

                                                <div className="col-md-7">
                                                    <div className="form-group">
                                                        <input type="email" placeholder="Email" name="email" className="validate form-control" required="" />
                                                        <span className="input-focus-effect"></span>
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="form-group">
                                                        <input name="number" type="text" placeholder="Contact" className="validate form-control" required="" />
                                                        <span className="input-focus-effect"></span>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea placeholder="Message" name="message" className="form-control" required=""></textarea>
                                                        <span className="input-focus-effect"></span>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="send">
                                                        <button className="btnsubmit" type='submit'>Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-6 m-15px-tb">
                                    <div className="imgc">
                                        <img className="immgg" src="../static/img/image 19.webp" alt="none" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer/>

                {/* <footer className="footer-light">
                    <section className="footer-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-lg-5 sm-m-15px-tb md-m-30px-b">
                                    <img className='imglogo1' src="static\img\Logo.png" alt="none" ></img>
                                    <h4 className="font-alt">THOONI</h4>


                                </div>
                                <div className="col-6 col-md-4 col-lg-2 sm-m-15px-tb">
                                    <ul className="fot-link">
                                        
                                        <li><a href="aboutus">About Us</a></li>
                                        <li><a href="#Testimonal">Testimonial</a></li>
                                    </ul>
                                </div>

                                <div className="col-6 col-md-4 col-lg-2 sm-m-15px-tb">
                                    <ul className="fot-link">
                                        <li><a href="#contatus">Designer Consultation</a></li>
                                        <li><Link href="returns">Alterations and Returns</Link></li>
                                    </ul>
                                </div>

                                <div className="col-md-4 col-lg-3 sm-m-15px-tb">
                                    <p>Click to download our app now</p>
                                    <div className="subscribe-box1">
                                    <Link href="https://apps.apple.com/in/app/thooni/id6452012641"><img className='gplys' src="../static/img/apple.png" alt="none" /></Link>
                                        <Link href="https://play.google.com/store/apps/details?id=com.thooni.thooni"><img className='gplys1' src="../static/img/google.png"/></Link>
                                    </div>
                                </div>

                            </div>

                            <div className="footer-copy">
                                <div className="row">
                                    <div className="col-12">
                                    <div className='fot' >2023 Thooni.com. All Rights Reserved </div>
                                    <div className='fot7'><Link href="/privacypolicy" className='fot7' > | Privacy</Link> </div>
                                  
                                    <div className='fot8' > <Link href="/termsofservice" className='fot8' >| Terms of Service</Link> </div>
                                    </div>
                                    <ul className="social-icons">
                                        <li><a className="facebook" href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a className="linkedin" href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a className="twitter" href="#"><i className="fab fa-twitter"></i></a></li>
                                    </ul>


                                </div>
                            </div>
                        </div>
                    </section>
                </footer> */}
            </div>
        </>
    )
}
