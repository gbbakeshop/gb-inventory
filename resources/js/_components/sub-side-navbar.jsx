import { Transition } from "@headlessui/react";
import { useSelector } from "react-redux";

export default function SubSideNavbar({subNav}) {
    const { isTopBarToggled } = useSelector((state) => state.app);


    return (
        <Transition
            show={isTopBarToggled}
            enter="transform transition ease-in-out duration-500 sm:duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transform transition ease-in-out duration-500 sm:duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className={"h-screen py-8 overflow-y-auto bg-white border-l border-r sm:w-64 w-60  "}>
                <h2 className="px-5 text-lg font-medium text-gray-800 ">
                    Accounts
                </h2>

                <div className="mt-8 ">
                  {subNav}
                </div>
            </div>
        </Transition>
    );
}
