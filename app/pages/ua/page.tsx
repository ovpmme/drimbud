import Image from "next/image";

{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Головна — ТОВ «ДРІМБУДПРОДЖЕКТ» — Мрій. Проектуй. Будуй.",
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
        title: "Головна — ТОВ «ДРІМБУДПРОДЖЕКТ» — Мрій. Проектуй. Будуй.",
        description: "Замовляй проектування та будівництво. Телефонуй за номером: +38 (067) 262-3778.",
        url: "https://drimbud.com.ua/pages/ua",
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

export default function Holovna() {
	return (
        <div
            className="
                px-8
                xl:px-32
                2xl:px-64
                py-16

                w-full
                h-fit

                bg-white

                flex
                flex-col

                gap-16
            "
        >
            <div
                className="
                    pt-24

                    w-full
                    h-fit

                    flex
                    flex-col
                    
                    gap-4
                "
            >
                <div
                    className="
                        w-full
                        h-fit

                        flex
                        flex-col
                    "
                >
                    <h1
                        className="
                            w-full
                            h-fit

                            text-5xl
                            xl:text-8xl
                            2xl:text-8xl

                            font-extrabold

                            tracking-tightest

                            text-center

                            flex
                            flex-col
                            xl:flex
                            xl:flex-row
                            2xl:flex
                            2xl:flex-row

                            justify-center

                            gap-8

                            leading-none
                        "
                    >
                        <span data-content="Мрій." className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-black before:animate-gradient-background-1">
                            <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1"> Мрій.</span>
                        </span>
                        <span data-content="Проектуй." className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-black before:animate-gradient-background-2">
                            <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2"> Проектуй.</span>
                        </span>
                        <span data-content="Будуй." className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-black before:animate-gradient-background-3">
                            <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3"> Будуй.</span>
                        </span>
                    </h1>
                </div>
                <div
                    className="
                        w-full
                        h-fit

                        flex
                        flex-row

                        justify-center
                    "
                >
                    <h2
                        className="
                            text-lg
                            xl:text-2xl
                            2xl:text-2xl
                            text-neutral-600

                            font-normal

                            text-center
                        "
                    >
                        Реалізуємо ваші найвибагливіші мрії. Залиште нудну роботу нам, та насолоджуйтеся життям.
                    </h2>
                </div>
                <div
                    className="
                        pt-12

                        w-full
                        h-fit

                        flex
                        flex-row

                        justify-center
                        
                        gap-8
                    "
                >
                    <a
                        href="/pages/ua/kontakty"
                    >
                        <div
                            className="
                                w-36
                                h-12

                                bg-neutral-800
                                hover:bg-neutral-600
                                group

                                transition
                                duration-300

                                rounded-lg
                                
                                flex

                                justify-center
                                items-center

                                cursor-pointer
                            "
                        >
                            <p
                                className="
                                    text-xl
                                    text-neutral-100
                                    group-hover:text-neutral-300

                                    font-medium
                                "
                            >
                                Контакти
                            </p>
                        </div>
                    </a>
                    <a
                        href="#about"
                    >
                        <div
                                className="
                                w-36
                                h-12

                                rounded-lg
                                
                                flex

                                justify-center
                                items-center

                                cursor-pointer

                                relative
                            "
                        >
                            <div
                                className="
                                    absolute

                                    w-36
                                    h-12
                                        
                                    bg-gradient-to-r
                                    from-gradient-1-start
                                    to-gradient-1-end
                                    animate-gradient-foreground-1

                                    opacity-5

                                    blur-[48px]
                                "
                            >
                            </div>
                            <div
                                className="
                                    absolute

                                    z-0
                                    
                                    top-0
                                    center-0

                                    w-36
                                    h-12

                                    bg-gradient-to-r
                                    from-gradient-1-start
                                    to-gradient-1-end
                                    animate-gradient-foreground-1

                                    transition
                                    duration-300

                                    rounded-lg

                                    flex

                                    justify-center
                                    items-center
                                "
                            >
                                <p
                                    className="
                                        text-base
                                        text-white

                                        font-medium
                                    "
                                >
                                    Більше про нас
                                </p>
                            </div>
                            <div
                                className="
                                    absolute

                                    w-36
                                    h-12
                                        
                                    bg-gradient-to-r
                                    from-gradient-2-start
                                    to-gradient-2-end
                                    animate-gradient-foreground-2

                                    opacity-5

                                    blur-[48px]
                                "
                            >
                            </div>
                            <div
                                className="
                                    absolute

                                    z-10
                                    
                                    top-0
                                    center-0

                                    w-36
                                    h-12

                                    bg-gradient-to-r
                                    from-gradient-2-start
                                    to-gradient-2-end
                                    animate-gradient-foreground-2

                                    transition
                                    duration-300

                                    rounded-lg

                                    flex

                                    justify-center
                                    items-center
                                "
                            >
                                <p
                                    className="
                                        text-base
                                        text-white

                                        font-medium
                                    "
                                >
                                    Більше про нас
                                </p>
                            </div>
                            <div
                                className="
                                    absolute

                                    w-36
                                    h-12
                                        
                                    bg-gradient-to-r
                                    from-gradient-3-start
                                    to-gradient-3-end
                                    animate-gradient-foreground-3

                                    opacity-5

                                    blur-[48px]
                                "
                            >
                            </div>
                            <div
                                className="
                                    absolute

                                    z-20
                                    
                                    top-0
                                    center-0

                                    w-36
                                    h-12

                                    bg-gradient-to-r
                                    from-gradient-3-start
                                    to-gradient-3-end
                                    animate-gradient-foreground-3

                                    transition
                                    duration-300

                                    rounded-lg

                                    flex

                                    justify-center
                                    items-center
                                "
                            >
                                <p
                                    className="
                                        text-base
                                        text-white

                                        font-medium
                                    "
                                >
                                    Більше про нас
                                </p>
                            </div>
                            <div
                                className="
                                    mx-px
                                    my-px

                                    absolute

                                    z-30
                                    
                                    top-0
                                    center-0

                                    w-[142px]
                                    h-[46px]

                                    bg-white
                                    hover:opacity-0

                                    transition
                                    duration-300

                                    rounded-lg

                                    flex

                                    justify-center
                                    items-center
                                "
                            >
                                <p
                                    className="
                                        text-base
                                        text-neutral-800
                                        hover:text-white

                                        font-medium
                                    "
                                >
                                    Більше про нас
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div
                    className="
                        pt-24
                        xl:pt-48
                        2xl:pt-48

                        w-full
                        h-fit

                        flex
                        flex-col

                        items-center

                        gap-16
                    "
                >
                    <p
                        className="
                            text-base
                            text-neutral-600

                            font-semibold

                            uppercase

                            text-center
                        "
                    >
                        Бізнес, що нам довіряє:
                    </p>
                    <div
                        className="
                            w-full
                            h-fit

                            flex
                            flex-col

                            justify-between
                            items-center

                            gap-8
                        "
                    >
                        <div
                            className="
                                w-full
                                h-fit

                                grid
                                grid-cols-2
                                xl:flex
                                xl:flex-row
                                2xl:flex
                                2xl:flex-row

                                justify-center
                                items-center

                                gap-8
                            "
                        >
                            <Image
                                src="/images/clients/atb.svg"
                                width={135}
                                height={34}
                                alt="АТБ"
                            />
                            <Image
                                src="/images/clients/varus.svg"
                                width={164}
                                height={33}
                                alt="Варус"
                            />
                            <Image
                                src="/images/clients/vodafone.svg"
                                width={135}
                                height={34}
                                alt="Водафон"
                            />
                            <Image
                                src="/images/clients/dtek.svg"
                                width={97}
                                height={33}
                                alt="ДТЕК"
                            />
                            <Image
                                className="
                                    hidden
                                    xl:flex
                                    2xl:flex
                                "
                                src="/images/clients/kyivstar.svg"
                                width={134}
                                height={33}
                                alt="Київстар"
                            />
                        </div>
                        <div
                            className="
                                w-full
                                h-fit

                                grid
                                grid-cols-2
                                xl:flex
                                xl:flex-row
                                2xl:flex
                                2xl:flex-row

                                justify-center
                                items-center

                                gap-8
                                xl:gap-14
                                2xl:gap-14
                            "
                        >
                            <Image
                                src="/images/clients/kovalska.svg"
                                width={163}
                                height={33}
                                alt="Ковальська"
                            />
                            <Image
                                src="/images/clients/metinvest.svg"
                                width={189}
                                height={34}
                                alt="Метінвест"
                            />
                            <Image
                                src="/images/clients/metro.svg"
                                width={178}
                                height={33}
                                alt="Метро"
                            />
                            <Image
                                src="/images/clients/silpo.svg"
                                width={85}
                                height={34}
                                alt="Сільпо"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="
                    w-full
                    h-fit

                    flex
                    flex-col

                    gap-8
                "
                id="about"
            >
                <div
                    className="
                        w-full
                        h-fit

                        flex
                        flex-col

                        items-center
                    "
                >
                    <div
                        className="
                            w-px
                            h-16
                            xl:h-32
                            2xl:h-32

                            bg-gradient-to-r
                            from-[#007CF0]
                            to-[#00DFD8]
                        "
                    >
                    </div>
                    <div
                        className="
                            w-10
                            h-10

                            bg-gradient-to-r
                            from-[#007CF0]
                            to-[#00DFD8]

                            rounded-full

                            flex

                            justify-center
                            items-center
                        "
                    >
                        <p
                            className="
                                text-lg
                                text-white

                                font-normal
                            "
                        >
                            01
                        </p>
                    </div>
                </div>
                <div
                    className="
                        w-full
                        h-fit

                        flex
                        flex-col

                        gap-2
                    "
                >
                    <h2
                        className="
                            text-4xl
                            xl:text-4xl
                            2xl:text-4xl

                            bg-gradient-to-r
                            from-[#007CF0]
                            to-[#00DFD8]

                            text-transparent

                            bg-clip-text

                            font-semibold

                            text-center
                        "
                    >
                        Мрій
                    </h2>
                    <p
                        className="
                            text-2xl
                            xl:text-4xl
                            2xl:text-4xl
                            text-neutral-800

                            font-normal

                            text-center
                        "
                    >
                        Коли приходить натхнення
                    </p>
                    <p
                        className="
                            text-lg
                            xl:text-xl
                            2xl:text-xl
                            text-neutral-600

                            font-normal

                            text-center
                        "
                    >
                        Обмежений час? Довіртеся нашій команді без зайвих слів!
                    </p>
                </div>
                <div
                    className="
                        w-full
                        h-fit

                        flex
                        flex-col
                        xl:grid
                        xl:grid-cols-2
                        2xl:grid
                        2xl:grid-cols-2

                        justify-center
                        items-center

                        gap-8
                    "
                >
                    <div
                        className="
                            w-fit
                            h-fit
                        "
                    >
                        <Image
                            className="
                                border
                                border-neutral-200

                                rounded-xl

                                shadow-sm

                                select-none
                            "
                            src="/pictures/holovna/img01.jpg"
                            width={960}
                            height={540}
                            alt="ТОВ «ДРІМБУДПРОДЖЕКТ» — Мрій. Проектуй. Будуй."
                            loading="lazy"
                        />
                    </div>
                    <div
                        className="
                            w-full
                            h-fit

                            flex
                            flex-col
                            
                            gap-8
                        "
                    >
                        <div
                            className="
                                w-full
                                h-fit

                                flex
                                flex-col
                            "
                        >
                            <div
                                className="
                                    w-full
                                    h-fit

                                    flex
                                    flex-row

                                    items-end

                                    gap-2
                                "
                            >
                                <Image
                                    className="
                                        select-none
                                    "
                                    src="/icons/phone-device.svg"
                                    width={32}
                                    height={32}
                                    alt="Звертайтеся до менеджерів"
                                />
                                <p
                                    className="
                                        text-lg
                                        xl:text-xl
                                        2xl:text-xl
                                        text-neutral-800

                                        font-medium
                                    "
                                >
                                    Звертайтеся до менеджерів
                                </p>
                            </div>
                            <p
                                className="
                                    text-base
                                    xl:text-lg
                                    2xl:text-lg
                                    text-neutral-600
                                    
                                    font-normal

                                    text-justify
                                "
                            >
                                Готові вам допомогти зрозуміти всі тонкощі та необхідні деталі.
                            </p>
                        </div>
                        <div
                            className="
                                w-full
                                h-fit

                                flex
                                flex-col
                            "
                        >
                            <div
                                className="
                                    w-full
                                    h-fit

                                    flex
                                    flex-row

                                    items-end

                                    gap-2
                                "
                            >
                                <Image
                                    className="
                                        select-none
                                    "
                                    src="/icons/lightbulb.svg"
                                    width={32}
                                    height={32}
                                    alt="Визначтеся з потребами"
                                />
                                <p
                                    className="
                                        text-lg
                                        xl:text-xl
                                        2xl:text-xl
                                        text-neutral-800

                                        font-medium
                                    "
                                >
                                    Визначтеся з потребами
                                </p>
                            </div>
                            <p
                                className="
                                    text-base
                                    xl:text-lg
                                    2xl:text-lg
                                    text-neutral-600
                                    
                                    font-normal

                                    text-justify
                                "
                            >
                                Важливо зрозуміти, чого саме ви прагнете, для успішної реалізації бажань.
                            </p>
                        </div>
                        <div
                            className="
                                w-full
                                h-fit

                                flex
                                flex-col
                            "
                        >
                            <div
                                className="
                                    w-full
                                    h-fit

                                    flex
                                    flex-row

                                    items-end

                                    gap-2
                                "
                            >
                                <Image
                                    className="
                                        select-none
                                    "
                                    src="/icons/user-tie.svg"
                                    width={32}
                                    height={32}
                                    alt="Підберіть фахівця"
                                />
                                <p
                                    className="
                                        text-lg
                                        xl:text-xl
                                        2xl:text-xl
                                        text-neutral-800

                                        font-medium
                                    "
                                >
                                    Підберіть фахівця
                                </p>
                            </div>
                            <p
                                className="
                                    text-base
                                    xl:text-lg
                                    2xl:text-lg
                                    text-neutral-600
                                    
                                    font-normal

                                    text-justify
                                "
                            >
                                Для кожної конкретної мети потрібен відповідний фахівець. Ми забезпечимо вам спеціалістів, враховуючи ваші потреби.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="
                    w-full
                    h-fit

                    flex
                    flex-col

                    gap-8
                "
            >
                <div
                    className="
                        w-full
                        h-fit

                        flex
                        flex-col

                        items-center
                    "
                >
                    <div
                        className="
                            w-px
                            h-16
                            xl:h-32
                            2xl:h-32

                            bg-gradient-to-r
                            from-[#7928CA]
                            to-[#FF0080]
                        "
                    >
                    </div>
                    <div
                        className="
                            w-10
                            h-10

                            bg-gradient-to-r
                            from-[#7928CA]
                            to-[#FF0080]

                            rounded-full

                            flex

                            justify-center
                            items-center
                        "
                    >
                        <p
                            className="
                                text-lg
                                text-white

                                font-normal
                            "
                        >
                            02
                        </p>
                    </div>
                </div>
                <div
                    className="
                        w-full
                        h-fit

                        flex
                        flex-col

                        gap-2
                    "
                >
                    <h2
                        className="
                            text-4xl
                            xl:text-4xl
                            2xl:text-4xl

                            bg-gradient-to-r
                            from-[#7928CA]
                            to-[#FF0080]

                            text-transparent

                            bg-clip-text

                            font-semibold

                            text-center
                        "
                    >
                        Проектуй
                    </h2>
                    <p
                        className="
                            text-2xl
                            xl:text-4xl
                            2xl:text-4xl
                            text-neutral-800

                            font-normal

                            text-center
                        "
                    >
                        Коли потрібна уважність у кожній деталі
                    </p>
                    <p
                        className="
                            text-lg
                            xl:text-xl
                            2xl:text-xl
                            text-neutral-600

                            font-normal

                            text-center
                        "
                    >
                        Ми приділяємо увагу найдрібнішим деталям, щоб пишатися своїми проектами
                    </p>
                </div>
                <div
                    className="
                        w-full
                        h-fit

                        flex
                        flex-col
                        xl:grid
                        xl:grid-cols-2
                        2xl:grid
                        2xl:grid-cols-2

                        justify-center
                        items-center

                        gap-8
                    "
                >
                    <div
                        className="
                            w-full
                            h-fit

                            flex
                            flex-col
                            
                            gap-8
                        "
                    >
                        <div
                            className="
                                w-full
                                h-fit

                                flex
                                flex-col
                            "
                        >
                            <div
                                className="
                                    w-full
                                    h-fit

                                    flex
                                    flex-row

                                    items-end

                                    gap-2
                                "
                            >
                                <Image
                                    className="
                                        select-none
                                    "
                                    src="/icons/pencil-ruler.svg"
                                    width={32}
                                    height={32}
                                    alt="Створимо проект"
                                />
                                <p
                                    className="
                                        text-lg
                                        xl:text-xl
                                        2xl:text-xl
                                        text-neutral-800

                                        font-medium
                                    "
                                >
                                    Створимо проект
                                </p>
                            </div>
                            <p
                                className="
                                    text-base
                                    xl:text-lg
                                    2xl:text-lg
                                    text-neutral-600
                                    
                                    font-normal

                                    text-justify
                                "
                            >
                                Кожна справа розпочинається з малого. Будь-які проекти виникають з ескізів.
                            </p>
                        </div>
                        <div
                            className="
                                w-full
                                h-fit

                                flex
                                flex-col
                            "
                        >
                            <div
                                className="
                                    w-full
                                    h-fit

                                    flex
                                    flex-row

                                    items-end

                                    gap-2
                                "
                            >
                                <Image
                                    className="
                                        select-none
                                    "
                                    src="/icons/clock.svg"
                                    width={32}
                                    height={32}
                                    alt="Дотримаємося графіку"
                                />
                                <p
                                    className="
                                        text-lg
                                        xl:text-xl
                                        2xl:text-xl
                                        text-neutral-800

                                        font-medium
                                    "
                                >
                                    Дотримаємося графіку
                                </p>
                            </div>
                            <p
                                className="
                                    text-base
                                    xl:text-lg
                                    2xl:text-lg
                                    text-neutral-600
                                    
                                    font-normal

                                    text-justify
                                "
                            >
                                У нашій роботі час є ключовим фактором, завжди дотримуємося жорстких термінів.
                            </p>
                        </div>
                        <div
                            className="
                                w-full
                                h-fit

                                flex
                                flex-col
                            "
                        >
                            <div
                                className="
                                    w-full
                                    h-fit

                                    flex
                                    flex-row

                                    items-end

                                    gap-2
                                "
                            >
                                <Image
                                    className="
                                        select-none
                                    "
                                    src="/icons/file.svg"
                                    width={32}
                                    height={32}
                                    alt="Согласуемо документацію"
                                />
                                <p
                                    className="
                                        text-lg
                                        xl:text-xl
                                        2xl:text-xl
                                        text-neutral-800

                                        font-medium
                                    "
                                >
                                    Согласуемо документацію
                                </p>
                            </div>
                            <p
                                className="
                                    text-base
                                    xl:text-lg
                                    2xl:text-lg
                                    text-neutral-600
                                    
                                    font-normal

                                    text-justify
                                "
                            >
                                Ми узгодимо всі питання у потрібних інстанціях і передамо вам готовий пакет документів.
                            </p>
                        </div>
                    </div>
                    <div
                        className="
                            w-fit
                            h-fit
                        "
                    >
                        <Image
                            className="
                                border
                                border-neutral-200

                                rounded-xl

                                shadow-sm

                                select-none
                            "
                            src="/pictures/holovna/img02.jpg"
                            width={960}
                            height={540}
                            alt="ТОВ «ДРІМБУДПРОДЖЕКТ» — Мрій. Проектуй. Будуй."
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
            <div
                className="
                    w-full
                    h-fit

                    flex
                    flex-col

                    gap-8
                "
            >
                <div
                    className="
                        w-full
                        h-fit

                        flex
                        flex-col

                        items-center
                    "
                >
                    <div
                        className="
                            w-px
                            h-16
                            xl:h-32
                            2xl:h-32

                            bg-gradient-to-r
                            from-[#FF4D4D]
                            to-[#F9CB28]
                        "
                    >
                    </div>
                    <div
                        className="
                            w-10
                            h-10

                            bg-gradient-to-r
                            from-[#FF4D4D]
                            to-[#F9CB28]

                            rounded-full

                            flex

                            justify-center
                            items-center
                        "
                    >
                        <p
                            className="
                                text-lg
                                text-white

                                font-normal
                            "
                        >
                            03
                        </p>
                    </div>
                </div>
                <div
                    className="
                        w-full
                        h-fit

                        flex
                        flex-col

                        gap-2
                    "
                >
                    <h2
                        className="
                            text-4xl
                            xl:text-4xl
                            2xl:text-4xl

                            bg-gradient-to-r
                            from-[#FF4D4D]
                            to-[#F9CB28]

                            text-transparent

                            bg-clip-text

                            font-semibold

                            text-center
                        "
                    >
                        Будуй
                    </h2>
                    <p
                        className="
                            text-2xl
                            xl:text-4xl
                            2xl:text-4xl
                            text-neutral-800

                            font-normal

                            text-center
                        "
                    >
                        Коли потрібно бути впевненим
                    </p>
                    <p
                        className="
                            text-lg
                            xl:text-xl
                            2xl:text-xl
                            text-neutral-600

                            font-normal

                            text-center
                        "
                    >
                        Ваша мрія у надійних руках, ми дбатимо про кожен етап проекту
                    </p>
                </div>
                <div
                    className="
                        w-full
                        h-fit

                        flex
                        flex-col
                        xl:grid
                        xl:grid-cols-2
                        2xl:grid
                        2xl:grid-cols-2

                        justify-center
                        items-center

                        gap-8
                    "
                >
                    <div
                        className="
                            w-fit
                            h-fit
                        "
                    >
                        <Image
                            className="
                                border
                                border-neutral-200

                                rounded-xl

                                shadow-sm

                                select-none
                            "
                            src="/pictures/holovna/img03.jpg"
                            width={960}
                            height={540}
                            alt="ТОВ «ДРІМБУДПРОДЖЕКТ» — Мрій. Проектуй. Будуй."
                            loading="lazy"
                        />
                    </div>
                    <div
                        className="
                            w-full
                            h-fit

                            flex
                            flex-col
                            
                            gap-8
                        "
                    >
                        <div
                            className="
                                w-full
                                h-fit

                                flex
                                flex-col
                            "
                        >
                            <div
                                className="
                                    w-full
                                    h-fit

                                    flex
                                    flex-row

                                    items-end

                                    gap-2
                                "
                            >
                                <Image
                                    className="
                                        select-none
                                    "
                                    src="/icons/calendar.svg"
                                    width={32}
                                    height={32}
                                    alt="Багаторічний досвід"
                                />
                                <p
                                    className="
                                        text-lg
                                        xl:text-xl
                                        2xl:text-xl
                                        text-neutral-800

                                        font-medium
                                    "
                                >
                                    Багаторічний досвід
                                </p>
                            </div>
                            <p
                                className="
                                    text-base
                                    xl:text-lg
                                    2xl:text-lg
                                    text-neutral-600
                                    
                                    font-normal

                                    text-justify
                                "
                            >
                                Постійно розширюємо можливості, співпрацюючи з провідними компаніями в Україні.
                            </p>
                        </div>
                        <div
                            className="
                                w-full
                                h-fit

                                flex
                                flex-col
                            "
                        >
                            <div
                                className="
                                    w-full
                                    h-fit

                                    flex
                                    flex-row

                                    items-end

                                    gap-2
                                "
                            >
                                <Image
                                    className="
                                        select-none
                                    "
                                    src="/icons/toolbox.svg"
                                    width={32}
                                    height={32}
                                    alt="Найсучасніші технології"
                                />
                                <p
                                    className="
                                        text-lg
                                        xl:text-xl
                                        2xl:text-xl
                                        text-neutral-800

                                        font-medium
                                    "
                                >
                                    Найсучасніші технології
                                </p>
                            </div>
                            <p
                                className="
                                    text-base
                                    xl:text-lg
                                    2xl:text-lg
                                    text-neutral-600
                                    
                                    font-normal

                                    text-justify
                                "
                            >
                                Цінуємо якість, турбуємося про команду та використовуємо передові технології.
                            </p>
                        </div>
                        <div
                            className="
                                w-full
                                h-fit

                                flex
                                flex-col
                            "
                        >
                            <div
                                className="
                                    w-full
                                    h-fit

                                    flex
                                    flex-row

                                    items-end

                                    gap-2
                                "
                            >
                                <Image
                                    className="
                                        select-none
                                    "
                                    src="/icons/certificate.svg"
                                    width={32}
                                    height={32}
                                    alt="Створюємо стандарти"
                                />
                                <p
                                    className="
                                        text-lg
                                        xl:text-xl
                                        2xl:text-xl
                                        text-neutral-800

                                        font-medium
                                    "
                                >
                                    Створюємо стандарти
                                </p>
                            </div>
                            <p
                                className="
                                    text-base
                                    xl:text-lg
                                    2xl:text-lg
                                    text-neutral-600
                                    
                                    font-normal

                                    text-justify
                                "
                            >
                                Завжди встановлюємо високі стандарти та працюємо на межі своїх можливостей.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
}