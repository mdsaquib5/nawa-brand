"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PiShoppingCartThin } from 'react-icons/pi';
import { useCartStore } from '../../store/useCartStore';

const ProductCard = ({ item }) => {
    const router = useRouter();
    const addToCart = useCartStore((state) => state.addToCart);

    const handleQuickShop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(item);
        router.push('/cart');
    };

    const handleViewDetails = (e) => {
        e.preventDefault();
        e.stopPropagation();
        router.push(`/product/${item.id}`);
    };

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
                <Link href={`/product/${item.id}`} className="product-image-link">
                    <Image
                        src={item.imageUrl}
                        alt={item.title}
                        className="product-image"
                        fill
                        sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        priority
                        style={{ objectFit: 'cover' }}
                    />
                </Link>

                {/* Hover Overlay */}
                <div className="hover-overlay">
                    <button className="quick-view-btn" onClick={handleViewDetails}>
                        View Details
                    </button>
                    <button className="quick-shop-btn" onClick={handleQuickShop}>
                        <PiShoppingCartThin size={20} /> Quick Shop
                    </button>
                </div>
            </div>

            <div className="product-info">
                <Link href={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
                    <div className="product-title">{item.title}</div>
                </Link>

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