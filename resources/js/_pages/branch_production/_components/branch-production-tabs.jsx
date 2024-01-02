import { useState } from "react";
import { Tab } from "@headlessui/react";
import { Link } from "@inertiajs/react";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import {
    BeakerIcon,
    ClipboardDocumentCheckIcon,
    ClockIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";
// import CreateBeginningPage from "../_section/create_beginning/page";
// import BakersReportPage from "../_section/bakers_report/page";
// import BreadReportPage from "../_section/bread_report/page";
// import SalesReportPage from "../_section/sales_report/page";
// import HistoryLogsPage from "../_section/history_logs/page";

export default function BranchProductionTabs({ account }) {
    const [categories] = useState(() => {
        let commonCategories = [
            {
                id: 1,
                name: "Bakers Report",
                component: <div account={account} />,
                href: route("branch.bakers.report"),
                isActive: "bakers_report",
                icon: <UsersIcon className="h-6 w-6" />,
            },
        ];

        if (
            account.position !== "Baker" &&
            account.position !== "Chief Baker" &&
            account.position !== "Lamesador" &&
            account.position == "Supervisor"
        ) {
            commonCategories = [
                ...commonCategories,
                {
                    id: 2,
                    name: "Bread Report",
                    component: <div account={account} />,
                    href: route("branch.bread.report"),
                    isActive: "bread_report",
                    icon: <BeakerIcon className="h-6 w-6" />,
                },
                {
                    id: 3,
                    name: "Sales Report",
                    component: <div account={account} />,
                    href: route("branch.sales.report"),
                    isActive: "sales_report",
                    icon: <ClipboardDocumentCheckIcon className="h-6 w-6" />,
                },
                {
                    id: 4,
                    name: "History Report",
                    component: <div account={account} />,
                    href: route("branch.history.report"),
                    isActive: "history_report",
                    icon: <ClockIcon className="h-6 w-6" />,
                },
            ];
        }

        if (
            account.position === "Baker" ||
            account.position === "Chief Baker" ||
            account.position === "Lamesador" ||
            account.position === "Supervisor"
        ) {
            commonCategories = [
                {
                    id: 0,
                    name: "Create Beginning",
                    component: <div account={account} />,
                    href: route("branch.new.production"),
                    isActive: "create_new_production",
                    icon: <PlusCircleIcon className="h-6 w-6" />,
                },
                ...commonCategories,
            ];
        }

        return commonCategories;
    });

    const active =
        "inline-flex items-center justify-center p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active  group";

    const notActive =
        "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300  group";
    const path = window.location.pathname.split("/")[3];

    // {
    //   account.position == "Baker" ||
    //   account.position == "Chief Baker" ||
    //   account.position == "Lamesador" ||
    //   account.position == "Supervisor"
    // }
    return (
        <div className="w-full">
            <div className="border-b border-gray-200 ">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 ">
                    {categories.map((category, index) => (
                        <li key={index} className="me-2">
                            <Link
                                href={category.href}
                                className={`${
                                    category.isActive == path
                                        ? active
                                        : notActive
                                }`}
                            >
                                <div
                                    className={`${
                                        category.isActive == path
                                            ? "w-6 h-6 me-2 text-red-500 group-hover:text-red-500  "
                                            : "w-6 h-6 me-2 text-gray-400 group-hover:text-gray-500  "
                                    }`}
                                >
                                    {category.icon}
                                </div>

                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
