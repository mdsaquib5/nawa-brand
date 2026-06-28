"use client";
import Link from "next/link";
import Logo from "../shared/Logo";
import { GiFlowers } from "react-icons/gi";

const Footer = () => {
    return (
        <footer className="nawa-footer">
            <div className="container">
                <div className="footer-topbar nawa-footer-topbar">
                    <div className="footer-brand nawa-footer-brand">
                        <div className="nawa-footer-logo-wrapper">
                            <Logo />
                        </div>
                    </div>

                    <div className="footer-links nawa-footer-links">
                        <div className="footer-title nawa-footer-title"><GiFlowers /> Shop Category</div>
                        <ul className="nawa-footer-ul">
                            <li><Link href={'/'} className="nawa-footer-link">Embroidered Suits</Link></li>
                            <li><Link href={'/'} className="nawa-footer-link">Kurta Sets</Link></li>
                            <li><Link href={'/'} className="nawa-footer-link">Co-ord Sets</Link></li>
                            <li><Link href={'/'} className="nawa-footer-link">The Odisha Edit</Link></li>
                        </ul>
                    </div>
                    <div className="footer-links nawa-footer-links">
                        <div className="footer-title nawa-footer-title"><GiFlowers /> Quick Links</div>
                        <ul className="nawa-footer-ul">
                            <li><Link href={'/'} className="nawa-footer-link">Our Story</Link></li>
                            <li><Link href={'/'} className="nawa-footer-link">About Nawa</Link></li>
                            <li><Link href={'/'} className="nawa-footer-link">Testimonials</Link></li>
                        </ul>
                    </div>
                    <div className="footer-links nawa-footer-links">
                        <div className="footer-title nawa-footer-title"><GiFlowers /> Customer Support</div>
                        <ul className="nawa-footer-ul">
                            <li><Link href={'/'} className="nawa-footer-link">Contact Us</Link></li>
                            <li><Link href={'/'} className="nawa-footer-link">Shipping Information</Link></li>
                            <li><Link href={'/'} className="nawa-footer-link">Return Policy</Link></li>
                            <li><Link href={'/'} className="nawa-footer-link">FAQs</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottombar nawa-footer-bottombar">
                    <p>© 2026 Nawa. Crafted with everyday grace.</p>
                    <div className="linking nawa-footer-linking">
                        <Link href={'/'} className="nawa-bottom-link">Privacy Policy</Link>
                        <Link href={'/'} className="nawa-bottom-link">Terms & Conditions</Link>
                    </div>
                    <div className="signature">
                        Developed by <Link href={'http://noohark.com'} target="_blank" className="nawa-dev-link">Noohark</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;