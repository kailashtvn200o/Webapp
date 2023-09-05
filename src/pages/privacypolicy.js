import Head from 'next/head';
import { Inter } from 'next/font/google';

import React, { useState, useEffect, useRef } from 'react';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] })


export default function App() {

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

                                    {/***<li><a className="nav-btn nav-link" href="#">Login</a></li>*/}

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
                <main className='maain'>
                    <section className='privacypolicy1'>

                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className='text0'>
                                        Privacy Policy
                                    </div>

                                    <div className='maintxt'>
                                        Version 1.1


                                    </div>
                                    <div className='firsttxt'>
                                        ‍Last Updated: 21st July, 2023
                                        <div className='subtxt1'>
                                            This privacy policy (Privacy Policy) describes the policies and procedures applicable to the collection, use, disclosure, and protection of Your information shared with Us while You use the Platform, and for the purpose of this Privacy Policy "We", "Us", or "Our" refers to any of the Company or Thooni or both of them, wherever the context so requires and the terms “You”, “Your”, “Yourself” or “User” refer to users of the Platform. We value the trust You place in Us. That is why We maintain reasonable security standards for securing the transactions and Your information.
                                        </div>
                                        <div className='subtxt2'>
                                            This Privacy Policy is an electronic record under the Information Technology Act, 2000, and the rules made thereunder. This Privacy Policy does not require any physical, electronic, or digital signature by Us and has been published in accordance with the provisions of the Information Technology Act, 2000, and the rules made thereunder that require publishing the privacy policy and terms of use on the Platform.
                                        </div>

                                        <div className='subtxt2'>
                                            Please read the Privacy Policy carefully prior to using or registering on the Platform or accessing any material, information, or availing any Services through the Platform.

                                        </div>

                                        <div className='subtxt2'>
                                            This Privacy Policy specifies the manner in which Your information is collected, received, stored, processed, disclosed, transferred, dealt with, or otherwise handled by Us. This Privacy Policy does not apply to information that You provide to, or that is collected by, any third-party through the Platform, and any Third-Party Sites that You access or use in connection with the Services offered on the Platform.
                                        </div>

                                        <div className='subtxt2'>
                                            By visiting the Platform or setting up/creating a user account (Account) on the Platform, You accept and agree to be bound by the terms and conditions of this Privacy Policy and consent to Us collecting, storing, processing, transferring, and sharing information including Your Personal Information (defined below) in accordance with this Privacy Policy.
                                        </div>

                                        <div className='subtxt2'>
                                            Further, in case You are under the age of 18 years, You (i) accept and acknowledge that You are accessing the Platform through a parent or a legal guardian who is of a legal age to form a binding contract under the Indian Contract Act, 1872, and such person has accepted this Privacy Policy on Your behalf to bind You; and (ii) hereby acknowledge that You are accessing this Platform under the supervision of Your parent or legal guardian and have their express permission to use the Services.

                                        </div>

                                        <div className='subtxt2'>
                                            We may update this Privacy Policy to comply with regulatory or administrative requirements. If We make any significant changes to this Privacy Policy, We will endeavor to provide You with reasonable notice of such changes, such as via prominent notice on the Platform or any other communication channels on record. To the extent permitted under applicable law, Your continued use of the Services after We publish or send a notice about the changes to this Privacy Policy shall constitute Your consent to the updated Privacy Policy.

                                        </div>

                                        <div className='subtxt2'>
                                            This Privacy Policy is incorporated into and subject to the terms of use available on the Platform (“Terms”) and shall be read harmoniously and in conjunction with the Terms. All capitalized terms used herein, however not defined under this Privacy Policy, shall have the meaning ascribed to them under the Terms.

                                        </div>

                                        <div className='subtxt2'>
                                            <b>Collection of Information:</b> We collect various information from You when You access or visit the Platform, register, or set up an Account on the Platform or use the Platform. You may browse certain sections of the Platform and the Content without registering an Account on the Platform. However, to avail certain Services on the Platform, You are required to set up an Account on the Platform. This Privacy Policy applies to information(s), as mentioned below and collected about You:

                                        </div>

                                        <div className='subtxt2'>
                                            <b>a. Personal Information:</b> You may provide certain information to Us voluntarily while registering on the Platform for availing Services, including but not limited to Your complete name, mobile number, email address, gender, address details and any other information voluntarily provided through the Platform (“Personal Information”). The act of providing Your Personal Information is voluntary in nature and We hereby agree and acknowledge that We will collect, use, store, transfer, deal with, and share such details in compliance with applicable laws and this Privacy Policy.

                                        </div>

                                        <div className='subtxt2'>
                                            <b>b. Sensitive Personal Information:</b> For the purpose of this Privacy Policy, Sensitive Personal Information consists of information relating to the following:
                                            <p>i. Passwords;</p>
                                            <p>ii. Financial information such as bank account or credit card or debit card or other payment instrument details;</p>
                                            <p>iii. Biometric information;</p>
                                            <p>iv. Any other information that may be regarded as Sensitive Personal Information” as per the prevailing law for the time being in force.</p>

                                        </div>

                                        <div className='subtxt2'>
                                            You may be asked for the payment details to process payments for the Services. You may also be asked to provide certain additional information about Yourself on a case-to-case basis.

                                        </div>

                                        <div className='subtxt2'>
                                            <b>c. Transactional Information:</b> If You choose to avail the Services through the Platform, We will also collect and store information about Your transactions, including transaction status, order history, number of transactions, details, and Your behavior or preferences on the Platform. All transactional information gathered by Us shall be stored on servers, log files, and any other storage system owned by any of Us or by third parties.

                                        </div>
                                        <div className='subtxt2'>
                                            <b>d. Location-based information:</b> When and if You download and/or use Our Platform through Your device, We may receive information about Your location and Your device, including a unique identifier number for Your device, device model, operating systems, versions, software, file names, advertisement identifiers and mobile network information. We may use this information to provide You with location-based Services including but not limited to search results and other personalized content. When You use the Platform through the telecommunication device, we collect Your location data. If You permit the Platform to access Your location through the permission system used by Your mobile operating system, We may also collect the precise location of Your device when the App is running in the foreground or background. We may also derive Your approximate location from Your IP address.
                                        </div>
                                        <div className='subtxt2'>
                                            If you have any questions about this Privacy Policy or the practices of the App, please contact us at team@thooni.com.
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>



                </main>
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
                                     
                                        <Link href="https://apps.apple.com/in/app/thooni/id6452012641"><img className='gplys6' src="../static/img/apple.png" alt="none" /></Link>
                                        <Link href="https://play.google.com/store/apps/details?id=com.thooni.thooni"> <img className='gplys7' src="../static/img/google.png" /></Link>
                                    </div>
                                </div>

                            </div>

                            <div className="footer-copy1">
                                <div className="row">
                                    <div className="col-12">
                                        <div className='fot' >2023 Thooni.com. All Rights Reserved </div>
                                        <div className='fot0'><Link href="/privacypolicy" className='fot0' > | Privacy</Link> </div>

                                        <div className='fot2' > <Link href="/termsofservice" className='fot2' > | Terms of Service</Link> </div>
                                        <ul className="social-icons1">
                                            <li><a className="facebook" href="#"><i className="fa fa-facebook-f"></i></a></li>
                                            <li><a className="linkedin" href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                        </ul>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </footer> */}

            </div>
        </>
    );
}
