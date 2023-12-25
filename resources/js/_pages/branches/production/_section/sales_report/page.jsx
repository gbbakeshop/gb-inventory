import { useEffect } from "react";
import SalesReportTable from "./_components/sales-report-table";
import { get_sales_report_record } from "@/_services/bread-record-service";
import { setSalesData } from "../../_redux/production-slice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import SalesReportTableHeader from "./_components/sales-report-table-header";

export default function SalesReportPage({ account }) {
    const { filteredSalesData } = useSelector((state) => state.production);
    const dispatch = useDispatch();
    const branch_id = window.location.pathname.split("/")[3];
    const { meridiem } = useSelector((state) => state.app);
    useEffect(() => {
        get_sales_report_record({
            seller_id: account.id,
            branch_id: branch_id,
            date: moment().format("L"),
            meridiem: meridiem,
        }).then((res) => {
            dispatch(setSalesData(res.status));
        });
    }, [meridiem]);
    return (
        <>
            <SalesReportTableHeader />
            <SalesReportTable data={filteredSalesData} account={account} />
        </>
    );
}
