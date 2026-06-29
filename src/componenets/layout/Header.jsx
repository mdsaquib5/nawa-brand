"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../shared/Logo";
import Nav from "../shared/Nav";
import { PiListThin, PiXThin } from "react-icons/pi";
import { PiShoppingCartLight, PiPhoneCallThin } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";
import { useCartStore } from "../../store/useCartStore";
import { useTranslation } from "../../context/LanguageContext";
import LanguageToggle from "../shared/LanguageToggle";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    
    const cart = useCartStore((state) => state.cart);
    const totalItems = cart ? cart.reduce((acc, item) => acc + item.quantity, 0) : 0;
    
    const { t } = useTranslation();

    useEffect(() => {
        setMounted(true);
    }, []);

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
                        <div className="topbar-text">{t("header.free_shipping")}</div>
                        <div className="topbar-media">
                            <LanguageToggle />
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
                        <div className="logo-wrapper"><Logo /></div>
                        <div className="karing">
                            <div className="karing-flex">
                                {/* <button><PiUserFocusThin size={24} /></button> */}
                                <Link href={'/cart'} className="cart-icon-wrapper">
                                    <PiShoppingCartLight size={24} />
                                    {mounted && totalItems > 0 && (
                                        <span className="cart-badge">{totalItems}</span>
                                    )}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header;