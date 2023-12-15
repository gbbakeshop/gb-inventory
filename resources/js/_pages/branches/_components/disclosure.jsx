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
        <>
            {branches.map((branch, index) => (
                <div key={index} className="w-full h-full">
                    <div className="mx-auto w-full max-w-md rounded-2xl bg-white px-2 py-1">
                        <Disclosure defaultOpen={branchid == branch.id}>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button
                                        className={`flex w-full justify-between rounded-lg bg-red-500 text-white  px-4 py-4 text-left text-sm font-medium  hover:bg-red-600 focus:outline-none focus-visible:ring focus-visible:ring-red-500/75`}
                                    >
                                        <span className="flex items-center justify-center">
                                            {branchid == branch.id ? (
                                                <CheckCircleIcon className="h-6 mr-1" />
                                            ) : (
                                                <BuildingStorefrontIcon className="h-6 mr-1" />
                                            )}
                                            {branch.branch_name}
                                        </span>
                                        <ChevronUpIcon
                                            className={`${
                                                open
                                                    ? "rotate-180 transform "
                                                    : ""
                                            } h-5 w-5 text-white`}
                                        />
                                    </Disclosure.Button>
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
        </>
    );
}
