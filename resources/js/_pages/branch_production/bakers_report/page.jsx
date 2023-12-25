import BranchLayout from "@/_layouts/branch-layout";
import BranchProductionTabs from "../_components/branch-production-tabs";
import BranchBreadCrumbs from "../_components/branch-breadcrumbs";
import ProductionBakersReportTable from "@/_pages/branches/production/_section/bakers_report/_components/production-bakers-report-table";
import { useDispatch, useSelector } from "react-redux";
import { get_bakers_report_record } from "@/_services/bread-record-service";
import { setBakersData } from "@/_pages/branches/production/_redux/production-slice";
import { useEffect } from "react";
import ProductionBakersReportHeader from "@/_pages/branches/production/_section/bakers_report/_components/production-bakers-report-header";

export default function BranchBakersReportPage({ auth }) {
    const { filteredBakersData } = useSelector((state) => state.production);
    const dispatch = useDispatch();
    useEffect(() => {
        get_bakers_report_record({
            baker_id: auth.user.id,
            branch_id: auth.user.branch_id,
        }).then((res) => {
            dispatch(setBakersData(res.status));
        });
    }, []);
    return (
        <BranchLayout account={auth}>
            <BranchBreadCrumbs account={auth.user} />
            <BranchProductionTabs account={auth.user} />
            <ProductionBakersReportHeader />
            <ProductionBakersReportTable
                data={filteredBakersData}
                account={auth.user}
            />
        </BranchLayout>
    );
}
