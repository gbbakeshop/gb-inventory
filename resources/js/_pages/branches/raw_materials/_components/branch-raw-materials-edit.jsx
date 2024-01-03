import { Fragment, useRef, useState } from "react";
import Drawer from "@/_components/drawer";
import { useDispatch, useSelector } from "react-redux";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import LoadingComponent from "@/_components/loading-component";
import { update_branch_raw_materials } from "@/_services/raw-materials-branch-service";
import Input from "@/_components/input";
import { setRawMaterials } from "../_redux/raw-materials-slice";
import { setToastStatus } from "@/_redux/app-slice";

export default function BranchRawMaterialsEdit({ data, branch_id }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(data.quantity);
    function submitHandler(e) {
        e.preventDefault();
        setLoading(true);
        dispatch(
            setToastStatus({
                status: "loading",
                message: "Loading...",
            })
        );
        update_branch_raw_materials({
            branch_id: branch_id,
            id: data.id,
            quantity: quantity,
        }).then((res) => {
            setLoading(false);
            dispatch(setToastStatus(res.notify));
            dispatch(setRawMaterials(res.data.original.status));
        });
    }

    return (
        <>
            <Drawer
                title="Edit Group Raw Materials"
                open={open}
                setOpen={setOpen}
                button={
                    <button onClick={() => setOpen(true)}>
                        <PencilSquareIcon
                            className="-ml-0.5 mr-1.5 h-6 w-6 text-blue-500"
                            aria-hidden="true"
                        />
                    </button>
                }
            >
                <form
                    name="form"
                    onSubmit={submitHandler}
                    className="flex flex-col h-full w-full"
                >
                    <div className="flex-1">
                        <Input
                            onChange={(e) => setQuantity(e.target.value)}
                            value={quantity} // Provide the actual value if applicable
                            name={`quantity`} // Use a unique name for each input
                            title="Input quantity"
                            placeholder={`Input quantity`}
                            type="text"
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
        </>
    );
}
