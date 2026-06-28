import Image from "next/image";
import Link from "next/link";

const Brand = () => {
    return (
        <section className="brand-bg">
            <div className="container">
                <div className="brand-row">
                    <div className="brand-content">
                        <div className="brand-content-wrapper">
                            <div className="brand-heading">Bridging Heritage and Everyday Wear</div>
                            <p>Inspired by Odisha's bandha-kala (ikat) and bomkai weavers, we bridge generational thread-craft with lightweight daily wear.</p>
                            <p>Every stitch on a Nawa suit is an ode to the artisans of Odisha. We bring the intricate handiwork of traditional thread-embroidery into your modern weekday routine.</p>
                            <Link href={'/'} className="btn primary-btn">
                                <span>Explore our collections</span>
                                <span>Shop Now</span>
                            </Link>
                        </div>
                    </div>
                    <div className="brand-image-1">
                        <Image src={'/brand-image/1.jpg'} alt="" width={800} height={400} priority />
                    </div>
                    <div className="brand-image-2">
                        <Image src={'/brand-image/4.jpg'} alt="" width={600} height={400} priority />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brand;