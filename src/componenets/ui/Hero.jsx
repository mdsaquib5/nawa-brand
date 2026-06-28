"use client";
import Link from "next/link";
import { GiFlowers } from "react-icons/gi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const Hero = () => {
    const banners = [
        {
            title: "Everyday grace, embroidered by hand.",
            subtitle: "Soft white thread, elegant necklines, and breathable fabrics.",
            bgImage: "/banners/banner1.png"
        },
        {
            title: "The Odisha Edit: Woven Heritage",
            subtitle: "Experience Sambalpuri Ikat and Kotpad artistry in everyday wear.",
            bgImage: "/banners/banner2.png"
        }
    ];

    return (
        <div className="hero-section">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="hero-swiper"
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index}>
                        <div 
                            className="hero-slide" 
                            style={{ backgroundImage: `url(${banner.bgImage})` }}
                        >
                            {/* Glossy Overlay */}
                            <div className="hero-overlay"></div>
                            
                            <div className="container hero-container">
                                <div className="hero-content">
                                    <div className="hero-sub">
                                        <GiFlowers size={20} /> Handcrafted Everyday Grace
                                    </div>
                                    <h1 className="hero-heading">
                                        {banner.title}
                                    </h1>
                                    <p className="hero-desc">
                                        {banner.subtitle}
                                    </p>
                                    <div className="hero-buttons">
                                        <Link href={'/'} className="btn btn-primary">
                                            Shop The Edit
                                        </Link>
                                        <Link href={'/'} className="btn btn-outline">
                                            Explore Odisha Craft
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Hero;