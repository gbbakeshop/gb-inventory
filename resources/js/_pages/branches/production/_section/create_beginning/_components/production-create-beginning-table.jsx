import { useSelector } from "react-redux";
import RecipeListTableHeader from "@/_pages/controls/recipes/recipe_list/_components/recipe-list-table-header";
import RecipeListPopover from "@/_pages/controls/recipes/recipe_list/_components/recipe-list-popover";
import ProductionCreateBeginningForm from "./production-create-beginning-form";


export default function ProductionCreateBeginningTable() {
    const { filteredRecipeList } = useSelector((state) => state.app);

    return (
        <div className="overflow-hidden rounded-lg border border-gray-200  m-1 min-h-[67vh]">
            <RecipeListTableHeader />
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
                            target
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-4 font-medium text-gray-900"
                        >
                            Bread Group
                        </th>

                        <th
                            scope="col"
                            className="px-6 py-4 font-medium text-gray-900"
                        >
                            Raw Material Group
                        </th>

                        <th
                            scope="col"
                            className="px-6 py-4 font-medium text-gray-900"
                        ></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {filteredRecipeList.map((res, index) => (
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
                                    {res.target}
                                </span>
                            </td>

                            <td className="px-6 py-4 ">
                                <div className="flex">
                                    <span className="inline-flex items-center gap-1 rounded-full w-14 justify-center  px-2 py-1 text-xs font-semibold text-red-600">
                                        <RecipeListPopover
                                            data={res.bread_group}
                                        />
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4 ">
                                <div className="flex">
                                    <span className="inline-flex items-center gap-1 rounded-full w-14 justify-center  px-2 py-1 text-xs font-semibold text-red-600">
                                        <RecipeListPopover
                                            data={res.raw_materials_group}
                                        />
                                    </span>
                                </div>
                            </td>

                            <td className="px-6 py-4">
                             <ProductionCreateBeginningForm data={res}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
