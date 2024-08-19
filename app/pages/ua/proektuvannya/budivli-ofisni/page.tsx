{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проєктування офісних будівель",
    description: "Розробка сучасних офісних будівель для ефективної роботи та бізнесу.",
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
        title: "Проєктування офісних будівель",
        description: "Розробка сучасних офісних будівель для ефективної роботи та бізнесу.",
        url: "https://drimbud.com.ua/pages/ua/proektuvannya/budivli-ofisni",
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

export default function BudivliOfisni() {
	return (
		<Content data={data}/>
	);
}