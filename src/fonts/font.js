import localFont from "next/font/local";

export const cinzel = localFont({
    src: [
        { path: "./cinzel/cinzel-v26-latin-regular.woff2", weight: "400", style: "normal" },
        { path: "./cinzel/cinzel-v26-latin-500.woff2", weight: "500", style: "normal" },
        { path: "./cinzel/cinzel-v26-latin-600.woff2", weight: "600", style: "normal" },
        { path: "./cinzel/cinzel-v26-latin-700.woff2", weight: "700", style: "normal" },
        { path: "./cinzel/cinzel-v26-latin-800.woff2", weight: "800", style: "normal" },
        { path: "./cinzel/cinzel-v26-latin-900.woff2", weight: "900", style: "normal" },
    ],
    variable: "--font-cinzel",
    display: "swap",
});

export const inter = localFont({
    src: [
        { path: "./inter/inter-v20-latin-300.woff2", weight: "300", style: "normal" },
        { path: "./inter/inter-v20-latin-regular.woff2", weight: "400", style: "normal" },
        { path: "./inter/inter-v20-latin-500.woff2", weight: "500", style: "normal" },
        { path: "./inter/inter-v20-latin-600.woff2", weight: "600", style: "normal" },
        { path: "./inter/inter-v20-latin-700.woff2", weight: "700", style: "normal" },
        { path: "./inter/inter-v20-latin-800.woff2", weight: "800", style: "normal" },
        { path: "./inter/inter-v20-latin-900.woff2", weight: "900", style: "normal" },
    ],
    variable: "--font-inter",
    display: "swap",
});