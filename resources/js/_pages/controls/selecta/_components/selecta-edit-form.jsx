import { useRef, useState } from "react";
import Input from "@/_components/input";
import Drawer from "@/_components/drawer";
import LoadingComponent from "@/_components/loading-component";
import { useDispatch } from "react-redux";
import { setToastStatus } from "@/_redux/app-slice";
import { PencilIcon } from "@heroicons/react/24/outline";
import Select from "@/_components/select";
import { setSelecta } from "../../_redux/controls-slice";
import { update_selecta } from "@/_services/selecta-service";

export default function SelectaEditForm({ data }) {
    const [form, setForm] = useState({
        id: data.id,
        name: data.name,
        price: data.price,
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
        update_selecta(form)
            .then((res) => {
                dispatch(setToastStatus(res.notify));
                dispatch(setSelecta(res.data.original.status));
                setLoading(false);
            })
            .catch((res) => {
                setLoading(false);
            });
    }

    function setOpenModal(e) {
        setOpen(true);
        setForm({
            id: e.id,
            name: e.name,
            price: e.price,
        });
    }
    return (
        <>
            <Drawer
                title="Edit Raw Materials"
                open={open}
                setOpen={setOpen}
                button={
                    <button onClick={() => setOpenModal(data)}>
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
                        <Input
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    price: e.target.value.toUpperCase(),
                                })
                            }
                            value={data.price}
                            name="price"
                            title="Price of Selecta"
                            placeholder="Enter the price"
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
