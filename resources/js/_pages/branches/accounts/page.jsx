import AdministratorLayout from "@/_layouts/administrator-layout";
import BranchesDisclosure from "./../_components/disclosure";
import BranchBreadCrumbsComponent from "../_components/branch-breadcrumbs-component";
import BranchAccountTable from "./_components/branch-account-table";
import { useEffect, useState } from "react";
import { get_branch_account } from "@/_services/account-service";
import BranchAccountSkeleton from "./_components/branch-account-skeleton";

export default function BranchAccountPage({ auth }) {
    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(true);
    const branchid = window.location.pathname.split("/")[3];
    useEffect(() => {
        get_branch_account({ branch_id: branchid }).then((res) => {
            setAccounts(res.status);
            setLoading(false)
        });
    }, []);
    return (
        <AdministratorLayout auth={auth} subNav={<BranchesDisclosure />}>
            {loading ? (
                <BranchAccountSkeleton />
            ) : (
                <>
                    <BranchBreadCrumbsComponent />
                    <BranchAccountTable accounts={accounts} />
                </>
            )}
        </AdministratorLayout>
    );
}
