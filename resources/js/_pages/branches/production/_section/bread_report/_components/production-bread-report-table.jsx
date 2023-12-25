import moment from "moment";
import { useSelector } from "react-redux";
import ProductionBreadReportEdit from "./production-bread-report-edit";
import ProductionBreadMoveSalesReport from "./production-bread-move-sales-report";
// import ProductionBakersReportMove from "./prouction-bakers-report-move";

export default function ProductionBreadReportTable({ data, account }) {
    return (
        <div className="overflow-hidden rounded-lg borderm-1 min-h-[67vh]">
            {/* <RecipeListTableHeader /> */}
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
                            Name of Bread
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-4 font-medium text-gray-900"
                        >
                            Beginning
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-4 font-medium text-gray-900"
                        >
                            New Production
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-4 font-medium text-gray-900"
                        >
                            Over
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-4 font-medium text-gray-900"
                        >
                            Charge
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-4 font-medium text-gray-900"
                        >
                            Total
                        </th>

                        <th
                            scope="col"
                            className="px-3 py-4 font-medium text-gray-900"
                        ></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {data.map((res, index) => (
                        <tr key={index} className="bg-white">
                            <td className="p-3">
                                <div className="flex align-items-center">
                                    <div className="ml-3">B-{res.id}</div>
                                </div>
                            </td>
                            <td className="p-3">
                                <div className="flex align-items-center">
                                    <div className="ml-3">{res.bread.name}</div>
                                </div>
                            </td>
                            <td className="p-3 xfont-bold">
                                {res.beginning ?? 0}
                            </td>
                            <td className="p-3 xfont-bold">
                                {res.new_production ?? 0}
                            </td>
                            <td className="p-3 xfont-bold">{res.over ?? 0}</td>
                            <td className="p-3 xfont-bold">
                                {res.charge ?? 0}
                            </td>
                            <td className="p-3 xfont-bold">{res.total ?? 0}</td>
                            <td className="p-3 flex">
                                <ProductionBreadReportEdit
                                    data={res}
                                    account={account}
                                />
                                <ProductionBreadMoveSalesReport
                                    data={res}
                                    account={account}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
