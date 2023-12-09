import { useDispatch, useSelector } from "react-redux";
import BreadTableHeader from "./bread-table-header";
import { useEffect } from "react";
import { get_all_bread } from "@/_services/breads-service";
import { setBreads } from "../../_redux/controls-slice";
import EditBreadForm from "./edit-bread-form";
import Modal from "@/_components/modal";
import DeleteBread from "./delete-bread";

export default function BreadTable() {
const dispatch = useDispatch()
const { filteredBreads } = useSelector((state) => state.controls);

useEffect(() => {
  get_all_bread()
  .then(res=> {
    dispatch(setBreads(res.status))
  })
}, []);

    return (
        <>
            <div className="overflow-hidden rounded-lg border border-gray-200  m-1 min-h-[67vh]">
               <BreadTableHeader />
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
                                Price
                            </th>
                          
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            ></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                       {
                        filteredBreads.map((res,index)=> <tr key={index} className="hover:bg-red-100">
                        <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                          
                            <div className="text-sm">
                                <div className="font-medium text-gray-700">
                                    {res.name}
                                </div>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1 rounded-full w-14 justify-center text-center bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                              
                                ₱ {res.price}
                            </span>
                        </td>
                     
                        <td className="px-6 py-4">
                            <div className="flex justify-end gap-4">
                              <EditBreadForm 
                              data={res}/>

                              <DeleteBread data={res}/>
                              
                               
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
