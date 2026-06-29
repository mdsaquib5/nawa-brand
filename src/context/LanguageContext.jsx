"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "../locales/en.json";
import od from "../locales/od.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en");

    // Load saved language on mount
    useEffect(() => {
        const savedLanguage = localStorage.getItem("nawa_language");
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    // Toggle language
    const toggleLanguage = () => {
        const newLang = language === "en" ? "od" : "en";
        setLanguage(newLang);
        localStorage.setItem("nawa_language", newLang);
    };

    // Smart Dictionary Lookup (t function)
    const t = (key) => {
        const dictionary = language === "en" ? en : od;
        
        // Handle nested keys like "header.shop"
        const keys = key.split(".");
        let value = dictionary;
        
        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                return key; // Fallback to key if not found
            }
        }
        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useTranslation = () => {
    return useContext(LanguageContext);
};
