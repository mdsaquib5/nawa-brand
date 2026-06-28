import Link from "next/link";

const BrandStory = () => {
    return (
        <section className="brand-story-section">
            <div className="container">
                <div className="story-flex">
                    <div className="story-content">
                        <div className="section-title story-title">
                            <h2 className="heading">Hand-Embroidered Everyday Grace</h2>
                        </div>
                        <p className="story-desc">
                            Rooted in Odisha's rich thread-craft heritage, Nawa brings you lightweight, breathable embroidered suits and kurta sets designed for the modern Indian woman.
                        </p>
                        <p className="story-desc">
                            Whether it's a regular workday or a festive outing, experience the soft white-thread detailing and elegant necklines that make every outfit an expression of accessible premium grace.
                        </p>
                        <Link href="/" className="btn btn-primary">
                            Discover The Odisha Edit
                        </Link>
                    </div>
                    <div className="story-image">
                        <div className="story-image-placeholder">
                            <span className="story-placeholder-text">Odisha Craft</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BrandStory;
