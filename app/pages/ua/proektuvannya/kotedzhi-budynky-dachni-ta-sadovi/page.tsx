"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";

{/** Categoty data */}
interface category {
    id: number;
    categoty: string;
    src: string;
    alt: string;
    service: string;
    date: string;
};

const category: category[] = [
    {
        id: 1,
        categoty: "Проєктування",
        src: "/content/category/icons/arrow-right.svg",
        alt: "Далі",
        service: "Котеджі, будинки дачні та садові",
        date: "Оновлено 1 серпня 2024 року",
    },
];

{/** Article */}
interface article {
    id: number,
    title: string;
    section: section[];
};

interface section {
    id: number,
    title: string;
    paragraph: string;
};

const article: article[] = [
    {
        id: 1,
        title: "Проєктування котеджів, будинків дачних та садових",
        section: [
            {
                id: 1,
                title: "Що таке котеджі, будинки дачні та садові?",
                paragraph: "Котеджі, дачні та садові будинки – це типи житла, які розташовані за межами міських територій. Вони зазвичай використовуються для тимчасового або постійного проживання. Котеджі зазвичай є більшими та більш комфортабельними, часто мають два або більше поверхів, високоякісні матеріали та сучасні зручності. Дачні будинки, навпаки, є більш простими і зазвичай використовуються для відпочинку влітку. Садові будинки часто менші за розміром і призначені для короткотривалого перебування або використання як приміщення для зберігання садового інвентарю.",
            },
            {
                id: 2,
                title: "Для чого потрібні котеджі, будинки дачні та садові?",
                paragraph: "Основна функція котеджів, дачних та садових будинків – забезпечення комфортного проживання та відпочинку поза містом. Котеджі часто використовуються як постійне місце проживання для сімей, які прагнуть жити в тихому, спокійному середовищі, подалі від міського шуму та суєти. Дачні будинки слугують місцем для літнього відпочинку, проведення часу з сім'єю та друзями, заняття садівництвом. Садові будинки забезпечують додаткове приміщення для відпочинку на природі та зберігання інвентарю, необхідного для догляду за садом.",
            },
        ],
    },
];

{/** Service */}
interface service {
    id: number;
    src: string;
    alt: string;
    description: string;
};

const service: service[] = [
    {
        id: 1,
        src: "/content/article/pictures/kotedzhi-budynky-dachni-ta-sadovi/img01.jpg",
        alt: "",
        description: "Сучасний двоповерховий котедж у міській місцевості представлений на кресленні. Архітектурний план демонструє передній фасад будинку зі стильними лініями, великими вікнами, затишним ґанком і балконом на другому поверсі.",
    },
    {
        id: 2,
        src: "/content/article/pictures/kotedzhi-budynky-dachni-ta-sadovi/img02.jpg",
        alt: "",
        description: "На фото зображено сучасний двоповерховий котедж у міській місцевості. Будинок має чисті лінії, великі скляні вікна та стильний вхід із невеличким ґанком. Балкон на другому поверсі додає будинку елегантності. Оточення мінімалістичне, що акцентує увагу на самому будинку. Ясне блакитне небо підкреслює спокійну та затишну атмосферу.",
    },
    {
        id: 3,
        src: "/content/article/pictures/kotedzhi-budynky-dachni-ta-sadovi/img03.jpg",
        alt: "",
        description: "Велика вітальня сучасного двоповерхового котеджу виглядає світлою і просторою. Стіни та стеля пофарбовані у світлі тони, великі вікна пропускають багато природного світла. Зручні дивани та крісла створюють затишний куточок для відпочинку, в центрі кімнати розташований кавовий столик. Сучасний декор гармонійно доповнює стиль будинку.",
    },
    {
        id: 4,
        src: "/content/article/pictures/kotedzhi-budynky-dachni-ta-sadovi/img04.jpg",
        alt: "",
        description: "Сучасна кухня двоповерхового котеджу виглядає стильно та функціонально. Кухонні стільниці та шафи мають гладку поверхню, у центрі знаходиться острівець. Сучасна побутова техніка доповнює інтер'єр. Легкий та повітряний декор, великі вікна забезпечують багато природного світла, підтримуючи загальний стиль будинку.",
    },
    {
        id: 5,
        src: "/content/article/pictures/kotedzhi-budynky-dachni-ta-sadovi/img05.jpg",
        alt: "",
        description: "Затишна спальня у сучасному двоповерховому котеджі. У кімнаті великий зручний ліжко зі стильним узголів'ям, тумбочки, м'який килимок і шафа. Світлі стіни та широкі вікна з легкими шторами створюють спокійну атмосферу, відповідну загальному стилю будинку.",
    },
    {
        id: 6,
        src: "/content/article/pictures/kotedzhi-budynky-dachni-ta-sadovi/img06.jpg",
        alt: "",
        description: "Сучасна ванна кімната в двоповерховому котеджі виглядає стильно та функціонально. Світлі кахлі, велике дзеркало над гладкою тумбою, ванна та скляна душова кабіна з вирівняними швами створюють елегантний вигляд. Кімната добре освітлена, підтримуючи сучасний стиль, присутній у всьому будинку.",
    },
];

