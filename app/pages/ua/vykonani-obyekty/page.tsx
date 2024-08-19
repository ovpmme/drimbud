{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Виконані об'єкти — ТОВ «ДРІМБУДПРОДЖЕКТ» — Мрій. Проектуй. Будуй.",
    description: "Замовляй проектування та будівництво. Телефонуй за номером: +38 (067) 262-3778.",
    metadataBase: new URL("https://drimbud.com.ua"),
    icons: {
        icon: [
            {
                type: "image/svg+xml",
                url: "/brand/favicon.svg"
            }
        ]
    },
    openGraph: {
        title: "Виконані об'єкти — ТОВ «ДРІМБУДПРОДЖЕКТ» — Мрій. Проектуй. Будуй.",
        description: "Замовляй проектування та будівництво. Телефонуй за номером: +38 (067) 262-3778.",
        url: "https://drimbud.com.ua/pages/ua/vykonani-obyekty",
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

export default function VykonaniObyekty() {
	return (
		<div
			className="
				w-full
				h-fit

				bg-white

				px-8
				xl:px-16
				2xl:px-64

				py-16

				flex
				flex-col

				justify-center
				items-center
			"
		>
			{data.map((item: any) =>
				<div
					className="
						w-fit
						h-fit

						flex
						flex-col

						gap-4
					"
					key={item.id}
				>
					<h1
						className="
							text-2xl
							xl:text-4xl
							2xl:text-4xl
							text-neutral-600

							font-medium

							text-center
						"
					>
						{item.title}
					</h1>
					<p
						className="
							text-lg
							text-neutral-800

							fonte-normal

							text-center
						"
					>
						{item.parahraph}
					</p>
				</div>
			)}
		</div>
	);
}