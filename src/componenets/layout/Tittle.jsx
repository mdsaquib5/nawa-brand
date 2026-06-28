import { GiFlowers } from "react-icons/gi";

const Titles = ({ title }) => {
    return (
        <div className="section-title">
            <div className="heading">{title}</div>
            <div className="bottom-style"><GiFlowers /></div>
        </div>
    )
}

export default Titles;