"use client";

import { useTranslation } from "../../context/LanguageContext";

const LanguageToggle = () => {
    const { language, toggleLanguage } = useTranslation();

    return (
        <button 
            className={`language-toggle ${language}`} 
            onClick={toggleLanguage}
            aria-label="Toggle language between English and Odia"
        >
            <span className={language === "en" ? "active" : ""}>EN</span>
            <span className="separator">|</span>
            <span className={language === "od" ? "active" : ""}>ଓଡ଼ିଆ</span>
        </button>
    );
};

export default LanguageToggle;