{/** Tips */}
interface tips {
    id: number;
    title: string;
    itemlist: string[];
};

const tips: tips[] = [
    {
        id: 1,
        title: "1. Основні принципи та етапи проєктування:",
        itemlist: [
            "Визначення призначення будинку: Чи буде це постійне житло, місце для літнього відпочинку або приміщення для зберігання садового інвентарю?",
            "Вибір місця розташування: Ділянка повинна бути зручною для будівництва, мати доступ до необхідних комунікацій.",
            "Розробка плану будинку: Враховуйте кількість поверхів, загальну площу, розташування кімнат та інші важливі аспекти.",
            "Вибір будівельних матеріалів: Якість матеріалів вплине на комфорт і довговічність будинку.",
        ],
    },
    {
        id: 2,
        title: "2. Необхідні інструменти та ресурси:",
        itemlist: [
            "Архітектурне програмне забезпечення (наприклад, AutoCAD, SketchUp).",
            "Будівельні матеріали (цегла, дерево, бетон, тощо).",
            "Інженерні системи (системи опалення, водопостачання, електропостачання).",
            "Фахівці (архітектори, будівельники, інженери).",
        ],
    },
    {
        id: 3,
        title: "3. Поради та рекомендації:",
        itemlist: [
            "Плануйте кожен етап будівництва заздалегідь.",
            "Залучайте фахівців на всіх етапах проєктування та будівництва.",
            "Використовуйте якісні та екологічно чисті матеріали.",
            "Враховуйте майбутнє використання будинку та можливі зміни в його призначенні.",
            "Забезпечте комфортні умови проживання, передбачивши необхідні комунікації та сучасні зручності.",
        ],
    },
];

{/** Table */}
interface table {
    id: number;
    itemtable: string;
    time: string;
    price: string;
};

const table: table[] = [
    {
        id: 1,
        itemtable: "Розроблення ескізного проєкту",
        time: "від 10",
        price: "від 20000",
    },
    {
        id: 2,
        itemtable: "Розробка проєкту для отримання будівельного паспорту на початок будівництва",
        time: "від 10",
        price: "від 3000",
    },
    {
        id: 3,
        itemtable: "Розробка робочого проєкту",
        time: "від 10",
        price: "від 5000",
    },
    {
        id: 4,
        itemtable: "Розробка генерального плану",
        time: "від 10",
        price: "від 200",
    },
    {
        id: 5,
        itemtable: "Розрахунок кошторису на будівництво",
        time: "від 10",
        price: "від 5000",
    },
    {
        id: 6,
        itemtable: "3D візуалізація інтер’єру та екстер’єру будинку",
        time: "від 10",
        price: "від 120",
    },
    {
        id: 7,
        itemtable: "Містобудівний розрахунок",
        time: "від 10",
        price: "від 2000",
    },
];

{/** Call to action */}
interface callToAction {
    id: number,
    title: string;
    paragraph: string;
};

const callToAction: callToAction[] = [
    {
        id: 1,
        title: "Як замовити проєктування котеджу, будинку дачного та садового?",
        paragraph: "Для отримання консультації з будь-яких питань, телефонуйте за номером +38 (067) 262-3778. Наш менеджер надасть всю необхідну інформацію.",
    },
    {
        id: 2,
        title: "Скільки буде коштувати проєктування котеджу, будинку дачного та садового?",
        paragraph: "Остаточна вартість буде уточнена після переліку всіх робіт.",
    },
];

{/** Contents */}
interface contents {
    id: number;
    title: string;
    anchors: anchors[];
};

interface anchors {
    id: number;
    subtitle: string;
    href: string;
};

const contents: contents[] = [
    {
        id: 1,
        title: "Зміст",
        anchors: [
            {
                id: 1,
                subtitle: "Що таке котеджі, будинки дачні та садові?",
                href: "#article",
            },
            {
                id: 2,
                subtitle: "Для чого потрібні котеджі, будинки дачні та садові?",
                href: "#article",
            },
            {
                id: 3,
                subtitle: "Як проєктувати котеджі, будинки дачні та садові?",
                href: "#tips",
            },
            {
                id: 4,
                subtitle: "Які послуги надає наша компанія з проєктування котеджу, будинку дачного та садового?",
                href: "#table",
            },
            {
                id: 5,
                subtitle: "Як замовити проєктування котеджу, будинку дачного та садового?",
                href: "#callToAction",
            },
            {
                id: 6,
                subtitle: "Скільки буде коштувати проєктування котеджу, будинку дачного та садового?",
                href: "#callToAction",
            },
        ],
    },
];

{/** Information */}
interface information {
    id: number;
    title: string;
    itemlist: itemlist[];
};

interface itemlist {
    id: number;
    src: string;
    alt: string;
    title: string;
};

const information: information[] = [
    {
        id: 1,
        title: "Корисна інформація",
        itemlist: [
            {
                id: 1,
                src: "/content/information/icons/phone-number.svg",
                alt: "Номер телфону",
                title: "+38 (067) 262-3778",
            },
            {
                id: 2,
                src: "/content/information/icons/email.svg",
                alt: "Електронна пошта",
                title: "mail@drimbud.com.ua",
            },
            {
                id: 3,
                src: "/content/information/icons/time.svg",
                alt: "Час",
                title: "від 10 діб",
            },
            {
                id: 4,
                src: "/content/information/icons/money.svg",
                alt: "Ціна",
                title: "від 5 000 грн",
            },
        ],
    },
];

