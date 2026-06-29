"use client";
import Link from 'next/link';
import { BsArrowRight } from "react-icons/bs";
import Titles from "../layout/Tittle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Category = () => {
    const categories = [
        {
            id: 1,
            name: "Festive Wear",
            slug: "festive-wear",
            image: "/brand-image/1.jpg",
        },
        {
            id: 2,
            name: "Kota Cotton",
            slug: "kota-cotton",
            image: "/products/raatrani/1.jpg",
        },
        {
            id: 3,
            name: "Phulkari Cotton",
            slug: "phulkari-cotton",
            image: "/products/laal-ishq/3.jpg",
        }
    ];

    return (
        <section className="category-section">
            <div className="container">
                <Titles subTitle={'Collections'} title={"Shop by Category"} />
                
                <div className="category-swiper-wrapper">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        navigation={true}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 3 }
                        }}
                        className="category-swiper"
                    >
                        {categories.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Link href={`/shop?category=${item.slug}`} className="category-card-link">
                                    <div className="category-card">
                                        <div className="category-image-wrapper">
                                            <img src={item.image} alt={item.name} className="category-image" />
                                        </div>
                                        <div className="category-content glass-panel">
                                            <h2 className="category-name">
                                                {item.name}
                                            </h2>
                                            <span className="category-btn">
                                                Shop Now <BsArrowRight />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Category;