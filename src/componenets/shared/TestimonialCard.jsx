import { CiInstagram } from "react-icons/ci";
import { LiaFacebookSquare } from "react-icons/lia";
import { PiStarFill } from "react-icons/pi";

const TestimonialCard = ({ item }) => {
    return (
        <div className={`testimonial-card ${item.isFeatured ? 'featured' : ''}`}>
            {item.isFeatured && (
                <div className="featured-badge">
                    Featured Review
                </div>
            )}

            <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                    <PiStarFill key={i} />
                ))}
            </div>

            <p className="testimonial-comment">&ldquo;{item.comment}&rdquo;</p>

            <div className="testimonial-header">
                <div className="avatar-wrapper">
                    <img
                        src={item.avatar || '/default-avatar.jpg'}
                        alt={item.name}
                        className="avatar"
                    />
                </div>

                <div className="user-info">
                    <h4 className="user-name">{item.name}</h4>
                    <p className="user-location">{item.location}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;