{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проєктування спортивних залів",
    description: "Проєктування сучасних спортивних залів для всіх видів спорту з урахуванням найвищих стандартів.",
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
        title: "Проєктування спортивних залів",
        description: "Проєктування сучасних спортивних залів для всіх видів спорту з урахуванням найвищих стандартів.",
        url: "https://drimbud.com.ua/pages/ua/proektuvannya/sportyvni-zaly",
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

export default function SportyvniZaly() {
	return (
		<Content data={data}/>
	);
}