import { useDispatch, useSelector } from "react-redux";
// import BreadTableHeader from "../../bread_list/_components/bread-table-header";
import { useEffect } from "react";
import {  setRawMaterialsGroup } from "../../../_redux/controls-slice";
// import EditBreadForm from "../../bread_list/_components/edit-bread-form";
// import DeleteBread from "../../bread_list/_components/delete-bread";
import { get_all_bread_group } from "@/_services/bread-group-service";
// import BreadGroupTableHeader from "./bread-group-table-header";
// import BreadGroupDelete from "./bread-group-delete";
// import BreadGroupShow from "./bread-group-show";
// import BreadGroupEdit from "./bread-group-edit";
import moment from "moment/moment";
import RawMaterialsGroupTableHeader from "./raw-materials-group-table-header";
import { get_all_raw_materials_group } from "@/_services/raw-materials-group-service";
import RawMaterialsGroupShow from "./raw-materials-group-show";
import RawMaterialsGroupEdit from "./raw-materials-group-edit";
import RawMaterialsGroupDelete from "./raw-materials-group-delete";

export default function RawMaterialsGroupTable() {

    const dispatch = useDispatch();
    const { filteredRawMaterialsGroup } = useSelector((state) => state.controls);

    useEffect(() => {
      get_all_raw_materials_group().then((res) => {
            dispatch(setRawMaterialsGroup(res.status));
        });
    }, []);
    
    return (
        <>
            <div className="overflow-hidden rounded-lg border border-gray-200  m-1 min-h-[67vh]">
                <RawMaterialsGroupTableHeader />
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
                        {filteredRawMaterialsGroup?.map((res, index) => (
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
                                      <RawMaterialsGroupShow data={res}/>
                                      <RawMaterialsGroupEdit data={res}/>
                                      <RawMaterialsGroupDelete data={res}/>
                                        {/* <BreadGroupShow data={res} />
                                        <BreadGroupEdit data={res} />
                                        <BreadGroupDelete data={res} /> */}
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
