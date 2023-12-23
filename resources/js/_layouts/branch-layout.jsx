import BranchSideNavbar from "@/_components/branch-side-navbar";
import Toastify from "@/_components/toastify";

export default function BranchLayout({ children, account }) {
    return (
        <>
            <Toastify />
            <div className="flex">
                <div className="flex-none ">
                    <BranchSideNavbar />
                </div>
                <div className="flex-1 p-3">{children}</div>
            </div>
        </>
    );
}
