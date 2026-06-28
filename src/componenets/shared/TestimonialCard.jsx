import { CiInstagram } from "react-icons/ci";
import { GiAmpleDress } from "react-icons/gi";
import { LiaFacebookSquare } from "react-icons/lia";

const TestimonialCard = ({ item }) => {
    return (
        <div className={`testimonial-card ${item.isFeatured ? 'featured' : ''}`}>
            {item.isFeatured && (
                <div className="featured-badge">
                    <span>Featured Review</span>
                </div>
            )}

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

                <span className="review-date">{item.date}</span>
            </div>
            <p className="testimonial-comment">"{item.comment}"</p>
            <div className="testimonial-footer">
                <div className="social-share">
                    <div className="share-btn" aria-label="Share on Facebook">
                        <CiInstagram />
                    </div>
                    <div className="share-btn" aria-label="Share on Twitter">
                        <LiaFacebookSquare />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;