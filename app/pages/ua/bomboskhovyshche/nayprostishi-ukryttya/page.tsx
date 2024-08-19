{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проектування та будівництво найпростіших укриттів",
    description: "Створення проектів найпростіших укриттів для захисту у надзвичайних умовах.",
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
        title: "Проектування та будівництво найпростіших укриттів",
        description: "Створення проектів найпростіших укриттів для захисту у надзвичайних умовах.",
        url: "https://drimbud.com.ua/pages/ua/bomboskhovyshche/nayprostishi-ukryttya",
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

export default function NayprostishiUkryttya() {
	return (
		<Content data={data}/>
	);
}