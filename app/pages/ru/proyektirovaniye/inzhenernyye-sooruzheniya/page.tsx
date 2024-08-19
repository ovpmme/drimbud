{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проектирование инженерных сооружений",
    description: "Создаем инновационные проекты инженерных сооружений для решения сложных задач.",
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
        title: "Проектирование инженерных сооружений",
        description: "Создаем инновационные проекты инженерных сооружений для решения сложных задач.",
        url: "https://drimbud.com.ua/pages/ru/proyektirovaniye/inzhenernyye-sooruzheniya",
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

export default function InzhenernyyeSooruzheniya() {
	return (
		<Content data={data}/>
	);
}