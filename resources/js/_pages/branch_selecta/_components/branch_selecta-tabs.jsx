import { useState } from "react";
import { Link } from "@inertiajs/react";
import {
  ArchiveBoxArrowDownIcon,
    BanknotesIcon,
    DocumentCheckIcon,
} from "@heroicons/react/24/outline";

export default function BranchSelectaTabs({ account }) {
    const [categories] = useState(() => {
        let commonCategories = [
            {
                id: 1,
                name: "Selecta Stocks",
                component: <div account={account} />,
                href: route("branch.selecta.stock"),
                isActive: "stock",
                icon: <ArchiveBoxArrowDownIcon className="h-6 w-6" />,
            },
            {
                id: 2,
                name: "Double Check",
                component: <div account={account} />,
                href: route("branch.selecta.double_check"),
                isActive: "double_check",
                icon: <DocumentCheckIcon className="h-6 w-6" />,
            },
            {
                id: 3,
                name: "Sales Report",
                component: <div account={account} />,
                href: route("branch.selecta.sales_report"),
                isActive: "sales_report",
                icon: <BanknotesIcon className="h-6 w-6" />,
            },
        ];

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
