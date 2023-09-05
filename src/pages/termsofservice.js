import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] })

export default function TermsOfService() {

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
            <section className='service'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className='one'>
                                Thooni App Customization Terms and Conditions:
                            </div>
                            <div className='two'>
                                Fitment issues concerning the order must be reported to the call center at +91 7358295552.
                            </div>
                            <div className='three'>
                                Prices of services and products are subject to change at Thooni's discretion.
                            </div>
                            <div className='four'>
                                Orders will be delivered only after the complete payment is made. Alterations will be processed upon payment of any remaining balance.
                            </div>
                            <div className='five'>
                                By placing an order, customers agree to abide by the terms and conditions, refund policies, payment terms, and other policies stated on www.thooni.com. These policies supersede any mentioned here, and customers are encouraged to refer to the website for any clarifications.
                            </div>
                            <div className='six'>
                                Thooni customizes orders to meet unique requirements and specifications, making refunds inadmissible for most orders.
                            </div>
                            <div className='seven'>
                                Refunds, if applicable, will be processed after the grievance redressal clearance through the customer support team.
                            </div>
                            <div className='eight'>
                                The standard delivery time for normal orders is 7-10 business days, while complex designs may take 15-20 days. Thooni will make efforts to expedite delivery based on order loads, market conditions, and logistical factors beyond direct control.
                            </div>
                            <div className='nine'>
                                The final stitched garment's design may differ from the visual illustration due to the nature of the stitching process. Customers accept this fact for all orders, with Thooni retaining the final decision in such cases.
                            </div>
                            <div className='ten'>
                                Thooni reserves the right to update or modify the terms and conditions without prior notification.
                            </div>
                            <div className='eleven'>
                                There may be variations in the final order price based on additional services, accessories, or fabrics required to meet quality and format standards. Customers will be informed of any changes in order value, and completion will proceed upon customer confirmation.
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
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
                                    
                                    <Link href="https://apps.apple.com/in/app/thooni/id6452012641"><img className='gplys8' src="../static/img/apple.png" alt="none" /></Link>
                                    <Link href="https://play.google.com/store/apps/details?id=com.thooni.thooni"><img className='gplys9' src="../static/img/google.png" /></Link>
                                </div>
                            </div>

                        </div>

                        <div className="footer-copy1">
                            <div className="row">
                                <div className="col-12">
                                <div className='fot' >2023 Thooni.com. All Rights Reserved </div>
                                    <div className='fot0'><Link href="/privacypolicy" className='fot0' > | Privacy</Link> </div>
                                  
                                    <div className='fot2' > <Link href="/termsofservice" className='fot2' >| Terms of Service</Link> </div>
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