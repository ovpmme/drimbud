import Image from "next/image";

{/** Contacts */}
interface contacts {
    id: number;
    src: string;
    alt: string;
    text: string;
};

const contacts: contacts[] = [
    {
        id: 1,
        src: "/header/topbar/icons/contacts/phone-number.svg",
        alt: "Номер телефону",
        text: "+38 (067) 262-3778",
    },
    {
        id: 2,
        src: "/header/topbar/icons/contacts/email.svg",
        alt: "Електронна пошта",
        text: "mail@drimbud.com.ua",
    },
    {
        id: 3,
        src: "/header/topbar/icons/contacts/address.svg",
        alt: "Адреса",
        text: "пр. Олександра Поля, 28а, Дніпро",
    },
];

{/** Messengers */}
interface messengers {
    id: number;
    src: string;
    alt: string;
    href: string;
};

const messengers: messengers[] = [
    {
        id: 1,
        src: "/header/topbar/icons/messengers/telegram.svg",
        alt: "Написати у Telegram",
        href: "https://t.me/+380672623778",
    },
    {
        id: 2,
        src: "/header/topbar/icons/messengers/viber.svg",
        alt: "Написати у Viber",
        href: "viber://chat?number=+380672623778",
    },
    {
        id: 3,
        src: "/header/topbar/icons/messengers/whatsapp.svg",
        alt: "Написати у WhatsApp",
        href: "https://wa.me/+380672623778",
    },
];

export default function TopbarUA() {
    return(
        <div
            className="
                xl:px-16
                2xl:px-64

                w-full
                h-8

                bg-white/90
                backdrop-blur-sm

                border-b
                border-neutral-200

                hidden
                xl:flex
                xl:flex-row

                justify-between
                items-center
            "
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
                {contacts.map((item) =>
                    <div
                        className="
                            w-fit
                            h-fit

                            flex
                            flex-row

                            justify-start
                            items-center

                            gap-1
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
                                text-neutral-600

                                font-normal
                            "
                        >
                            {item.text}
                        </p>
                    </div>
                )}
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
                {messengers.map((item) =>
                    <a
                        className="
                            w-fit
                            h-fit
                        "
                        href={item.href}
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
                    </a>
                )}
            </div>
        </div>
    );
}
