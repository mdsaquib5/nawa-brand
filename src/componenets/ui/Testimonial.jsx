// Testimonial.jsx
import Titles from "../layout/Tittle";
import TestimonialCard from "../shared/TestimonialCard";

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "Priya Sharma",
            location: "Mumbai, Maharashtra",
            rating: 5,
            comment: "Absolutely loved the red embroidered salwar suit! The fabric quality is premium and the embroidery work is exquisite. I received so many compliments at the family function. Will definitely order again!",
            date: "2 days ago",
            avatar: "https://bootstrapmade.com/content/demo/Atlas/assets/img/person/person-f-3.webp",
            productName: "Red Embroidery Salwar Suit",
            isVerified: true,
            isFeatured: true
        },
        {
            id: 2,
            name: "Ananya Patel",
            location: "Ahmedabad, Gujarat",
            rating: 4,
            comment: "The bombkai-inspired suit set is beautiful and comfortable. The handloom cotton feels so breathable. Perfect for office wear. Just wish the delivery was a bit faster.",
            date: "1 week ago",
            avatar: "https://bootstrapmade.com/content/demo/Atlas/assets/img/person/person-f-3.webp",
            productName: "Bombkai-Inspired Suit Set",
            isVerified: true
        },
        {
            id: 3,
            name: "Neha Reddy",
            location: "Hyderabad, Telangana",
            rating: 5,
            comment: "The white full-sleeve embroidered top is stunning! The odisha thread craft is visible in every detail. The lightweight fabric makes it perfect for summer weddings.",
            date: "3 weeks ago",
            avatar: "https://bootstrapmade.com/content/demo/Atlas/assets/img/person/person-f-3.webp",
            productName: "White Full-Sleeve Embroidered Top",
            isVerified: true,
            isFeatured: true
        },
        {
            id: 4,
            name: "Sneha Gupta",
            location: "Delhi",
            rating: 5,
            comment: "The cotton office kurta set is my new favorite workwear. The breathable cotton keeps me comfortable all day. Amazing quality at such a reasonable price point.",
            date: "1 month ago",
            avatar: "https://bootstrapmade.com/content/demo/Atlas/assets/img/person/person-f-3.webp",
            productName: "Cotton Office Kurta Set",
            isVerified: true
        },
        {
            id: 5,
            name: "Meera Iyer",
            location: "Chennai, Tamil Nadu",
            rating: 4,
            comment: "Lovely collection of traditional wear with a modern touch. The odisha thread craft pieces are particularly impressive. Would love to see more color options.",
            date: "2 months ago",
            avatar: "https://bootstrapmade.com/content/demo/Atlas/assets/img/person/person-f-3.webp",
            productName: "Odisha Thread Craft Collection",
            isVerified: false
        },
        {
            id: 6,
            name: "Meera Iyer",
            location: "Chennai, Tamil Nadu",
            rating: 4,
            comment: "Lovely collection of traditional wear with a modern touch. The odisha thread craft pieces are particularly impressive. Would love to see more color options.",
            date: "2 months ago",
            avatar: "https://bootstrapmade.com/content/demo/Atlas/assets/img/person/person-f-3.webp",
            productName: "Odisha Thread Craft Collection",
            isVerified: false
        },
        {
            id: 7,
            name: "Sneha Gupta",
            location: "Delhi",
            rating: 5,
            comment: "The cotton office kurta set is my new favorite workwear. The breathable cotton keeps me comfortable all day. Amazing quality at such a reasonable price point.",
            date: "1 month ago",
            avatar: "https://bootstrapmade.com/content/demo/Atlas/assets/img/person/person-f-3.webp",
            productName: "Cotton Office Kurta Set",
            isVerified: true
        },
        {
            id: 8,
            name: "Meera Iyer",
            location: "Chennai, Tamil Nadu",
            rating: 4,
            comment: "Lovely collection of traditional wear with a modern touch. The odisha thread craft pieces are particularly impressive. Would love to see more color options.",
            date: "2 months ago",
            avatar: "https://bootstrapmade.com/content/demo/Atlas/assets/img/person/person-f-3.webp",
            productName: "Odisha Thread Craft Collection",
            isVerified: false
        },
        {
            id: 9,
            name: "Meera Iyer",
            location: "Chennai, Tamil Nadu",
            rating: 4,
            comment: "Lovely collection of traditional wear with a modern touch. The odisha thread craft pieces are particularly impressive. Would love to see more color options.",
            date: "2 months ago",
            avatar: "https://bootstrapmade.com/content/demo/Atlas/assets/img/person/person-f-3.webp",
            productName: "Odisha Thread Craft Collection",
            isVerified: false
        }
    ];

    return (
        <section>
            <div className="container">
                <Titles title={'What Our Customers Say'} />
                <div className="testimonial-grid">
                    {testimonials.map((item) => (
                        <TestimonialCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;