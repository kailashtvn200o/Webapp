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


                <main>

                    <section className='aboutus1' >
                        <div className='container'>
                            <div className='container11'>
                                About Us
                            </div>
                            <div className='ourstory'>
                                <img className='ourstory1' src="static/img/aboutus1.jpg" />
                            </div>

                            <div className='storyhead'>
                                Our Story
                            </div>

                            <div className='storytxt'>
                                Welcome to Thooni, your ultimate destination for high-quality fashion and lifestyle products. We are passionate about helping you express your unique style and enhancing your everyday life with our carefully curated selection.
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <img className='ourmission' src="static/img/Ourmission.jpg" />
                                </div>
                                <div className="col-md-6">
                                    <div className='missionhead'>
                                        Our Mission
                                    </div>
                                    <div className='missiontxt'>
                                        At Thooni, our mission is to provide you with a seamless online shopping experience that combines convenience, affordability, and style. We believe that fashion and lifestyle choices should be accessible to everyone, regardless of their location or budget. That's why we strive to offer a wide range of products that cater to diverse tastes, ensuring there's something for everyone.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className='curatedhed'>
                                        Curated Selection
                                    </div>
                                    <div className='curatedtxt'>
                                        We understand that finding the perfect fashion and lifestyle items can be overwhelming. That's why our team of experienced buyers meticulously handpick each product, taking into consideration the latest trends, quality, and value for money. From trendy clothing and accessories to home decor and personal care essentials, every item on Thooni reflects our commitment to offering you the best.
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <img className='curatedselection' src="static/img/Curatedselection.jpg" />
                                </div>
                            </div>
                        </div>
                    </section>


                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <img className='customersatisfaction' src="static/img/Customersatisfaction.jpg" />
                                </div>
                                <div className="col-md-6">
                                    <div className='customerhead'>
                                        Customer Satisfaction
                                    </div>
                                    <div className='customertxt'>
                                        Your satisfaction is our top priority. We go the extra mile to ensure that your shopping experience on Thooni is enjoyable and hassle-free. Our user-friendly website is designed to make navigation and product discovery effortless, and our secure payment system ensures that your transactions are safe and protected. If you ever have any questions or need assistance, our dedicated customer support team is always ready to help. We value your feedback and continuously strive to improve our services based on your suggestions.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className='communityhed'>
                                        Community and Inspiration
                                    </div>
                                    <div className='communitytxt'>
                                        Thooni is not just an online store; it's a community of fashion and lifestyle enthusiasts. We believe that style is a form of self-expression and individuality. That's why we aim to inspire and empower you to embrace your unique identity through our diverse range of products and style content.
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <img className='community' src="static/img/Community.jpg" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <img className='connect' src="static/img/Connectwithus.jpg" />
                                </div>
                                <div className="col-md-6">
                                    <div className='connecthead'>
                                        Connect With Us
                                    </div>
                                    <div className='connecttxt'>
                                        Stay connected with us to stay updated on the latest trends, promotions, and exciting offers. Follow us on social media platforms, subscribe to our newsletter, and join our thriving community of like-minded individuals who share a passion for fashion and lifestyle.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <div className="row justify-content-center m-45px-b md-m-25px-b">
                                <div className="col-md-10 col-lg-8 col-xl-7">
                                    <div className="section-title text-center">
                                        <h2 className='addres1'>
                                            Thooni is the brand solely owned by Snyder Looms Private Limited. Thooni's Office is located in Chennai at:
                                            <div className='headding'>Snyder Looms Private Limited:</div>
                                            <p className='ptagge'>
                                                Head Office: 1A, Plot - 105, Door No.31, Firms Nandhana, Vaikasi Street, Chinamaya Nagar, Chennai, India
                                                Email: team@thooni.com.
                                            </p>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className="row">
                                <div className="col-md-10 col-lg-8 col-xl-7">
                                    <div className="thankyou">
                                        <p className='thankyoutxt'>Thank you for choosing Thooni as your trusted partner in style and lifestyle. We look forward to serving you and helping you make every day a fashionable and fulfilling one.</p>
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
                                    <div className="subscribe-box1">
                                        
                                        <Link href="https://apps.apple.com/in/app/thooni/id6452012641"><img className='gplys2' src="../static/img/apple.png" alt="none" /></Link>
                                        <Link href="https://play.google.com/store/apps/details?id=com.thooni.thooni"><img className='gplys3' src="../static/img/google.png"/></Link>
                                    </div>
                                </div>

                            </div>

                            <div className="footer-copy1">
                                <div className="row">
                                <div className='fot' >2023 Thooni.com. All Rights Reserved </div>
                                    <div className='fot5'><Link href="/privacypolicy" className='fot5' > | Privacy</Link> </div>
                                  
                                    <div className='fot6' > <Link href="/termsofservice" className='fot6'  > | Terms of Service</Link> </div>
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



            </div>
        </>
    )
}