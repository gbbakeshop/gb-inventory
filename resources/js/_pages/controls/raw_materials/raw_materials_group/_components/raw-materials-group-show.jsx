import { useRef, useState } from "react";
import Drawer from "@/_components/drawer";
import { useDispatch } from "react-redux";
import { EyeIcon, PencilIcon } from "@heroicons/react/24/outline";
import Input from "@/_components/input";
import LoadingComponent from "@/_components/loading-component";
import { update_raw_materials_group_grams } from "@/_services/raw-materials-group-service";
import { setToastStatus } from "@/_redux/app-slice";
import { setFilteredRawMaterialsGroup } from "@/_pages/controls/_redux/controls-slice";

export default function RawMaterialsGroupShow({ data }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const ref = useRef();
    const [open, setOpen] = useState(false);

    function submitHandler(e) {
        e.preventDefault();
        setOpen(true);
        dispatch(
            setToastStatus({
                status: "loading",
                message: "Loading...",
            })
        );
        const formData = new FormData(ref.current);
        const updatedBreads = data.map((res, index) => ({
            ...res,
            grams: formData.get(`grams_${index}`).replace(/[^0-9.]/g, ""),
        }));
        update_raw_materials_group_grams(updatedBreads).then((res) => {
            if (res.status == "success") {
                setOpen(false);
                dispatch(
                    setFilteredRawMaterialsGroup(res.data.original.status)
                );
                dispatch(setToastStatus(res.notify));
            } else {
                dispatch(setToastStatus(res.notify));
            }
            setLoading(false);
        });
    }

    return (
        <>
            <Drawer
                title="Edit Quantity"
                open={open}
                setOpen={setOpen}
                button={
                    <button onClick={() => setOpen(true)}>
                        <PencilIcon
                            className="-ml-0.5 mr-1.5 h-6 w-6 text-blue-500"
                            aria-hidden="true"
                        />
                    </button>
                }
            >
                <form
                    ref={ref}
                    onSubmit={submitHandler}
                    className="flex flex-col h-full w-full"
                >
                    <div className="flex-1">
                        {/* <ul role="list" className="divide-y divide-gray-100"> */}
                        {data.map((res, index) => (
                            <Input
                                key={index}
                                // onChange={(e) => handleInputChange(e)}
                                value={res.grams ?? 0} // Provide the actual value if applicable
                                name={`grams_${index}`} // Use a unique name for each input
                                title={res.raw_materials.name}
                                placeholder={`Enter grams ${index + 1}`}
                                type="text"
                            />
                        ))}
                        {/* </ul> */}
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
