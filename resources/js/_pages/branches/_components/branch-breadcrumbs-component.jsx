import { setMeridiem } from "@/_redux/app-slice";
import {
    ChevronDoubleRightIcon,
    HomeModernIcon,
} from "@heroicons/react/24/outline";
import { usePage } from "@inertiajs/react";
import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function BranchBreadCrumbsComponent() {
    const { url } = usePage();
    const branchid = url.split("/")[3];
    const path = url.split("/")[4];
    const dispatch = useDispatch();
    const { branches, meridiem } = useSelector((state) => state.app);

    const branch = branches.find((res) => res.id == branchid);

    function meridiemTransaction() {
        dispatch(setMeridiem(meridiem == "AM" ? "PM" : "AM"));
    }
    return (
        <>
            <nav
                className="flex px-5 py-3 my-3  border border-gray-200 rounded-lg bg-red-500 "
                aria-label="Breadcrumb"
            >
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <a
                            href="#"
                            className="inline-flex items-center text-sm font-medium text-white hover:text-red-300"
                        >
                            <HomeModernIcon className="h-6 mr-2" />
                            Administrator
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center text-white">
                            <ChevronDoubleRightIcon className="h-6" />
                            <a
                                href="#"
                                className="ms-1 text-sm font-medium text-white hover:text-red-300 md:ms-2"
                            >
                                {branch?.branch_name}
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center text-white">
                            <ChevronDoubleRightIcon className="h-6" />
                            <a
                                href="#"
                                className="ms-1 text-sm font-medium capitalize text-white hover:text-red-300 md:ms-2"
                            >
                                {path.replace(/_/g, " ")}
                            </a>
                        </div>
                    </li>
                </ol>
            </nav>

            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={() => meridiemTransaction()}
                    checked={meridiem == "AM" ? true : false}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-red-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {meridiem} (MERIDIEM TRANSACTION)
                </span>
            </label>
        </>
    );
}
