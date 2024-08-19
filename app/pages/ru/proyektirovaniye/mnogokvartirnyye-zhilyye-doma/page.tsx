{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проектирование многоквартирных жилых домов",
    description: "Разработка современных проектов многоквартирных жилых домов для комфортного проживания.",
    metadataBase: new URL("https://drimbud.com.ua"),
    icons: {
        icon: [
            {
                type: "image/svg+xml",
                url: "/brand/favicon.svg"
            }
        ]
    },
    openGraph: {
        title: "Проектирование многоквартирных жилых домов",
        description: "Разработка современных проектов многоквартирных жилых домов для комфортного проживания.",
        url: "https://drimbud.com.ua/pages/ru/proyektirovaniye/mnogokvartirnyye-zhilyye-doma",
        siteName: "ООО «ДРІМБУДПРОДЖЕКТ» — Мечтай. Проектируй. Строй.",
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

export default function MnogokvartirnyyeZhilyyeDoma() {
	return (
		<Content data={data}/>
	);
}