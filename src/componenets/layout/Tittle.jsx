import { GiFlowers } from "react-icons/gi";

const Titles = ({ title, subTitle }) => {
    return (
        <div className="section-title nawa-title">
            {subTitle && (
                <div className="sub-title nawa-sub-title">
                    <GiFlowers /> {subTitle} <GiFlowers />
                </div>
            )}
            <h2 className="heading nawa-heading">
                {title}
            </h2>
            {!subTitle && (
                <div className="bottom-style nawa-bottom-style">
                    <span className="nawa-bottom-line"></span>
                    <GiFlowers size={20} />
                    <span className="nawa-bottom-line"></span>
                </div>
            )}
        </div>
    )
}

export default Titles;