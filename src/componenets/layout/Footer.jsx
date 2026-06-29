"use client";
import Link from "next/link";
import Logo from "../shared/Logo";
import { GiFlowers } from "react-icons/gi";
import { useTranslation } from "../../context/LanguageContext";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer>
            <div className="container">
                <div className="footer-topbar">
                    <div className="footer-brand">
                        <div className="footer-logo-wrapper">
                            <Logo />
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-title"><GiFlowers /> {t("footer.shop_category")}</div>
                        <ul className="footer-ul">
                            <li><Link href={'/shop'} className="footer-link">{t("footer.embroidered_suits")}</Link></li>
                            <li><Link href={'/shop'} className="footer-link">{t("footer.kurta_sets")}</Link></li>
                            <li><Link href={'/shop'} className="footer-link">{t("footer.the_odisha_edit")}</Link></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <div className="footer-title"><GiFlowers /> {t("footer.quick_links")}</div>
                        <ul className="footer-ul">
                            <li><Link href={'/#handcrafted'} className="footer-link">{t("footer.nawa_handcrafted")}</Link></li>
                            <li><Link href={'/#founder'} className="footer-link">{t("footer.about_nawa")}</Link></li>
                            <li><Link href={'/#testimonials'} className="footer-link">{t("footer.testimonials")}</Link></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <div className="footer-title"><GiFlowers /> {t("footer.customer_support")}</div>
                        <ul className="footer-ul">
                            <li><Link href={'/contact'} className="footer-link">{t("footer.contact_us")}</Link></li>
                            <li><Link href={'/'} className="footer-link">{t("footer.shipping_info")}</Link></li>
                            <li><Link href={'/'} className="footer-link">{t("footer.return_policy")}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottombar">
                    <p>{t("footer.copyright")}</p>
                    <div className="linking">
                        <Link href={'/'} className="bottom-link">{t("footer.privacy_policy")}</Link>
                        <Link href={'/'} className="bottom-link">{t("footer.terms")}</Link>
                    </div>
                    <div className="signature">
                        {t("footer.developed_by")} <Link href={'http://noohArk.com'} target="_blank" className="dev-link">NoohArk</Link>
                    </div>
                </div>

                <div className="bull-text">Nawa Officials</div>
            </div>
        </footer>
    )
}

export default Footer;