import Link from "next/link";
import Logo from "../shared/Logo";
import Nav from "../shared/Nav";
import { PiUserFocusThin } from "react-icons/pi";
import { PiShoppingCartLight, PiPhoneCallThin } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { CiInstagram } from "react-icons/ci";
import { LiaFacebookSquare } from "react-icons/lia"

const Header = () => {
    return (
        <header>
            <div className="top-bar">
                <div className="container">
                    <div className="topbar-flex">
                        <div className="num-email">
                            <div className="num">
                                <PiPhoneCallThin />
                                <Link href={'tel:+919078199297'}>+91 9078199297</Link>
                            </div>
                            <div className="email">
                                <TfiEmail />
                                <Link href={'mailto:info@gmail.com'}>info@gmail.com</Link>
                            </div>
                        </div>
                        <div className="topbar-text">Enjoy Free Shipping on Orders Above ₹1,499</div>
                        <div className="topbar-media">
                            <Link href={'/'}><CiInstagram /></Link>
                            <Link href={'/'}><LiaFacebookSquare /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-header">
                <div className="container">
                    <div className="header-flex">
                        <div className="menu"><Nav /></div>
                        <div className="logo"><Logo /></div>
                        <div className="karing">
                            <div className="karing-flex">
                                <button><PiUserFocusThin /></button>
                                <Link href={'/'}><PiShoppingCartLight /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;