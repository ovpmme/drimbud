{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проєктування торгових центрів, універмагів, магазинів",
    description: "Проєктування торгових центрів, універмагів та магазинів з урахуванням усіх вимог безпеки та зручності.",
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
        title: "Проєктування торгових центрів, універмагів, магазинів",
        description: "Проєктування торгових центрів, універмагів та магазинів з урахуванням усіх вимог безпеки та зручності.",
        url: "https://drimbud.com.ua/pages/ua/proektuvannya/torhovi-tsentry-univermahy-mahazyny",
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

export default function TorhoviTsentriUnivermahyMahazyny() {
	return (
		<Content data={data}/>
	);
}