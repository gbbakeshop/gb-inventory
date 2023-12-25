import BranchLayout from "@/_layouts/branch-layout";
import BranchProductionTabs from "../_components/branch-production-tabs";
import BranchBreadCrumbs from "../_components/branch-breadcrumbs";
import ProductionBreadReportHeader from "@/_pages/branches/production/_section/bread_report/_components/production-bread-report-header";
import ProductionBreadReportTable from "@/_pages/branches/production/_section/bread_report/_components/production-bread-report-table";
import { useDispatch, useSelector } from "react-redux";
import { get_bread_report_record } from "@/_services/bread-record-service";
import { useEffect } from "react";
import { setBreadData } from "@/_pages/branches/production/_redux/production-slice";

export default function BranchBreadReportPage({ auth }) {
    const { filteredBreadData } = useSelector((state) => state.production);
    const dispatch = useDispatch();
    useEffect(() => {
        get_bread_report_record({
            baker_id: auth.user.id,
            branch_id: auth.user.branch_id,
        }).then((res) => {
            dispatch(setBreadData(res.status));
        });
    }, []);
    return (
        <BranchLayout account={auth}>
            <BranchBreadCrumbs account={auth.user} />
            <BranchProductionTabs account={auth.user} />
            <ProductionBreadReportHeader />
            <ProductionBreadReportTable
                data={filteredBreadData}
                account={auth.user}
            />
        </BranchLayout>
    );
}
