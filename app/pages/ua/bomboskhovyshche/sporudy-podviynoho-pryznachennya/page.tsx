{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проектування та будівництво споруд подвійного призначення",
    description: "Проектування та будівництво споруд подвійного призначення для різноманітних потреб та ситуацій.",
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
        title: "Проектування та будівництво споруд подвійного призначення",
        description: "Проектування та будівництво споруд подвійного призначення для різноманітних потреб та ситуацій.",
        url: "https://drimbud.com.ua/pages/ua/bomboskhovyshche/sporudy-podviynoho-pryznachennya",
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

export default function SporudyPodviynohoPryznachennya() {
	return (
		<Content data={data}/>
	);
}