{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проєктування котеджів, будинків дачних та садових",
    description: "Професійне проєктування котеджів, дачних та садових будинків для комфортного життя і відпочинку.",
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
        title: "Проєктування котеджів, будинків дачних та садових",
        description: "Професійне проєктування котеджів, дачних та садових будинків для комфортного життя і відпочинку.",
        url: "https://drimbud.com.ua/pages/ua/proektuvannya/kotedzhi-budynky-dachni-ta-sadovi",
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

export default function KotedzhiBudynkyDachniTaSadovi() {
	return (
		<Content data={data}/>
	);
}