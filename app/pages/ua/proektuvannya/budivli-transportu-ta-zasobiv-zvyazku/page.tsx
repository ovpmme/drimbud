{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проєктування будівель транспорту та засобів зв'язку",
    description: "Професійне проєктування будівель для транспорту та засобів зв'язку з урахуванням всіх технологічних вимог.",
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
        title: "Проєктування будівель транспорту та засобів зв'язку",
        description: "Професійне проєктування будівель для транспорту та засобів зв'язку з урахуванням всіх технологічних вимог.",
        url: "https://drimbud.com.ua/pages/ua/proektuvannya/budivli-transportu-ta-zasobiv-zvyazku",
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

export default function BudivliTransportuTaZasobivZvyazku() {
	return (
		<Content data={data}/>
	);
}