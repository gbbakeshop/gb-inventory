import Drawer from "@/_components/drawer";
import Input from "@/_components/input";
import LoadingComponent from "@/_components/loading-component";
import { move_record_to_sales_report } from "@/_services/bread-record-service";
import {
    ChevronDoubleRightIcon,
    PencilIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setBreadData } from "../../../_redux/production-slice";
import { setToastStatus } from "@/_redux/app-slice";
import moment from "moment";

export default function ProductionBreadMoveSalesReport({ data,account }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [newRecord, setNewRecord] = useState({
        ...data,
        remaining: data.remaining,
        bread_out: data.bread_out,
        meridiem: moment().format("A"),
    });

    function submitHandler(e) {
        e.preventDefault();
        console.log("newRecord", newRecord);
        // setLoading(true);
        // dispatch(
        //     setToastStatus({
        //         status: "loading",
        //         message: "Loading...",
        //     })
        // );
        // move_record_to_sales_report(newRecord).then((res) => {
        //     setLoading(false);
        //     setOpen(false);
        //     dispatch(setToastStatus(res.notify));
        //     dispatch(setBreadData(res[0].original.status));
        // });
    }

    return (
        <Drawer
            title={"EDIT " + data.bread.name + " BREAD NEW PRODUCTION"}
            button={
                <button onClick={() => setOpen(true)}>
                    <ChevronDoubleRightIcon className="h-6 text-red-500 " />
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
                            setNewRecord({
                                ...newRecord,
                                remaining: e.target.value,
                            })
                        }
                        value={newRecord.remaining} // Provide the actual value if applicable
                        name={`remaining`} // Use a unique name for each input
                        title="Edit Remaining"
                        placeholder={`Remaining`}
                        type="number"
                    />

                    <Input
                        onChange={(e) =>
                            setNewRecord({
                                ...newRecord,
                                bread_out: e.target.value,
                            })
                        }
                        value={newRecord.bread_out} // Provide the actual value if applicable
                        name={`bread_out`} // Use a unique name for each input
                        title="Edit Bread Out"
                        placeholder={`Bread Out`}
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
