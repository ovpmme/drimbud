{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проектирование общежитий",
    description: "Проектируем удобные и практичные общежития для студентов и рабочих.",
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
        title: "Проектирование общежитий",
        description: "Проектируем удобные и практичные общежития для студентов и рабочих.",
        url: "https://drimbud.com.ua/pages/ru/proyektirovaniye/obshchezhitiya",
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

export default function Obshchezhitiya() {
	return (
		<Content data={data}/>
	);
}