
import BranchLayout from "@/_layouts/branch-layout";
import { Link } from "@inertiajs/react";
import ExpensesDataCard from "../branches/expenses/_components/expenses-data-card";
import { useEffect, useState } from "react";
import { get_total_records } from "@/_services/dashboard-service";
import moment from "moment";

export default function BranchExpensesPage({ auth }) {

  const [data,setData] = useState([])
  useEffect(() => {
    get_total_records({
      branch_id:auth.user.branch_id,
      seller_id:auth.user.id,
      date:moment().format('L')
    }).then(res=>{
      setData(res)
    })
  }, []);

    return (
        <BranchLayout account={auth}>
            <ExpensesDataCard 
            account={auth.user}
            data={data}
            branch_id={auth.user.branch_id}
            />
        </BranchLayout>
    );
}
