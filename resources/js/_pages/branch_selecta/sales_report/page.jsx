import BranchLayout from "@/_layouts/branch-layout";
import BranchSelectaTable from "../../branches/selecta/_components/branch-selecta-table";
import BranchSelectaTableHeader from "../../branches/selecta/_components/branch-selecta-table-header";
import BranchSelectaTabs from "../_components/branch_selecta-tabs";
import BranchSelectaSalesReport from "@/_pages/branches/selecta/_components/branch-selecta-sales-report";
import { get_selecta_branch_sales_report } from "@/_services/selecta-branch-service";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setSelectaSalesReport } from "@/_pages/branches/selecta/_redux/branch-selecta-slice";
import { useEffect } from "react";

export default function BranchSelectaSalesReportPage({ auth }) {
    const dispatch = useDispatch();
    
    useEffect(() => {
        get_selecta_branch_sales_report({
            branch_id: auth.user.branch_id,
            date: moment().format("L"),
            meridiem: moment().format('A'),
            seller_id: auth.user.id,
        }).then((res) => {
            dispatch(setSelectaSalesReport(res.status));
        });
    }, []);

    return (
        <BranchLayout account={auth}>
            <BranchSelectaTabs account={auth} />
            <BranchSelectaTableHeader />
            <BranchSelectaSalesReport />
        </BranchLayout>
    );
}
