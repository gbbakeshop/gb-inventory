import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import BranchSelectaAddRemaining from "./branch-selecta-add-remaining";
import BranchSelectaEditRemaining from "./branch-selecta-edit-remaining";
import { move_to_selecta_report } from "@/_services/selecta-service";
import { setToastStatus } from "@/_redux/app-slice";
import { useEffect, useState } from "react";
import {
    setBranchSelecta,
    setSelectaSalesReport,
    setSelectedSelectaReset,
} from "../_redux/branch-selecta-slice";
import LoadingComponent from "@/_components/loading-component";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function BranchSelectaDoubleCheckTable({ account }) {
    const { selectedSelecta } = useSelector((state) => state.selecta);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(false);
    }, []);
    
    function moveToSelectaRecord() {
        setLoading(true);
        move_to_selecta_report(
            selectedSelecta.map((res) => ({
                ...res,
                meridiem: moment().format("A"),
                date: moment().format("L"),
                seller_id: account.id,
            }))
        ).then((res) => {
            dispatch(setSelectaSalesReport(res.data2));
            dispatch(setBranchSelecta(res.data.original.status));
            setLoading(false);
            dispatch(setSelectedSelectaReset([]));
            dispatch(setToastStatus(res.notify));
        });
    }

    function deleteItem(array, idToDelete) {
        if (confirm("Are you sure you want to delete?")) {
            dispatch(
                setSelectedSelectaReset(
                    array.filter((item) => item.id !== idToDelete)
                )
            );
        }
    }
    return (
        <>
            <div className="flex w-full justify-end">
                {loading ? (
                    <div className="w-20">
                        <LoadingComponent />
                    </div>
                ) : (
                    <button
                        onClick={moveToSelectaRecord}
                        className="px-3 py-2 border hover:bg-red-700 border-red-600 bg-red-500 text-white rounded-lg"
                    >
                        CLICK TO SAVE
                    </button>
                )}
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-200  m-1 min-h-[67vh]">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                ID #
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Name of Recipe
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Price
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Beginning
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Remaining
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Sold
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Sales
                            </th>

                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            ></th>

                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            ></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {selectedSelecta.map((res, index) => (
                            <tr key={index} className="hover:bg-red-100">
                                <td className="px-6 py-4">
                                    <div className="flex"> S-{res.id}</div>
                                </td>
                                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                    <div className="text-sm">
                                        <div className="font-medium text-gray-700">
                                            {res.selecta?.name}
                                        </div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1 rounded-full w-14 justify-center text-center bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                                        ₱ {res.selecta?.price}
                                    </span>
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className="flex">{res.quantity}</div>
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className="flex">{res.remaining}</div>
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className="flex">{res.sold}</div>
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className="flex">{res.sales}</div>
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className="flex"></div>
                                </td>

                                <td className="flex px-6 py-4 justify-between">
                                    <BranchSelectaEditRemaining data={res} />
                                    <div className=" inset-0 flex items-center justify-center">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                deleteItem(
                                                    selectedSelecta,
                                                    res.id
                                                )
                                            }
                                        >
                                            <TrashIcon className="h-6 text-red-500" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
