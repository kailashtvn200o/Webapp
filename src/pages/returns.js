import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Returns() {

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
                <link href="static/plugin/themify-icons/themify-icons.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
                <link rel="icon" href="favicon.ico" />

                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

            </Head>

            <div className={inter.className}>
                <a href="https://api.whatsapp.com/send?phone=+917358295552&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." className="float1">
                    <i className="fa fa-whatsapp my-float1"></i>
                </a>

                <header>
                    <nav className="navbar header-nav navbar-expand-lg header-nav-light">
                        <div className="container">
                            <Link href="/"><img className='imglogo2' src="static\img\Logo.png"></img></Link>
                            <Link className="navbar-brand" href="/">
                                THOONI
                            </Link>







                            <div className="collapse navbar-collapse justify-content-end" id="navbar">
                                <ul className="navbar-nav ml-auto">
                                    <li><Link className='nav-link1' href="/aboutus">About us</Link></li>
                                    <li><Link className="nav-link1" href="/#Testimonal">Testimonial</Link></li>
                                    <li><Link className="nav-link1" href="/#contatus">Designer Consultation</Link></li>

                                    {/*<li><a className="nav-btn nav-link" href="#">Login</a></li>*/}

                                </ul>
                            </div>

                            <div className="navbar-dropdown">
                                <i className='bx bx-menu' onClick={handleDropdownClick}></i>


                                {isDropdownOpen && (
                                    <div className="dropdown-content">
                                        <div> <Link href="/aboutus" className="dropdown-item">About Us</Link></div>
                                        <div><Link href="/#Testimonal" className="dropdown-item">Testimonial</Link></div>
                                        <div> <Link href="/#contatus" className="dropdown-item">Designer Consultation</Link></div>
                                    </div>

                                )}
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
            <section>
                <div className='container'>
                    <div className='alter'>
                        Alterations and returns
                    </div>
                 
                        <div className='rtrntxt'>
                            We aim for your utmost satisfaction with our clothing, ensuring they accompany you for an extended period with joy. If, for any reason, you discover that your garment does not meet your expectations, you have the option to return it within 45 days of receiving your shipment. We offer alterations or remakes as needed or a full refund to ensure your contentment.
                        </div>
                        <div className='que'>
                        If you have any questions please contact us at team@thooni.com or whatsapp us.
                        </div>
                   
                </div>

            </section>
            <Footer/>
            {/* <footer className="footer-light">
                    <section className="footer-section1">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-lg-5 sm-m-15px-tb md-m-30px-b">
                                    <img className='imglogo2' src="static\img\Logo.png"></img>
                                    <h4 className="font-alt">THOONI</h4>


                                </div>
                                <div className="col-6 col-md-4 col-lg-2 sm-m-15px-tb">
                                    <ul className="fot-link">
                                        <li><Link href="aboutus">About Us</Link></li>
                                        <li><Link href="/#Testimonal">Testimonial</Link></li>
                                    </ul>
                                </div>

                                <div className="col-6 col-md-4 col-lg-2 sm-m-15px-tb">
                                    <ul className="fot-link">
                                        <li><Link href="/#contatus">Designer Consultation</Link></li>
                                        <li><Link href="returns">Alterations and Returns</Link></li>
                                    </ul>
                                </div>

                                <div className="col-md-4 col-lg-3 sm-m-15px-tb">
                                    <p>Click to download our app now</p>
                                    <div className="subscribe-box2">
                                      
                                        <Link href="https://apps.apple.com/in/app/thooni/id6452012641"><img className='gplys4' src="../static/img/apple.png" alt="none" /></Link>
                                        <Link href="https://play.google.com/store/apps/details?id=com.thooni.thooni"><img className='gplys5' src="../static/img/google.png"/></Link>
                              </div>
                                </div>

                            </div>

                            <div className="footer-copy1">
                                <div className="row">
                                    <div className="col-12">
                                    <div className='fot' >2023 Thooni.com. All Rights Reserved </div>
                                    <div className='fot0'><Link href="/privacypolicy" className='fot0' > | Privacy</Link> </div>
                                  
                                    <div className='fot2' > <Link href="/termsofservice"  className='fot2' >| Terms of Service</Link> </div>
                                    </div>
                                    <ul className="social-icons1">
                                        <li><a className="facebook" href="#"><i className="fa fa-facebook-f"></i></a></li>
                                        <li><a className="linkedin" href="#"><i className="fa fa-instagram"></i></a></li>
                                        <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                    </ul>


                                </div>
                            </div>
                        </div>
                    </section>
                </footer>


 */}


        </>
    );
}