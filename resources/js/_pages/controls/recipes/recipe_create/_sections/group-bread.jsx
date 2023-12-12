import Select from "@/_components/select";
import {
    setRecipeForm,
    setStepperValue,
} from "@/_pages/controls/_redux/controls-slice";
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";

export default function GroupBreadSection() {
    const dispatch = useDispatch();
    const { recipeForm, stepperValue, breadGroup } = useSelector(
        (state) => state.controls
    );

    function selectBread(e) {
        const selectedOption = e.target.value;
        const selectedIndex = e.target.selectedIndex;
        const token = e.target.options[selectedIndex].getAttribute("dataid");

        dispatch(
            setRecipeForm({
                ...recipeForm,
                bread_group: selectedOption,
                bread_group_token: token,
            })
        );
    }

    function findTokens(array, targetTokens) {
        const matchingElements = [];
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                if (targetTokens.includes(array[i][j].token)) {
                    matchingElements.push(array[i][j]);
                }
            }
        }
        return matchingElements;
    }

    const targetToken = recipeForm.bread_group_token ?? [];

    const foundElement = findTokens(breadGroup, targetToken);

    return (
        <div className="flex flex-col w-full h-full justify-center items-center mt-5">
            <div className="flex-1 w-1/2">
                <ul role="list" className="divide-y divide-gray-100">
                    <li className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                    {" "}
                                    {recipeForm.name}
                                </p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                    Target Pieces: {recipeForm.target}
                                </p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-900"></p>

                            <p className="mt-1 text-xs leading-5 text-gray-500">
                                Bread Group: {recipeForm.bread_group}
                            </p>
                            <p className="mt-1 text-xs leading-5 text-gray-500">
                                Raw Materials Group:{" "}
                                {recipeForm.raw_materials_group}
                            </p>
                        </div>
                    </li>
                </ul>
                <Select
                     value={recipeForm.bread_group}
                    onChange={selectBread}
                    title="Select Bread Group"
                    items={breadGroup.map((res) => ({
                        id: res[0].token,
                        value: res[0].group_name,
                    }))}
                />
                <ul className="max-w-md space-y-1 text-gray-900 list-disc list-inside overflow-auto h-38 ">
                    {foundElement.map((res, index) => (
                        <li key={index}>{res.bread.name}</li>
                    ))}
                </ul>
            </div>
            <div className="w-1/2 flex items-center justify-between">
                <button
                    onClick={() => dispatch(setStepperValue(stepperValue - 1))}
                    type="button"
                    className="flex  justify-center rounded-md bg-red-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  <ChevronDoubleLeftIcon className="h-6 mr-3" />   BACK PAGE
                </button>
                {recipeForm.bread_group_token && (
                    <button
                        onClick={() =>
                            dispatch(setStepperValue(stepperValue + 1))
                        }
                        type="button"
                        className="flex  justify-center rounded-md bg-red-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                        NEXT PAGE{" "}
                        <ChevronDoubleRightIcon className="h-6 ml-3" />
                    </button>
                )}
            </div>
        </div>
    );
}
