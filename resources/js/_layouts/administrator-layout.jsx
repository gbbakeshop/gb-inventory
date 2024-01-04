import TopNavbar from "@/_components/top-navbar";
import SideNavbar from "@/_components/side-navbar";
import { get_all_branches } from "@/_services/branches-service";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBranches, setRecipeList, setRecipes } from "@/_redux/app-slice";
import Toastify from "@/_components/toastify";
import { get_all_recipe } from "@/_services/recipe-service";

export default function AdministratorLayout({ auth, children, subNav }) {
    const dispatch = useDispatch();

    useEffect(() => {
        get_all_branches().then((res) => dispatch(setBranches(res.status)));
        get_all_recipe().then((res) => {
            dispatch(setRecipeList(res?.status));
            dispatch(setRecipes(res?.status));
        });
    }, [dispatch]);

    return (
        <>
            <Toastify />
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
                             <div className="p-2">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
