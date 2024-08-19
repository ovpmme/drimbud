{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проєктування автострад, вулиць та доріг",
    description: "Якісне проєктування автострад, вулиць та доріг для безпечного та зручного руху транспорту.",
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
        title: "Проєктування автострад, вулиць та доріг",
        description: "Якісне проєктування автострад, вулиць та доріг для безпечного та зручного руху транспорту.",
        url: "https://drimbud.com.ua/pages/ua/proektuvannya/avtostrady-vulytsi-ta-dorohy",
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

export default function AvtostradyVulytsiTaDorohy() {
	return (
		<Content data={data}/>
	);
}