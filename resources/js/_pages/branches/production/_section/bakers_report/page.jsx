import { useEffect, useState } from "react";
import ProductionBakersReportTable from "./_components/production-bakers-report-table";
import { get_bakers_report_record } from "@/_services/bread-record-service";
import { setBakersData } from "../../_redux/production-slice";
import { useDispatch, useSelector } from "react-redux";
import ProductionBakersReportHeader from "./_components/production-bakers-report-header";

export default function BakersReportPage({ account }) {
  
    const { filteredBakersData } = useSelector((state) => state.production);
    const dispatch = useDispatch()
    const branch_id = window.location.pathname.split('/')[3]
    useEffect(() => {
      get_bakers_report_record({
        baker_id:account.id,
        branch_id:branch_id
      }).then(res=>{
        dispatch(setBakersData(res.status))
      })
    }, [ ]);

    return (
        <>
        <ProductionBakersReportHeader />
            <ProductionBakersReportTable 
            data={filteredBakersData}
            account={account} />
        </>
    );
}
