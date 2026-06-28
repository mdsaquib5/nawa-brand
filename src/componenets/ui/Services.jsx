import { TfiTruck } from "react-icons/tfi";
import { FiFeather, FiScissors, FiRotateCcw } from "react-icons/fi";

const Services = () => {
    const services = [
        {
            icon: <TfiTruck size={28} />,
            title: "Pan-India Free Shipping",
            desc: "On orders above ₹1,499"
        },
        {
            icon: <FiFeather size={28} />,
            title: "Lightweight & Breathable",
            desc: "Comfort for everyday wear"
        },
        {
            icon: <FiScissors size={28} />,
            title: "Hand-Embroidered",
            desc: "By regional Odisha artisans"
        },
        {
            icon: <FiRotateCcw size={28} />,
            title: "Easy 7-Day Refund",
            desc: "No questions asked policy"
        }
    ];
    return (
        <section className="service-bg nawa-service-section">
            <div className="container">
                <div className="services-grid nawa-services-grid">
                    {services.map((service, index) => (
                        <div className="service-card nawa-service-card" key={index}>
                            <div className="service-icon nawa-service-icon">{service.icon}</div>
                            <h3 className="service-title nawa-service-title">{service.title}</h3>
                            <p className="nawa-service-desc">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;