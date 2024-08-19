{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проєктування гуртожитків",
    description: "Проєктування функціональних і комфортних гуртожитків для студентів та робітників.",
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
        title: "Проєктування гуртожитків",
        description: "Проєктування функціональних і комфортних гуртожитків для студентів та робітників.",
        url: "https://drimbud.com.ua/pages/ua/proektuvannya/hurtozhytky",
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

export default function Hurtozhytky() {
	return (
		<Content data={data}/>
	);
}