import moment from "moment";
import { useSelector } from "react-redux";
import SelectaDelete from "./selecta-delete";
import SelectaEditForm from "./selecta-edit-form";
// import RecipeListTableHeader from "./recipe-list-table-header";
// import RecipeListPopover from "@/_pages/controls/recipes/recipe_list/_components/recipe-list-popover";
// import RecipeListBreadGroupEdit from "./recipe-list-bread-group-edit";
// import RecipeListRawMaterialsGroupEdit from "./recipe-list-raw-materials-group-edit";
// import RecipeListRecipeEdit from "./recipe-list-recipe-edit";

export default function SelectaTable() {
    const { filteredSelecta } = useSelector((state) => state.controls);

    return (
        <div className="overflow-hidden rounded-lg border border-gray-200  m-1 min-h-[67vh]">
            {/* <RecipeListTableHeader /> */}
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-50">
                    <tr>
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
                            Created At
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
                    {filteredSelecta.map((res, index) => (
                        <tr key={index} className="hover:bg-red-100">
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

                            <td className="px-6 py-4 ">
                                <div className="flex">
                                    {moment(res.created_at).format("LLL")}
                                </div>
                            </td>
                            <td className="px-6 py-4 ">
                                <div className="flex">
                                </div>
                            </td>

                            <td className="flex px-6 py-4 justify-between">
                              <div className="flex-1 mr-2">
                              <SelectaDelete data={res} />
                              </div>
                              <div className="flex-1">
                              <SelectaEditForm data={res} />
                              </div>
                              
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
