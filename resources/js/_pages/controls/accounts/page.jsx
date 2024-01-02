import AdministratorLayout from "@/_layouts/administrator-layout";
import RadioGroupComponent from "../_components/RadioGroupComponent";
import ControlsBreadCrumbs from "../_components/control-breadcrumbs";
import AccountTable from "./_components/account-table";
import { useEffect, useState } from "react";
import { get_all_account } from "@/_services/account-service";
import { useDispatch, useSelector } from "react-redux";
import { setAccounts } from "../_redux/controls-slice";
import CreateAccount from "./_components/create-account";
import AccountTabs from "./_components/account-tabs";

export default function AccountPage({ auth }) {
  const dispatch = useDispatch()
  const { filteredAccounts } = useSelector((state) => state.controls);
  useEffect(() => {
    get_all_account ().then(res=>{
      dispatch(setAccounts(res.status))
    })
  }, []);
    return (
        <AdministratorLayout auth={auth} subNav={<RadioGroupComponent />}>
            <ControlsBreadCrumbs />
            <AccountTabs accounts={filteredAccounts}/>
       
        </AdministratorLayout>
    );
}