{/** Specialist */}
interface specialist {
    id: number;
    photo: string;
    name: string;
    position: string;
};

const specialist: specialist[] = [
    {
        id: 1,
        photo: "",
        name: "Наталія Гончар",
        position: "Старший проектувальник",
    },
];

{/** Objects */}
interface objects {
    id: number;
    src: string;
    alt: string;
    description: string;
};

const objects: objects[] = [
    {
        id: 1,
        src: "/content/article/pictures/kotedzhi-budynky-dachni-ta-sadovi/img07.jpg",
        alt: "",
        description: "Проєкт сучасного двоповерхового котеджу, розташованого у міській місцевості. Будинок має елегантний та сучасний дизайн, великі скляні вікна і стильні вхідні двері з невеликим ґанком. Зовнішні стіни виконані з комбінації цегли та дерева, що додає будинку сучасного вигляду. Оточення мінімалістичне, зосереджуючи всю увагу на будинку, а ясне блакитне небо підкреслює спокійну атмосферу.",
    },
    {
        id: 2,
        src: "/content/article/pictures/kotedzhi-budynky-dachni-ta-sadovi/img08.jpg",
        alt: "",
        description: "Проєкт двоповерхового котеджу, розташованого у жвавому міському районі. Котедж має сучасну архітектуру з великими скляними вікнами, виразним балконом на другому поверсі та стильними вхідними дверима. Фасад поєднує елементи бетону і дерева, що додає будинку вишуканого вигляду.",
    },
    {
        id: 3,
        src: "/content/article/pictures/kotedzhi-budynky-dachni-ta-sadovi/img09.jpg",
        alt: "",
        description: "Проєкт двоповерхового котеджу, розташованого в міському середовищі. Котедж має стильний дизайн із великими вікнами від підлоги до стелі, стильними головними дверима та невеликим озелененим переднім двором. Будівельні матеріали включають поєднання каменю та металу, що надає котеджу елегантного і сучасного вигляду. Ясне небо підкреслює загальну привабливу атмосферу.",
    },
    {
        id: 4,
        src: "/content/article/pictures/kotedzhi-budynky-dachni-ta-sadovi/img10.jpg",
        alt: "",
        description: "Проєкт сучасного двоповерхового котеджу в міській місцевості. Будинок має мінімалістичний дизайн з великою кількістю скла, елегантні вхідні двері та невеликий ґанок. Зовнішні стіни поєднують гладкий бетон та дерев'яні панелі, що підкреслює сучасний вигляд будинку. Ясне небо без будь-яких відволікаючих елементів зосереджує увагу на котеджі.",
    },
    {
        id: 5,
        src: "/content/article/pictures/kotedzhi-budynky-dachni-ta-sadovi/img11.jpg",
        alt: "",
        description: "Проєкт сучасного двоповерхового котеджу у міському середовищі, представлений з переднього вигляду. Котедж має сучасну архітектуру з великими вікнами, елегантним входом і компактним балконом на другому поверсі. Зовнішній вигляд поєднує матеріали, такі як цегла та метал, що підкреслює сучасну естетику.",
    },
    {
        id: 6,
        src: "/content/article/pictures/kotedzhi-budynky-dachni-ta-sadovi/img12.jpg",
        alt: "",
        description: "Проєкт сучасного двоповерхового котеджу, розташованого в міській місцевості. Будинок демонструє елегантний та стильний дизайн із великими скляними панелями, сучасними вхідними дверима і невеликим ґанком. Фасад поєднує елементи дерева та бетону, що надає йому вишуканого вигляду.",
    },
];

{/** Reviews */}
interface reviews {
    id: number;
    name: string;
    review: string;
};

const reviews: reviews[] = [
    {
        id: 1,
        name: "Олександр Іваненко",
        review: "Замовив проєктування котеджу і залишився дуже задоволений. Робота була виконана професійно і вчасно. Рекомендував би цю компанію всім своїм друзям.",
    },
    {
        id: 2,
        name: "Наталія Петренко",
        review: "Від початку до кінця процес проєктування котеджу був дуже зручним та зрозумілим. Всі наші побажання були враховані. Дякую за чудову роботу!",
    },
    {
        id: 3,
        name: "Дмитро Коваленко",
        review: "Проєктування котеджу пройшло без жодних проблем. Команда професіоналів допомогла створити саме те, що ми хотіли. Дуже задоволений результатом!",
    },
    {
        id: 4,
        name: "Анна Шевченко",
        review: "Замовлення проєктування котеджу виявилось чудовим рішенням. Команда працювала оперативно та врахувала всі наші побажання. Результат перевершив очікування.",
    },
    {
        id: 5,
        name: "Сергій Мельник",
        review: "Замовив проєктування котеджу і не пошкодував. Процес був швидким і ефективним. Всі мої ідеї були реалізовані на найвищому рівні.",
    },
    {
        id: 6,
        name: "Ольга Бондар",
        review: "Проєктування котеджу було здійснено на високому рівні. Команда професіоналів допомогла створити ідеальний проєкт, врахувавши всі мої побажання. Дуже дякую!",
    },
];

