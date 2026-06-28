"use client";
import { BsArrowRight } from "react-icons/bs";
import Titles from "../layout/Tittle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Category = () => {
    const categories = [
        {
            id: 1,
            name: "Laal Ishq",
            image: "/nawa-phulkari-cotton-collection/laal-ishq/4.jpg",
        },
        {
            id: 2,
            name: "Neel Bahaar",
            image: "/nawa-phulkari-cotton-collection/neel-bahaar/5.jpg",
        },
        {
            id: 3,
            name: "Peeli dhoop",
            image: "/nawa-phulkari-cotton-collection/peeli-dhoop/1.jpg",
        },
        {
            id: 4,
            name: "Raatrani",
            image: "/nawa-phulkari-cotton-collection/raatrani/3.jpg",
        },
        {
            id: 5,
            name: "The Odisha Edit",
            image: "/nawa-phulkari-cotton-collection/peeli-dhoop/1.jpg",
        }
    ];

    return (
        <section className="nawa-category-section">
            <div className="container">
                <Titles subTitle={'Collections'} title={"Shop by Category"} />
                
                <div className="nawa-category-swiper-wrapper">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 }
                        }}
                        className="nawa-category-swiper"
                    >
                        {categories.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="category-card nawa-category-card">
                                    <div className="category-image-wrapper nawa-category-image-wrapper">
                                        <img src={item.image} alt={item.name} className="nawa-category-image" />
                                    </div>
                                    <div className="category-content glass-panel nawa-category-content">
                                        <h2 className="category-name nawa-category-name">
                                            {item.name}
                                        </h2>
                                        <button className="category-btn nawa-category-btn">
                                            Shop Now <BsArrowRight />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Category;