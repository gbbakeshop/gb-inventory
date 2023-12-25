import moment from "moment";
import { useSelector } from "react-redux";
// import ProductionBreadReportEdit from "./production-bread-report-edit";
// import ProductionBreadMoveSalesReport from "./production-bread-move-sales-report";
// import ProductionBakersReportMove from "./prouction-bakers-report-move";

export default function SalesReportTable({ data, account }) {
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
                            Price
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
                        >
                            Bread Out
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
                            Remaining
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-4 font-medium text-gray-900"
                        >
                            Bread Sold
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-4 font-medium text-gray-900"
                        >
                            Sales
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-4 font-medium text-gray-900"
                        ></th>
                    </tr>
                    <tr className="bg-red-500">
                    <th
                            scope="col"
                            className="px-6 py-4 font-medium text-white "
                        >
                            
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-4 font-medium text-white "
                        >
                            Overall Total
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-4 font-medium text-white "
                        >
                            {data.reduce(
                                (total, obj) =>
                                    total + parseFloat(obj.beginning),
                                0
                            )}
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-4 font-medium text-white "
                        >
                            {data.reduce(
                                (total, obj) =>
                                    total +
                                    parseFloat(obj.new_production) +
                                    parseFloat(obj.over),
                                0
                            )}
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-4 font-medium text-white "
                        >
                            =
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-4 font-medium text-white "
                        >
                            {data.reduce(
                                (total, obj) => total + parseFloat(obj.total),
                                0
                            )}
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-4 font-medium text-white "
                        >
                            {data.reduce(
                                (total, obj) =>
                                    total + parseFloat(obj.bread_out),
                                0
                            )}
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-4 font-medium text-white "
                        >
                            {data.reduce(
                                (total, obj) => total + parseFloat(obj.charge),
                                0
                            )}
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-4 font-medium text-white "
                        >
                            {data.reduce(
                                (total, obj) =>
                                    total + parseFloat(obj.remaining),
                                0
                            )}
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-4 font-medium text-white "
                        >
                            {data.reduce(
                                (total, obj) =>
                                    total + parseFloat(obj.bread_sold),
                                0
                            )}
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-4 font-medium text-white "
                        >
                            {data.reduce(
                                (total, obj) => total + parseFloat(obj.sales),
                                0
                            )}
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-4 font-medium text-white "
                        ></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {data.map((res, index) => (
                        <tr
                            key={index}
                            className="bg-white border-b border-gray-300"
                        >
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
                                {res.new_production + res.over ?? 0}
                            </td>
                            <td className="p-3 xfont-bold">{res.price ?? 0}</td>
                            <td className="p-3 xfont-bold">{res.total}</td>
                            <td className="p-3 xfont-bold">{res.bread_out}</td>
                            <td className="p-3 xfont-bold">{res.charge}</td>
                            <td className="p-3 xfont-bold">{res.remaining}</td>
                            <td className="p-3 xfont-bold">{res.bread_sold}</td>
                            <td className="p-3 xfont-bold">{res.sales}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
