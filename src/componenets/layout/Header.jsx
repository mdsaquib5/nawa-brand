"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../shared/Logo";
import Nav from "../shared/Nav";
import { PiUserFocusThin, PiListThin, PiXThin } from "react-icons/pi";
import { PiShoppingCartLight, PiPhoneCallThin } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { CiInstagram } from "react-icons/ci";
import { LiaFacebookSquare } from "react-icons/lia"

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
            <div className="top-bar nawa-top-bar">
                <div className="container">
                    <div className="topbar-flex">
                        <div className="num-email">
                            <div className="num">
                                <PiPhoneCallThin />
                                <Link href={'tel:+919078199297'} className="nawa-topbar-link">+91 9078199297</Link>
                            </div>
                            <div className="email nawa-email">
                                <TfiEmail />
                                <Link href={'mailto:info@gmail.com'} className="nawa-topbar-link">info@gmail.com</Link>
                            </div>
                        </div>
                        <div className="topbar-text nawa-topbar-text">Enjoy Free Shipping on Orders Above ₹1,499</div>
                        <div className="topbar-media nawa-topbar-media">
                            <Link href={'/'} className="nawa-topbar-icon"><CiInstagram /></Link>
                            <Link href={'/'} className="nawa-topbar-icon"><LiaFacebookSquare /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`main-header ${scrolled ? "glass-panel shrink" : ""}`}>
                <div className="container">
                    <div className="header-flex">
                        <div className="mobile-toggle" onClick={toggleDrawer}>
                            <PiListThin size={26} />
                        </div>
                        <div className={`menu ${drawerOpen ? "drawer-open" : ""}`}>
                            <div className="nawa-drawer-close-container" onClick={() => setDrawerOpen(false)}>
                                <PiXThin size={26} className="mobile-drawer-close" />
                            </div>
                            <Nav closeDrawer={() => setDrawerOpen(false)} />
                        </div>
                        <div className="logo"><Logo /></div>
                        <div className="karing">
                            <div className="karing-flex">
                                <button><PiUserFocusThin size={24} /></button>
                                <Link href={'/'}><PiShoppingCartLight size={24} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;