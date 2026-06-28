"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../shared/Logo";
import Nav from "../shared/Nav";
import { PiListThin, PiXThin } from "react-icons/pi";
import { PiShoppingCartLight, PiPhoneCallThin } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDrawer = () => setDrawerOpen(!drawerOpen);

    return (
        <header className={scrolled ? "header-scrolled" : ""}>
            <div className="top-bar">
                <div className="container">
                    <div className="topbar-flex">
                        <div className="num-email">
                            <div className="num">
                                <PiPhoneCallThin />
                                <Link href={'tel:+919821917346'} className="topbar-link">+91 9821917346</Link>
                            </div>
                        </div>
                        <div className="topbar-text">Enjoy Free Shipping on Orders Above ₹1,499</div>
                        <div className="topbar-media">
                            <Link href={'https://www.instagram.com/nawaofficials'} target="_blank"><CiInstagram /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`main-header ${scrolled ? "scrollto" : ""}`}>
                <div className="container">
                    <div className="header-flex">
                        <button className="mobile-toggle" onClick={toggleDrawer}>
                             <PiListThin size={26} />
                        </button>
                        <div className={`menu ${drawerOpen ? "drawer-open" : ""}`}>
                            <div className="drawer-close-container" onClick={() => setDrawerOpen(false)}>
                                <PiXThin size={26} className="mobile-drawer-close" />
                            </div>
                            <Nav closeDrawer={() => setDrawerOpen(false)} />
                        </div>
                        <div className="logo"><Logo /></div>
                        <div className="karing">
                            <div className="karing-flex">
                                {/* <button><PiUserFocusThin size={24} /></button> */}
                                <Link href={'/'}><PiShoppingCartLight size={24} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header;