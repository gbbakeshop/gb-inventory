import AdministratorLayout from "@/_layouts/administrator-layout";
import AccountsTable from "./_components/accounts-table";

export default function AccountsPage() {
    return (
        <AdministratorLayout>
            <AccountsTable />
        </AdministratorLayout>
    );
}
