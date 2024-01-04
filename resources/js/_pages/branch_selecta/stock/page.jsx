import BranchLayout from "@/_layouts/branch-layout";
import BranchSelectaTable from "../../branches/selecta/_components/branch-selecta-table";
import BranchSelectaTableHeader from "../../branches/selecta/_components/branch-selecta-table-header";
import BranchSelectaTabs from "../_components/branch_selecta-tabs";
import { useDispatch, useSelector } from "react-redux";
import { get_all_selecta_branch } from "@/_services/selecta-branch-service";
import { useEffect, useState } from "react";
import { setBranchSelecta } from "@/_pages/branches/selecta/_redux/branch-selecta-slice";
import BranchSelectaSkeleton from "../../branches/selecta/_components/branch-selecta-skeleton";

export default function BranchSelectaStockPage({ auth }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        get_all_selecta_branch(auth.user.branch_id).then((res) => {
            dispatch(setBranchSelecta(res.status));
            setLoading(false)
        });
    }, []);
    return (
        <BranchLayout account={auth}>
            {loading ? (
                <BranchSelectaSkeleton />
            ) : (
                <>
                    <BranchSelectaTabs account={auth} />
                    <BranchSelectaTableHeader />
                    <BranchSelectaTable />
                </>
            )}
        </BranchLayout>
    );
}
