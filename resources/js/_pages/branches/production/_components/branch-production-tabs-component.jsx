import { useState } from "react";
import { Tab } from "@headlessui/react";
import CreateBeginningPage from "../_section/create_beginning/page";
import BakersReportPage from "../_section/bakers_report/page";
import BreadReportPage from "../_section/bread_report/page";
import SalesReportPage from "../_section/sales_report/page";
import HistoryLogsPage from "../_section/history_logs/page";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function BranchProductionTabsComponent() {
    let [categories] = useState([
        {
            id: 1,
            name: "Create Beginning",
            component: <CreateBeginningPage />,
        },
        {
            id2: 2,
            name: "Bakers Report",
            component: <BakersReportPage />,
        },
        {
            id2: 3,
            name: "Bread Report",
            component: <BreadReportPage />,
        },
        {
            id2: 4,
            name: "Sales Report",
            component: <SalesReportPage />,
        },
        {
            id2: 5,
            name: "History Logs",
            component:<HistoryLogsPage />,
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
                                "ring-white/60 ring-offset-2  focus:outline-none focus:ring-2"
                            )}
                        >
                            <ul>
                                <li
                                    key={res.id}
                                    className="relative rounded-md p-3 bg-white"
                                >
                                    <h3 className="text-sm font-medium leading-5">
                                        {res.component}
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
