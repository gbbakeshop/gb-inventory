import BranchLayout from "@/_layouts/branch-layout";
import BranchProductionTabs from "../_components/branch-production-tabs";
import BranchBreadCrumbs from "../_components/branch-breadcrumbs";
import SalesReportTable from "@/_pages/branches/production/_section/sales_report/_components/sales-report-table";
import { setSalesData } from "@/_pages/branches/production/_redux/production-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_sales_report_record } from "@/_services/bread-record-service";
import moment from "moment";
import SalesReportTableHeader from "@/_pages/branches/production/_section/sales_report/_components/sales-report-table-header";

export default function BranchSalesReportPage({ auth }) {
    const dispatch = useDispatch();
    const { filteredSalesData } = useSelector((state) => state.production);
    useEffect(() => {
        get_sales_report_record({
            seller_id: auth.user.id,
            branch_id: auth.user.branch_id,
            date: moment().format("L"),
        }).then((res) => {
            dispatch(setSalesData(res.status));
        });
    }, []);

    return (
        <BranchLayout account={auth}>
            <BranchBreadCrumbs account={auth.user} />
            <BranchProductionTabs account={auth.user} />
            <SalesReportTableHeader />
            <SalesReportTable data={filteredSalesData} account={auth.user} />
        </BranchLayout>
    );
}
