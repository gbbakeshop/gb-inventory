import AdministratorLayout from "@/_layouts/administrator-layout";
import BranchesDisclosure from "./../_components/disclosure";
import BranchBreadCrumbsComponent from "../_components/branch-breadcrumbs-component";
import ExpensesDataCard from "./_components/expenses-data-card";
import { useEffect, useState } from "react";
import { get_total_records } from "@/_services/dashboard-service";
import moment from "moment";
import { useSelector } from "react-redux";

export default function BranchExpensesPage({ auth }) {
    const [data, setData] = useState([]);
    const branch_id = window.location.pathname.split("/")[3];
    const {  meridiem } = useSelector((state) => state.app);
    useEffect(() => {
        get_total_records({
            branch_id: branch_id,
            seller_id: auth.user.id,
            date: moment().format("L"),
            meridiem:meridiem,
        }).then((res) => {
            setData(res);
        });
    }, [meridiem]);

    return (
        <AdministratorLayout auth={auth} subNav={<BranchesDisclosure />}>
            <BranchBreadCrumbsComponent />
            <ExpensesDataCard data={data} />
        </AdministratorLayout>
    );
}
