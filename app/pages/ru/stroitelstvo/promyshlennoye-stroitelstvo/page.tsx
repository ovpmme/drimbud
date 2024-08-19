{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Промышленное строительство",
    description: "Строительство промышленных объектов для развития производства и инфраструктуры.",
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
        title: "Промышленное строительство",
        description: "Строительство промышленных объектов для развития производства и инфраструктуры.",
        url: "https://drimbud.com.ua/pages/ru/stroitelstvo/promyshlennoye-stroitelstvo",
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

export default function PromyshlennoyeStroitelstvo() {
	return (
		<Content data={data}/>
	);
}