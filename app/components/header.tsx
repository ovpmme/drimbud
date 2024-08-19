"use client";

import React, { useCallback, useState } from "react";

import { usePathname } from "next/navigation";

import Image from "next/image";

export default function Header({ data }: { data: any }) {

    {/** Extended Menu */}
        const [activeMenu, setActiveMenu] = useState<{ [key: number]: boolean }>({});

        const activeMenuToggler = useCallback((id: number) => () => {
            setActiveMenu((prevActiveMenu) => ({
            ...prevActiveMenu,
            [id]: !prevActiveMenu[id],
            }));
        }, []);

    {/** Language Switcher */}
        const [activeLanguageSwitcher, setActiveLanguageSwitcher] = useState(false);

    {/** Pathname */}
        const pathname = usePathname();

    {/** Mobile Menu */}
        const [activeMobileMenu, setActiveMobileMenu] = useState(false);

    return (
        <>
            {data.header.map((header: any) => (
                <div
                    className="
                        z-50

                        sticky

                        top-0

                        w-full
                        h-fit

                        flex
                        flex-col
                    "
                    key={header.id}
                >
                    {header.topbar.map((topbar: any) => ((
                        <div
                            className="
                                w-full
                                h-8

                                bg-white/90
                                backdrop-blur

                                border-b
                                border-neutral-200

                                px-8
                                xl:px-16
                                2xl:px-64

                                hidden
                                xl:flex
                                xl:flex-row
                                2xl:flex
                                2xl:flex-row

                                justify-between
                                items-center
                            "
                            key={topbar.id}
                        >
                            <div
                                className="
                                    w-fit
                                    h-fit

                                    flex
                                    flex-row

                                    justify-start
                                    items-center

                                    gap-4
                                "
                            >
                            {topbar.contacts.map((item: any) =>(
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
                                    <Image
                                        className="
                                            select-none
                                        "
                                        src={item.src}
                                        width={18}
                                        height={18}
                                        alt={item.alt}
                                    />
                                    <p
                                        className="
                                            text-sm
                                            text-neutral-800

                                            font-normal
                                        "
                                    >
                                        {item.title}
                                    </p>
                                </div>
                            ))}
                            </div>
                            <div
                                className="
                                    w-fit
                                    h-fit

                                    flex
                                    flex-row

                                    justify-start
                                    items-center

                                    gap-4
                                "
                            >
                                {topbar.messengers.map((item: any) => (
                                    <a
                                        className="
                                            w-fit
                                            h-fit
                                        "
                                        key={item.id}
                                        href={item.href}
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
                                    </a>
                                ))}
                            </div>
                        </div>

                    )))}
                    {header.navbar.map((navbar: any) => (
                        <div
                            className="
                                w-full
                                h-16

                                bg-white/90
                                backdrop-blur

                                border-b
                                border-neutral-200

                                px-8
                                xl:px-16
                                2xl:px-64

                                flex
                                flex-row

                                justify-between
                                items-center
                            "
                            key={navbar.id}
                        >
                            {navbar.logo.map((item: any) => (
                                <a
                                    className="
                                        w-fit
                                        h-fit
                                    "
                                    key={item.id}
                                    href={item.href}
                                >
                                    <Image
                                        className="
                                            select-none
                                        "
                                        src={item.src}
                                        width={128}
                                        height={32}
                                        alt={item.alt}
                                    />
                                </a>
                            ))}
                            {navbar.menu.map((menu: any) => (
                                <div
                                    className="
                                        w-fit
                                        h-fit

                                        hidden
                                        xl:flex
                                        2xl:flex-row

                                        justify-start
                                        items-center

                                        gap-4
                                    "
                                    key={menu.id}
                                >
                                    {menu.extended.map((extended: any) => (
                                        <div
                                            className="
                                                w-fit
                                                h-fit

                                                hover:bg-neutral-200

                                                rounded-full

                                                transition
                                                duration-300

                                                px-3
                                                py-1.5

                                                flex
                                                flex-row

                                                justify-start
                                                items-center

                                                gap-2

                                                cursor-pointer

                                                group

                                                relative
                                            "
                                            key={extended.id}
                                            onMouseEnter={activeMenuToggler(extended.id)}
                                            onMouseLeave={activeMenuToggler(extended.id)}
                                        >
                                            <p
                                                className="
                                                    text-sm
                                                    text-neutral-600
                                                    group-hover:text-neutral-800

                                                    font-normal

                                                    text-start

                                                    transition
                                                    duration-300
                                                "
                                            >
                                                {extended.title}
                                            </p>
                                            <Image
                                                className={`
                                                    transition-transform
                                                    ${activeMenu[extended.id] ? "rotate-180" : ""}

                                                    select-none
                                                `}
                                                src={extended.src}
                                                width={12}
                                                height={12}
                                                alt={extended.alt}
                                            />
                                            {activeMenu[extended.id] && (
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
                                                            z-10

                                                            ml-4

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
                                                                backdrop-blur

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

                                                            w-[664px]
                                                            h-fit

                                                            bg-white/90
                                                            backdrop-blur

                                                            border
                                                            border-neutral-200

                                                            rounded-xl

                                                            shadow-xl

                                                            px-2
                                                            py-2

                                                            grid
                                                            grid-cols-2

                                                            gap-2
                                                        "
                                                    >
                                                        {extended.items.map((item: any) =>
                                                            <a
                                                                className="
                                                                    w-80
                                                                    h-12

                                                                    flex
                                                                    flex-row

                                                                    justify-start
                                                                    items-center

                                                                    gap-2

                                                                    group/item
                                                                "
                                                                key={item.id}
                                                                href={item.href}
                                                            >
                                                                <div
                                                                    className={`
                                                                        w-fit
                                                                        h-fit

                                                                        border
                                                                        border-neutral-200
                                                                        group-hover/item:border-neutral-400

                                                                        rounded-xl

                                                                        group-hover/item:shadow-xl

                                                                        transition
                                                                        duration-300

                                                                        px-2
                                                                        py-2

                                                                        ${pathname.startsWith(item.href) ? "border-neutral-400 shadow-xl" : ""}
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
                                                                    className={`
                                                                        text-sm
                                                                        text-neutral-600
                                                                        group-hover/item:text-neutral-800

                                                                        font-normal

                                                                        transition
                                                                        duration-300

                                                                        ${pathname.startsWith(item.href) ? "text-neutral-800" : ""}
                                                                    `}
                                                                >
                                                                    {item.title}
                                                                </p>
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    {menu.standard.map((item: any) => (
                                        <a
                                            className="
                                                w-fit
                                                h-fit

                                                px-3
                                                py-1.5
                                            "
                                            key={item.id}
                                            href={item.href}
                                        >
                                            <p
                                                className="
                                                    text-sm
                                                    text-neutral-600
                                                    hover:text-neutral-800

                                                    font-normal

                                                    text-start

                                                    transition
                                                    duration-300
                                                "
                                            >
                                                {item.title}
                                            </p>
                                        </a>
                                    ))}
                                </div>
                            ))}
                            {navbar.aside.map((aside: any) => (
                                <div
                                    className="
                                        w-fit
                                        h-fit

                                        hidden
                                        xl:flex
                                        xl:flex-row
                                        2xl:flex
                                        2xl:flex-row

                                        justify-start
                                        items-center

                                        gap-4
                                    "
                                    key={aside.id}
                                >
                                    {aside.standard.map((item: any) => (
                                        <a
                                            className="
                                                w-fit
                                                h-fit

                                                px-3
                                                py-1.5
                                            "
                                            key={item.id}
                                            href={item.href}
                                        >
                                            <p
                                                className="
                                                    text-sm
                                                    text-neutral-600
                                                    hover:text-neutral-800

                                                    font-normal

                                                    text-start

                                                    transition
                                                    duration-300
                                                "
                                            >
                                                {item.title}
                                            </p>
                                        </a>
                                    ))}
                                    {aside.colorful.map((item: any) => (
                                        <a
                                            className="
                                                w-fit
                                                h-fit

                                                bg-neutral-800
                                                hover:bg-neutral-600

                                                rounded-xl

                                                transition
                                                duration-300

                                                px-3
                                                py-1.5

                                                group
                                            "
                                            key={item.id}
                                            href={item.href}
                                        >
                                            <p
                                                className="
                                                    text-sm
                                                    text-neutral-50
                                                    group-hover:text-neutral-100

                                                    font-medium

                                                    text-start

                                                    transition
                                                    duration-300
                                                "
                                            >
                                                {item.title}
                                            </p>
                                        </a>
                                    ))}
                                    {aside.extended.map((extended: any) => (
                                        <div
                                            className="
                                                w-fit
                                                h-fit

                                                bg-white/90
                                                backdrop-blur

                                                border
                                                border-neutral-200
                                                hover:border-neutral-400

                                                rounded-xl

                                                hover:shadow-xl

                                                transition
                                                duration-300

                                                px-2
                                                py-2

                                                cursor-pointer

                                                select-none

                                                relative
                                            "
                                            key={extended.id}
                                            onMouseEnter={() => setActiveLanguageSwitcher(!activeLanguageSwitcher)}
                                            onMouseLeave={() => setActiveLanguageSwitcher(!activeLanguageSwitcher)}
                                        >
                                            <Image
                                                className="
                                                    select-none
                                                "
                                                src={extended.src}
                                                width={18}
                                                height={18}
                                                alt={extended.alt}
                                            />
                                            {activeLanguageSwitcher && (
                                                <div
                                                    className="
                                                        absolute

                                                        -left-2
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
                                                                z-10

                                                                ml-2

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
                                                                    backdrop-blur

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

                                                                w-fit
                                                                h-fit

                                                                bg-white/90
                                                                backdrop-blur

                                                                border
                                                                border-neutral-200

                                                                rounded-xl

                                                                shadow-xl

                                                                px-2
                                                                py-2

                                                                flex
                                                                flex-col

                                                                gap-2
                                                            "
                                                        >
                                                            {extended.items.map((item: any) =>
                                                                <a
                                                                    className={`
                                                                        w-fit
                                                                        h-fit

                                                                        hover:bg-neutral-200

                                                                        rounded-xl

                                                                        select-none

                                                                        px-2
                                                                        py-2

                                                                        group

                                                                        ${pathname.startsWith(item.href) ? "bg-neutral-200" : ""}
                                                                    `}
                                                                    key={item.id}
                                                                    href={item.href}
                                                                >
                                                                    <p
                                                                        className="
                                                                            text-sm
                                                                            text-neutral-600
                                                                            hover:text-neutral-800

                                                                            font-normal

                                                                            text-start
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
                                    ))}
                                </div>
                            ))}
                            <div
                                className="
                                    w-8
                                    h-8

                                    flex
                                    xl:hidden
                                    2xl:hidden

                                    items-center
                                    justify-center
                                "
                            >
                                <div
                                    className="
                                        w-fit
                                        h-fit

                                        cursor-pointer
                                    "
                                    onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                                >
                                    {activeMobileMenu ? (
                                    <Image
                                        className="
                                            select-none
                                        "
                                        src="/icons/cross-circle.svg"
                                        width={30}
                                        height={30}
                                        alt="Відкрити мобільне меню"
                                    />
                                    ) : (
                                    <Image
                                        className="
                                            select-none
                                        "
                                        src="/icons/menu-circle.svg"
                                        width={32}
                                        height={32}
                                        alt="Відкрити мобільне меню"
                                    />
                                    )}
                                </div>
                                {activeMobileMenu && (
                                    <div
                                        className="
                                            absolute

                                            left-0
                                            top-16

                                            w-full
                                            h-screen

                                            bg-white/90
                                            backdrop-blur

                                            px-8
                                            py-8

                                            flex
                                            flex-col

                                            gap-4

                                            overflow-y-scroll
                                        "
                                    >
                                        {navbar.menu.map((menu: any) => (
                                            <div
                                                className="
                                                    w-full
                                                    h-fit

                                                    flex
                                                    flex-col

                                                    gap-4
                                                "
                                                key={menu.id}
                                            >
                                                {menu.extended.map((extended: any) => (
                                                    <>
                                                        <div
                                                            className="
                                                                w-full
                                                                h-fit

                                                                border-b
                                                                border-neutral-200

                                                                flex
                                                                flex-row

                                                                justify-between
                                                                items-center
                                                            "
                                                            key={extended.id}
                                                            onClick={activeMenuToggler(extended.id)}
                                                        >
                                                            <p
                                                                className="
                                                                    text-base
                                                                    text-neutral-600
                                                                    group-hover:text-neutral-800

                                                                    font-normal

                                                                    text-start

                                                                    transition
                                                                    duration-300
                                                                "
                                                            >
                                                                {extended.title}
                                                            </p>
                                                            <Image
                                                                className={`
                                                                    transition-transform
                                                                    ${activeMenu[extended.id] ? "rotate-180" : ""}

                                                                    select-none
                                                                `}
                                                                src={extended.src}
                                                                width={12}
                                                                height={12}
                                                                alt={extended.alt}
                                                            />
                                                        </div>
                                                        {activeMenu[extended.id] && (
                                                            <div
                                                                className="
                                                                    w-full
                                                                    h-fit

                                                                    flex
                                                                    flex-col

                                                                    gap-4
                                                                "
                                                            >
                                                                {extended.items.map((item: any) =>
                                                                    <a
                                                                        className="
                                                                            w-full
                                                                            h-fit

                                                                            flex
                                                                            flex-row

                                                                            justify-start
                                                                            items-center

                                                                            gap-2

                                                                            group/item
                                                                        "
                                                                        key={item.id}
                                                                        href={item.href}
                                                                    >
                                                                        <div
                                                                            className={`
                                                                                w-fit
                                                                                h-fit

                                                                                border
                                                                                border-neutral-200
                                                                                group-hover/item:border-neutral-400

                                                                                rounded-xl

                                                                                group-hover/item:shadow-xl

                                                                                transition
                                                                                duration-300

                                                                                px-2
                                                                                py-2

                                                                                ${pathname.startsWith(item.href) ? "border-neutral-400 shadow-xl" : ""}
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
                                                                            className={`
                                                                                text-sm
                                                                                text-neutral-600
                                                                                group-hover/item:text-neutral-800

                                                                                font-normal

                                                                                transition
                                                                                duration-300

                                                                                ${pathname.startsWith(item.href) ? "text-neutral-800" : ""}
                                                                            `}
                                                                        >
                                                                            {item.title}
                                                                        </p>
                                                                    </a>
                                                                )}
                                                            </div>
                                                        )}
                                                    </>
                                                ))}
                                                {menu.standard.map((standard: any) => (
                                                    <div
                                                        className="
                                                            w-full
                                                            h-fit

                                                            border-b
                                                            border-neutral-200

                                                            flex
                                                            flex-row

                                                            justify-start
                                                            items-center
                                                        "
                                                        key={standard.id}
                                                    >
                                                        <p
                                                            className="
                                                                text-base
                                                                text-neutral-600
                                                                group-hover:text-neutral-800

                                                                font-normal

                                                                text-start

                                                                transition
                                                                duration-300
                                                            "
                                                        >
                                                            {standard.title}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                        {navbar.aside.map((aside: any) => (
                                            <div
                                                className="
                                                    w-full
                                                    h-fit

                                                    flex
                                                    flex-col

                                                    gap-4
                                                "
                                                key={aside.id}
                                            >
                                                {aside.standard.map((item: any) => (
                                                    <a
                                                        className="
                                                            w-full
                                                            h-fit

                                                            border-b
                                                            border-neutral-200

                                                            flex
                                                            flex-row

                                                            justify-start
                                                            items-center
                                                        "
                                                        key={item.id}
                                                        href={item.href}
                                                    >
                                                        <p
                                                            className="
                                                                text-base
                                                                text-neutral-600
                                                                group-hover:text-neutral-800

                                                                font-normal

                                                                text-start

                                                                transition
                                                                duration-300
                                                            "
                                                        >
                                                            {item.title}
                                                        </p>
                                                    </a>
                                                ))}
                                                <div
                                                    className="
                                                        w-full
                                                        h-fit

                                                        flex
                                                        flex-row

                                                        gap-4
                                                    "
                                                >
                                                    {aside.colorful.map((item: any) => (
                                                        <a
                                                            className="
                                                                w-full
                                                                h-fit

                                                                bg-neutral-800
                                                                hover:bg-neutral-600

                                                                rounded-xl

                                                                transition
                                                                duration-300

                                                                px-0
                                                                py-1.5

                                                                flex

                                                                justify-center

                                                                group
                                                            "
                                                            key={item.id}
                                                            href={item.href}
                                                        >
                                                            <p
                                                                className="
                                                                    text-sm
                                                                    text-neutral-50
                                                                    group-hover:text-neutral-100

                                                                    font-medium

                                                                    text-start

                                                                    transition
                                                                    duration-300
                                                                "
                                                            >
                                                                {item.title}
                                                            </p>
                                                        </a>
                                                    ))}
                                                    {aside.extended.map((extended: any) => (
                                                        <div
                                                            className="
                                                                w-fit
                                                                h-fit

                                                                bg-white/90
                                                                backdrop-blur

                                                                border
                                                                border-neutral-200
                                                                hover:border-neutral-400

                                                                rounded-xl

                                                                hover:shadow-xl

                                                                transition
                                                                duration-300

                                                                px-2
                                                                py-2

                                                                cursor-pointer

                                                                select-none

                                                                relative
                                                            "
                                                            key={extended.id}
                                                            onClick={() => setActiveLanguageSwitcher(!activeLanguageSwitcher)}
                                                        >
                                                            <Image
                                                                className="
                                                                    select-none
                                                                "
                                                                src={extended.src}
                                                                width={18}
                                                                height={18}
                                                                alt={extended.alt}
                                                            />
                                                            {activeLanguageSwitcher && (
                                                                <div
                                                                    className="
                                                                        absolute

                                                                        -left-2
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
                                                                                z-10

                                                                                ml-2

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
                                                                                    backdrop-blur

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

                                                                                w-fit
                                                                                h-fit

                                                                                bg-white/90
                                                                                backdrop-blur

                                                                                border
                                                                                border-neutral-200

                                                                                rounded-xl

                                                                                shadow-xl

                                                                                px-2
                                                                                py-2

                                                                                flex
                                                                                flex-col

                                                                                gap-2
                                                                            "
                                                                        >
                                                                            {extended.items.map((item: any) =>
                                                                                <a
                                                                                    className={`
                                                                                        w-fit
                                                                                        h-fit

                                                                                        hover:bg-neutral-200

                                                                                        rounded-xl

                                                                                        select-none

                                                                                        px-2
                                                                                        py-2

                                                                                        group

                                                                                        ${pathname.startsWith(item.href) ? "bg-neutral-200" : ""}
                                                                                    `}
                                                                                    key={item.id}
                                                                                    href={item.href}
                                                                                >
                                                                                    <p
                                                                                        className="
                                                                                            text-sm
                                                                                            text-neutral-600
                                                                                            hover:text-neutral-800

                                                                                            font-normal

                                                                                            text-start
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
                                                    ))}
                                                </div>

                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
}