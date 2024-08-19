{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проектирование промышленных и складских зданий",
    description: "Разработка эффективных проектов промышленных и складских зданий для оптимизации процессов.",
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
        title: "Проектирование промышленных и складских зданий",
        description: "Разработка эффективных проектов промышленных и складских зданий для оптимизации процессов.",
        url: "https://drimbud.com.ua/pages/ru/proyektirovaniye/promyshlennyye-i-skladskiye-zdaniya",
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

export default function PromyshlennyyeISkladskiyeZdaniya() {
	return (
		<Content data={data}/>
	);
}