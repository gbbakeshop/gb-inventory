import Drawer from "@/_components/drawer";
import Input from "@/_components/input";
import LoadingComponent from "@/_components/loading-component";
import Select from "@/_components/select";
import { setFilteredRecipeList, setRecipeList, setToastStatus } from "@/_redux/app-slice";
import {
    edit_recipe,
    edit_recipe_bread_token,
} from "@/_services/recipe-service";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function RecipeListBreadGroupEdit({ data }) {
    const [form, setForm] = useState({
        id: data.id,
        bread_group: data?.bread_group[0]?.group_name,
        bread_group_token: data.bread_group_token,
    });
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const { breadGroup } = useSelector((state) => state.controls);

    function submitHandler(e) {
        e.preventDefault();
        setLoading(true);
        edit_recipe_bread_token(form).then((res) => {
            if (res.status == "success") {
                dispatch(setToastStatus(res.notify));
                dispatch(setRecipeList(res[0].original.status));
                // dispatch(setFilteredRecipeList(res[0].original.status));
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
            id: data.id,
            bread_group: selectedOption,
            bread_group_token: token,
        });
    }

    function findTokens(array, targetToken) {
        const matchingElements = [];

        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                // Check if the current element's token matches the target token
                if (targetToken == array[i][j].token) {
                    matchingElements.push(array[i][j]);
                }
            }
        }
        return matchingElements;
    }

    const foundElement = findTokens(breadGroup, form.bread_group_token);

    return (
        <Drawer
            title="Edit Bread Group"
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
                        value={form?.bread_group}
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
