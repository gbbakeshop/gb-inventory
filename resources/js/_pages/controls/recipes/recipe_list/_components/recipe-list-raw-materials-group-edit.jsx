import Drawer from "@/_components/drawer";
import Input from "@/_components/input";
import LoadingComponent from "@/_components/loading-component";
import Select from "@/_components/select";
import { setBreadGroup } from "@/_pages/controls/_redux/controls-slice";
import {
    setFilteredRecipeList,
    setRecipeList,
    setToastStatus,
} from "@/_redux/app-slice";
import {
    edit_recipe,
    edit_recipe_raw_materials_token,
} from "@/_services/recipe-service";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function RecipeListRawMaterialsGroupEdit({ data }) {
    const [form, setForm] = useState({
        id: data.id,
        raw_materials: data?.raw_materials_group[0]?.group_name,
        raw_materials_token: data.raw_materials_group_token,
    });
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const { rawMaterialsGroup } = useSelector((state) => state.controls);

    function submitHandler(e) {
        e.preventDefault();
        setLoading(true);
        edit_recipe_raw_materials_token(form).then((res) => {
            if (res.status == "success") {
                dispatch(setToastStatus(res.notify));
                dispatch(setRecipeList(res[0].original.status));
                setLoading(false);
            } else {
                dispatch(setToastStatus(res.notify));
                // dispatch(setRawMaterials(res[0].original.status));
                setLoading(false);
            }
        });
    }

    function selectBread(e) {
        const selectedOption = e.target.value;
        const selectedIndex = e.target.selectedIndex;
        const token = e.target.options[selectedIndex].getAttribute("dataid");

        setForm({
            ...form,
            raw_materials: selectedOption,
            raw_materials_token: token,
        });
    }

    function findTokens(array, targetToken) {
        const matchingElements = [];

        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                if (targetToken == array[i][j].token) {
                    matchingElements.push(array[i][j]);
                }
            }
        }
        return matchingElements;
    }

    const foundElement = findTokens(
        rawMaterialsGroup,
        form.raw_materials_token
    );

    return (
        <Drawer
            title="Edit Raw Materials Group"
            button={
                <button onClick={() => setOpen(true)}>
                    <PencilSquareIcon className="h-6 text-blue-700" />
                </button>
            }
            open={open}
            setOpen={setOpen}
        >
            <form
                onSubmit={submitHandler}
                name="form"
                className="flex flex-col h-full w-full"
            >
                <div className="flex-1">
                    <Select
                        value={form?.raw_materials}
                        onChange={selectBread}
                        title="Select Bread Group"
                        items={rawMaterialsGroup.map((res) => ({
                            id: res[0].token,
                            value: res[0].group_name,
                        }))}
                    />

                    <ul className="max-w-md space-y-1 text-gray-900 list-disc list-inside overflow-auto h-38 ">
                        {foundElement.map((res, index) => (
                            <li key={index}>{res.raw_materials.name}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex-none">
                    {loading ? (
                        <LoadingComponent />
                    ) : (
                        <button
                            type="submit"
                            className="flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0"
                        >
                            SUBMIT
                        </button>
                    )}
                </div>
            </form>
        </Drawer>
    );
}
