import {
    BanknotesIcon,
    BuildingStorefrontIcon,
    CakeIcon,
    CalendarDaysIcon,
    ChatBubbleLeftRightIcon,
    ClipboardDocumentCheckIcon,
    Cog6ToothIcon,
    HomeIcon,
    PauseCircleIcon,
    TruckIcon,
    UserGroupIcon,
    WrenchIcon,
} from "@heroicons/react/24/outline";
import SubSideNavbar from "./sub-side-navbar";
import { Link, usePage } from "@inertiajs/react";

export default function BranchSideNavbar({ subNav, account }) {
    const { url } = usePage();
    const path = url.split("/")[2];

    function active(value) {
        return value == path
            ? "p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg "
            : "p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg  hover:bg-gray-100";
    }
    return (
        <aside className="flex top-0 sticky ">
            <div className="flex flex-col items-center w-16 h-screen py-8 space-y-8 bg-white  ">
                <button>
                    <img
                        className="w-auto h-6"
                        src="https://merakiui.com/images/logo.svg"
                        alt=""
                    />
                </button>

                <Link
                    href={route("branch.dashboard")}
                    className={active("dashboard")}
                >
                    <HomeIcon className="w-6 h-6" />
                </Link>

                {account.position !== "Baker" &&
                    account.position !== "Chief Baker" &&
                    account.position !== "Lamesador" &&
                    account.position !== "Supervisor" && (
                        <Link
                            href={route("branch.expenses")}
                            className={active("expenses")}
                        >
                            <BanknotesIcon className="w-6 h-6" />
                        </Link>
                    )}

                <Link
                    href={
                        account.position == "Baker" ||
                        account.position == "Chief Baker" ||
                        account.position == "Lamesador" ||
                        account.position == "Supervisor"
                            ? route("branch.new.production")
                            : route("branch.bakers.report")
                    }
                    className={active("production")}
                >
                    <CakeIcon className="w-6 h-6" />
                </Link>

                <Link
                    href={route("branch.raw_materials")}
                    className={active("raw_materials")}
                >
                    <TruckIcon className="w-6 h-6" />
                </Link>

                {account.position !== "Baker" &&
                    account.position !== "Chief Baker" &&
                    account.position !== "Lamesador" &&
                    account.position !== "Supervisor" && (
                        <Link
                            href={route("branch.selecta")}
                            className={active("selecta")}
                        >
                            <ClipboardDocumentCheckIcon className="w-6 h-6" />
                        </Link>
                    )}

                <Link
                    href={route("branch.accounts")}
                    className={active("accounts")}
                >
                    <UserGroupIcon className="w-6 h-6" />
                </Link>
                <Link
                    href={route("branch.attendance")}
                    className={active("attendance")}
                >
                    <CalendarDaysIcon className="w-6 h-6" />
                </Link>
                <Link
                    method="post"
                    className="p-1.5 text-violet-800 transition-colors duration-200 bg-violet-100 rounded-lg"
                    href={route("logout")}
                >
                    <PauseCircleIcon className="w-6 h-6" />
                </Link>
            </div>
            {subNav && <SubSideNavbar subNav={subNav} />}
        </aside>
    );
}
