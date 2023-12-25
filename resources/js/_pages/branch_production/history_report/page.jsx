import BranchLayout from "@/_layouts/branch-layout";
import BranchProductionTabs from "../_components/branch-production-tabs";
import BranchBreadCrumbs from "../_components/branch-breadcrumbs";

export default function BranchHistoryReportPage({ auth }) {
    return (
        <BranchLayout account={auth}>
            <BranchBreadCrumbs account={auth.user} />
            <BranchProductionTabs account={auth.user} />
        </BranchLayout>
    );
}
