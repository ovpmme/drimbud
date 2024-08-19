import Image from "next/image";

{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Контакты — ООО «ДРІМБУДПРОДЖЕКТ» — Мечтай. Проектируй. Строй.",
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
        title: "Контакты — ООО «ДРІМБУДПРОДЖЕКТ» — Мечтай. Проектируй. Строй.",
        description: "Заказывай проектирование и строительство. Звони по номеру: +38 (067) 262-3778.",
        url: "https://drimbud.com.ua/pages/ru/kontakty",
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

export default function Kontakty() {
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

							flex
							flex-col
							xl:flex-row
							2xl:flex-row

							gap-8
						"
					>
						<div
							className="
								w-fit
								h-fit

								flex
								flex-col

								gap-8
							"
						>
							{item.contacts.map((item: any) =>
								<div
									className="
										w-full
										h-fit

										flex
										flex-col

										justify-center
										items-start

										gap-2
									"
									key={item.id}
								>
									<div
										className="
											w-fit
											h-fit

											flex
											flex-row

											gap-2
										"
									>
										<Image
											className="
												select-none
											"
											src={item.src}
											width={24}
											height={24}
											alt={item.alt}
										/>
										<p
											className="
												text-base
												text-neutral-600

												font-medium

												text-start
											"
										>
											{item.title}
										</p>
									</div>
									<div
										className="
											w-full
											h-px

											bg-neutral-200
										"
									>
									</div>
									<p
										className="
											text-base
											text-neutral-800

											font-normal

											text-start
										"
									>
										{item.parahraph}
									</p>
								</div>
							)}
						</div>
						<iframe
							className="
								w-full
								xl:w-[640px]
								2xl:w-[640px]
								h-[480px]
									
								border
								border-neutral-200

								rounded-xl

								shadow-sm
							"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.9095432454765!2d35.0245543!3d48.458265100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe31c7201d44b%3A0xa0b89a9258e4e85a!2sOleksandra%20Polia%20Ave%2C%2028a%2C%20Dnipro%2C%20Dnipropetrovs&#39;ka%20oblast%2C%2049000!5e0!3m2!1sen!2sua!4v1695366690643!5m2!1sen!2sua"
							width="1024"
							height="450"
							loading="lazy"
						>
						</iframe>
					</div>
				</div>
			)}
		</div>
	);
}