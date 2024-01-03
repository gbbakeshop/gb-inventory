import React from "react";
import BranchRawMaterialsEdit from "./branch-raw-materials-edit";
import { useSelector } from "react-redux";
import BranchRawMaterialsTableHeader from "./branch-raw-materials-table-header";

export default function BranchRawMaterialsTable({ branch_id, account }) {
    const { filteredRawMaterials } = useSelector(
        (state) => state.raw_materials
    );
   
    return (
        <div>
            <BranchRawMaterialsTableHeader />
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-1 min-h-[78vh]">
                <table className="w-full border-collapse text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Raw Materials
                            </th>

                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Quantity
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Bind
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Warning
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            ></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {filteredRawMaterials.map((res, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                    <div className="text-sm">
                                        <div className="font-medium text-gray-700">
                                            {res.raw_materials?.name}
                                        </div>
                                        <div className="text-gray-400">
                                            {res.branch.branch_name}
                                        </div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                                        {res.quantity}
                                    </span>
                                </td>
                                <td className="px-6 py-4">{res.bind}</td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                                            <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                            {res.warning}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-end gap-4">
                                        {account.position == "admin" ||
                                        account.position == "Supervisor" ? (
                                            <BranchRawMaterialsEdit
                                                branch_id={branch_id}
                                                data={res}
                                            />
                                        ) : null}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
