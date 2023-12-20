import { useEffect } from "react";
import SalesReportTable from "./_components/sales-report-table";
import { get_sales_report_record } from "@/_services/bread-record-service";
import { setSalesData } from "../../_redux/production-slice";
import { useDispatch, useSelector } from "react-redux";

export default function SalesReportPage({ account }) {
    const { filteredSalesData } = useSelector((state) => state.production);
    const dispatch = useDispatch();
    useEffect(() => {
        get_sales_report_record({
            baker_id: account.id,
            branch_id: account.branch_id,
        }).then((res) => {
            dispatch(setSalesData(res.status));
        });
    }, []);
    return (
        <>
            <SalesReportTable data={filteredSalesData} account={account} />
        </>
    );
}
