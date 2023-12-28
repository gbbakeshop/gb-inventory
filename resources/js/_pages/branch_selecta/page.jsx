import BranchLayout from "@/_layouts/branch-layout";
import { Link } from "@inertiajs/react";
import BranchSelectaTable from "../branches/selecta/_components/branch-selecta-table";
import BranchSelectaTableHeader from "../branches/selecta/_components/branch-selecta-table-header";

export default function BranchSelectaPage({ auth }) {
    return (
        <BranchLayout account={auth}>
            {/* <Link
                method="post"
                href={route("logout")}
               
            >
                Sign out
            </Link> */}
            <BranchSelectaTableHeader />
            <BranchSelectaTable />
            {/* {auth.user.position} */}
        </BranchLayout>
    );
}
