import Image from 'next/image';

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
                    width={800}
                    height={400}
                />
            </div>

            <div className="product-info">
                <div className="product-title">{item.title}</div>

                <div className="product-price-container">
                    <div className="price-wrapper">
                        <span className="discounted-price">₹{item.discountedPrice}</span>
                        <span className="original-price">₹{item.originalPrice}</span>
                        <span className="discount-percent">{item.discountPercent}% OFF</span>
                    </div>
                    <button className="view-btn">VIEW</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;