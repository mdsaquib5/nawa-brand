import Titles from "../layout/Tittle";
import ProductCard from "../shared/ProductCard";

const Product = () => {
    const products = [
        {
            id: 1,
            title: "White Full-Sleeve Embroidered Top",
            discountedPrice: "1,299",
            originalPrice: "1,999",
            discountPercent: "28",
            isNew: true,
            imageUrl: "/products/laal-ishq/3.jpg"
        },
        {
            id: 2,
            title: "Red Embroidery Salwar Suit",
            discountedPrice: "2,149",
            originalPrice: "2,599",
            discountPercent: "17",
            isRestocked: true,
            imageUrl: "/products/neel-bahaar/1.jpg"
        },
        {
            id: 3,
            title: "Bombkai-Inspired Suit Set",
            discountedPrice: "2,699",
            originalPrice: "2,999",
            discountPercent: "18",
            badge: "ODISHA EDIT",
            imageUrl: "/products/raatrani/1.jpg"
        },
        {
            id: 4,
            title: "Cotton Office Kurta Set",
            discountedPrice: "1,599",
            originalPrice: "1,999",
            discountPercent: "20",
            isNew: true,
            imageUrl: "/products/neel-bahaar/1.jpg"
        },
        {
            id: 5,
            title: "White Full-Sleeve Embroidered Top",
            discountedPrice: "1,299",
            originalPrice: "1,999",
            discountPercent: "28",
            isNew: true,
            imageUrl: "/products/laal-ishq/3.jpg"
        },
        {
            id: 6,
            title: "Red Embroidery Salwar Suit",
            discountedPrice: "2,149",
            originalPrice: "2,599",
            discountPercent: "17",
            isRestocked: true,
            imageUrl: "/products/neel-bahaar/1.jpg"
        },
        {
            id: 7,
            title: "Bombkai-Inspired Suit Set",
            discountedPrice: "2,699",
            originalPrice: "2,999",
            discountPercent: "18",
            badge: "ODISHA EDIT",
            imageUrl: "/products/raatrani/1.jpg"
        },
        {
            id: 8,
            title: "Cotton Office Kurta Set",
            discountedPrice: "1,599",
            originalPrice: "1,999",
            discountPercent: "20",
            isNew: true,
            imageUrl: "/products/neel-bahaar/1.jpg"
        }
    ];
    return (
        <section className="product-bg">
            <div className="container">
                <Titles title={'Our Products'} />
                <div className="product-grid">
                    {products.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Product;