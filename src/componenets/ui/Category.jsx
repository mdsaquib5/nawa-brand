"use client";
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
            name: "Peeli Dhoop",
            image: "/nawa-phulkari-cotton-collection/peeli-dhoop/1.jpg",
        },
        {
            id: 4,
            name: "Raatrani",
            image: "/nawa-phulkari-cotton-collection/raatrani/3.jpg",
        },
        {
            id: 5,
            name: "Nawa Special",
            image: "/nawa-phulkari-cotton-collection/peeli-dhoop/1.jpg",
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
                            1200: { slidesPerView: 4 }
                        }}
                        className="category-swiper"
                    >
                        {categories.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="category-card">
                                    <div className="category-image-wrapper">
                                        <img src={item.image} alt={item.name} className="category-image" />
                                    </div>
                                    <div className="category-content glass-panel">
                                        <h2 className="category-name">
                                            {item.name}
                                        </h2>
                                        <button className="category-btn">
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