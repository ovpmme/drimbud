{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проектирование зданий для публичных выступлений",
    description: "Создаем проекты зданий для публичных выступлений с лучшими условиями для аудитории.",
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
        title: "Проектирование зданий для публичных выступлений",
        description: "Создаем проекты зданий для публичных выступлений с лучшими условиями для аудитории.",
        url: "https://drimbud.com.ua/pages/ru/proyektirovaniye/zdaniya-dlya-publichnykhv-vystupleniy",
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

export default function ZdaniyaDlyaPublichnykhVystupleniy() {
	return (
		<Content data={data}/>
	);
}