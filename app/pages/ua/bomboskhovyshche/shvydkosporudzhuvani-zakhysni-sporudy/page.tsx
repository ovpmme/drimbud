{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проектування та будівництво швидкоспоруджуваних захисних споруд",
    description: "Проектування та будівництво швидкоспоруджуваних захисних споруд для оперативного забезпечення безпеки.",
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
        title: "Проектування та будівництво швидкоспоруджуваних захисних споруд",
        description: "Проектування та будівництво швидкоспоруджуваних захисних споруд для оперативного забезпечення безпеки.",
        url: "https://drimbud.com.ua/pages/ua/bomboskhovyshche/shvydkosporudzhuvani-zakhysni-sporudy",
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

export default function ShvydkosporudzhuvaniZakhysniSporudy() {
	return (
		<Content data={data}/>
	);
}