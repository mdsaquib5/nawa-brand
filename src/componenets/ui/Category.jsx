import { BsArrowRight } from "react-icons/bs";
import Titles from "../layout/Tittle";

const Category = () => {
    const categories = [
        {
            id: 1,
            name: "Laal Ishq",
            image: "/nawa-phulkari-cotton-collection/laal-ishq/4.jpg",
        },
        {
            id: 2,
            name: "Neel Bahaar",
            image: "/nawa-phulkari-cotton-collection/neel-bahaar/5.jpg",
        },
        {
            id: 3,
            name: "Peeli dhoop",
            image: "/nawa-phulkari-cotton-collection/peeli-dhoop/1.jpg",
        },
        {
            id: 4,
            name: "Raatrani",
            image: "/nawa-phulkari-cotton-collection/raatrani/3.jpg",
        }
    ];
    return (
        <section>
            <div className="container">
                <Titles subTitle={'Categories'} title={"Shop by Category"} />
                <div className="category-grid">
                    {categories.map((item) => (
                        <div className="category-card" key={item.id}>
                            <div className="category-image-wrapper">
                                <img src={item.image} alt={item.name} className="category-image" />
                            </div>
                            <div className="category-content">
                                <h2 className="category-name">{item.name}</h2>
                                <button className="category-btn">
                                    Shop Now <BsArrowRight className="btn-icon" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Category;