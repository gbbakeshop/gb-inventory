
import BranchLayout from "@/_layouts/branch-layout";
import { Link } from "@inertiajs/react";
import BranchRawMaterialsTable from "../branches/raw_materials/_components/branch-raw-materials-table";
import { get_all_branch_raw_materials } from "@/_services/raw-materials-branch-service";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setRawMaterials } from "../branches/raw_materials/_redux/raw-materials-slice";

export default function BranchRawMaterialsPage({ auth }) {

  const dispatch = useDispatch()
  useEffect(() => {
    get_all_branch_raw_materials(auth.user.branch_id).then(res=>{
      dispatch(setRawMaterials(res.status))
    
    })
    
  }, []);
 
    return (
        <BranchLayout account={auth}>
             <BranchRawMaterialsTable
             account={auth.user}
            branch_id={auth.user.branch_id}/>
        </BranchLayout>
    );
}
