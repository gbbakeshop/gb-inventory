import BranchLayout from "@/_layouts/branch-layout";
import BranchSelectaTable from "../../branches/selecta/_components/branch-selecta-table";
import BranchSelectaTableHeader from "../../branches/selecta/_components/branch-selecta-table-header";
import BranchSelectaTabs from "../_components/branch_selecta-tabs";
import BranchSelectaDoubleCheckTable from "@/_pages/branches/selecta/_components/branch-selecta-double-check-table";

export default function BranchSelectaDoubleCheckPage({ auth }) {
    return (
        <BranchLayout account={auth}>
            <BranchSelectaTabs account={auth} />
            <BranchSelectaTableHeader />
            <BranchSelectaDoubleCheckTable account={auth.user} />
        </BranchLayout>
    );
}
