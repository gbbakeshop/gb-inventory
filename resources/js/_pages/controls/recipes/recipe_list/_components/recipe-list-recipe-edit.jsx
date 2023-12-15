import Drawer from "@/_components/drawer";
import Input from "@/_components/input";
import LoadingComponent from "@/_components/loading-component";
import { setFilteredRecipeList, setToastStatus } from "@/_redux/app-slice";
import { edit_recipe } from "@/_services/recipe-service";
import { PencilIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function RecipeListRecipeEdit({ data }) {
    const [form, setForm] = useState({
        id: data.id,
        name: data.name,
        oldName: data.name,
        target: data.target,
    });
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    function submitHandler(e) {
        e.preventDefault();
        setLoading(true);
        console.log('for,',form)
        edit_recipe(form).then((res) => {
            if (res.status == "success") {
                setOpen(false);
                dispatch(setToastStatus(res.notify));
                dispatch(setFilteredRecipeList(res[0].original.status));
                setLoading(false);
            } else {
                dispatch(setToastStatus(res.notify));
                // dispatch(setRawMaterials(res[0].original.status));
                setLoading(false);
            }
        });
    }

    return (
        <Drawer
            title="Edit Recipe"
            button={
                <button onClick={() => setOpen(true)}>
                    <PencilIcon className="h-6 text-blue-700" />
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
                    <Input
                        onChange={(e) =>
                            setForm({
                                ...form,
                                name: e.target.value,
                            })
                        }
                        value={data.name}
                        name="name"
                        title="Recipe Name"
                        placeholder="Enter name of recipe"
                        type="text"
                    />
                    <Input
                        onChange={(e) =>
                            setForm({
                                ...form,
                                target: e.target.value,
                            })
                        }
                        value={data.target}
                        name="target"
                        title="Target Pcs"
                        placeholder="Enter bread target"
                        type="number"
                    />
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
