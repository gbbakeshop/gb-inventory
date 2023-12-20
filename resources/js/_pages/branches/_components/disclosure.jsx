import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import BranchRadioGroupComponent from "./radio-group-component";
import { usePage } from "@inertiajs/react";
import { useSelector } from "react-redux";
import {
    BuildingStorefrontIcon,
    CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function BranchesDisclosure() {
    const { url } = usePage();
    const branchid = url.split("/")[3];
    const { branches } = useSelector((state) => state.app);

    return (
        <div className="-mt-6">
            {branches.map((branch, index) => (
                <div key={index} className="w-full h-full">
                    <div className="mx-auto w-full max-w-md rounded-2xl bg-white py-1">
                        <Disclosure defaultOpen={branchid == branch.id}>
                            {({ open }) => (
                                <>
                                    <h3 className="flow-root  border-b border-gray-300 ">
                                        <Disclosure.Button className="flex w-full items-center justify-between bg-white  text-sm text-gray-400 hover:text-gray-500">
                                            <button
                                                className={`${
                                                    branchid == branch.id
                                                        ? "bg-red-500 text-white"
                                                        : " text-gray-500 hover:bg-gray-100"
                                                } flex items-center w-full px-5 py-2 transition-colors duration-200  gap-x-2  focus:outline-none`}
                                            >
                                                <div
                                                    className={` ${
                                                        branchid == branch.id
                                                            ? "text-white"
                                                            : "text-red-500"
                                                    }`}
                                                >
                                                    <BuildingStorefrontIcon className="h-6" />
                                                </div>

                                                <div className="text-left rtl:text-right">
                                                    <h1 className="text-sm font-medium  capitalize ">
                                                        {branch.branch_name}
                                                    </h1>

                                                    <p className="text-xs ">
                                                        11.2 Followers
                                                    </p>
                                                </div>
                                            </button>
                                        </Disclosure.Button>
                                    </h3>
                                    <Disclosure.Panel className="text-sm text-gray-500 mx-2">
                                        <BranchRadioGroupComponent
                                            branchid={branch.id}
                                        />
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
            ))}
        </div>
    );
}
