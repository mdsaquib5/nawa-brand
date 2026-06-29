"use client";
import Link from "next/link";
import { useState } from "react";
import { PiCaretDownThin } from "react-icons/pi";
import { useTranslation } from "../../context/LanguageContext";

const Nav = ({ closeDrawer }) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const { t } = useTranslation();

    const toggleDropdown = (e) => {
        e.preventDefault();
        setOpenDropdown(!openDropdown);
    };

    return (
        <nav>
            <ul>
                <li onClick={closeDrawer}><Link href={'/shop'}>{t("header.shop")}</Link></li>
                <li className={`dropdown ${openDropdown ? 'open' : ''}`}>
                    <Link href={'/'} onClick={toggleDropdown} className="dropdown-toggle">
                        {t("header.collections")} <PiCaretDownThin />
                    </Link>
                    <ul className="dropdown-ul">
                        <li onClick={closeDrawer}><Link href={'/shop'}>{t("header.kurta_sets")}</Link></li>
                        <li onClick={closeDrawer}><Link href={'/shop'}>{t("header.embroidered_suits")}</Link></li>
                        <li onClick={closeDrawer}><Link href={'/shop'}>{t("header.daily_wear")}</Link></li>
                    </ul>
                </li>
                <li onClick={closeDrawer}><Link href={'/shop'}>{t("header.festive_edit")}</Link></li>
                <li onClick={closeDrawer}><Link href={'/contact'}>{t("header.contact_us")}</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;