import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';


function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-content">
                <div className="footer-logo">
                    <img href='/#' className='Logo' src="../static/img/Logo.png" alt='Logo' />
                    <h4> <Link href='/#' className='Title'>THOONI</Link></h4>
                </div>
                <div className="footer-links">

                    <ul className='first-footer-links'>
                        <li><Link href="aboutus">About Us</Link></li>
                        <li><Link href="/#testimonial">Testimonial</Link></li>
                    </ul>


                    <ul className='second-footer-links'>
                        <li><Link href="/#Contactus">Designer Consultation</Link></li>
                        <li><Link href="returns">Alterations and Returns</Link></li>
                    </ul>

                </div>
                <div className="footer-download">
                    <p>Click to download our app now</p>
                    <div className="download-links">
                        <Link
                            href="https://play.google.com/store/apps/details?id=com.thooni.thooni"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="../static/img/Playstore.png" alt="Google Play Store" />
                        </Link>
                        <Link
                            href="https://apps.apple.com/in/app/thooni/id6452012641"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="../static/img/Appstore.png" alt="Apple App Store" />
                        </Link>
                    </div>
                </div>
            </div>
            <hr />
            <div className='last-links'>
                <div className="footer-copy">
                    <p>© {new Date().getFullYear()} Thooni.com. All Rights Reserved.</p>
                    <div className="footer-links2">
                        <Link href="/privacypolicy">| Privacy</Link>  <Link href="/termsofservice"> | Terms of Service</Link>
                    </div>
                </div>
                <ul className="social-icons">
                    <li><Link href="#Facebook"><FaFacebookF /></Link></li>
                    <li><Link href="#Instagram"><FaInstagram /></Link></li>
                    <li><Link href="#Twitter"><FaTwitter /></Link></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;