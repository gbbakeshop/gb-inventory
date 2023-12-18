import Drawer from "@/_components/drawer";
import Input from "@/_components/input";
import LoadingComponent from "@/_components/loading-component";
import { move_record_to_bread_report } from "@/_services/bread-record-service";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setBakersData } from "../../../_redux/production-slice";
import { setToastStatus } from "@/_redux/app-slice";

export default function ProductionBakersReportMove({ data }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    function submitHandler(e) {
        e.preventDefault();
        setLoading(true);
        dispatch(
            setToastStatus({
                status: "loading",
                message: "Loading...",
            })
        );
        move_record_to_bread_report(data).then((res) => {
            setLoading(false);
            setOpen(false);
            dispatch(setToastStatus(res.notify));
            dispatch(setBakersData(res[0].original.status));
        });
    }

    return (
        <Drawer
            title={"MOVE " + data.bread.name + " BREAD"}
            button={
                <button onClick={() => setOpen(true)}>
                    <ChevronDoubleRightIcon className="h-6 text-red-500" />
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
                <div className="flex-1"></div>

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
