import { useSelector } from "react-redux";
import RecipeListPopover from "@/_pages/controls/recipes/recipe_list/_components/recipe-list-popover";
import ProductionCreateBeginningForm from "./production-create-beginning-form";

export default function ProductionCreateBeginningTable({ account }) {
    const { filteredRecipeList } = useSelector((state) => state.app);

    return (
        <div className="overflow-hidden m-1 min-h-[67vh]">
          
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
                        <tr key={index} className="bg-white">
                            <td className="p-3">
                                <div className="flex align-items-center">
                                    <div className="ml-3">{res.name}</div>
                                </div>
                            </td>
                            <td className="p-3"> {res.target}</td>
                            <td className="p-3 font-bold">
                                <RecipeListPopover data={res.bread_group} />
                            </td>
                            <td className="p-3">
                                <RecipeListPopover
                                    data={res.raw_materials_group}
                                />
                            </td>
                            <td className="p-3 ">
                                <ProductionCreateBeginningForm
                                    account={account}
                                    data={res}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
