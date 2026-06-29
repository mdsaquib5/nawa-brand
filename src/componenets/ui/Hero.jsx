"use client";
import Link from "next/link";
import { GiFlowers } from "react-icons/gi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const Hero = () => {
    const banners = [
        {
            title: "Hand-Embroidered Everyday Grace",
            subtitle: "Lightweight, breathable cotton suits designed for the modern woman.",
            bgImage: "/banners/banner1.png"
        },
        {
            title: "The Kota Cotton Collection",
            subtitle: "Experience the sheer, weightless elegance of timeless Kota cotton fabric.",
            bgImage: "/banners/banner2.png"
        },
        {
            title: "Everyday Wear, Reimagined",
            subtitle: "Salwar suits that feel like home — keeping you comfortable all day.",
            bgImage: "/banners/banner3.png"
        },
        {
            title: "Rooted in Traditional Craft",
            subtitle: "Handpicked designs that tell a story of heritage, culture, and care.",
            bgImage: "/banners/banner4.png"
        },
        {
            title: "Minimalist Indian Silhouettes",
            subtitle: "Clean lines and subtle detailing, keeping it simple and sophisticated.",
            bgImage: "/banners/banner5.png"
        },
        {
            title: "Pure Cotton Comfort",
            subtitle: "Soft, premium fabrics crafted to endure hot summer afternoons.",
            bgImage: "/banners/banner6.png"
        },
        {
            title: "The Art of Single Pieces",
            subtitle: "Unique colors and one-of-a-kind designs. As unique as your story.",
            bgImage: "/banners/banner7.png"
        },
        {
            title: "Timeless Threadwork Details",
            subtitle: "Discover the soft, intricate detailing of artisanal hand embroidery.",
            bgImage: "/banners/banner8.png"
        },
        {
            title: "Conscious & Slow Fashion",
            subtitle: "Wear what has always been ours, styled for the way you live today.",
            bgImage: "/banners/banner9.png"
        },
        {
            title: "The Odisha Weaves Edit",
            subtitle: "Generational thread-craft direct from regional artisans and weavers.",
            bgImage: "/banners/banner10.png"
        },
        {
            title: "Breathable Summer Classics",
            subtitle: "Effortless, premium ensembles that elevate your daily routine.",
            bgImage: "/banners/banner11.png"
        },
        {
            title: "A New Way of Wearing Heritage",
            subtitle: "Salwar suits designed to feel elevated, comfortable, and true to your roots.",
            bgImage: "/banners/new-one.png"
        }
    ];

    return (
        <div className="hero-section">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation]}
                effect="fade"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                navigation={true}
                loop={true}
                className="hero-swiper"
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="hero-slide"
                            style={{ backgroundImage: `url(${banner.bgImage})` }}
                        >
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