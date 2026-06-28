import Link from "next/link";
import Logo from "../shared/Logo";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-brand"><Logo /></div>
                <div className="footer-topbar">
                    <div className="footer-links">
                        <div className="footer-title">Shop Category</div>
                        <ul>
                            <li><Link href={'/'}>Embroidered Suits</Link></li>
                            <li><Link href={'/'}>Kurta Sets</Link></li>
                            <li><Link href={'/'}>Co-ord Sets</Link></li>
                            <li><Link href={'/'}>The Odisha Edit</Link></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <div className="footer-title">Quick Links</div>
                        <ul>
                            <li><Link href={'/'}>Our Story</Link></li>
                            <li><Link href={'/'}>About Nawa</Link></li>
                            <li><Link href={'/'}>Co-ord Sets</Link></li>
                            <li><Link href={'/'}>The Odisha Edit</Link></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <div className="footer-title">Customer Support</div>
                        <ul>
                            <li><Link href={'/'}>Contact Us</Link></li>
                            <li><Link href={'/'}>Shipping Information</Link></li>
                            <li><Link href={'/'}>Return Policy</Link></li>
                            <li><Link href={'/'}>FAQs</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottombar">
                    <p>© 2026 Nawa Officials. Crafted with love. All rights reserved.</p>
                    <div className="linking">
                        <Link href={'/'}>Privacy Policy</Link>
                        <Link href={'/'}>Terms & Conditions</Link>
                        <Link href={'/'}>Return</Link>
                    </div>
                    <div className="signature">
                        Developed by
                        <Link href={'http://noohark.com'} target="_blank">Noohark</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;