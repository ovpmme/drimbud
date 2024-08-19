{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проектирование коттеджей, домов дачных и садовых",
    description: "Создаем комфортные и функциональные проекты коттеджей, дачных и садовых домов.",
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
        title: "Проектирование коттеджей, домов дачных и садовых",
        description: "Создаем комфортные и функциональные проекты коттеджей, дачных и садовых домов.",
        url: "https://drimbud.com.ua/pages/ru/proyektirovaniye/kottedzhi-doma-dachnyye-i-sadovyye",
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

export default function KottedzhiDomaDachnyyeISadovyye() {
	return (
		<Content data={data}/>
	);
}