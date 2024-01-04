import {
    BellAlertIcon,
    BuildingStorefrontIcon,
    ChartPieIcon,
    ChatBubbleLeftIcon,
    ChatBubbleLeftRightIcon,
    Cog6ToothIcon,
    HomeIcon,
    ListBulletIcon,
    UserGroupIcon,
    WrenchIcon,
} from "@heroicons/react/24/outline";
import SubSideNavbar from "./sub-side-navbar";
import { Link, usePage } from "@inertiajs/react";
export default function SideNavbar({subNav}) {
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
                    href={route("administrator.dashboard")}
                    className={active("dashboard")}
                >
                    <HomeIcon className="w-6 h-6" />
                </Link>

                <Link
                    href={route("controls.bread")}
                    className={active("controls")}
                >
                    <WrenchIcon className="w-6 h-6" />
                </Link>

                <Link href={route("branches")} className={active("branches")}>
                    <BuildingStorefrontIcon className="w-6 h-6" />
                </Link>

                <Link
                    href={route("controls.accounts")}
                    className={active("accounts")}
                >
                    <UserGroupIcon className="w-6 h-6" />
                </Link>

                <Link href="#" className={active("message")}>
                    <ChatBubbleLeftRightIcon className="w-6 h-6" />
                </Link>

                <Link
                    href={route("administrator.settings")}
                    className={active("settings")}
                >
                    <Cog6ToothIcon className="w-6 h-6" />
                </Link>
            </div>
            {
              subNav &&  <SubSideNavbar subNav={subNav}/>
            }
           
        </aside>
    );
}
