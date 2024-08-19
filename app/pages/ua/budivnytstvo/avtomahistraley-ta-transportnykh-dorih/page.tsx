{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Будівництво автомагістралей та транспортних доріг",
    description: "Якісне будівництво автомагістралей та транспортних доріг для покращення транспортної інфраструктури.",
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
        title: "Будівництво автомагістралей та транспортних доріг",
        description: "Якісне будівництво автомагістралей та транспортних доріг для покращення транспортної інфраструктури.",
        url: "https://drimbud.com.ua/pages/ua/budivnytstvo/avtomahistraley-ta-transportnykh-dorih",
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

export default function AvtomahistraleyTaTransportnykhDorih() {
	return (
		<Content data={data}/>
	);
}