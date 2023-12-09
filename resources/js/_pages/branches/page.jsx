import AdministratorLayout from "@/_layouts/administrator-layout";
import BranchesDisclosure from "./_components/disclosure";

export default function BranchesPage({auth}) {
  return ( 
    <AdministratorLayout
    auth={auth}
    subNav={<BranchesDisclosure />}
    >BranchesPage
    </AdministratorLayout>
   );
}
