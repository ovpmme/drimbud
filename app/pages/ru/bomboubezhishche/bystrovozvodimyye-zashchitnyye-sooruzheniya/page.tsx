{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проектирование и строительство быстровозводимых защитных сооружений",
    description: "Проектируем и строим быстровозводимые защитные сооружения для оперативной безопасности.",
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
        title: "Проектирование и строительство быстровозводимых защитных сооружений",
        description: "Проектируем и строим быстровозводимые защитные сооружения для оперативной безопасности.",
        url: "https://drimbud.com.ua/pages/ru/bomboubezhishche/bystrovozvodimyye-zashchitnyye-sooruzheniya",
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

export default function BystrovozvodimyyeZashchitnyyeSooruzheniya() {
	return (
		<Content data={data}/>
	);
}