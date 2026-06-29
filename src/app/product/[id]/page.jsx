"use client";
import React, { useState, useEffect, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    PiShoppingCartThin, PiPlusThin, PiMinusThin, PiHouseThin,
    PiCaretRightThin, PiShieldCheckThin, PiTruckThin,
    PiArrowCounterClockwiseThin, PiLockSimpleThin, PiHeartThin,
    PiCaretLeftThin
} from 'react-icons/pi';
import { products } from '../../../contstant/product';
import { useCartStore } from '../../../store/useCartStore';

export default function ProductDetailPage({ params }) {
    // Fix: unwrap params correctly for Next.js 15+ (params is a Promise)
    const resolvedParams = use(params);
    const productId = Number(resolvedParams.id);   // KEY FIX: string → number
    const item = products.find(p => p.id === productId);
    const router = useRouter();
    const addToCart = useCartStore((state) => state.addToCart);

    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);

    useEffect(() => {
        if (item?.sizes?.length) setSelectedSize(item.sizes[0]);
        setSelectedImage(0);
    }, [item]);

    if (!item) {
        return (
            <div className="pdp-not-found">
                <h2>Product Not Found</h2>
                <p>The product you are looking for does not exist or has been removed.</p>
                <Link href="/shop" className="pdp-back-to-shop">Back to Shop</Link>
            </div>
        );
    }

    const images = item.images && item.images.length > 0 ? item.images : [item.imageUrl];

    const handleAddToCart = () => {
        if (!selectedSize && item.sizes?.length > 0) {
            alert('Please select a size.');
            return;
        }
        for (let i = 0; i < quantity; i++) {
            addToCart({ ...item, selectedSize, quantity });
        }
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2500);
    };

    const handleBuyNow = () => {
        if (!selectedSize && item.sizes?.length > 0) {
            alert('Please select a size.');
            return;
        }
        addToCart({ ...item, selectedSize, quantity });
        router.push('/cart');
    };

    const formatCategory = (cat) => {
        if (!cat) return '';
        return cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    };

    const prevImage = () => setSelectedImage(prev => (prev === 0 ? images.length - 1 : prev - 1));
    const nextImage = () => setSelectedImage(prev => (prev === images.length - 1 ? 0 : prev + 1));



    return (
        <div className='product-details-page'>
            <div className='container'>
                <div className="pdp-page">
                    <div className="pdp-breadcrumb">
                        <Link href="/"><PiHouseThin /> Home</Link>
                        <PiCaretRightThin />
                        <Link href="/shop">Shop</Link>
                        <PiCaretRightThin />
                        <Link href={`/shop?category=${item.category}`}>{formatCategory(item.category)}</Link>
                        <PiCaretRightThin />
                        <span>{item.title}</span>
                    </div>

                    {/* Main Product Grid */}
                    <div className="pdp-container">
                        <div className="pdp-grid">
                            {/* ===== LEFT: Image Gallery ===== */}
                            <div className="pdp-gallery">
                                {/* Desktop: Vertical thumbnails */}
                                <div className="pdp-thumbs-vertical">
                                    {images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            className={`pdp-thumb ${selectedImage === idx ? 'active' : ''}`}
                                            onClick={() => setSelectedImage(idx)}
                                        >
                                            <Image src={img} alt={`View ${idx + 1}`} width={80} height={100} className="pdp-image" sizes="80px" quality={100} />
                                        </button>
                                    ))}
                                </div>

                                {/* Main Image */}
                                <div className="pdp-main-image-area">
                                    <div className="pdp-main-image-wrapper">
                                        <Image
                                            src={images[selectedImage]}
                                            alt={item.title}
                                            width={1000}
                                            height={1250}
                                            className="pdp-image"
                                            sizes="(max-width: 768px) 100vw, 55vw"
                                            priority
                                            loading="eager"
                                            quality={100}
                                        />
                                        {images.length > 1 && (
                                            <>
                                                <button className="pdp-nav-btn pdp-nav-prev" onClick={prevImage} aria-label="Previous">
                                                    <PiCaretLeftThin size={22} />
                                                </button>
                                                <button className="pdp-nav-btn pdp-nav-next" onClick={nextImage} aria-label="Next">
                                                    <PiCaretRightThin size={22} />
                                                </button>
                                            </>
                                        )}
                                        {(item.isNew || item.badge || item.isRestocked) && (
                                            <div className="pdp-image-badge">
                                                {item.isNew && <span className="badge badge-new">NEW IN</span>}
                                                {item.badge && <span className="badge badge-collection">{item.badge}</span>}
                                                {item.isRestocked && <span className="badge badge-restocked">RESTOCKED</span>}
                                            </div>
                                        )}
                                    </div>

                                    {/* Mobile: Horizontal thumbnails */}
                                    <div className="pdp-thumbs-horizontal">
                                        {images.map((img, idx) => (
                                            <button
                                                key={idx}
                                                className={`pdp-thumb ${selectedImage === idx ? 'active' : ''}`}
                                                onClick={() => setSelectedImage(idx)}
                                            >
                                                <Image src={img} alt={`View ${idx + 1}`} width={70} height={88} className="pdp-image" sizes="70px" quality={100} />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* ===== RIGHT: Product Details ===== */}
                            <div className="pdp-details">
                                <span className="pdp-brand">NAWA — Officials</span>
                                <h1 className="pdp-title">{item.title}</h1>

                                {/* Price */}
                                <div className="pdp-price-row">
                                    <span className="pdp-price-current">₹{item.discountedPrice}</span>
                                    <span className="pdp-price-original">₹{item.originalPrice}</span>
                                    <span className="pdp-price-save">Save {item.discountPercent}%</span>
                                </div>
                                <p className="pdp-tax-note">Inclusive of all taxes. Free shipping on orders above ₹1,499.</p>

                                <hr className="pdp-divider" />

                                {/* Size Selector */}
                                {item.sizes && item.sizes.length > 0 && (
                                    <div className="pdp-size-section">
                                        <div className="pdp-size-header">
                                            <span className="pdp-label">Select Size</span>
                                        </div>
                                        <div className="pdp-sizes">
                                            {item.sizes.map(size => (
                                                <button
                                                    key={size}
                                                    className={`pdp-size-btn ${selectedSize === size ? 'selected' : ''}`}
                                                    onClick={() => setSelectedSize(size)}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Quantity */}
                                <div className="pdp-qty-section">
                                    <span className="pdp-label">Quantity</span>
                                    <div className="pdp-qty-control">
                                        <button onClick={() => setQuantity(q => Math.max(1, q - 1))} aria-label="Decrease quantity">
                                            <PiMinusThin size={18} />
                                        </button>
                                        <span>{quantity}</span>
                                        <button onClick={() => setQuantity(q => q + 1)} aria-label="Increase quantity">
                                            <PiPlusThin size={18} />
                                        </button>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="pdp-cta-buttons">
                                    <button
                                        className={`pdp-btn-primary ${addedToCart ? 'added' : ''}`}
                                        onClick={handleAddToCart}
                                        disabled={addedToCart}
                                    >
                                        <PiShoppingCartThin size={20} />
                                        {addedToCart ? 'Added to Bag!' : 'Add to Bag'}
                                    </button>
                                    <button className="pdp-btn-secondary" onClick={handleBuyNow}>
                                        Buy Now
                                    </button>
                                </div>



                                {/* Trust Badges */}
                                <div className="pdp-trust-badges">
                                    <div className="pdp-badge-item">
                                        <PiTruckThin size={22} />
                                        <span>Free Shipping</span>
                                    </div>
                                    <div className="pdp-badge-item">
                                        <PiArrowCounterClockwiseThin size={22} />
                                        <span>7-Day Returns</span>
                                    </div>
                                    <div className="pdp-badge-item">
                                        <PiShieldCheckThin size={22} />
                                        <span>Authentic Product</span>
                                    </div>
                                    <div className="pdp-badge-item">
                                        <PiLockSimpleThin size={22} />
                                        <span>Secure Checkout</span>
                                    </div>
                                </div>


                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}
