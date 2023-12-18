import Drawer from "@/_components/drawer";
import Input from "@/_components/input";
import LoadingComponent from "@/_components/loading-component";
import { edit_new_production_record } from "@/_services/bread-record-service";
import {
    ChevronDoubleRightIcon,
    PencilIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setBakersData } from "../../../_redux/production-slice";
import { setToastStatus } from "@/_redux/app-slice";

export default function ProductionBakersReportEdit({ data }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [newProduction, setNewProduction] = useState(data.new_production);

    function submitHandler(e) {
        e.preventDefault();
        setLoading(true);
        dispatch(
            setToastStatus({
                status: "loading",
                message: "Loading...",
            })
        );
        edit_new_production_record({
            ...data,
            new_production: newProduction,
        }).then((res) => {
            setLoading(false);
            setOpen(false);
            dispatch(setToastStatus(res.notify));
            dispatch(setBakersData(res[0].original.status));
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
                        onChange={(e) => setNewProduction(e.target.value)}
                        value={newProduction} // Provide the actual value if applicable
                        name={`new_production`} // Use a unique name for each input
                        title="Edit New Production"
                        placeholder={`New Production`}
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
