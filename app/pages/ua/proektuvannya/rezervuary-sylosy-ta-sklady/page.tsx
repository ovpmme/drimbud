{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проєктування резервуарів, силосів та складів",
    description: "Проєктування резервуарів, силосів та складів для надійного зберігання різних матеріалів і продуктів.",
    metadataBase: new URL("https://drimbud.com.ua/"),
    icons: {
        icon: [
            {
                type: "image/svg+xml",
                url: "/brand/favicon.svg"
            }
        ]
    },
    openGraph: {
        title: "Проєктування резервуарів, силосів та складів",
        description: "Проєктування резервуарів, силосів та складів для надійного зберігання різних матеріалів і продуктів.",
        url: "https://drimbud.com.ua/pages/ua/proektuvannya/rezervuary-sylosy-ta-sklady",
        siteName: "ТОВ «ДРІМБУДПРОДЖЕКТ» — Мрій. Проектуй. Будуй.",
        images: [
            {
                url: "/opengraph/card.jpg",
                width: 640,
                height: 480,
            },
        ],
        locale: "uk-UA",
        type: "website",
    },
};

import data from "./data.json"

import Content from "@/app/components/content";

export default function RezervuarySylosyTaSklady() {
	return (
		<Content data={data}/>
	);
}