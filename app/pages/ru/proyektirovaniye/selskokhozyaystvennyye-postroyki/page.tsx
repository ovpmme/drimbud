{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проектирование сельскохозяйственных построек",
    description: "Создаем проекты сельскохозяйственных построек для оптимизации аграрного производства.",
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
        title: "Проектирование сельскохозяйственных построек",
        description: "Создаем проекты сельскохозяйственных построек для оптимизации аграрного производства.",
        url: "https://drimbud.com.ua/pages/ru/proyektirovaniye/selskokhozyaystvennyye-postroyki",
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

export default function SelskokhozyaystvennyyePostroyki() {
	return (
		<Content data={data}/>
	);
}