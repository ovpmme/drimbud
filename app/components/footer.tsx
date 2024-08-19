import Image from "next/image";

export default function Footer({ data }: { data: any }) {

    const currentYear = new Date().getFullYear();

    return (
        <>
            {data.footer.map((item: any) => (
                <div
                    className="
                        w-full
                        h-fit

                        bg-white

                        border-t
                        border-neutral-200

                        px-8
                        xl:px-16
                        2xl:px-64
                        py-4

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
                            w-8
                            h-8

                            select-none
                        "
                        src={item.src}
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt={item.alt}
                    />
                    <p
                        className="
							text-xs
							xl:text-sm
							2xl:text-sm

                            font-normal

                            text-start
                        "
                    >
                        {item.copyright} {currentYear}
                    </p>
                </div>
            ))}
        </>
    );
}