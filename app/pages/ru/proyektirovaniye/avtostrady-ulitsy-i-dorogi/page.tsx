{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проектирование автострад, улиц и дорог",
    description: "Разработка качественных проектов автострад, улиц и дорог для безопасного движения.",
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
        title: "Проектирование автострад, улиц и дорог",
        description: "Разработка качественных проектов автострад, улиц и дорог для безопасного движения.",
        url: "https://drimbud.com.ua/pages/ru/proyektirovaniye/avtostrady-ulitsy-i-dorogi",
        siteName: "ТОВ «ДРІМБУДПРОДЖЕКТ» — Мрій. Проектуй. Будуй.",
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

export default function AvtostradyUlitsyIDorogi() {
	return (
		<Content data={data}/>
	);
}