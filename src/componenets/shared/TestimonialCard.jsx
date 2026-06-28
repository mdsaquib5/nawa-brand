import { CiInstagram } from "react-icons/ci";
import { LiaFacebookSquare } from "react-icons/lia";
import { PiStarFill } from "react-icons/pi";

const TestimonialCard = ({ item }) => {
    return (
        <div className={`testimonial-card nawa-testimonial-card ${item.isFeatured ? 'featured nawa-featured-testimonial' : ''}`}>
            {item.isFeatured && (
                <div className="featured-badge nawa-featured-badge">
                    Featured Review
                </div>
            )}

            <div className="nawa-testimonial-stars">
                {[...Array(5)].map((_, i) => (
                    <PiStarFill key={i} />
                ))}
            </div>

            <p className="testimonial-comment nawa-testimonial-comment">"{item.comment}"</p>

            <div className="testimonial-header nawa-testimonial-header">
                <div className="avatar-wrapper nawa-avatar-wrapper">
                    <img
                        src={item.avatar || '/default-avatar.jpg'}
                        alt={item.name}
                        className="avatar nawa-avatar"
                    />
                </div>

                <div className="user-info nawa-user-info">
                    <h4 className="user-name nawa-user-name">{item.name}</h4>
                    <p className="user-location nawa-user-location">{item.location}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;