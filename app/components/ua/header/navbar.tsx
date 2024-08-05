"use client";

import React, { useCallback, useState } from "react";

import { usePathname } from "next/navigation";

import Image from "next/image";

{/** Menu */}
interface menu {
    id: number;
    menuItems?: menuItems[];
};

interface menuItems {
    id: number;
    title: string;
    src: string;
    alt: string;
    submenuItems?: submenuItems[];
};

interface submenuItems {
    id: number;
    title: string;
    src: string;
    alt: string;
    href: string;
};

const menu: menu[] = [
    {
        id: 1,
        menuItems: [
            {
                id: 1,
                title: "Проєктування",
                src: "/header/navbar/icons/menu/chevron-down.svg",
                alt: "Показати усі послуги",
                submenuItems: [
                    {
                        id: 1,
                        title: "Котеджі, будинки дачні та садові",
                        src: "/header/navbar/icons/submenu/proektuvannya/kotedzhi-budynky-dachni-ta-sadovi.svg",
                        alt: "Котеджі, будинки дачні та садові",
                        href: "/pages/ua/proektuvannya/kotedzhi-budynky-dachni-ta-sadovi",
                    },
                    {
                        id: 2,
                        title: "Будинки житлові багатоквартирні",
                        src: "/header/navbar/icons/submenu/proektuvannya/budynky-zhytlovi-bahatokvartyrni.svg",
                        alt: "Будинки житлові багатоквартирні",
                        href: "/pages/ua/proektuvannya/budynky-zhytlovi-bahatokvartyrni",
                    },
                    {
                        id: 3,
                        title: "Гуртожитки",
                        src: "/header/navbar/icons/submenu/proektuvannya/hurtozhytky.svg",
                        alt: "Гуртожитки",
                        href: "/pages/ua/proektuvannya/hurtozhytky",
                    },
                    {
                        id: 4,
                        title: "Готелі, ресторани, кафе, їдальні",
                        src: "/header/navbar/icons/submenu/proektuvannya/hoteli-restorany-kafe-yidalni.svg",
                        alt: "Готелі, ресторани, кафе, їдальні",
                        href: "/pages/ua/proektuvannya/hoteli-restorany-kafe-yidalni",
                    },
                    {
                        id: 5,
                        title: "Будівлі офісні",
                        src: "/header/navbar/icons/submenu/proektuvannya/budivli-ofisni.svg",
                        alt: "Будівлі офісні",
                        href: "/pages/ua/proektuvannya/budivli-ofisni",
                    },
                    {
                        id: 6,
                        title: "Торгові центри, універмаги, магазини",
                        src: "/header/navbar/icons/submenu/proektuvannya/torhovi-tsentry-univermahy-mahazyny.svg",
                        alt: "Торгові центри, універмаги, магазини",
                        href: "/pages/ua/proektuvannya/torhovi-tsentry-univermahy-mahazyny",
                    },
                    {
                        id: 7,
                        title: "Будівлі для публічних виступів",
                        src: "/header/navbar/icons/submenu/proektuvannya/budivli-dlya-publichnykh-vystupiv.svg",
                        alt: "Будівлі для публічних виступів",
                        href: "/pages/ua/proektuvannya/budivli-dlya-publichnykh-vystupiv",
                    },
                    {
                        id: 8,
                        title: "Спортивні зали",
                        src: "/header/navbar/icons/submenu/proektuvannya/sportyvni-zaly.svg",
                        alt: "Спортивні зали",
                        href: "/pages/ua/proektuvannya/sportyvni-zaly",
                    },
                    {
                        id: 9,
                        title: "Будівлі культової та релігійної діяльності",
                        src: "/header/navbar/icons/submenu/proektuvannya/budivli-kultovoyi-ta-relihiynoyi-diyalnosti.svg",
                        alt: "Будівлі культової та релігійної діяльності",
                        href: "/pages/ua/proektuvannya/budivli-kultovoyi-ta-relihiynoyi-diyalnosti",
                    },
                    {
                        id: 10,
                        title: "Будівлі транспорту та засобів зв'язку",
                        src: "/header/navbar/icons/submenu/proektuvannya/budivli-transportu-ta-zasobiv-zvyazku.svg",
                        alt: "Будівлі транспорту та засобів зв'язку",
                        href: "/pages/ua/proektuvannya/budivli-transportu-ta-zasobiv-zvyazku",
                    },
                    {
                        id: 11,
                        title: "Будівлі промислові та складські",
                        src: "/header/navbar/icons/submenu/proektuvannya/budivli-promyslovi-ta-skladski.svg",
                        alt: "Будівлі промислові та складські",
                        href: "/pages/ua/proektuvannya/budivli-promyslovi-ta-skladski",
                    },
                    {
                        id: 12,
                        title: "Резервуари, силоси та склади",
                        src: "/header/navbar/icons/submenu/proektuvannya/rezervuary-sylosy-ta-sklady.svg",
                        alt: "Резервуари, силоси та склади",
                        href: "/pages/ua/proektuvannya/rezervuary-sylosy-ta-sklady",
                    },
                    {
                        id: 13,
                        title: "Сільськогосподарські споруди",
                        src: "/header/navbar/icons/submenu/proektuvannya/silskohospodarski-sporudy.svg",
                        alt: "Сільськогосподарські споруди",
                        href: "/pages/ua/proektuvannya/silskohospodarski-sporudy",
                    },
                    {
                        id: 14,
                        title: "Автостради, вулиці та дороги",
                        src: "/header/navbar/icons/submenu/proektuvannya/avtostrady-vulytsi-ta-dorohy.svg",
                        alt: "Автостради, вулиці та дороги",
                        href: "/pages/ua/proektuvannya/avtostrady-vulytsi-ta-dorohy",
                    },
                    {
                        id: 15,
                        title: "Гідроспоруди",
                        src: "/header/navbar/icons/submenu/proektuvannya/hidrosporudy.svg",
                        alt: "Гідроспоруди",
                        href: "/pages/ua/proektuvannya/hidrosporudy",
                    },
                    {
                        id: 16,
                        title: "Інженерні споруди",
                        src: "/header/navbar/icons/submenu/proektuvannya/inzhenerni-sporudy.svg",
                        alt: "Інженерні споруди",
                        href: "/pages/ua/proektuvannya/inzhenerni-sporudy",
                    },
                ],
            },
            {
                id: 2,
                title: "Будівництво",
                src: "/header/navbar/icons/menu/chevron-down.svg",
                alt: "Показати усі послуги",
                submenuItems: [
                    {
                        id: 1,
                        title: "Житлово-цивільне будівництво",
                        src: "/header/navbar/icons/submenu/budivnytstvo/zhytlovo-tsyvilne-budivnytstvo.svg",
                        alt: "Житлово-цивільне будівництво",
                        href: "/pages/ua/budivnytstvo/zhytlovo-tsyvilne-budivnytstvo",
                    },
                    {
                        id: 2,
                        title: "Промислове будівництво",
                        src: "/header/navbar/icons/submenu/budivnytstvo/promyslove-budivnytstvo.svg",
                        alt: "Промислове будівництво",
                        href: "/pages/ua/budivnytstvo/promyslove-budivnytstvo",
                    },
                    {
                        id: 3,
                        title: "Автомагістралей та транспортних доріг",
                        src: "/header/navbar/icons/submenu/budivnytstvo/avtomahistraley-ta-transportnykh-dorih.svg",
                        alt: "Автомагістралей та транспортних доріг",
                        href: "/pages/ua/budivnytstvo/avtomahistraley-ta-transportnykh-dorih",
                    },
                ],
            },
            {
                id: 3,
                title: "Бомбосховище",
                src: "/header/navbar/icons/menu/chevron-down.svg",
                alt: "Показати усі послуги",
                submenuItems: [
                    {
                        id: 1,
                        title: "Протирадіаційні укриття",
                        src: "/header/navbar/icons/submenu/bomboskhovyshche/protyradiatsiyni-uukryttya.svg",
                        alt: "Протирадіаційні укриття",
                        href: "/pages/ua/bomboskhovyshche/protyradiatsiyni-uukryttya",
                    },
                    {
                        id: 2,
                        title: "Бомбосховища (сховища)",
                        src: "/header/navbar/icons/submenu/bomboskhovyshche/skhovyshcha.svg",
                        alt: "Бомбосховища (сховища)",
                        href: "/pages/ua/bomboskhovyshche/skhovyshcha",
                    },
                    {
                        id: 3,
                        title: "Споруди подвійного призначення",
                        src: "/header/navbar/icons/submenu/bomboskhovyshche/sporudy-podviynoho-pryznachennya.svg",
                        alt: "Споруди подвійного призначення",
                        href: "/pages/ua/bomboskhovyshche/sporudy-podviynoho-pryznachennya",
                    },
                    {
                        id: 4,
                        title: "Найпростіші укриття",
                        src: "/header/navbar/icons/submenu/bomboskhovyshche/nayprostishi-ukryttya.svg",
                        alt: "Найпростіші укриття",
                        href: "/pages/ua/bomboskhovyshche/nayprostishi-ukryttya",
                    },
                    {
                        id: 5,
                        title: "Швидкоспоруджувані захисні споруди",
                        src: "/header/navbar/icons/submenu/bomboskhovyshche/shvydkosporudzhuvani-zakhysni-sporudy.svg",
                        alt: "Швидкоспоруджувані захисні споруди",
                        href: "/pages/ua/bomboskhovyshche/shvydkosporudzhuvani-zakhysni-sporudy",
                    },
                ],
            },
        ],
    },
];

