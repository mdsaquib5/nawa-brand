import Image from "next/image";

const FounderMessage = () => {
    return (
        <section className="founder-section" id="founder-message-section">
            <div className="container">
                <div className="founder-row">
                    <div className="founder-text-column">
                        <span className="founder-subheading" id="founder-subheading">A NOTE FROM THE FOUNDER</span>
                        <h2 className="founder-heading" id="founder-title">
                            A new way of wearing what has always been ours.
                        </h2>

                        <blockquote className="founder-quote" id="founder-quote">
                            &ldquo;NAWA means &lsquo;A new way of wearing what has always been ours.&rsquo; It was born from a simple thought &mdash; why should something we have grown up wearing ever feel outdated?&rdquo;
                        </blockquote>

                        <div className="founder-paragraphs">
                            <p className="founder-p">
                                Like many women, I have grown up wearing salwar kameez. To me, it has always been more than just clothing. It represents comfort, culture, and familiarity.
                            </p>
                            <p className="founder-p">
                                As I grew older, I realized that many of us still love wearing salwar kameez, but want to feel elevated, not outdated or forced. We want pieces that are stylish and comfortable, while still staying true to our roots.
                            </p>
                            <p className="founder-p">
                                That thought became the inspiration behind <strong>NAWA</strong>.
                            </p>
                            <p className="founder-p">
                                In a world where ready-made outfits have become the norm, I wanted to create something for women who don&apos;t want to compromise on fitting and style. Because sometimes, the most beautiful outfits are the ones we make our own.
                            </p>
                            <p className="founder-p">
                                NAWA is our carefully curated collection, where every piece is personally selected with quality and comfort in mind. We focus on stylish, wearable outfits that feel special while remaining comfortable and minimal.
                            </p>
                            <p className="founder-p">
                                From pure cotton hand embroidery suits to Kota cotton articles, we try to bring pieces that are both trending and timeless.
                            </p>
                            <p className="founder-p">
                                Most of our articles are single pieces with different colours and designs, making every selection unique. Our Kota Cotton collection is an exception, where we bring multiple pieces so that more women can enjoy this beautiful and timeless fabric.
                            </p>
                        </div>
                    </div>

                    <div className="founder-image-column">
                        <div className="founder-image-wrapper">
                            <div className="founder-image-border-decor"></div>
                            <Image
                                src="/brand-image/founder.png"
                                alt="Shadma Naaz, Founder of NAWA"
                                width={550}
                                height={680}
                                className="founder-img"
                                id="founder-main-image"
                                priority
                            />
                            <div className="founder-image-caption">
                                <span className="caption-title">Shadma Naaz</span>
                                <span className="caption-sub">Founder of NAWA</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="founder-values-wrapper" id="founder-values">
                    <div className="founder-values-flex">
                        <div className="value-card" id="value-comfort">
                            <span className="value-number">01</span>
                            <h5 className="value-name">Comfort</h5>
                            <p className="value-desc">Soft, breathable fabrics curated for effortless daily wear.</p>
                        </div>
                        <div className="value-card" id="value-culture">
                            <span className="value-number">02</span>
                            <h5 className="value-name">Culture</h5>
                            <p className="value-desc">Rooted in traditional thread-craft, keeping heritage alive.</p>
                        </div>
                        <div className="value-card" id="value-minimalism">
                            <span className="value-number">03</span>
                            <h5 className="value-name">Minimalism</h5>
                            <p className="value-desc">Clean, simple designs that feel understated and elevated.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderMessage;
