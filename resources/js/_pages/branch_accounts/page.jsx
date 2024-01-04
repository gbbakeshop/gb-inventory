import BranchLayout from "@/_layouts/branch-layout";
import { Link } from "@inertiajs/react";
import BranchAccountTable from "../branches/accounts/_components/branch-account-table";
import { get_branch_account } from "@/_services/account-service";
import { useEffect, useState } from "react";
import BranchAccountSkeleton from "../branches/accounts/_components/branch-account-skeleton";

export default function BranchAccountPage({ auth }) {
    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(true);
    const branchid = auth.user.branch_id;

    useEffect(() => {
        get_branch_account({ branch_id: branchid }).then((res) => {
            setAccounts(res.status);
            setLoading(false)
        });
    }, []);
    return (
        <BranchLayout account={auth}>
            {loading ? (
                <BranchAccountSkeleton />
            ) : (
                <BranchAccountTable accounts={accounts} />
            )}
        </BranchLayout>
    );
}
