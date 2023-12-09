import AdministratorLayout from "@/_layouts/administrator-layout";
import BranchesDisclosure from "./../_components/disclosure";
import BranchBreadCrumbsComponent from "../_components/branch-breadcrumbs-component";

export default function BranchAnalyticsPage({auth}) {
  return ( 
    <AdministratorLayout
    auth={auth}
    subNav={<BranchesDisclosure />}
    >
      <BranchBreadCrumbsComponent />
    </AdministratorLayout>
   );
}
