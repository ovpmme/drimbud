{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проєктування промислових та складських будівель",
    description: "Розробка ефективних проєктів промислових та складських будівель для оптимізації виробничих процесів.",
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
        title: "Проєктування промислових та складських будівель",
        description: "Розробка ефективних проєктів промислових та складських будівель для оптимізації виробничих процесів.",
        url: "https://drimbud.com.ua/pages/ua/proektuvannya/budivli-promyslovi-ta-skladski",
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

export default function BudivliPromysloviTaSkladski() {
	return (
		<Content data={data}/>
	);
}