{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проєктування будівель для публічних виступів",
    description: "Створення проєктів будівель для публічних виступів з найкращими умовами для аудиторії та виконавців.",
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
        title: "Проєктування будівель для публічних виступів",
        description: "Створення проєктів будівель для публічних виступів з найкращими умовами для аудиторії та виконавців.",
        url: "https://drimbud.com.ua/pages/ua/proektuvannya/budivli-dlya-publichnykh-vystupiv",
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

export default function BudivliDlyaPublichnykhVystupiv() {
	return (
		<Content data={data}/>
	);
}