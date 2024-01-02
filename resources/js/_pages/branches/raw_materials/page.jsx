import AdministratorLayout from "@/_layouts/administrator-layout";
import BranchesDisclosure from "./../_components/disclosure";
import BranchBreadCrumbsComponent from "../_components/branch-breadcrumbs-component";
import BranchRawMaterialsTable from "./_components/branch-raw-materials-table";
import { useEffect, useState } from "react";
import { get_all_branch_raw_materials } from "@/_services/raw-materials-branch-service";

export default function BranchRawMaterialsPage({ auth }) {
  const branch_id = window.location.pathname.split('/')[3]
  const [data,setData] = useState([])
  useEffect(() => {
    get_all_branch_raw_materials(branch_id).then(res=>{
      setData(res.status)
    })
    
  }, []);
    return (
        <AdministratorLayout auth={auth} subNav={<BranchesDisclosure />}>
            <BranchBreadCrumbsComponent />
            <BranchRawMaterialsTable data={ data}/>
        </AdministratorLayout>
    );
}
