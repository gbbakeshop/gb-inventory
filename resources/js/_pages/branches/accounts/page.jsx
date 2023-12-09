import AdministratorLayout from "@/_layouts/administrator-layout";
import BranchesDisclosure from "./../_components/disclosure";
import BranchBreadCrumbsComponent from "../_components/branch-breadcrumbs-component";
import BranchAccountTable from "./_components/branch-account-table";

export default function BranchAccountPage({auth}) {
  return ( 
    <AdministratorLayout
    auth={auth}
    subNav={<BranchesDisclosure />}
    >
      <BranchBreadCrumbsComponent />
      <BranchAccountTable />
    </AdministratorLayout>
   );
}
