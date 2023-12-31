import { useEffect } from "react";
import { useSelector } from "react-redux";
import BranchSelectaSalesReportTableHeader from "./branch-selecta-sales-report-table-header";

export default function BranchSelectaSalesReport() {
    const { filteredSelectaSalesReport } = useSelector(
        (state) => state.selecta
    );


    return (
        <>
            <BranchSelectaSalesReportTableHeader />
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
                        <tr className="bg-red-500">
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-white"
                            >
                             
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-white"
                            >
                                 Overall Total
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-white"
                            >
                            
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-white"
                            >
                                {filteredSelectaSalesReport.reduce(
                                    (total, obj) =>
                                        total + parseFloat(obj.beginning),
                                    0
                                )}pcs
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-white"
                            >
                                {filteredSelectaSalesReport.reduce(
                                    (total, obj) =>
                                        total + parseFloat(obj.remaining),
                                    0
                                )}pcs
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-white"
                            >
                                {filteredSelectaSalesReport.reduce(
                                    (total, obj) =>
                                        total + parseFloat(obj.sold),
                                    0
                                )}pcs
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-white"
                            >
                               ₱ {filteredSelectaSalesReport.reduce(
                                    (total, obj) =>
                                        total + parseFloat(obj.sales),
                                    0
                                )}
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
                        {filteredSelectaSalesReport.map((res, index) => (
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
                                        ₱ {res.price}
                                    </span>
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className="flex">{res.beginning}pcs</div>
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className="flex">{res.remaining}pcs</div>
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className="flex">{res.sold}pcs</div>
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className="flex">₱ {res.sales}</div>
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className="flex"></div>
                                </td>

                                <td className="flex px-6 py-4 justify-between"></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
