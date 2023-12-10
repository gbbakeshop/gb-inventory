import { useDispatch, useSelector } from "react-redux";
import BreadTableHeader from "../../bread_list/_components/bread-table-header";
import { useEffect } from "react";
import { setBreadGroup } from "../../../_redux/controls-slice";
import EditBreadForm from "../../bread_list/_components/edit-bread-form";
import DeleteBread from "../../bread_list/_components/delete-bread";
import { get_all_bread_group } from "@/_services/bread-group-service";
import BreadGroupTableHeader from "./bread-group-table-header";
import BreadGroupDelete from "./bread-group-delete";
import BreadGroupShow from "./bread-group-show";
import BreadGroupEdit from "./bread-group-edit";
import moment from "moment/moment";

export default function BreadGroupTable() {
    const dispatch = useDispatch();
    const { filteredBreadGroup } = useSelector((state) => state.controls);

    useEffect(() => {
        get_all_bread_group().then((res) => {
            dispatch(setBreadGroup(res.status));
        });
    }, []);

    return (
        <>
            <div className="overflow-hidden rounded-lg border border-gray-200  m-1 min-h-[67vh]">
                <BreadGroupTableHeader />
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Bread Name
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Token
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Created At
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            ></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {filteredBreadGroup?.map((res, index) => (
                            <tr key={index} className="hover:bg-red-100">
                                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                    <div className="text-sm">
                                        <div className="font-medium text-gray-700">
                                            {res[0]?.group_name}
                                        </div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1 rounded-full justify-center text-center  px-2 py-1 text-xs font-semibold ">
                                        {res[0]?.token}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1 rounded-full justify-center text-center  px-2 py-1 text-xs font-semibold ">
                                        {moment(res[0]?.created_at).format(
                                            "LLL"
                                        )}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-end gap-4">
                                        <BreadGroupShow data={res} />
                                        <BreadGroupEdit data={res} />
                                        <BreadGroupDelete data={res} />
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
