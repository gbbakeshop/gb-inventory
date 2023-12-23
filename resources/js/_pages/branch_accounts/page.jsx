
import BranchLayout from "@/_layouts/branch-layout";
import { Link } from "@inertiajs/react";

export default function BranchAccountPage({ auth }) {
    return (
        <BranchLayout account={auth}>
            {/* <Link
                method="post"
                href={route("logout")}
               
            >
                Sign out
            </Link> */}ss
            {/* {auth.user.position} */}
        </BranchLayout>
    );
}
