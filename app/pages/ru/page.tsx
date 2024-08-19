import Image from "next/image";

{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Главная — ООО «ДРІМБУДПРОДЖЕКТ» — Мечтай. Проектируй. Строй.",
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
        title: "Главная — ООО «ДРІМБУДПРОДЖЕКТ» — Мечтай. Проектируй. Строй.",
        description: "Заказывай проектирование и строительство. Звони по номеру: +38 (067) 262-3778.",
        url: "https://drimbud.com.ua/pages/ru",
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

export default function Glavnaya() {
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
                        <span data-content="Мечтай." className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-black before:animate-gradient-background-1">
                            <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1"> Мечтай.</span>
                        </span>
                        <span data-content="Проектируй." className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-black before:animate-gradient-background-2">
                            <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2"> Проектируй.</span>
                        </span>
                        <span data-content="Строй." className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-black before:animate-gradient-background-3">
                            <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3"> Строй.</span>
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
                        Воплотим ваши изысканные желания. Передайте нам скучную работу и наслаждайтесь жизнью.
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
                        href="/pages/ru/kontakty"
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
                                Контакты
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
                                    Больше о нас
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
                                    Больше о нас
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
                                    Больше о нас
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
                                    Больше о нас
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
                        Бизнес, который нам доверяет:
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
                                alt="ДТЭК"
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
                                alt="Киевстар"
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
                                alt="Ковальская"
                            />
                            <Image
                                src="/images/clients/metinvest.svg"
                                width={189}
                                height={34}
                                alt="Метинвест"
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
                                alt="Сильпо"
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
                        Мечтай
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
                        Когда приходит вдохновение
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
                        Ограничены временем? Полагайтесь на нашу команду без лишних слов!
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
                            alt="ООО «ДРІМБУДПРОДЖЕКТ» — Мечтай. Проектируй. Строй."
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
                                    alt="Обращайтесь к менеджерам"
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
                                    Обращайтесь к менеджерам
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
                                Готовы помочь вам разобраться во всех нюансах и необходимых деталях.
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
                                    alt="Определитесь с потребностями"
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
                                    Определите потребности
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
                                Важно понимать, чего именно вы стремитесь достичь, для успешной реализации ваших желаний.
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
                                    alt="Выберите специалиста"
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
                                    Выберите специалиста
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
                                Для каждой конкретной цели необходим соответствующий специалист. Мы предоставим вам профессионалов, учитывая ваши потребности.
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
                        Проектируй
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
                        Когда требуется внимание к каждой детали
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
                        Мы обращаем внимание на самые мельчайшие детали, чтобы гордиться нашими проектами
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
                                    alt="Создадим проект"
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
                                    Создадим проект
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
                                Каждое дело начинается с малого. Любые проекты возникают из эскизов.
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
                                    alt="Соблюдем график"
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
                                    Соблюдем график
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
                                В нашей работе время является ключевым фактором, всегда придерживаемся жестких сроков.
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
                                    alt="Согласуем документацию"
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
                                    Согласуем документацию
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
                                Мы урегулируем все вопросы в необходимых инстанциях и передадим вам готовый пакет документов.
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
                            alt="ООО «ДРІМБУДПРОДЖЕКТ» — Мечтай. Проектируй. Строй."
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
                        Строй
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
                        Когда нужно быть уверенным
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
                        Ваша мечта в надежных руках, мы будем заботиться о каждом этапе проекта
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
                            alt="ООО «ДРІМБУДПРОДЖЕКТ» — Мечтай. Проектируй. Строй."
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
                                    alt="Многолетний опыт"
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
                                    Многолетний опыт
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
                                Постоянно расширяем возможности, сотрудничая с ведущими компаниями в Украине.
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
                                    alt="Современные технологии"
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
                                    Современные технологии
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
                                Ценим качество, заботимся о команде и используем передовые технологии.
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
                                    alt="Устанавливаем стандарты"
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
                                    Устанавливаем стандарты
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
                                Всегда устанавливаем высокие стандарты и работаем на грани своих возможностей.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
}