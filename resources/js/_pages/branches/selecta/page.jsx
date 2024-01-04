import AdministratorLayout from "@/_layouts/administrator-layout";
import BranchesDisclosure from "./../_components/disclosure";
import BranchBreadCrumbsComponent from "../_components/branch-breadcrumbs-component";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setBranchSelecta,
    setSelectaSalesReport,
    setSelectedSelectaReset,
} from "./_redux/branch-selecta-slice";
import {
    get_all_selecta_branch,
    get_selecta_branch_sales_report,
} from "@/_services/selecta-branch-service";
import BranchSelectaTabs from "./_components/branch-selecta-tabs";
import moment from "moment";
import BranchSelectaSkeleton from "./_components/branch-selecta-skeleton";

export default function BranchSelectaPage({ auth }) {
    const dispatch = useDispatch();
    const branch_id = window.location.pathname.split("/")[3];
    const { meridiem } = useSelector((state) => state.app);
    const [loading, setLoading] = useState(true);
    const { selectedSelecta } = useSelector((state) => state.selecta);
    useEffect(() => {
        get_all_selecta_branch(branch_id).then((res) => {
            dispatch(setBranchSelecta(res.status));
        });
    }, []);
    // localStorage.clear();

    useEffect(() => {
        get_selecta_branch_sales_report({
            branch_id: branch_id,
            date: moment().format("L"),
            meridiem: meridiem,
            seller_id: auth.user.id,
        }).then((res) => {
            dispatch(setSelectaSalesReport(res.status));
            setLoading(false)
        });
    }, [meridiem]);

    return (
        <AdministratorLayout auth={auth} subNav={<BranchesDisclosure />}>
            {loading ? (
                <BranchSelectaSkeleton />
            ) : (
                <>
                    <BranchBreadCrumbsComponent />
                    <BranchSelectaTabs account={auth.user} />
                </>
            )}
        </AdministratorLayout>
    );
}
