import AdministratorLayout from "@/_layouts/administrator-layout";
import BranchesDisclosure from "./../_components/disclosure";
import BranchBreadCrumbsComponent from "../_components/branch-breadcrumbs-component";
import BranchRawMaterialsTable from "./_components/branch-raw-materials-table";
import { useEffect, useState } from "react";
import { get_all_branch_raw_materials } from "@/_services/raw-materials-branch-service";
import { setRawMaterials } from "./_redux/raw-materials-slice";
import { useDispatch } from "react-redux";
import BranchRawMaterialsSkeleton from "./_components/branch-raw-materials-skeleton";

export default function BranchRawMaterialsPage({ auth }) {
    const branch_id = window.location.pathname.split("/")[3];
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        get_all_branch_raw_materials(branch_id).then((res) => {
            dispatch(setRawMaterials(res.status));
            setLoading(false);
        });
    }, []);
    return (
        <AdministratorLayout auth={auth} subNav={<BranchesDisclosure />}>
            {loading ? (
                <BranchRawMaterialsSkeleton />
            ) : (
                <>
                    <BranchBreadCrumbsComponent />
                    <BranchRawMaterialsTable
                        account={auth.user}
                        branch_id={branch_id}
                    />
                </>
            )}
        </AdministratorLayout>
    );
}
