"use client";
import Image from 'next/image';
import Link from 'next/link';
import { PiShoppingCartThin } from 'react-icons/pi';

const ProductCard = ({ item }) => {
    return (
        <div className="product-card">
            {(item.badge || item.isNew || item.isRestocked) && (
                <div className="product-badge-container">
                    {item.badge && <span className="badge badge-collection">{item.badge}</span>}
                    {item.isNew && <span className="badge badge-new">NEW IN</span>}
                    {item.isRestocked && <span className="badge badge-restocked">RESTOCKED</span>}
                </div>
            )}

            <div className="product-image-wrapper">
                <Image
                    src={item.imageUrl}
                    alt={item.title}
                    className="product-image"
                    fill
                    sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority
                    style={{ objectFit: 'cover' }}
                />

                {/* Hover Overlay */}
                <div className="hover-overlay">
                    <button className="quick-shop-btn">
                        <PiShoppingCartThin size={20} /> Quick Shop
                    </button>
                </div>
            </div>

            <div className="product-info">
                <div className="product-title">{item.title}</div>

                <div className="product-price-container">
                    <span className="discounted-price">₹{item.discountedPrice}</span>
                    <span className="original-price">₹{item.originalPrice}</span>
                    <span className="discount-percent">{item.discountPercent}% OFF</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;