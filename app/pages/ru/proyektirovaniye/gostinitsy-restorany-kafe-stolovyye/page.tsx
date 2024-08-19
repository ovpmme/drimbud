{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проектирование гостиниц, ресторанов, кафе, столовых",
    description: "Создаем уникальные проекты гостиниц, ресторанов, кафе и столовых для вашего бизнеса.",
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
        title: "Проектирование гостиниц, ресторанов, кафе, столовых",
        description: "Создаем уникальные проекты гостиниц, ресторанов, кафе и столовых для вашего бизнеса.",
        url: "https://drimbud.com.ua/pages/ru/proyektirovaniye/gostinitsy-restorany-kafe-stolovyye",
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

export default function GostinitsyRestoranyKafeStolovyye() {
	return (
		<Content data={data}/>
	);
}