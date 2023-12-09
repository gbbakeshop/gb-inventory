import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function BreadTabs() {
    let [categories] = useState([
        {
            id: 1,
            name: "Breads",
        },
        {
            id2: 2,
            name: "Bread Group",
        },
    ]);

    return (
        <div className="w-full">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-red-500 p-1">
                    {categories.map((category, index) => (
                        <Tab
                            key={index}
                            className={({ selected }) =>
                                classNames(
                                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                                    "ring-white/60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2",
                                    selected
                                        ? "bg-white text-red-700 shadow"
                                        : "text-white hover:bg-white/[0.12] hover:text-white"
                                )
                            }
                        >
                            {category.name}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {categories.map((res, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                "rounded-xl bg-white p-3",
                                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                            )}
                        >
                            <ul>
                                <li
                                    key={res.id}
                                    className="relative rounded-md p-3 hover:bg-gray-100"
                                >
                                    <h3 className="text-sm font-medium leading-5">
                                        {res.name}
                                    </h3>
                                </li>
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}
