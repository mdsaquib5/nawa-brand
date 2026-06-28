"use client";
import Link from "next/link";
import Logo from "../shared/Logo";
import { GiFlowers } from "react-icons/gi";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-topbar">
                    <div className="footer-brand">
                        <div className="footer-logo-wrapper">
                            <Logo />
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-title"><GiFlowers /> Shop Category</div>
                        <ul className="footer-ul">
                            <li><Link href={'/'} className="footer-link">Embroidered Suits</Link></li>
                            <li><Link href={'/'} className="footer-link">Kurta Sets</Link></li>
                            <li><Link href={'/'} className="footer-link">Co-ord Sets</Link></li>
                            <li><Link href={'/'} className="footer-link">The Odisha Edit</Link></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <div className="footer-title"><GiFlowers /> Quick Links</div>
                        <ul className="footer-ul">
                            <li><Link href={'/'} className="footer-link">Our Story</Link></li>
                            <li><Link href={'/'} className="footer-link">About Nawa</Link></li>
                            <li><Link href={'/'} className="footer-link">Testimonials</Link></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <div className="footer-title"><GiFlowers /> Customer Support</div>
                        <ul className="footer-ul">
                            <li><Link href={'/'} className="footer-link">Contact Us</Link></li>
                            <li><Link href={'/'} className="footer-link">Shipping Information</Link></li>
                            <li><Link href={'/'} className="footer-link">Return Policy</Link></li>
                            <li><Link href={'/'} className="footer-link">FAQs</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottombar">
                    <p>© 2026 Nawa. Crafted with everyday grace.</p>
                    <div className="linking">
                        <Link href={'/'} className="bottom-link">Privacy Policy</Link>
                        <Link href={'/'} className="bottom-link">Terms & Conditions</Link>
                    </div>
                    <div className="signature">
                        Developed by <Link href={'http://noohark.com'} target="_blank" className="dev-link">Noohark</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;