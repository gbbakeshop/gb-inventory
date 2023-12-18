import AdministratorLayout from "@/_layouts/administrator-layout";
import BranchesDisclosure from "./../_components/disclosure";
import BranchProductionTabsComponent from "./_components/branch-production-tabs-component";
import BranchBreadCrumbsComponent from "../_components/branch-breadcrumbs-component";

export default function BranchProductionPage({ auth }) {
    const { user } = auth;

    return (
        <AdministratorLayout auth={auth} subNav={<BranchesDisclosure />}>
            <BranchBreadCrumbsComponent />
            <BranchProductionTabsComponent 
            account={user}
            branchid="1" />
        </AdministratorLayout>
    );
}
