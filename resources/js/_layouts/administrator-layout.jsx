import TopNavbar from "@/_components/top-navbar";
import SideNavbar from "@/_components/side-navbar";
import { get_all_branches } from "@/_services/branches-service";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBranches } from "@/_redux/app-slice";

export default function AdministratorLayout({ auth, children, subNav }) {
    const dispatch = useDispatch();

    useEffect(() => {
        get_all_branches().then((res) => 
          dispatch(setBranches(res.status))
        );
    }, [dispatch]);

    return (
        <div className="flex">
            <div className="flex-none ">
                <SideNavbar subNav={subNav} />
            </div>
            <div className="flex-1 w-screen">
                <div className="flex flex-col">
                    <div className="flex-none top-0 sticky">
                        <TopNavbar />
                    </div>
                    <div className="flex-1 w-full">
                        <div className="p-2 overflow-x-auto">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
