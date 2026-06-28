import Titles from "../layout/Tittle";
import ProductCard from "../shared/ProductCard";
import { products } from "../../contstant/product";

const Product = () => {
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