export default function NavbarUA() {

    const [activeStates, setActiveStates] = useState<{ [key: number]: boolean }>({});

    const activeStatesToggler = useCallback((id: number) => () => {
        setActiveStates((prevActiveStates) => ({
          ...prevActiveStates,
          [id]: !prevActiveStates[id],
        }));
      }, []);

    const [activeLanguage, setActiveLanguage] = useState(false);

    const pathname = usePathname();

    const [mobileMenu, setMobileMenu] = useState(false);

    return(
        <div
            className="
                px-8
                xl:px-16
                2xl:px-64

                w-full
                h-16

                bg-white/90
                backdrop-blur-sm

                border-b
                borde-neutral-200

                flex
                flex-row

                justify-between
                items-center
            "
        >
            <div
                className="
                    w-fit
                    h-fit
                "
            >
                <a
                    className="
                        w-32
                        h-8
                    "
                    href="/pages/ua"
                >
                    <Image
                        className="
                            select-none
                        "
                        src="/header/navbar/logo/ua/logo.svg"
                        width={128}
                        height={32}
                        alt="ДРІМБУДПРОДЖЕКТ"
                    />
                </a>
            </div>
            <div
                className="
                    w-fit
                    h-fit

                    hidden
                    xl:flex
                    xl:flex-row

                    justify-start
                    items-center

                    gap-2
                "
            >
                <div>
                    {menu.map((item) =>
                        <div
                            className="
                                w-fit
                                h-fit

                                flex
                                flex-row

                                justify-start
                                items-center

                                gap-2
                            "
                            key={item.id}
                        >
                            {item.menuItems?.map((item) =>
                                <div
                                    className="
                                        w-fit
                                        h-fit

                                        relative
                                    "
                                    key={item.id}
                                    onMouseEnter={activeStatesToggler(item.id)}
                                    onMouseLeave={activeStatesToggler(item.id)}
                                >
                                    <div
                                        className={`
                                            px-3
                                            py-1.5
                                        
                                            w-fit
                                            h-fit

                                            hover:bg-neutral-200

                                            rounded-full

                                            transition
                                            duration-300

                                            cursor-pointer

                                            flex
                                            flex-row

                                            justify-start
                                            items-center

                                            gap-1

                                            ${activeStates[item.id] ? "bg-neutral-200" : ""}
                                        `}
                                    >
                                        <p
                                            className="
                                                text-sm
                                                text-neutral-600
                                                hover:text-neutral-800

                                                font-normal

                                                transition
                                                duration-300
                                            "
                                        >
                                            {item.title}
                                        </p>
                                        <Image
                                            className={`
                                                transition-transform
                                                duration-300

                                                select-none

                                                ${activeStates[item.id] ? "rotate-180" : ""}
                                            `}
                                            src={item.src}
                                            width={10}
                                            height={10}
                                            alt={item.alt}
                                        />
                                    </div>
                                    {activeStates[item.id] && (
                                        <div
                                            className="
                                                absolute

                                                left-0
                                                top-8

                                                w-fit
                                                h-fit

                                                flex
                                                flex-col
                                            "
                                        >
                                            <div
                                                className="
                                                    z-30

                                                    ml-8

                                                    w-8
                                                    h-fit

                                                    overflow-hidden
                                                "
                                            >
                                                <div
                                                    className="
                                                        w-4
                                                        h-4
                        
                                                        bg-white/0
                                                        backdrop-blur-sm
                        
                                                        border
                                                        border-neutral-200
                        
                                                        transform
                                                        origin-bottom-left
                                                        rotate-45
                                                    "
                                                >
                                                </div>
                                            </div>
                                            <div
                                                className="
                                                    -mt-px

                                                    px-2
                                                    py-2

                                                    w-[664px]
                                                    h-fit

                                                    bg-white/90
                                                    backdrop-blur-sm

                                                    border
                                                    border-neutral-200

                                                    rounded-xl

                                                    shadow-xl

                                                    grid
                                                    grid-cols-2

                                                    gap-2
                                                "
                                            >
                                                {item.submenuItems?.map((item) =>
                                                    <a
                                                        className="
                                                            w-80
                                                            h-12

                                                            flex
                                                            flex-row

                                                            justify-start
                                                            items-center

                                                            gap-2

                                                            group
                                                        "
                                                        key={item.id}
                                                        href={item.href}
                                                    >
                                                        <div
                                                            className={`
                                                                px-2
                                                                py-2

                                                                w-fit
                                                                h-fit

                                                                bg-white

                                                                border
                                                                border-neutral-200
                                                                group-hover:border-neutral-400

                                                                rounded-xl

                                                                group-hover:shadow-md

                                                                transition
                                                                duration-300

                                                                ${pathname === item.href ? "border-neutral-400 shadow-md" : ""}
                                                            `}
                                                        >
                                                            <Image
                                                                className="
                                                                    select-none
                                                                "
                                                                src={item.src}
                                                                width={18}
                                                                height={18}
                                                                alt={item.alt}
                                                            />
                                                        </div>
                                                        <p
                                                            className="
                                                                text-sm
                                                                text-neutral-600
                                                                group-hover:text-neutral-800

                                                                font-medium

                                                                transition
                                                                duration-300
                                                            "
                                                        >
                                                                {item.title}
                                                        </p>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div
                    className="
                        w-fit
                        h-fit

                        flex
                        flex-row

                        justify-center
                        items-center

                        gap-4
                    "
                >
                    <a
                        className="
                            w-fit
                            h-fit
                        "
                        href="/pages/ua/vykonani-obyekty"
                    >
                        <p
                            className="
                                text-sm
                                text-neutral-600
                                hover:text-neutral-800

                                font-normal

                                transition
                                duration-300
                            "
                        >
                            Виконані об&apos;єкти
                        </p>
                    </a>
                    <a
                        className="
                            w-fit
                            h-fit
                        "
                        href="/pages/ua/dokumentatsiya"
                    >
                        <p
                            className="
                                text-sm
                                text-neutral-600
                                hover:text-neutral-800

                                font-normal

                                transition
                                duration-300
                            "
                        >
                            Документація
                        </p>
                    </a>
                    <a
                        className="
                            w-fit
                            h-fit
                        "
                        href="/pages/ua/pro-nas"
                    >
                        <p
                            className="
                                text-sm
                                text-neutral-600
                                hover:text-neutral-800

                                font-normal

                                transition
                                duration-300
                            "
                        >
                            Про нас
                        </p>
                    </a>
                </div>
            </div>
            <div
                className="
                    w-fit
                    h-fit

                    hidden
                    xl:flex
                    xl:flex-row

                    justify-start
                    items-center

                    gap-4
                "
            >
                <a
                    className="
                        w-fit
                        h-fit
                    "
                    href="/pages/ua/kontakty"
                >
                    <p
                        className="
                            text-sm
                            text-neutral-600
                            hover:text-neutral-800

                            font-normal

                            transition
                            duration-300
                        "
                    >
                        Контакти
                    </p>
                </a>
                <a
                    className="
                        px-3
                        py-1.5

                        w-fit
                        h-fit

                        bg-neutral-800
                        hover:bg-neutral-600

                        rounded-xl

                        transition
                        duration-300

                        group
                    "
                    href="/pages/ua/konsultatsiya"
                >
                    <p
                        className="
                            text-sm
                            text-neutral-100
                            group-hover:text-neutral-50

                            font-normal

                            transition
                            duration-300
                        "
                    >
                        Консультація
                    </p>
                </a>
                <div
                    className="
                        w-fit
                        h-fit

                        relative
                    "
                    onMouseEnter={() => setActiveLanguage(!activeLanguage)}
                    onMouseLeave={() => setActiveLanguage(!activeLanguage)}
                >
                    <div
                        className={`
                            px-1.5
                            py-1.5

                            w-fit
                            h-fit

                            bg-white/90
                            backdrop-blur-sm

                            border
                            border-neutral-200
                            hover:border-neutral-400

                            rounded-xl

                            hover:shadow-md

                            transition
                            duration-300

                            cursor-pointer

                            select-none

                            ${activeLanguage ? "border-neutral-400 shadow-md" : ""}
                        `}
                    >
                        <Image
                            src="/header/navbar/icons/menu/languages.svg"
                            width={18}
                            height={18}
                            alt="Змінити мову"
                        />
                    </div>
                    {activeLanguage && (
                        <div
                            className="
                                absolute

                                left-[-7.5px]
                                top-8

                                w-fit
                                h-fit

                                flex
                                flex-col

                                justify-center
                                items-center
                            "
                        >
                            <div
                                className="
                                    z-30

                                    ml-1.5

                                    w-8
                                    h-fit

                                    overflow-hidden
                                "
                            >
                                <div
                                    className="
                                        w-4
                                        h-4

                                        bg-white/90
                                        backdrop-blur-sm

                                        border
                                        border-neutral-200

                                        transform
                                        origin-bottom-left
                                        rotate-45
                                    "
                                >
                                </div>
                            </div>
                            <div
                                className="
                                    -mt-px

                                    px-2
                                    py-2

                                    w-fit
                                    h-fit

                                    bg-white/90
                                    backdrop-blur-sm

                                    border
                                    border-neutral-200

                                    rounded-xl

                                    shadow-xl

                                    flex
                                    flex-col

                                    gap-2
                                "
                            >
                                <a
                                    className="
                                        px-1.5
                                        py-1.5

                                        w-fit
                                        h-fit

                                        bg-neutral-200

                                        rounded-xl

                                        select-none
                                    "
                                >
                                    <p
                                        className="
                                            text-sm
                                            text-neutral-800

                                            font-medium
                                        "
                                    >
                                        UA
                                    </p>
                                </a>
                                <a
                                    className="
                                        px-1.5
                                        py-1.5

                                        w-fit
                                        h-fit

                                        bg-white
                                        hover:bg-neutral-200

                                        transition
                                        duration-300

                                        rounded-xl

                                        cursor-pointer

                                        select-none

                                        group
                                    "
                                    href="/pages/ru"
                                >
                                    <p
                                        className="
                                            text-sm
                                            text-neutral-600
                                            group-hover:text-neutral-800

                                            font-normal
                                        "
                                    >
                                        RU
                                    </p>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div
                className="
                    w-fit
                    h-fit

                    flex
                    xl:hidden
                "
            >
                <div
                    className="
                        w-fit
                        h-fit
                    "
                    onClick={() => setMobileMenu(!mobileMenu)}
                >
                    {mobileMenu ? (
                        <Image
                            className="
                                select-none
                            "
                            src="/header/navbar/icons/menu/menu-open.svg"
                            width={32}
                            height={32}
                            alt="Закрити меню"
                        />
                    ) : (
                        <Image
                            className="
                                select-none
                            "
                            src="/header/navbar/icons/menu/menu-close.svg"
                            width={32}
                            height={32}
                            alt="Відкрити меню"
                        />
                    )}
                </div>
                {mobileMenu && (
                    <div
                        className="
                            absolute

                            left-0
                            top-16

                            px-8
                            py-2

                            w-full
                            h-screen

                            bg-white/90
                            backdrop-blur-sm

                            flex
                            flex-col

                            gap-3

                            overflow-y-scroll
                        "
                    >
                    </div>
                )}
            </div>
        </div>
    );
}
