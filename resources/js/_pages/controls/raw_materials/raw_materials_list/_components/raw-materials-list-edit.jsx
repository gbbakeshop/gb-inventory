import { useRef, useState } from "react";
import Input from "@/_components/input";
import Drawer from "@/_components/drawer";
import LoadingComponent from "@/_components/loading-component";
import { useDispatch } from "react-redux";
import {  setRawMaterials } from "../../../_redux/controls-slice";
import { setToastStatus } from "@/_redux/app-slice";
import { PencilIcon } from "@heroicons/react/24/outline";
import Select from "@/_components/select";
import { update_raw_materials } from "@/_services/raw-materials-service";

export default function RawMaterialsListEdit({ data }) {
    const [form, setForm] = useState({
        id: data.id,
        name: data.name,
        bind: data.bind,
    });
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const ref = useRef();
    const [open, setOpen] = useState(false);

    function submitHandler(e) {
        e.preventDefault();
        dispatch(
            setToastStatus({
                status: "loading",
                message: "Loading...",
            })
        );
        setLoading(true);
        update_raw_materials(form)
            .then((res) => {
                dispatch(setToastStatus(res.notify));
                dispatch(setRawMaterials(res.data.original.status));
                setLoading(false);
            })
            .catch((res) => {
                setLoading(false);
            });
    }

    return (
        <>
            <Drawer
                title="Edit Raw Materials"
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
                    name="form"
                    onSubmit={submitHandler}
                    className="flex flex-col h-full w-full"
                >
                    <div className="flex-1">
                        <Input
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    name: e.target.value.toUpperCase(),
                                })
                            }
                            value={data.name}
                            name="bread_name"
                            title="Name of Raw Materials"
                            placeholder="Enter name of raw materials"
                            type="text"
                        />
                        {/* <Input
                            onChange={(e) =>
                                setForm({ ...form, bind: e.target.value })
                            }
                            value={data.bind}
                            name="bind"
                            title="Bind"
                            placeholder="Enter bind"
                            type="text"
                        /> */}
                        <Select
                            value={data.bind}
                            onChange={(e) =>
                                setForm({ ...form, bind: e.target.value })
                            }
                            items={[{value:"Grams",id:1}, {value:"Pcs",id:2}]}
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
