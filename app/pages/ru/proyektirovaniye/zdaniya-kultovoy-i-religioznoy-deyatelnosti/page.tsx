{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проектирование зданий культовой и религиозной деятельности",
    description: "Разработка проектов зданий для культовой и религиозной деятельности с учетом традиций.",
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
        title: "Проектирование зданий культовой и религиозной деятельности",
        description: "Разработка проектов зданий для культовой и религиозной деятельности с учетом традиций.",
        url: "https://drimbud.com.ua/pages/ru/proyektirovaniye/zdaniya-kultovoy-i-religioznoy-deyatelnosti",
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

export default function ZdaniyaKultovoyIReligioznoyDeyatelnosti() {
	return (
		<Content data={data}/>
	);
}