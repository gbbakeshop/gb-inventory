import AdministratorLayout from "@/_layouts/administrator-layout";
import RadioGroupComponent from "../_components/RadioGroupComponent";
import ControlsBreadCrumbs from "../_components/control-breadcrumbs";
import AccountTable from "./_components/account-table";
import { useEffect, useState } from "react";
import { get_all_account } from "@/_services/account-service";

export default function AccountPage({ auth }) {
const [accounts,setAccounts] = useState([])
  useEffect(() => {
    get_all_account ().then(res=>{
      setAccounts(res.status)
    })
  }, []);
    return (
        <AdministratorLayout auth={auth} subNav={<RadioGroupComponent />}>
            <ControlsBreadCrumbs />
            <AccountTable accounts={accounts}/>
        </AdministratorLayout>
    );
}
