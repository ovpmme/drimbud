{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проектирование гидросооружений",
    description: "Проектируем надежные гидросооружения для управления водными ресурсами.",
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
        title: "Проектирование гидросооружений",
        description: "Проектируем надежные гидросооружения для управления водными ресурсами.",
        url: "https://drimbud.com.ua/pages/ru/proyektirovaniye/gidrosooruzheniya",
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

export default function Gidrosooruzheniya() {
	return (
		<Content data={data}/>
	);
}