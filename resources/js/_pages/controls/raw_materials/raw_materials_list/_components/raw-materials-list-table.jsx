import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setRawMaterials } from "../../../_redux/controls-slice";
// import EditBreadForm from "./edit-bread-form";
// import DeleteBread from "./delete-bread";
import RawMaterialsListTableHeader from "./raw-materials-list-table-header";
import { get_all_raw_materials } from "@/_services/raw-materials-service";
import moment from "moment";
import RawMaterialsListEdit from "./raw-materials-list-edit";
import RawMaterialsListDelete from "./raw-materials-list-delete";
// import RawMaterialsListEdit from "./raw-materials-list-edit";

export default function RawMaterialListTable() {
const dispatch = useDispatch()
const { filteredRawMaterials } = useSelector((state) => state.controls);

useEffect(() => {
  get_all_raw_materials()
  .then(res=> {
    dispatch(setRawMaterials(res.status))
  })
}, []);

    return (
        <>
            <div className="overflow-hidden rounded-lg border border-gray-200  m-1 min-h-[67vh]">
               <RawMaterialsListTableHeader />
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
                                Bind
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
                       {
                        filteredRawMaterials.map((res,index)=> <tr key={index} className="hover:bg-red-100">
                        <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                          
                            <div className="text-sm">
                                <div className="font-medium text-gray-700">
                                    {res.name}
                                </div>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1 rounded-full w-14 justify-center text-center bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                              
                              {res.bind}
                            </span>
                        </td>

                        <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                          
                            <div className="text-sm">
                                <div className="font-medium text-gray-700">
                                    {moment(res.created_at).format('LLL')}
                                </div>
                            </div>
                        </th>
                     
                        <td className="px-6 py-4">
                            <div className="flex justify-end gap-4">
                              <RawMaterialsListEdit data={res}/>
                              <RawMaterialsListDelete data={res}/>
                            </div>
                        </td>
                    </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </>
    );
}
