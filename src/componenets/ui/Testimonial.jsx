// Testimonial.jsx
import Titles from "../layout/Tittle";
import TestimonialCard from "../shared/TestimonialCard";

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "Zahir Shaikh",
            location: "Mumbai, Maharashtra",
            rating: 5,
            comment: "Yas delivery mill gaya thank you so much bohat Acha lega wife ko",
            date: "2 days ago",
            avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Zahir+Shaikh",
            productName: "Handloom Cotton Kurta Set",
            isVerified: true,
            isFeatured: true
        },
        {
            id: 2,
            name: "Sifa Ruhi",
            location: "Ranchi, Jharkhand",
            rating: 5,
            comment: "Deliver hogaya aaj dress avi just. Alhamdulillah vdo cal se daikhi accha laga",
            date: "1 week ago",
            avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Sifa+Ruhi",
            productName: "Hand Embroidered Cotton Suit",
            isVerified: true
        },
        {
            id: 3,
            name: "Safia",
            location: "Kolkata, West Bengal",
            rating: 5,
            comment: "Finally Nawa parcel is received..🥳 These two kota cotton dress pieces are amazing 😍",
            date: "3 weeks ago",
            avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Safia",
            productName: "Kota Cotton Dress Pieces",
            isVerified: true,
            isFeatured: true
        },
        {
            id: 4,
            name: "Zainab",
            location: "Lucknow, Uttar Pradesh",
            rating: 5,
            comment: "Dress bohot zyada pyara hai thank you 💗",
            date: "1 month ago",
            avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Zainab",
            productName: "Pure Cotton Hand Embroidery Suit",
            isVerified: true
        },
        {
            id: 5,
            name: "Rinky",
            location: "Patna, Bihar",
            rating: 5,
            comment: "Fits beautifully! Loved the color and hand embroidery. Thank you ❤️",
            date: "1 month ago",
            avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Rinky",
            productName: "Pink Cotton Embroidered Suit",
            isVerified: true
        },
        {
            id: 6,
            name: "Ananya",
            location: "Ahmedabad, Gujarat",
            rating: 5,
            comment: "Fabric is so soft and comfortable. Perfect for office wear. Bhot pyaari stitching and detailing hai.",
            date: "2 months ago",
            avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Ananya",
            productName: "Daily Wear Kurta Set",
            isVerified: true
        },
        {
            id: 7,
            name: "Prerna",
            location: "Delhi NCR",
            rating: 5,
            comment: "Recieved the parcel yesterday, it's very pretty. Quality matches the price. Will buy again!",
            date: "2 months ago",
            avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Prerna",
            productName: "Kota Cotton Suit",
            isVerified: true
        },
        {
            id: 8,
            name: "Tanuja Sen",
            location: "Bhubaneswar, Odisha",
            rating: 5,
            comment: "Nawa's collection is beautiful. Simple, elegant, minimal. Bohot hi sundar embroidery hai.",
            date: "3 months ago",
            avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Tanuja+Sen",
            productName: "Odisha Hand-embroidered Kurta",
            isVerified: true
        },
        {
            id: 9,
            name: "Saba",
            location: "Hyderabad, Telangana",
            rating: 5,
            comment: "The fabric is pure cotton, very soft. The white thread detailing is very elegant. Delivery was fast too, thank you Nawa!",
            date: "3 months ago",
            avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Saba",
            productName: "Lightweight Threadwork Suit",
            isVerified: true
        }
    ];

    return (
        <section id="testimonials">
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