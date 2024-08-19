import Image from "next/image";

{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Документация — ООО «ДРІМБУДПРОДЖЕКТ» — Мечтай. Проектируй. Строй.",
    description: "Заказывай проектирование и строительство. Звони по номеру: +38 (067) 262-3778.",
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
        title: "Документация — ООО «ДРІМБУДПРОДЖЕКТ» — Мечтай. Проектируй. Строй.",
        description: "Заказывай проектирование и строительство. Звони по номеру: +38 (067) 262-3778.",
        url: "https://drimbud.com.ua/pages/ru/dokumentatsiya",
        siteName: "ООО «ДРІМБУДПРОДЖЕКТ» — Мечтай. Проектируй. Строй.",
        images: [
            {
                url: "/opengraph/card.jpg",
                width: 640,
                height: 480,
            },
        ],
        locale: "ru-UA",
        type: "website",
    },
};

import data from "./data.json"

export default function Dokumentatsiya() {
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
					<div
						className="
							w-full
							h-fit

							pt-8

							grid
							grid-cols-1
							xl:grid-cols-3
							2xl:grid-cols-3

							gap-8
						"
					>
						{item.document.map((item: any) => 
							<div
								className="
									w-full
									h-fit

									border
									border-neutral-200

									rounded-xl

									shadow-sm

									flex
									flex-col
								"
							key={item.id}
							>
								<Image
									className="
										w-full
										h-fit

										rounded-t-xl

										select-none
									"
									src={item.src}
									width={0}
									height={0}
									sizes="100vw"
									alt={item.alt}
									loading="lazy"
								/>
								<p
									className="
										w-full
										h-fit

										p-4

										text-base
										text-neutral-800

										font-normal

										text-justify
									"
								>
									{item.description}
								</p>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
}