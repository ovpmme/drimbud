{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Житлово-цивільне будівництво",
    description: "Професійне житлово-цивільне будівництво для комфортного проживання та функціональності.",
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
        title: "Житлово-цивільне будівництво",
        description: "Професійне житлово-цивільне будівництво для комфортного проживання та функціональності.",
        url: "https://drimbud.com.ua/pages/ua/budivnytstvo/zhytlovo-tsyvilne-budivnytstvo",
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

export default function ZhytlovoTsyvilneBudivnytstvo() {
	return (
		<Content data={data}/>
	);
}