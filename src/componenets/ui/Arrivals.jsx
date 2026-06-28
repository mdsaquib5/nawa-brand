import Titles from "../layout/Tittle";
import ProductCard from "../shared/ProductCard";
import { products } from "../../contstant/product";

const Arrivals = () => {
    return (
        <section className="arrival-bg">
            <div className="container">
                <Titles title={'New Arrivals'} />
                <div className="product-grid">
                    {products.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Arrivals;