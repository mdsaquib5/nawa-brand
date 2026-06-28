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
        <div className="hero-section nawa-hero-section">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="nawa-hero-swiper"
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index}>
                        <div 
                            className="hero-slide nawa-hero-slide" 
                            style={{ backgroundImage: `url(${banner.bgImage})` }}
                        >
                            {/* Glossy Overlay */}
                            <div className="nawa-hero-overlay"></div>
                            
                            <div className="container nawa-hero-container">
                                <div className="hero-content nawa-hero-content">
                                    <div className="hero-sub nawa-hero-sub">
                                        <GiFlowers size={20} /> Handcrafted Everyday Grace
                                    </div>
                                    <h1 className="hero-heading nawa-hero-heading">
                                        {banner.title}
                                    </h1>
                                    <p className="nawa-hero-desc">
                                        {banner.subtitle}
                                    </p>
                                    <div className="nawa-hero-buttons">
                                        <Link href={'/'} className="btn nawa-btn-primary">
                                            Shop The Edit
                                        </Link>
                                        <Link href={'/'} className="btn nawa-btn-outline">
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