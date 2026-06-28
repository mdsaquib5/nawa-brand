import Link from "next/link";
import { GiFlowers } from "react-icons/gi";

const Hero = () => {
    return (
        <div className="hero-bg">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-sub"><GiFlowers />Handcrafted Everyday Grace</div>
                    <div className="hero-heading">
                        Everyday grace, embroidered by hand.
                    </div>
                    <p>Soft white thread, elegant necklines, and breathable fabrics that breathe through summer. Discover lightweight kurta sets and embroidered suits inspired by Odisha's heritage, made for your everyday weekday routine.</p>
                    <Link href={'/'} className="btn primary-btn">
                        <span>Explore our collections</span>
                        <span>Shop Now</span>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Hero;