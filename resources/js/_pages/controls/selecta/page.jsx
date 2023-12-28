import AdministratorLayout from "@/_layouts/administrator-layout";
import RadioGroupComponent from "../_components/RadioGroupComponent";
import ControlsBreadCrumbs from "../_components/control-breadcrumbs";
import SelectaTable from "./_components/selecta-table";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { get_all_selecta } from "@/_services/selecta-service";
import SelectaTableHeader from "./_components/selecta-table-header";
import { setSelecta } from "../_redux/controls-slice";

export default function SelectaPage({ auth }) {
    const dispatch = useDispatch();
    useEffect(() => {
        get_all_selecta().then((res) => {
            dispatch(setSelecta(res.status));
        });
    }, []);
    return (
        <AdministratorLayout auth={auth} subNav={<RadioGroupComponent />}>
            <ControlsBreadCrumbs />
            <SelectaTableHeader />
            <SelectaTable />
        </AdministratorLayout>
    );
}
