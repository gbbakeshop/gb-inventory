import BranchSideNavbar from "@/_components/branch-side-navbar";
import Toastify from "@/_components/toastify";
import { setBranches, setRecipeList, setRecipes } from "@/_redux/app-slice";
import { get_all_branches } from "@/_services/branches-service";
import { get_all_recipe } from "@/_services/recipe-service";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function BranchLayout({ children, account }) {
    const dispatch = useDispatch();

    useEffect(() => {
        get_all_branches().then((res) => dispatch(setBranches(res.status)));
        get_all_recipe().then((res) => {
            dispatch(setRecipeList(res?.status));
            dispatch(setRecipes(res?.status));
        });
    }, [dispatch]);

    const { branches } = useSelector(
      (state) => state.app
  );
  const branch = branches.find(res=>res.id == account.user.branch_id)
   
    return (
        <>
            <Toastify />
            <div className="flex">
                <div className="flex-none ">
                    <BranchSideNavbar account={account.user}/>
                </div>
                <div className="flex-1 p-3">
                    <h3 className="text-2xl font-semibold leading-normal  text-blueGray-700 ">
                       {account.user.name}
                    </h3>
                    <div className="text-sm leading-normal mt-0 text-gray-400 font-bold uppercase">
                        <i className="fas fa-map-marker-alt text-lg text-gray-400"></i>
                       {account.user.position} - ID #: GB - {account.user.id}
                    </div>
                    <div className="text-sm leading-normal mt-0 text-gray-400 font-bold uppercase">
                        <i className="fas fa-map-marker-alt text-lg text-gray-400"></i>
                       Branch : {branch?.branch_name}
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
}
