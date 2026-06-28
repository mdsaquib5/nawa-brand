"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { PiTrashThin, PiPlusThin, PiMinusThin, PiShoppingBagThin, PiArrowLeftThin } from 'react-icons/pi';
import { useCartStore } from '../../store/useCartStore';

const CartPage = () => {
    const [mounted, setMounted] = useState(false);
    const cart = useCartStore((state) => state.cart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const updateQuantity = useCartStore((state) => state.updateQuantity);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="cart-loading-container">
                <div className="spinner"></div>
            </div>
        );
    }

    const parsePrice = (priceStr) => {
        return parseFloat(priceStr.replace(/,/g, ''));
    };

    const cartSubtotal = cart.reduce((acc, item) => acc + parsePrice(item.discountedPrice) * item.quantity, 0);
    const shippingFee = cartSubtotal >= 1499 ? 0 : 99;
    const cartTotal = cartSubtotal + shippingFee;

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    if (cart.length === 0) {
        return (
            <div className="cart-empty-container">
                <PiShoppingBagThin size={80} className="empty-cart-icon" />
                <h2>Your Shopping Cart is Empty</h2>
                <p>Add handcrafted threads of Odisha heritage to start your collection.</p>
                <Link href="/" className="btn-primary back-to-shop-btn">
                    <PiArrowLeftThin size={20} /> Back to Shopping
                </Link>
            </div>
        );
    }

    return (
        <section className="cart-page-section">
            <div className="container">
                <h1 className="cart-page-title">Shopping Cart</h1>
                <div className="cart-split-grid">
                    {/* Left Column: Cart Items List */}
                    <div className="cart-items-column">
                        <div className="cart-table-header">
                            <span>Product</span>
                            <span className="text-center">Quantity</span>
                            <span className="text-right">Total</span>
                        </div>

                        <div className="cart-items-list">
                            {cart.map((item) => {
                                const itemPrice = parsePrice(item.discountedPrice);
                                return (
                                    <div key={item.id} className="cart-item-card">
                                        <div className="cart-item-info">
                                            <div className="cart-item-image-wrapper">
                                                <img src={item.imageUrl} alt={item.title} />
                                            </div>
                                            <div className="cart-item-details">
                                                <h3>{item.title}</h3>
                                                <p className="cart-item-price">{formatPrice(itemPrice)}</p>
                                                <button 
                                                    onClick={() => removeFromCart(item.id)} 
                                                    className="cart-item-remove-btn"
                                                    title="Remove item"
                                                >
                                                    <PiTrashThin size={18} /> Remove
                                                </button>
                                            </div>
                                        </div>

                                        <div className="cart-item-quantity">
                                            <div className="qty-selector">
                                                <button 
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    disabled={item.quantity <= 1}
                                                    aria-label="Decrease quantity"
                                                >
                                                    <PiMinusThin size={14} />
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button 
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    aria-label="Increase quantity"
                                                >
                                                    <PiPlusThin size={14} />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="cart-item-total text-right font-semibold text-primary">
                                            {formatPrice(itemPrice * item.quantity)}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <Link href="/" className="continue-shopping-link">
                            <PiArrowLeftThin size={18} /> Continue Shopping
                        </Link>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="cart-summary-column">
                        <div className="cart-summary-card">
                            <h2>Order Summary</h2>
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>{formatPrice(cartSubtotal)}</span>
                            </div>
                            <div className="summary-row">
                                <span>Delivery Fee</span>
                                <span>{shippingFee === 0 ? "FREE" : formatPrice(shippingFee)}</span>
                            </div>
                            {shippingFee > 0 && (
                                <p className="shipping-hint">
                                    Add <strong>{formatPrice(1499 - cartSubtotal)}</strong> more to unlock <strong>FREE SHIPPING</strong>!
                                </p>
                            )}
                            <div className="summary-divider"></div>
                            <div className="summary-row total-row">
                                <span>Total (Incl. Taxes)</span>
                                <span>{formatPrice(cartTotal)}</span>
                            </div>
                            <Link href="/checkout" className="btn-primary checkout-btn">
                                Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartPage;
