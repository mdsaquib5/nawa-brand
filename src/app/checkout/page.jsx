"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PiArrowLeftThin, PiCheckCircleFill } from 'react-icons/pi';
import { useCartStore } from '../../store/useCartStore';

const CheckoutPage = () => {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const cart = useCartStore((state) => state.cart);
    const clearCart = useCartStore((state) => state.clearCart);

    const [customer, setCustomer] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        state: '',
        pincode: ''
    });

    const [isPlacing, setIsPlacing] = useState(false);
    const [ordered, setOrdered] = useState(false);

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

    if (cart.length === 0 && !ordered) {
        return (
            <div className="cart-empty-container">
                <h2>No items to checkout</h2>
                <p>Your cart is empty. Please add products before checking out.</p>
                <Link href="/" className="btn-primary back-to-shop-btn">
                    Back to Shop
                </Link>
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

    const handleInputChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        setIsPlacing(true);

        let orderItemsText = "";
        cart.forEach((item, index) => {
            const itemPrice = parsePrice(item.discountedPrice);
            orderItemsText += `${index + 1}. *${item.title}* - Qty: ${item.quantity} - ${formatPrice(itemPrice * item.quantity)}\n`;
        });

        const whatsappMessage = `*NEW ORDER - NAWA OFFICIALS*\n` +
            `-----------------------------------------\n` +
            `👤 *Customer Details:*\n` +
            `• Name: ${customer.name}\n` +
            `• Phone: ${customer.phone}\n` +
            `• Email: ${customer.email}\n` +
            `• Address: ${customer.address}, ${customer.city}, ${customer.state} - ${customer.pincode}\n\n` +
            `🛍️ *Order Items:*\n` +
            `${orderItemsText}\n` +
            `💰 *Summary:*\n` +
            `• Subtotal: ${formatPrice(cartSubtotal)}\n` +
            `• Shipping: ${shippingFee === 0 ? "FREE" : formatPrice(shippingFee)}\n` +
            `• *Total Amount:* *${formatPrice(cartTotal)}*\n` +
            `-----------------------------------------\n` +
            `Please confirm my order. Thank you!`;

        const encodedText = encodeURIComponent(whatsappMessage);
        const whatsappNumber = "919821917346";
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

        window.open(whatsappUrl, '_blank');

        setOrdered(true);
        clearCart();
        setIsPlacing(false);
    };

    if (ordered) {
        return (
            <div className="order-success-container">
                <PiCheckCircleFill size={80} className="success-icon" />
                <h2>Order Redirected to WhatsApp!</h2>
                <p>We have redirected you to WhatsApp to place your order. Please send the pre-filled message in WhatsApp to confirm your purchase.</p>
                <p className="order-details-notice">If the WhatsApp window did not open, please click the button below:</p>
                <Link href="/" className="continue-shopping-success-btn">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <section className="checkout-page-section">
            <div className="container">
                <h1 className="checkout-page-title">Checkout</h1>

                <form onSubmit={handlePlaceOrder} className="checkout-split-grid">
                    {/* Left: Customer Info Form */}
                    <div className="checkout-form-column">
                        <h2>Shipping Information</h2>

                        <div className="form-field-group">
                            <label htmlFor="name">Full Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={customer.name}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="form-group-row">
                            <div className="form-field-group">
                                <label htmlFor="phone">WhatsApp Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={customer.phone}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="e.g. +91 98765 43210"
                                />
                            </div>
                            <div className="form-field-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={customer.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div className="form-field-group">
                            <label htmlFor="address">Delivery Address *</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={customer.address}
                                onChange={handleInputChange}
                                required
                                placeholder="House / Flat No., Street, Landmark"
                            />
                        </div>

                        <div className="form-group-row-three">
                            <div className="form-field-group">
                                <label htmlFor="city">City *</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={customer.city}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="City"
                                />
                            </div>
                            <div className="form-field-group">
                                <label htmlFor="state">State *</label>
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    value={customer.state}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="State"
                                />
                            </div>
                            <div className="form-field-group">
                                <label htmlFor="pincode">Pincode *</label>
                                <input
                                    type="text"
                                    id="pincode"
                                    name="pincode"
                                    value={customer.pincode}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="6 digit PIN code"
                                />
                            </div>
                        </div>

                        <div className="payment-method-box">
                            <h3>Payment Method</h3>
                            <div className="payment-option">
                                <input type="radio" id="cod" name="payment" defaultChecked />
                                <label htmlFor="cod">
                                    <strong>Cash on Delivery (COD) / WhatsApp Payment</strong>
                                    <span>Confirm details and complete checkout on WhatsApp with the support team.</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Right: Order Summary & Placement */}
                    <div className="checkout-summary-column">
                        <div className="checkout-summary-card">
                            <h2>Your Order</h2>

                            <div className="checkout-items-preview">
                                {cart.map((item) => {
                                    const itemPrice = parsePrice(item.discountedPrice);
                                    return (
                                        <div key={item.id} className="summary-item-line">
                                            <div className="summary-item-info">
                                                <span className="item-title">{item.title}</span>
                                                <span className="item-qty">x {item.quantity}</span>
                                            </div>
                                            <span className="item-total">{formatPrice(itemPrice * item.quantity)}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="summary-divider"></div>

                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>{formatPrice(cartSubtotal)}</span>
                            </div>
                            <div className="summary-row">
                                <span>Delivery Fee</span>
                                <span>{shippingFee === 0 ? "FREE" : formatPrice(shippingFee)}</span>
                            </div>

                            <div className="summary-divider"></div>

                            <div className="summary-row total-row">
                                <span>Total Amount</span>
                                <span>{formatPrice(cartTotal)}</span>
                            </div>

                            <button
                                type="submit"
                                className="btn-primary place-order-btn"
                                disabled={isPlacing}
                            >
                                {isPlacing ? "Processing..." : "Place Order via WhatsApp"}
                            </button>

                            <Link href="/cart" className="back-to-cart-link">
                                <PiArrowLeftThin size={16} /> Return to Cart
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CheckoutPage;
