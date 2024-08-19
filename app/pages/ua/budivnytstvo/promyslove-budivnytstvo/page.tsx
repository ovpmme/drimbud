{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Промислове будівництво",
    description: "Будівництво промислових об'єктів для розвитку виробничих потужностей та інфраструктури.",
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
        title: "Промислове будівництво",
        description: "Будівництво промислових об'єктів для розвитку виробничих потужностей та інфраструктури.",
        url: "https://drimbud.com.ua/pages/ua/budivnytstvo/promyslove-budivnytstvo",
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

export default function PromysloveBudivnytstvo() {
	return (
		<Content data={data}/>
	);
}