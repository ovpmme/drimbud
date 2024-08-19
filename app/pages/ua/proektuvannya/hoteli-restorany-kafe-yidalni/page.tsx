{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проєктування готелів, ресторанів, кафе, їдалень",
    description: "Створення унікальних проєктів для готелів, ресторанів, кафе та їдалень з урахуванням усіх потреб.",
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
        title: "Проєктування готелів, ресторанів, кафе, їдалень",
        description: "Створення унікальних проєктів для готелів, ресторанів, кафе та їдалень з урахуванням усіх потреб.",
        url: "https://drimbud.com.ua/pages/ua/proektuvannya/hoteli-restorany-kafe-yidalni",
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

export default function HoteliRestoranyKafeYidalni() {
	return (
		<Content data={data}/>
	);
}