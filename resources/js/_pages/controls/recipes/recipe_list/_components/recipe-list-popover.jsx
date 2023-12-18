import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useEffect, useState } from "react";

export default function RecipeListPopover({ data }) {
    return (
        <div className="w-full">
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button
                            className={`
                ${open ? "text-gray-900" : "text-gray-900/90"}
                group inline-flex items-center rounded-md  px-3  text-base font-medium hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                        >
                            <span className="text-sm">
                                {data[0]?.group_name}
                            </span>
                            <ChevronDownIcon
                                className={`${
                                    open ? "text-red-500" : "text-red-500/70"
                                }
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-red-500/80`}
                                aria-hidden="true"
                            />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute bg-white  z-50  w-[15vw] max-w-sm transform px-4 sm:px-0 lg:max-w-3xl">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 p-3 ring-black/5">
                                    <ul className="max-w-md space-y-1 text-gray-900 list-disc list-inside overflow-auto  ">
                                        {data?.map((res, index) =>
                                            res?.bread?.name ? (
                                                <li key={index}>
                                                    {res.bread.name}
                                                </li>
                                            ) : (
                                                <li key={index}>
                                                    {res.raw_materials.name}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    );
}