{/** Clients */}
interface clients {
    id: number;
    src: string;
    alt: string;
};

const clients: clients[] = [
    {
        id: 1,
        src: "/footer/clients/atb.svg",
        alt: "ATB",
    },
    {
        id: 2,
        src: "/footer/clients/dtek.svg",
        alt: "DTEK",
    },
    {
        id: 3,
        src: "/footer/clients/kovalska.svg",
        alt: "Kovalska",
    },
    {
        id: 4,
        src: "/footer/clients/kyivstar.svg",
        alt: "Kyivstar",
    },
    {
        id: 5,
        src: "/footer/clients/metinvest.svg",
        alt: "Metinvest",
    },
    {
        id: 6,
        src: "/footer/clients/metro.svg",
        alt: "METRO",
    },
    {
        id: 7,
        src: "/footer/clients/silpo.svg",
        alt: "Silpo",
    },
    {
        id: 8,
        src: "/footer/clients/varus.svg",
        alt: "Varus",
    },
    {
        id: 9,
        src: "/footer/clients/vodafone.svg",
        alt: "Vodafone",
    },
];

export default function KotedzhiBudynkyDachniTaSadovi() {

    {/** Service */}
    const [currentIndexService, setCurrentIndexService] = useState(0);

    const nextService = () => {
        setCurrentIndexService((prevIndex) => (prevIndex + 1) % service.length);
    };

    const prevService = () => {
        setCurrentIndexService((prevIndex) => (prevIndex - 1 + service.length) % service.length);
    };

    const extendedService = [...service, ...service, ...service];

    useEffect(() => {
        const timer = setInterval(nextService, 999999999);
        return () => clearInterval(timer);
    }, []);
{/**
    let serviceFrame;

    if (window.innerWidth <= 768) {
        serviceFrame = 1;
    } else {
        serviceFrame = 1;
    }
*/}
    {/** Tips */}
    const [currentIndexTips, setCurrentIndexTips] = useState(0);

    const nextTips = () => {
        setCurrentIndexTips((prevIndex) => (prevIndex + 1) % tips.length);
    };

    const prevTips = () => {
        setCurrentIndexTips((prevIndex) => (prevIndex - 1 + tips.length) % tips.length);
    };

    const extendedTips = [...tips, ...tips, ...tips];

    useEffect(() => {
        const timer = setInterval(nextTips, 999999999);
        return () => clearInterval(timer);
    }, []);
{/**
    let tipsFrame;

    if (window.innerWidth <= 768) {
        tipsFrame = 1;
    } else {
        tipsFrame = 2;
    }
*/}
    {/** Objects */}
    const [currentIndexObjects, setCurrentIndexObjects] = useState(0);

    const nextObjects = () => {
        setCurrentIndexObjects((prevIndex) => (prevIndex + 1) % objects.length);
    };

    const prevObjects = () => {
        setCurrentIndexObjects((prevIndex) => (prevIndex - 1 + objects.length) % objects.length);
    };

    const extendedObjects = [...objects, ...objects, ...objects];

    useEffect(() => {
        const timer = setInterval(nextObjects, 999999999);
        return () => clearInterval(timer);
    }, []);
{/**
    let objectsFrame;

    if (window.innerWidth <= 768) {
        objectsFrame = 1;
    } else {
        objectsFrame = 2;
    }
*/}
    {/** Reviews */}
    const [currentIndexReviews, setCurrentIndexReviews] = useState(0);

    const nextReviews = () => {
        setCurrentIndexReviews((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevReviews = () => {
        setCurrentIndexReviews((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    const extendedReviews = [...reviews, ...reviews, ...reviews];

    useEffect(() => {
        const timer = setInterval(nextReviews, 999999999);
        return () => clearInterval(timer);
    }, []);
{/**
    let reviewsFrame;

    if (window.innerWidth <= 768) {
        reviewsFrame = 1;
    } else {
        reviewsFrame = 4;
    }
*/}
    {/** Clients */}
    const [currentIndexClients, setCurrentIndexClients] = useState(0);

    const nextClients = () => {
        setCurrentIndexClients((prevIndex) => (prevIndex + 1) % clients.length);
    };

    const prevClients = () => {
        setCurrentIndexClients((prevIndex) => (prevIndex - 1 + clients.length) % clients.length);
    };

    const extendedClients = [...clients, ...clients, ...clients];

    useEffect(() => {
        const timer = setInterval(nextClients, 999999999);
        return () => clearInterval(timer);
    }, []);
{/**
    let clientsFrame;

    if (window.innerWidth <= 768) {
        clientsFrame = 1;
    } else {
        clientsFrame = 6;
    }
*/}
    return(
        <div
            className="
                pb-16

                w-full
                h-fit

                bg-white

                flex
                flex-col

                gap-16
            "
        >
            {/** Category */}
            <div
                className="
                    px-8
                    xl:px-16
                    2xl:px-64
                    pt-8

                    w-full
                    h-fit

                    relative
                "
            >
                <div
                    className="
                        absolute

                        left-0
                        top-0

                        w-full
                        h-24

                        bg-gradient-to-r
                        from-[#007CF0]
                        to-[#00DFD8]

                        opacity-30
                        blur-[48px]
                    "
                >
                </div>
                {category.map((item) =>
                    <div
                        className="
                            relative

                            w-full
                            h-fit

                            flex
                            flex-col
                            xl:flex
                            xl:flex-row

                            xl:justify-between
                            xl:items-center

                            gap-2
                            xl:gap-0
                        "
                        key={item.id}
                    >
                        <div
                            className="
                                px-3
                                py-1.5

                                w-fit
                                h-fit

                                bg-gradient-to-r
                                from-[#007CF0]
                                to-[#00DFD8]

                                rounded-full

                                flex
                                flex-row

                                gap-1

                                truncate
                            "
                        >
                            <p
                                className="
                                    text-sm
                                    text-neutral-50

                                    font-normal
                                "
                            >
                                {item.categoty}
                            </p>
                            <Image
                                className="
                                    select-none
                                "
                                src={item.src}
                                width={12}
                                height={12}
                                alt={item.alt}
                            />
                            <p
                                className="
                                    text-sm
                                    text-neutral-50

                                    font-normal
                                "
                            >
                                {item.service}
                            </p>
                        </div>
                        <p
                            className="
                                text-sm
                                text-neutral-950

                                font-normal
                            "
                        >
                            {item.date}
                        </p>
                    </div>
                )}
            </div>
            {/** Content */}
            <div
                className="
                    px-8
                    xl:px-16
                    2xl:px-64
                    pb-8

                    w-full
                    h-fit

                    border-b
                    border-neutral-200

                    flex
                    flex-col-reverse
                    xl:flex
                    xl:flex-row

                    justify-between

                    gap-8
                "
            >
                {/** Article */}
                {article.map((item) =>
                    <div
                        className="
                            w-full
                            xl:max-w-[960px]
                            2xl:max-w-[960px]
                            h-fit

                            flex
                            flex-col

                            gap-8
                        "
                        key={item.id}
                    >
                        <h1
                            className="
                                text-2xl
                                xl:text-4xl
                                text-neutral-900

                                font-medium
                            "
                        >
                            {item.title}
                        </h1>
                        {item.section.map((item) =>
                            <div
                                className="
                                    w-full
                                    h-fit

                                    flex
                                    flex-col

                                    gap-2
                                "
                                id="article"
                                key={item.id}
                            >
                                <h2
                                    className="
                                        text-xl
                                        xl:text-2xl
                                        text-neutral-900

                                        font-normal
                                    "
                                >
                                    {item.title}
                                </h2>
                                <p
                                    className="
                                        text-base
                                        text-neutral-950

                                        font-normal

                                        text-justify
                                    "
                                >
                                    {item.paragraph}
                                </p>
                            </div>
                        )}
                        {/** Service */}
                        <div
                            className="
                                w-full
                                h-fit

                                flex
                                flex-col
                                xl:flex-row

                                items-center

                                gap-4
                            "
                        >
                            <div
                                className="
                                    p-2

                                    w-fit
                                    h-fit

                                    bg-white

                                    border
                                    border-neutral-200
                                    hover:border-neutral-400

                                    rounded-full

                                    hover:shadow-md

                                    transition
                                    duration-300

                                    cursor-pointer
                                "
                                onClick={prevService}
                            >
                                <Image
                                    src="/content/slider/icons/chevron-left.svg"
                                    width={32}
                                    height={32}
                                    alt="Попереднє зображення"
                                />
                            </div>
                            <div
                                className="
                                    w-full
                                    h-fit

                                    flex
                                    flex-row
                                "
                            >
                                {extendedService.slice(currentIndexService, currentIndexService + 1).map((item, index) =>
                                    <div
                                        className="
                                            w-full
                                            h-fit
                                            xl:h-[640px]

                                            border-2
                                            bourder-neutral-100

                                            rounded-xl

                                            shadow-xl

                                            flex
                                            flex-col
                                        "
                                        key={index}
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
                                                p-4

                                                text-base
                                                text-neutral-950

                                                font-nornal

                                                text-justify
                                            "
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div
                                className="
                                    p-2

                                    w-fit
                                    h-fit

                                    bg-white

                                    border
                                    border-neutral-200
                                    hover:border-neutral-400

                                    rounded-full

                                    hover:shadow-md

                                    transition
                                    duration-300

                                    cursor-pointer
                                "
                                onClick={nextService}
                            >
                                <Image
                                    src="/content/slider/icons/chevron-right.svg"
                                    width={32}
                                    height={32}
                                    alt="Наступне зображення"
                                />
                            </div>
                        </div>
                        {/** Tips */}
                        <div
                            className="
                                w-full
                                h-fit

                                flex
                                flex-col

                                gap-4
                            "
                            id="tips"
                        >
                            <h2
                                className="
                                    text-xl
                                    xl:text-2xl
                                    text-neutral-900

                                    font-normal
                                "
                            >
                                Як проєктувати котеджі, будинки дачні та садові?
                            </h2>
                            <div
                                className="
                                    w-full
                                    h-fit

                                    flex
                                    flex-col
                                    xl:flex-row

                                    items-center

                                    gap-4
                                "
                            >
                                <div
                                    className="
                                        p-2

                                        w-fit
                                        h-fit

                                        bg-white

                                        border
                                        border-neutral-200
                                        hover:border-neutral-400

                                        rounded-full

                                        hover:shadow-md

                                        transition
                                        duration-300

                                        cursor-pointer
                                    "
                                    onClick={prevTips}
                                >
                                    <Image
                                        src="/content/slider/icons/chevron-left.svg"
                                        width={32}
                                        height={32}
                                        alt="Попереднє зображення"
                                    />
                                </div>
                                <div
                                    className="
                                        w-full
                                        h-fit

                                        flex
                                        flex-row

                                        gap-4
                                    "
                                >
                                    {extendedTips.slice(currentIndexTips, currentIndexTips + 2).map((item, index) =>
                                        <div
                                            className="
                                                p-4

                                                w-full
                                                h-fit
                                                xl:h-[480px]

                                                border-2
                                                border-neutral-100

                                                rounded-xl

                                                shadow-xl

                                                flex
                                                flex-col

                                                gap-4
                                            "
                                            key={index}
                                        >
                                            <h3
                                                className="
                                                    text-base
                                                    text-neutral-900

                                                    font-normal

                                                    text-center
                                                "
                                            >
                                                {item.title}
                                            </h3>
                                            <div
                                                className="
                                                    w-full
                                                    h-px
                                                    
                                                    bg-neutral-200
                                                "
                                            >
                                            </div>
                                            <ul
                                                className="
                                                    pl-4

                                                    list-disc

                                                    flex
                                                    flex-col
                                                    
                                                    gap-2
                                                "
                                            >
                                                {item.itemlist.map((item, index) =>
                                                    <li
                                                        className="
                                                            text-base
                                                            text-neutral-950

                                                            font-normal

                                                            text-justify
                                                        "
                                                        key={index}
                                                    >
                                                        {item}
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                <div
                                    className="
                                        p-2

                                        w-fit
                                        h-fit

                                        bg-white

                                        border
                                        border-neutral-200
                                        hover:border-neutral-400

                                        rounded-full

                                        hover:shadow-md

                                        transition
                                        duration-300

                                        cursor-pointer
                                    "
                                    onClick={nextTips}
                                >
                                    <Image
                                        src="/content/slider/icons/chevron-right.svg"
                                        width={32}
                                        height={32}
                                        alt="Наступне зображення"
                                    />
                                </div>
                            </div>
                        </div>
                        {/** Table */}
                        <div
                            className="
                                w-full
                                h-fit

                                flex
                                flex-col

                                gap-4
                            "
                            id="table"
                        >
                            <h2
                                className="
                                    text-xl
                                    xl:text-2xl
                                    text-neutral-900

                                    font-normal
                                "
                            >
                                Які послуги надає наша компанія з проєктування котеджу, будинку дачного та садового?
                            </h2>
                            <table
                                className="
                                    w-full
                                    h-fit
                                "
                            >
                                <thead>
                                    <tr
                                        className="
                                            h-8

                                            border-b
                                            border-neutral-200
                                        "
                                    >
                                        <th
                                            className="
                                                text-base
                                                text-neutral-900

                                                font-medium

                                                text-start
                                            "
                                            scope="col"
                                        >
                                            Послуга
                                        </th>
                                        <th
                                            className="
                                                text-base
                                                text-neutral-900

                                                font-medium

                                                text-start
                                            "
                                            scope="col"
                                        >
                                            Час (діб)
                                        </th>
                                        <th
                                            className="
                                                text-base
                                                text-neutral-900

                                                font-medium

                                                text-start
                                            "
                                            scope="col"
                                        >
                                            Ціна (грн)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {table.map((item) =>
                                        <tr
                                            className="
                                                h-8

                                                border-b
                                                border-neutral-200
                                            "
                                            key={item.id}
                                        >
                                            <td
                                                className="
                                                    text-base
                                                    text-neutral-950

                                                    font-normal

                                                    text-start
                                                "
                                            >
                                                {item.itemtable}
                                            </td>
                                            <td
                                                className="
                                                    text-base
                                                    text-neutral-950

                                                    font-normal

                                                    text-start
                                                "
                                            >
                                                {item.time}
                                            </td>
                                            <td
                                                className="
                                                    text-base
                                                    text-neutral-950

                                                    font-normal

                                                    text-start
                                                "
                                            >
                                                {item.price}
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        {/** Call to action */}
                        <div
                            className="
                                w-full
                                h-fit

                                flex
                                flex-col

                                gap-8
                            "
                            id="callToAction"
                        >
                            {callToAction.map((item) =>
                                <div
                                    className="
                                        w-full
                                        h-fit

                                        flex
                                        flex-col

                                        gap-2
                                    "
                                    key={item.id}
                                >
                                    <h2
                                        className="
                                            text-xl
                                            xl:text-2xl
                                            text-neutral-900

                                            font-normal
                                        "
                                    >
                                        {item.title}
                                    </h2>
                                    <p
                                        className="
                                            text-base
                                            text-neutral-950

                                            font-normal

                                            text-justify
                                        "
                                    >
                                        {item.paragraph}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {/** Devider */}
                <div
                    className="
                        sticky

                        top-0

                        w-px
                        h-screen

                        bg-neutral-200

                        hidden
                        xl:flex
                    "
                >
                </div>
                {/** Sidebar */}
                <div
                    className="
                        xl:sticky

                        xl:top-32

                        w-full
                        xl:w-1/4
                        h-fit

                        flex
                        flex-col

                        gap-8
                    "
                >
                    {/** Contents */}
                    <div
                        className="
                            p-4

                            w-full
                            h-fit

                            bg-white

                            border
                            border-neutral-200

                            rounded-xl
                        "
                    >
                        {contents.map((item) =>
                            <div
                                className="
                                    w-full
                                    h-fit

                                    flex
                                    flex-col

                                    gap-4
                                "
                                key={item.id}
                            >
                                <h2
                                    className="
                                        text-xl
                                        text-neutral-900

                                        font-normal

                                        text-center
                                    "
                                >
                                    {item.title}
                                </h2>
                                <div
                                    className="
                                        w-full
                                        h-px

                                        bg-neutral-200
                                    "
                                >
                                </div>
                                <ul
                                    className="
                                        pl-4

                                        w-full
                                        h-fit

                                        flex
                                        flex-col

                                        gap-2

                                        list-decimal
                                    "
                                >
                                    {item.anchors.map((item) =>
                                        <li
                                            className="
                                                text-base
                                                text-neutral-800
                                                hover:text-neutral-950

                                                font-normal

                                                text-justify
                                            "
                                            key={item.id}
                                        >
                                            <a
                                                href={item.href}
                                            >
                                                {item.subtitle}
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                    {/** Information */}
                    <div
                        className="
                            p-4

                            w-full
                            h-fit

                            bg-white

                            border
                            border-neutral-200

                            rounded-xl
                        "
                    >
                        {information.map((item) =>
                            <div
                                className="
                                    w-full
                                    h-fit

                                    flex
                                    flex-col

                                    gap-4
                                "
                                key={item.id}
                            >
                                <h2
                                    className="
                                        text-xl
                                        text-neutral-900

                                        font-normal

                                        text-center
                                    "
                                >
                                    {item.title}
                                </h2>
                                <div
                                    className="
                                        w-full
                                        h-px

                                        bg-neutral-200
                                    "
                                >
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
                                    {item.itemlist.map((item) =>
                                        <div
                                            className="
                                                w-full
                                                h-fit

                                                flex
                                                flex-row

                                                justify-between
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
                                                    text-base
                                                    text-neutral-950

                                                    font-normal
                                                "
                                            >
                                                {item.title}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    {/** Specialist */}
                    <div
                        className="
                            p-4

                            w-full
                            h-fit

                            bg-white

                            border
                            border-neutral-200

                            rounded-xl
                        "
                    >
                        {specialist.map((item) =>
                            <div
                                className="
                                    w-full
                                    h-fit

                                    flex
                                    flex-row

                                    gap-4
                                "
                                key={item.id}
                            >
                                <div
                                    className="
                                        w-16
                                        h-16

                                        bg-neutral-100

                                        border
                                        border-neutral-200

                                        rounded-full
                                    "
                                >

                                </div>
                                <div
                                    className="
                                        w-fit
                                        h-fit

                                        flex
                                        flex-col
                                    "
                                >
                                    <p
                                        className="
                                            text-base
                                            text-neutral-950

                                            font-medium
                                        "
                                    >
                                        {item.name}
                                    </p>
                                    <p
                                        className="
                                            text-base
                                            text-neutral-950

                                            font-normal
                                        "
                                    >
                                        {item.position}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/** Objects */}
            <div
                className="
                    px-8
                    xl:px-16
                    2xl:px-64

                    w-full
                    h-fit

                    flex
                    flex-col

                    gap-8
                "
            >
                <p
                    className="
                        text-2xl
                        xl:text-4xl
                        text-neutral-900

                        font-normal

                        text-center
                    "
                >
                    Об&apos;єкти
                </p>
                <div
                    className="
                        w-full
                        h-fit

                        flex
                        flex-col
                        xl:flex-row

                        items-center

                        gap-4
                    "
                >
                <div
                    className="
                        p-2

                        w-fit
                        h-fit

                        bg-white

                        border
                        border-neutral-200
                        hover:border-neutral-400

                        rounded-full

                        hover:shadow-md

                        transition
                        duration-300

                        cursor-pointer
                    "
                    onClick={prevObjects}
                >
                    <Image
                        src="/content/slider/icons/chevron-left.svg"
                        width={32}
                        height={32}
                        alt="Попереднє зображення"
                    />
                </div>
                <div
                    className="
                        w-full
                        h-fit

                        flex
                        flex-row

                        gap-4
                    "
                >
                    {extendedObjects.slice(currentIndexObjects, currentIndexObjects + 2).map((item, index) =>
                        <div
                            className="
                                w-full
                                h-fit
                                xl:h-[540px]

                                border-2
                                bourder-neutral-100

                                rounded-xl

                                shadow-xl

                                flex
                                flex-col
                            "
                            key={index}
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
                                    p-4

                                    text-base
                                    text-neutral-950

                                    font-nornal

                                    text-justify
                                "
                            >
                                {item.description}
                            </p>
                        </div>
                    )}
                </div>
                <div
                    className="
                        p-2

                        w-fit
                        h-fit

                        bg-white

                        border
                        border-neutral-200
                        hover:border-neutral-400

                        rounded-full

                        hover:shadow-md

                        transition
                        duration-300

                        cursor-pointer
                    "
                    onClick={nextObjects}
                >
                    <Image
                        src="/content/slider/icons/chevron-right.svg"
                        width={32}
                        height={32}
                        alt="Наступне зображення"
                    />
                </div>
                </div>
            </div>
            {/** Reviews */}
            <div
                className="
                    px-8
                    xl:px-16
                    2xl:px-64

                    w-full
                    h-fit

                    flex
                    flex-col

                    gap-8
                "
            >
                <p
                    className="
                        text-2xl
                        xl:text-4xl
                        text-neutral-900

                        font-normal

                        text-center
                    "
                >
                    Відгуки
                </p>
                <div
                    className="
                        w-full
                        h-fit

                        flex
                        flex-col
                        xl:flex-row

                        items-center

                        gap-4
                    "
                >
                <div
                    className="
                        p-2

                        w-fit
                        h-fit

                        bg-white

                        border
                        border-neutral-200
                        hover:border-neutral-400

                        rounded-full

                        hover:shadow-md

                        transition
                        duration-300

                        cursor-pointer
                    "
                    onClick={prevReviews}
                >
                    <Image
                        src="/content/slider/icons/chevron-left.svg"
                        width={32}
                        height={32}
                        alt="Попереднє зображення"
                    />
                </div>
                <div
                    className="
                        w-full
                        h-fit

                        flex
                        flex-row

                        gap-4
                    "
                >
                    {extendedReviews.slice(currentIndexReviews, currentIndexReviews + 4).map((item, index) =>
                        <div
                            className="
                                p-4

                                w-full
                                h-fit
                                xl:h-[320px]

                                border
                                bourder-neutral-100

                                rounded-xl

                                shadow-xl

                                flex
                                flex-col

                                justify-between

                                gap-8
                            "
                            key={index}
                        >
                            <p
                                className="
                                    text-base
                                    text-neutral-950

                                    font-normal

                                    text-justify
                                "
                            >
                                {item.review}
                            </p>
                            <p
                                className="
                                    text-base
                                    text-neutral-900

                                    font-medium

                                    text-start

                                    list-disc
                                "
                            >
                                {item.name}
                            </p>
                        </div>
                    )}
                </div>
                <div
                    className="
                        p-2

                        w-fit
                        h-fit

                        bg-white

                        border
                        border-neutral-200
                        hover:border-neutral-400

                        rounded-full

                        hover:shadow-md

                        transition
                        duration-300

                        cursor-pointer
                    "
                    onClick={nextReviews}
                >
                    <Image
                        src="/content/slider/icons/chevron-right.svg"
                        width={32}
                        height={32}
                        alt="Наступне зображення"
                    />
                </div>
                </div>
            </div>
            {/** Clients */}
            <div
                className="
                    px-8
                    xl:px-16
                    2xl:px-64

                    w-full
                    h-fit

                    flex
                    flex-col

                    gap-8
                "
            >
                <p
                    className="
                        text-2xl
                        xl:text-4xl
                        text-neutral-900

                        font-normal

                        text-center
                    "
                >
                    Клієнти
                </p>
                <div
                    className="
                        w-full
                        h-fit

                        flex
                        flex-row
                        xl:flex-row

                        items-center

                        gap-4
                    "
                >
                <div
                    className="
                        p-2

                        w-fit
                        h-fit

                        bg-white

                        border
                        border-neutral-200
                        hover:border-neutral-400

                        rounded-full

                        hover:shadow-md

                        transition
                        duration-300

                        cursor-pointer
                    "
                    onClick={prevClients}
                >
                    <Image
                        src="/content/slider/icons/chevron-left.svg"
                        width={32}
                        height={32}
                        alt="Попереднє зображення"
                    />
                </div>
                <div
                    className="
                        w-full
                        h-fit

                        flex
                        flex-row

                        justify-center
                        xl:justify-between
                    "
                >
                    {extendedClients.slice(currentIndexClients, currentIndexClients + 6).map((item, index) =>
                        <div
                            className="
                                w-fit
                                h-fit
                            "
                            key={index}
                        >
                            <Image
                                className="
                                    w-auto
                                    h-auto

                                    select-none
                                "
                                src={item.src}
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt={item.alt}
                            />
                        </div>
                    )}
                </div>
                <div
                    className="
                        p-2

                        w-fit
                        h-fit

                        bg-white

                        border
                        border-neutral-200
                        hover:border-neutral-400

                        rounded-full

                        hover:shadow-md

                        transition
                        duration-300

                        cursor-pointer
                    "
                    onClick={nextClients}
                >
                    <Image
                        src="/content/slider/icons/chevron-right.svg"
                        width={32}
                        height={32}
                        alt="Наступне зображення"
                    />
                </div>
                </div>
            </div>
        </div>
    );
}
