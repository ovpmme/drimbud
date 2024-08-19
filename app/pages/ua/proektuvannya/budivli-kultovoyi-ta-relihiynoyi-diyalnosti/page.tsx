{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проєктування будівель культової та релігійної діяльності",
    description: "Розробка проєктів для будівель культової та релігійної діяльності з урахуванням традицій та вимог.",
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
        title: "Проєктування будівель культової та релігійної діяльності",
        description: "Розробка проєктів для будівель культової та релігійної діяльності з урахуванням традицій та вимог.",
        url: "https://drimbud.com.ua/pages/ua/proektuvannya/budivli-kultovoyi-ta-relihiynoyi-diyalnosti",
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

export default function BudivliKultovoyiTaRelihiynoyiDiyalnosti() {
	return (
		<Content data={data}/>
	);
}