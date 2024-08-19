{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проектирование торговых центров, универмагов, магазинов",
    description: "Проектируем торговые центры, универмаги и магазины, отвечающие всем современным требованиям.",
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
        title: "Проектирование торговых центров, универмагов, магазинов",
        description: "Проектируем торговые центры, универмаги и магазины, отвечающие всем современным требованиям.",
        url: "https://drimbud.com.ua/pages/ru/proyektirovaniye/torgovyye-tsentry-univermagi-magaziny",
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

export default function TorgovyyeTsentriUnivermagiMagaziny() {
	return (
		<Content data={data}/>
	);
}