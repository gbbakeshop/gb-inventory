import Modal from "@/_components/modal";
import { PencilIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToastStatus } from "@/_redux/app-slice";
import { setSelectedSelectaEdit } from "../_redux/branch-selecta-slice";
import Input from "@/_components/input";

export default function BranchSelectaEditRemaining({ data }) {
    let [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const [remainingData, setRemainingData] = useState(data);
    const { selectedSelecta } = useSelector((state) => state.selecta);

    function addToList(e) {
        e.preventDefault();

        const newArray = selectedSelecta.map((item) =>
            item.id == data.id ? remainingData : item
        );
        if (remainingData.remaining) {
            dispatch(setSelectedSelectaEdit(newArray));
            setIsOpen(false);
            dispatch(
                setToastStatus({
                    status: "success",
                    message: "Added Successfully.",
                })
            );
        } else {
            dispatch(
                setToastStatus({
                    status: "exist",
                    message: "Please put some remaining!",
                })
            );
        }
    }

    return (
        <>
            <Modal
                title={data.selecta.name}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                button={
                    <div className=" inset-0 flex items-center justify-center">
                        <button type="button" onClick={() => setIsOpen(true)}>
                            <PencilIcon className="h-6 text-blue-500" />
                        </button>
                    </div>
                }
            >
                <form onSubmit={addToList}>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">
                            <Input
                                onChange={(e) =>
                                    setRemainingData({
                                        ...remainingData,
                                        remaining: parseInt(e.target.value),
                                        sold:
                                            data.quantity -
                                            parseInt(e.target.value),
                                        sales:
                                            (data.quantity -
                                                parseInt(e.target.value)) *
                                            data.selecta.price,
                                    })
                                }
                                value={remainingData.remaining ?? 0}
                                name="remaining"
                                title="Remaining of Selecta"
                                placeholder="Enter the Remaining"
                                type="number"
                            />
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
                            <button
                                type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-3 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                onClick={addToList}
                            >
                                SAVE
                            </button>
                        </div>
                    </div>
                </form>
            </Modal>
        </>
    );
}
