{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проектирование офисных зданий",
    description: "Разработка эффективных проектов офисных зданий для вашего бизнеса.",
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
        title: "Проектирование офисных зданий",
        description: "Разработка эффективных проектов офисных зданий для вашего бизнеса.",
        url: "https://drimbud.com.ua/pages/ru/proyektirovaniye/zdaniya-ofisnyye",
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

export default function ZdaniyaOfisnyye() {
	return (
		<Content data={data}/>
	);
}