import AdministratorLayout from "@/_layouts/administrator-layout";
import BranchesDisclosure from "./../_components/disclosure";
import BranchBreadCrumbsComponent from "../_components/branch-breadcrumbs-component";
import BranchSelectaTable from "./_components/branch-selecta-table";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBranchSelecta } from "./_redux/branch-selecta-slice";
import { get_all_selecta_branch } from "@/_services/selecta-branch-service";
import BranchSelectaTabs from "./_components/branch-selecta-tabs";

export default function BranchSelectaPage({ auth }) {
    const dispatch = useDispatch();
    const branch_id = window.location.pathname.split("/")[3];
    useEffect(() => {
        get_all_selecta_branch(branch_id).then((res) => {
            dispatch(setBranchSelecta(res.status));
        });
    }, []);
    return (
        <AdministratorLayout auth={auth} subNav={<BranchesDisclosure />}>
            <BranchBreadCrumbsComponent />
            <BranchSelectaTabs />
        </AdministratorLayout>
    );
}
