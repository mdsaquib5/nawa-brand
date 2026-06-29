"use client";
import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products } from '../../contstant/product';
import ProductCard from '../../componenets/shared/ProductCard';
import Titles from '../../componenets/layout/Tittle';
import { PiSlidersLight, PiXLight, PiTrashLight } from 'react-icons/pi';

const ShopContent = () => {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get('category');

    // Filter and Sort states
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [sortBy, setSortBy] = useState('default');
    const [maxPrice, setMaxPrice] = useState(5000); // New price filter state
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    // Initialize category from URL parameter
    useEffect(() => {
        if (categoryParam) {
            setSelectedCategories([categoryParam]);
        }
    }, [categoryParam]);

    // Available values for filters
    const categoriesList = [
        { id: 'festive-wear', label: 'Festive Wear' },
        { id: 'kota-cotton', label: 'Kota Cotton' },
        { id: 'phulkari-cotton', label: 'Phulkari Cotton' }
    ];

    const sizesList = ['S', 'M', 'L', 'XL', 'XXL'];

    // Toggle category selection
    const handleCategoryToggle = (categoryId) => {
        setSelectedCategories(prev =>
            prev.includes(categoryId)
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    // Toggle size selection
    const handleSizeToggle = (size) => {
        setSelectedSizes(prev =>
            prev.includes(size)
                ? prev.filter(s => s !== size)
                : [...prev, size]
        );
    };

    // Reset all filters
    const handleClearAll = () => {
        setSelectedCategories([]);
        setSelectedSizes([]);
        setSortBy('default');
        setMaxPrice(5000);
    };

    // Filter and Sort logic
    const filteredProducts = useMemo(() => {
        let result = [...products];

        // 1. Filter by category
        if (selectedCategories.length > 0) {
            result = result.filter(product => selectedCategories.includes(product.category));
        }

        // 2. Filter by sizes
        if (selectedSizes.length > 0) {
            result = result.filter(product =>
                product.sizes && product.sizes.some(size => selectedSizes.includes(size))
            );
        }

        // 3. Filter by price range
        result = result.filter(product => {
            const price = parseFloat(product.discountedPrice.replace(/,/g, ''));
            return price <= maxPrice;
        });

        // 4. Sorting
        if (sortBy === 'price-asc') {
            result.sort((a, b) => {
                const priceA = parseFloat(a.discountedPrice.replace(/,/g, ''));
                const priceB = parseFloat(b.discountedPrice.replace(/,/g, ''));
                return priceA - priceB;
            });
        } else if (sortBy === 'price-desc') {
            result.sort((a, b) => {
                const priceA = parseFloat(a.discountedPrice.replace(/,/g, ''));
                const priceB = parseFloat(b.discountedPrice.replace(/,/g, ''));
                return priceB - priceA;
            });
        } else if (sortBy === 'discount') {
            result.sort((a, b) => parseFloat(b.discountPercent) - parseFloat(a.discountPercent));
        }

        return result;
    }, [selectedCategories, selectedSizes, sortBy, maxPrice]);

    return (
        <main className="shop-page-section" id="shop-page-wrapper">
            <div className="container">
                <div className="shop-header">
                    <Titles title="Discover NAWA" />
                    <p className="shop-subtitle">Rooted in comfort, culture, and minimalism. Explore our carefully curated collections.</p>
                </div>

                {/* Mobile Filter Toggle & Active Summary */}
                <div className="shop-toolbar">
                    <button 
                        className="mobile-filter-trigger" 
                        onClick={() => setIsMobileFilterOpen(true)}
                        id="mobile-filter-open-btn"
                    >
                        <PiSlidersLight size={20} /> Filter & Sort
                    </button>

                    <div className="products-count">
                        Showing <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'product' : 'products'}
                    </div>

                    <div className="sort-container">
                        <label htmlFor="sort-by-select" className="sort-label">Sort By:</label>
                        <select 
                            id="sort-by-select" 
                            value={sortBy} 
                            onChange={(e) => setSortBy(e.target.value)}
                            className="sort-select"
                        >
                            <option value="default">Featured</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            <option value="discount">Highest Discount</option>
                        </select>
                    </div>
                </div>

                {/* Layout Row */}
                <div className="shop-layout-row">
                    {/* Left Column: Filter Sidebar (Desktop) */}
                    <aside className="shop-sidebar-filters" id="desktop-filters-sidebar">
                        <div className="filter-group">
                            <h3 className="filter-group-title">Collections</h3>
                            <div className="filter-options-list">
                                {categoriesList.map(cat => (
                                    <label key={cat.id} className="filter-checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories.includes(cat.id)}
                                            onChange={() => handleCategoryToggle(cat.id)}
                                            className="filter-checkbox"
                                        />
                                        <span className="checkbox-text">{cat.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="filter-group">
                            <h3 className="filter-group-title">Price: Up to ₹{maxPrice}</h3>
                            <div className="price-slider-container">
                                <input 
                                    type="range" 
                                    min="500" 
                                    max="5000" 
                                    step="100"
                                    value={maxPrice} 
                                    onChange={(e) => setMaxPrice(Number(e.target.value))} 
                                    className="price-range-slider" 
                                />
                                <div className="price-range-labels">
                                    <span>₹500</span>
                                    <span>₹5,000</span>
                                </div>
                            </div>
                        </div>

                        <div className="filter-group">
                            <h3 className="filter-group-title">Sizes</h3>
                            <div className="filter-sizes-grid">
                                {sizesList.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => handleSizeToggle(size)}
                                        className={`filter-size-btn ${selectedSizes.includes(size) ? 'active' : ''}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {(selectedCategories.length > 0 || selectedSizes.length > 0 || sortBy !== 'default') && (
                            <button className="clear-all-filters-btn" onClick={handleClearAll}>
                                <PiTrashLight size={16} /> Clear All Filters
                            </button>
                        )}
                    </aside>

                    {/* Right Column: Products Grid */}
                    <div className="shop-products-column">
                        {/* Active Filters Pills */}
                        {(selectedCategories.length > 0 || selectedSizes.length > 0) && (
                            <div className="active-filters-container">
                                {selectedCategories.map(catId => {
                                    const label = categoriesList.find(c => c.id === catId)?.label;
                                    return (
                                        <span key={catId} className="active-filter-pill">
                                            {label}
                                            <button onClick={() => handleCategoryToggle(catId)} aria-label="Remove filter">
                                                <PiXLight />
                                            </button>
                                        </span>
                                    );
                                })}

                                {selectedSizes.map(size => (
                                    <span key={size} className="active-filter-pill">
                                        Size: {size}
                                        <button onClick={() => handleSizeToggle(size)} aria-label="Remove filter">
                                            <PiXLight />
                                        </button>
                                    </span>
                                ))}

                                <button className="clear-pills-link" onClick={handleClearAll}>
                                    Clear all
                                </button>
                            </div>
                        )}

                        {filteredProducts.length > 0 ? (
                            <div className="shop-product-grid">
                                {filteredProducts.map(product => (
                                    <ProductCard key={product.id} item={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="shop-empty-state">
                                <h3 className="empty-title">No Products Found</h3>
                                <p className="empty-desc">We couldn&apos;t find any products matching your selected filters. Try adjusting your preferences.</p>
                                <button className="btn btn-primary" onClick={handleClearAll}>
                                    Reset All Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Filter Drawer */}
            <div className={`mobile-filter-drawer ${isMobileFilterOpen ? 'drawer-open' : ''}`} id="mobile-filter-drawer">
                <div className="drawer-header">
                    <h3 className="drawer-title">Filter & Sort</h3>
                    <button 
                        className="drawer-close-btn" 
                        onClick={() => setIsMobileFilterOpen(false)}
                        id="mobile-filter-close-btn"
                        aria-label="Close filters"
                    >
                        <PiXLight size={20} />
                    </button>
                </div>

                <div className="drawer-content">
                    {/* Sort in Drawer */}
                    <div className="drawer-filter-group">
                        <h4 className="drawer-group-title">Sort By</h4>
                        <div className="drawer-sort-options">
                            {[
                                { id: 'default', label: 'Featured' },
                                { id: 'price-asc', label: 'Price: Low to High' },
                                { id: 'price-desc', label: 'Price: High to Low' },
                                { id: 'discount', label: 'Highest Discount' }
                            ].map(opt => (
                                <button
                                    key={opt.id}
                                    className={`drawer-sort-btn ${sortBy === opt.id ? 'active' : ''}`}
                                    onClick={() => setSortBy(opt.id)}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Category in Drawer */}
                    <div className="drawer-filter-group">
                        <h4 className="drawer-group-title">Collections</h4>
                        <div className="drawer-options-list">
                            {categoriesList.map(cat => (
                                <label key={cat.id} className="drawer-checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(cat.id)}
                                        onChange={() => handleCategoryToggle(cat.id)}
                                        className="filter-checkbox"
                                    />
                                    <span className="checkbox-text">{cat.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Price Range in Drawer */}
                    <div className="drawer-filter-group">
                        <h4 className="drawer-group-title">Price: Up to ₹{maxPrice}</h4>
                        <div className="price-slider-container">
                            <input 
                                type="range" 
                                min="500" 
                                max="5000" 
                                step="100"
                                value={maxPrice} 
                                onChange={(e) => setMaxPrice(Number(e.target.value))} 
                                className="price-range-slider drawer-slider" 
                            />
                            <div className="price-range-labels">
                                <span>₹500</span>
                                <span>₹5,000</span>
                            </div>
                        </div>
                    </div>

                    {/* Size in Drawer */}
                    <div className="drawer-filter-group">
                        <h4 className="drawer-group-title">Sizes</h4>
                        <div className="filter-sizes-grid">
                            {sizesList.map(size => (
                                <button
                                    key={size}
                                    onClick={() => handleSizeToggle(size)}
                                    className={`filter-size-btn ${selectedSizes.includes(size) ? 'active' : ''}`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="drawer-footer">
                    <button className="drawer-reset-btn" onClick={handleClearAll}>
                        Reset All
                    </button>
                    <button className="drawer-apply-btn" onClick={() => setIsMobileFilterOpen(false)}>
                        Apply Filters ({filteredProducts.length})
                    </button>
                </div>
            </div>
            {/* Drawer Backdrop Overlay */}
            {isMobileFilterOpen && (
                <div 
                    className="drawer-overlay-backdrop" 
                    onClick={() => setIsMobileFilterOpen(false)}
                ></div>
            )}
        </main>
    );
};

const ShopPage = () => {
    return (
        <Suspense fallback={<div className="container" style={{paddingTop: '200px', paddingBottom: '200px', textAlign: 'center', fontFamily: 'var(--font-cinzel)', fontSize: '20px', color: 'var(--primary)'}}>Loading Shop...</div>}>
            <ShopContent />
        </Suspense>
    );
};

export default ShopPage;
