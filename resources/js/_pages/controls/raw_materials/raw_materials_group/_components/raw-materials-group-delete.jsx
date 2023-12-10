import Modal from "@/_components/modal";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { setRawMaterialsGroup } from "../../../_redux/controls-slice";
import { useDispatch } from "react-redux";
import LoadingComponent from "@/_components/loading-component";
import { setToastStatus } from "@/_redux/app-slice";
import { delete_raw_materials } from "@/_services/raw-materials-group-service";

export default function RawMaterialsGroupDelete({ data }) {
    let [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

   
    function deleteBreadSubmit() {
        setLoading(true);
        dispatch(
            setToastStatus({
                status: "loading",
                message: "Loading...",
            })
        );

        delete_raw_materials(data[0].token)
            .then((res) => {
              dispatch(setToastStatus(res.notify));
                setIsOpen(false);
                dispatch(setRawMaterialsGroup(res.data.original.status));
                setLoading(false);
            })
            .catch((err) => {
                dispatch(
                    setToastStatus({
                        status: "error",
                        message: "Loading...",
                    })
                );
                setLoading(false);
                setLoading(false);
            });
    }
    return (
        <>
            <Modal
                title="Delete Bread"
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                button={
                    <div className=" inset-0 flex items-center justify-center">
                        <button type="button" onClick={() => setIsOpen(true)}>
                            <TrashIcon className="h-6 text-red-500" />
                        </button>
                    </div>
                }
            >
                <div className="mt-2">
                    <p className="text-sm text-gray-500">
                        Are you sure you want to delete the {data[0].group_name}?
                    </p>
                </div>

                <div className="mt-4">
                    <div className="flex justify-between items-center">
                        <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-3 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Close
                        </button>
                        {loading ? (
                            <div className="w-20">
                                <LoadingComponent />
                            </div>
                        ) : (
                            <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-3 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                onClick={() => deleteBreadSubmit()}
                            >
                                Delete It
                            </button>
                        )}
                    </div>
                </div>
            </Modal>
        </>
    );
}
