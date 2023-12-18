import Drawer from "@/_components/drawer";
import Input from "@/_components/input";
import LoadingComponent from "@/_components/loading-component";
import { edit_bread_report_record } from "@/_services/bread-record-service";
import { PencilIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setBakersData, setBreadData } from "../../../_redux/production-slice";
import { setToastStatus } from "@/_redux/app-slice";

export default function ProductionBreadReportEdit({ data }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [newRecord, setNewRecord] = useState({
        ...data,
        beginning: data.beginning,
        charge: data.charge,
        over: data.over,
    });

    function submitHandler(e) {
        e.preventDefault();
        setLoading(true);
        dispatch(
            setToastStatus({
                status: "loading",
                message: "Loading...",
            })
        );
        edit_bread_report_record(newRecord).then((res) => {
            setLoading(false);
            setOpen(false);
            dispatch(setToastStatus(res.notify));
            dispatch(setBreadData(res[0].original.status));
        });
    }
    
    return (
        <Drawer
            title={"EDIT " + data.bread.name + " BREAD NEW PRODUCTION"}
            button={
                <button onClick={() => setOpen(true)}>
                    <PencilIcon className="h-6 text-blue-500 mr-3" />
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
                                beginning: e.target.value,
                            })
                        }
                        value={newRecord.beginning} // Provide the actual value if applicable
                        name={`beginning`} // Use a unique name for each input
                        title="Edit Beginning"
                        placeholder={`Beginning`}
                        type="number"
                    />

                    <Input
                        onChange={(e) =>
                            setNewRecord({
                                ...newRecord,
                                charge: e.target.value,
                            })
                        }
                        value={newRecord.charge} // Provide the actual value if applicable
                        name={`charge`} // Use a unique name for each input
                        title="Edit Charge"
                        placeholder={`Charge`}
                        type="number"
                    />
                    <Input
                        onChange={(e) =>
                            setNewRecord({
                                ...newRecord,
                                over: e.target.value,
                            })
                        }
                        value={newRecord.over} // Provide the actual value if applicable
                        name={`over`} // Use a unique name for each input
                        title="Edit Over"
                        placeholder={`Over`}
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
