import { useRef, useState } from "react";
import Input from "@/_components/input";
import Drawer from "@/_components/drawer";
import LoadingComponent from "@/_components/loading-component";
import { create_bread } from "@/_services/breads-service";
import { useDispatch } from "react-redux";
import { setBreads } from "../../../_redux/controls-slice";
import { setToastStatus } from "@/_redux/app-slice";
import { PencilIcon } from "@heroicons/react/24/outline";

export default function CreateBreadForm() {
    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(false);
    const ref = useRef();
    const dispatch = useDispatch();
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
        create_bread(form)
            .then((res) => {
                dispatch(setToastStatus(res.notify));
                dispatch(setBreads(res.data.original.status));
                setForm({});
                ref.current.reset();
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
            });
    }

    return (
        <>
            <Drawer
                title="Create Bread"
                open={open}
                setOpen={setOpen}
                button={
                    <span className="hidden sm:block">
                        <button
                            onClick={() => setOpen(true)}
                            type="button"
                            className="bg-red-500 inline-flex items-center rounded-md  text-white px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-600"
                        >
                            <PencilIcon
                                className="-ml-0.5 mr-1.5 h-6 w-6 text-white"
                                aria-hidden="true"
                            />
                            Create Bread
                        </button>
                    </span>
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
                            value={form.name}
                            name="bread_name"
                            title="Name of Bread"
                            placeholder="Enter name of bread"
                            type="text"
                        />
                        <Input
                            onChange={(e) =>
                                setForm({ ...form, price: e.target.value })
                            }
                            value={form.price}
                            name="price"
                            title="Price"
                            placeholder="Enter Price"
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
        </>
    );
}
