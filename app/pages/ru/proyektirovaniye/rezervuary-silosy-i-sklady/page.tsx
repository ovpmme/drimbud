{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проектирование резервуаров, силосов и складов",
    description: "Проектируем надежные резервуары, силосы и склады для хранения различных материалов.",
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
        title: "Проектирование резервуаров, силосов и складов",
        description: "Проектируем надежные резервуары, силосы и склады для хранения различных материалов.",
        url: "https://drimbud.com.ua/pages/ru/proyektirovaniye/rezervuary-silosy-i-sklady",
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

export default function RezervuarySilosyISklady() {
	return (
		<Content data={data}/>
	);
}