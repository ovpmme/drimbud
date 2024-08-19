{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Жилищно-гражданское строительство",
    description: "Профессиональное жилищно-гражданское строительство для комфортного проживания.",
    metadataBase: new URL("https://drimbud.com.ua"),
    icons: {
        icon: [
            {
                type: "image/svg+xml",
                url: "/brand/favicon.svg"
            }
        ]
    },
    openGraph: {
        title: "Жилищно-гражданское строительство",
        description: "Профессиональное жилищно-гражданское строительство для комфортного проживания.",
        url: "https://drimbud.com.ua/pages/ru/stroitelstvo/zhilishchno-grazhdanskoye-stroitelstvo",
        siteName: "ООО «ДРІМБУДПРОДЖЕКТ» — Мечтай. Проектируй. Строй.",
        images: [
            {
                url: "/opengraph/card.jpg",
                width: 640,
                height: 480,
            },
        ],
        locale: "ru-UA",
        type: "website",
    },
};

import data from "./data.json"

import Content from "@/app/components/content";

export default function ZhilishchnoGrazhdanskoyeStroitelstvo() {
	return (
		<Content data={data}/>
	);
}