import { useDispatch, useSelector } from "react-redux";
import { setBreadData } from "../../_redux/production-slice";
import ProductionBreadReportTable from "./_components/production-bread-report-table";
import {  get_bread_report_record } from "@/_services/bread-record-service";
import { useEffect } from "react";
import ProductionBreadReportHeader from "./_components/production-bread-report-header";

export default function BreadReportPage({ account }) {
    const { filteredBreadData } = useSelector((state) => state.production);
    const dispatch = useDispatch();
    const branch_id = window.location.pathname.split('/')[3]
    useEffect(() => {
        get_bread_report_record({
            baker_id: account.id,
            branch_id: branch_id,
        }).then((res) => {
            dispatch(setBreadData(res.status));
        });
    }, []);
    return (
        <>
        <ProductionBreadReportHeader />
            <ProductionBreadReportTable
                data={filteredBreadData}
                account={account}
            />
        </>
    );
}
