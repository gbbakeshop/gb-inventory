import Input from "@/_components/input";
import Select from "@/_components/select";
import {
    setBreadGroup,
    setRawMaterialsGroup,
    setStepperValue,
} from "@/_pages/controls/_redux/controls-slice";
import { get_all_bread_group } from "@/_services/bread-group-service";
import { get_all_raw_materials_group } from "@/_services/raw-materials-group-service";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function RecipeDetailsSection() {
    const { filteredRawMaterialsGroup, stepperValue } = useSelector(
        (state) => state.controls
    );
    const dispatch = useDispatch();

    useEffect(() => {
        get_all_bread_group().then((res) => {
            dispatch(setBreadGroup(res.status));
        });
        get_all_raw_materials_group().then((res) => {
            dispatch(setRawMaterialsGroup(res.status));
        });
    }, []);

    
    return (
        <div className="flex flex-col w-full h-full justify-center items-center mt-5">
            <div className="flex-1 w-1/2">
                <Input
                    // onChange={(e) => setGroupName(e.target.value)}
                    value=""
                    name="name"
                    title="Recipe Name"
                    placeholder="Enter name of recipe"
                    type="text"
                />
                <Input
                    // onChange={(e) => setGroupName(e.target.value)}
                    value=""
                    name="target"
                    title="Target Pcs"
                    placeholder="Enter bread target"
                    type="number"
                />
            </div>
            <div className="w-1/2 flex items-center justify-end">
                <button
                    onClick={() => dispatch(setStepperValue(stepperValue + 1))}
                    type="button"
                    className="flex  justify-center rounded-md bg-red-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                    NEXT PAGE <ChevronDoubleRightIcon className="h-6 ml-3" />
                </button>
            </div>
        </div>
    );
}
