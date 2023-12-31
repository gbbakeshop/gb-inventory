import { get_all_credit } from "@/_services/credit-service";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredits } from "../_redux/expenses-slice";
import DeleteCredits from "./delete-credit";
import UpdateCredits from "./update-credits";

export default function TableCredit({ account, branch_id, users,breads,selecta }) {
    const dispatch = useDispatch();
    const { credits } = useSelector((state) => state.expenses);
    const { meridiem } = useSelector((state) => state.app);
    useEffect(() => {
        get_all_credit({
            branch_id: branch_id,
            date: moment().format("L"),
            meridiem: meridiem,
            seller_id: account.id,
        }).then((res) => {
            dispatch(setCredits(res.status));
        });
    }, [meridiem]);

    return (
        <div className="flex flex-wrap">
            <div className="w-full max-w-full mx-auto">
                <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white my-5">
                    <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                        <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                            <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                                <span className="mr-3 font-semibold text-dark">
                                    Credits Of The Day
                                </span>
                            </h3>
                        </div>
                        <div className="flex-auto block py-8 pt-6 px-9">
                            <div className="overflow-x-auto">
                                <table className="w-full my-0 align-middle text-dark border-neutral-200">
                                    <thead className="align-bottom">
                                        <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                                            <th className="pb-3 text-start">
                                                ID #
                                            </th>
                                            <th className="pb-3 text-start min-w-[100px]">
                                                NAME OF EMPLOYEE
                                            </th>
                                            <th className="pb-3 text-start min-w-[100px]">
                                                AMOUNT
                                            </th>
                                            <th className="pb-3 text-start min-w-[100px]">
                                                DESCRIPTION
                                            </th>
                                            <th className="pb-3 text-start min-w-[100px]">
                                                STATUS
                                            </th>
                                            <th className="pb-3 text-start min-w-[100px]">
                                                DATE
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {credits.map((res, index) => (
                                            <tr
                                                key={index}
                                                className="border-b border-dashed last:border-b-0"
                                            >
                                                <td className="pr-0 text-start">
                                                    <span className="font-semibold text-light-inverse text-md/normal">
                                                        CRDT-{res.id}
                                                    </span>
                                                </td>
                                                <td className="pr-0 p-2 text-start">
                                                    <span className="font-semibold text-light-inverse text-md/normal">
                                                        {res.user.name}
                                                    </span>
                                                </td>
                                                <td className="pr-0 p-2 text-start">
                                                    <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                                                        {res.amount}
                                                    </span>
                                                </td>
                                                <td className="pr-0 p-2 text-start">
                                                    <span className="font-semibold text-light-inverse text-md/normal">
                                                        {res.discription}
                                                    </span>
                                                </td>
                                                <td className="pr-0 p-2 text-start">
                                                    <span className="font-semibold text-light-inverse text-md/normal">
                                                        {res.status}
                                                    </span>
                                                </td>
                                                <td className="pr-0 p-2 text-start">
                                                    <span className="font-semibold text-light-inverse text-md/normal">
                                                        {moment(
                                                            res.created_at
                                                        ).format("LLL")}
                                                    </span>
                                                </td>
                                                <td className="flex gap-3 pr-0 p-2 text-start">
                                                    <DeleteCredits
                                                        branch_id={branch_id}
                                                        id={res.id}
                                                        account={account}
                                                    />
                                                    <UpdateCredits
                                                        selecta={selecta}
                                                        breads={breads}
                                                        users={users}
                                                        branch_id={branch_id}
                                                        data={res}
                                                        account={account}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
