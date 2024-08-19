{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проектирование зданий транспорта и средств связи",
    description: "Проектируем здания для транспорта и средств связи с учетом всех технологических требований.",
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
        title: "Проектирование зданий транспорта и средств связи",
        description: "Проектируем здания для транспорта и средств связи с учетом всех технологических требований.",
        url: "https://drimbud.com.ua/pages/ru/proyektirovaniye/zdaniya-transporta-i-sredstv-svyazi",
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

export default function ZdaniyaTransportaISredstvSvyazi() {
	return (
		<Content data={data}/>
	);
}