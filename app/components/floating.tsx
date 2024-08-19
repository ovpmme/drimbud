"use client";

import React, { useCallback, useState } from "react";

import Image from "next/image";

export default function Floating({ data }: { data: any }) {

    const [activeFloatingMenu, setActiveFloatingMenu] = useState(false);

    return (
        <div
            className="
                sticky

                left-0
                bottom-8

                w-full
                h-16

                flex
                xl:hidden
                2xl:hidden

                relative
            "
        >
            {data.floating.map((floating: any) => (
                <div
                    className="
                        absolute

                        top-0
                        right-8

                        w-16
                        h-16

                        bg-white/90
                        backdrop-blur

                        border
                        border-neutral-200
                        hover:border-neutral-400

                        rounded-full

                        shadow-sm
                        hover:shadow-xl

                        transition
                        duration-300

                        flex

                        justify-center
                        items-center

                        cursor-pointer
                    "
                    key={floating.id}
                    onClick={() => setActiveFloatingMenu(!activeFloatingMenu)}
                >
                    <Image
                        className="
                            select-none
                        "
                        src={floating.src}
                        width={32}
                        height={32}
                        alt={floating.alt}
                    />
                    {activeFloatingMenu && (
                        <div
                            className="
                                absolute

                                -top-72
                                right-0

                                w-16
                                h-fit

                                flex
                                flex-col-reverse

                                justify-center
                                items-center

                                gap-2
                            "
                        >
                            {floating.items.map((item: any) =>
                                <div
                                    className="
                                        w-16
                                        h-16

                                        bg-white/90
                                        backdrop-blur

                                        border
                                        border-neutral-200
                                        hover:border-neutral-400

                                        rounded-full

                                        shadow-sm
                                        hover:shadow-xl

                                        transition
                                        duration-300

                                        flex

                                        justify-center
                                        items-center

                                        cursor-pointer
                                    "
                                    key={item.id}
                                    style={{
                                        backgroundColor: item.color
                                    }}
                                >
                                    <Image
                                        className="
                                            filter
                                            invert

                                            select-none
                                        "
                                        src={item.src}
                                        width={32}
                                        height={32}
                                        alt={item.alt}
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}