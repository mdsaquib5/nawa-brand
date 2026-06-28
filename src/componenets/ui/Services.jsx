import { TfiTruck } from "react-icons/tfi";
import { FiFeather, FiScissors, FiRotateCcw } from "react-icons/fi";

const Services = () => {
    const services = [
        {
            icon: <TfiTruck />,
            title: "Pan-India Free Shipping",
        },
        {
            icon: <FiFeather />,
            title: "Lightweight & Breathable Mulmul",
        },
        {
            icon: <FiScissors />,
            title: "Hand-Embroidered by Regional Artisans",
        },
        {
            icon: <FiRotateCcw />,
            title: "Easy 7-Day Refund Policy",
        }
    ];
    return (
        <section className="service-bg">
            <div className="container">
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;