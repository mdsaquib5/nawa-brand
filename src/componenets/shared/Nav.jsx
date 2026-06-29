"use client";
import Link from "next/link";
import { useState } from "react";
import { PiCaretDownThin } from "react-icons/pi";

const Nav = ({ closeDrawer }) => {
    const [openDropdown, setOpenDropdown] = useState(false);

    const toggleDropdown = (e) => {
        e.preventDefault();
        setOpenDropdown(!openDropdown);
    };

    return (
        <nav>
            <ul>
                <li onClick={closeDrawer}><Link href={'/'}>Shop</Link></li>
                <li className={`dropdown ${openDropdown ? 'open' : ''}`}>
                    <Link href={'/'} onClick={toggleDropdown} className="dropdown-toggle">
                        Collections <PiCaretDownThin />
                    </Link>
                    <ul className="dropdown-ul">
                        <li onClick={closeDrawer}><Link href={'/'}>Kurta Sets</Link></li>
                        <li onClick={closeDrawer}><Link href={'/'}>Embroidered Suits</Link></li>
                        <li onClick={closeDrawer}><Link href={'/'}>Daily Wear</Link></li>
                    </ul>
                </li>
                <li onClick={closeDrawer}><Link href={'/'}>Festive Edit</Link></li>
                <li onClick={closeDrawer}><Link href={'/contact'}>Contact Us</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;