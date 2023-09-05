import React, { useState, useEffect, useRef } from 'react';
import { FaHome, FaShoppingBag, FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import Link from 'next/link';
export default function SecondaryNavbar({show}) {
   
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownClick = () => {
        setIsDropdownOpen((prevState) => !prevState);
        if (!show) {
            return null;
          }
    };
    return (
        <>

            <div className="dropdown">
                <i className='bx bx-menu' onClick={handleDropdownClick}></i>
                {isDropdownOpen && (
                    <div className="dropdown-content">
                        <div> <Link href="#" className="dropdown-item1">      <FaHome />Home</Link></div>
                        <div><Link href="#" className="dropdown-item2">   <FaShoppingBag />MyOrder</Link></div>
                        <div> <Link href="#" className="dropdown-item3"> <FaShoppingCart />MyCart</Link></div>
                        <div> <Link href="#" className="dropdown-item4">    <FaUserAlt />Profile</Link></div>
                    </div>

                )}
            </div>
            <div className='fronttxt'>THOONI</div>
            <ul className="social-icons">

                <li>

                    <Link href="#home">

                        <FaHome />
                        <span className='icontxt'>  Home</span>
                    </Link>
                </li>

                <li>

                    <Link href="#MyOrder">

                        <FaShoppingBag />
                        <span className='icontxt'>MyOrders</span>
                    </Link>
                </li>
                <li>

                    <Link href="#MyCart">

                        <FaShoppingCart />
                        <span className='icontxt'>MyCart</span>
                    </Link>
                </li>
                <li>

                    <Link href="#MyProfile">

                        <FaUserAlt />
                        <span className='icontxt'>My Profile</span>
                    </Link>
                </li>


            </ul>
        </>
    )
}