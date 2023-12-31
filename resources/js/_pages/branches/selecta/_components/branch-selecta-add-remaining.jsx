import Modal from "@/_components/modal";
import {
    PencilSquareIcon,
    PlusIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToastStatus } from "@/_redux/app-slice";
import { setSelectedSelecta } from "../_redux/branch-selecta-slice";
import Input from "@/_components/input";

export default function BranchSelectaAddRemaining({ data }) {
    let [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const [remainingData, setRemainingData] = useState(data);
    const { selectedSelecta } = useSelector((state) => state.selecta);
    const [disabled, setDisabled] = useState(false);
    function addToList(e) {
        e.preventDefault();
        const isExisting = selectedSelecta.find(
            (item) => item.id === remainingData.id
        );
        if (remainingData.remaining) {
            if (!isExisting) {
                dispatch(setSelectedSelecta(remainingData));
                setIsOpen(false);
                dispatch(
                    setToastStatus({
                        status: "success",
                        message: "Added Successfully.",
                    })
                );
            } else {
                setIsOpen(false);
                dispatch(
                    setToastStatus({
                        status: "exist",
                        message: isExisting.selecta.name + " is already exist!",
                    })
                );
            }
        } else {
            dispatch(
                setToastStatus({
                    status: "exist",
                    message: "Please put some remaining!",
                })
            );
        }
    }

    function inputRemainingHandler(e) {
        if (e.target.value >= data.quantity) {
            setDisabled(true);
        } else {
            setDisabled(false);
            setRemainingData({
                ...remainingData,
                remaining: parseInt(e.target.value),
                sold: data.quantity - parseInt(e.target.value),
                sales:
                    (data.quantity - parseInt(e.target.value)) *
                    data.selecta.price,
            });
        }
    }

    return (
        <>
            <Modal
                title={data.selecta.name + " (" + data.quantity + ")"}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                button={
                    <div className=" inset-0 flex items-center justify-center">
                        <button type="button" onClick={() => setIsOpen(true)}>
                            <PlusIcon className="h-6 text-red-500" />
                        </button>
                    </div>
                }
            >
                <form onSubmit={addToList}>
                    <div className="mt-2">
                        {disabled && (
                            <p className="text-red-500 text-xs italic">
                                Incorrect quantity!
                            </p>
                        )}

                        <p className="text-sm text-gray-500">
                            <Input
                                onChange={(e) => inputRemainingHandler(e)}
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
                                disabled={disabled}
                                type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-3 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                onClick={addToList}
                            >
                                ADD LIST
                            </button>
                        </div>
                    </div>
                </form>
            </Modal>
        </>
    );
}
