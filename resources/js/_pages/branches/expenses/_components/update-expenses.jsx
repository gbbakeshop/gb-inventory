import Drawer from "@/_components/drawer";
import LoadingComponent from "@/_components/loading-component";
import { PencilIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import React, { useRef, useState } from "react";
import { setExpenses } from "../_redux/expenses-slice";
import { useDispatch } from "react-redux";
import { setToastStatus } from "@/_redux/app-slice";
import Select from "@/_components/select";
import Input from "@/_components/input";
import { update_expenses } from "@/_services/expenses-service";

export default function UpdateExpenses({
    rawMaterials,
    account,
    branch_id,
    data,
    users,
    selecta,
    breads,
}) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const ref = useRef();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        user_id: data.user_id,
        raw_materials_id: data.raw_materials_id,
        selecta_id: data.selecta_id,
        amount: data.amount,
        discription: data.discription,
    });

    function submitHandler(e) {
        e.preventDefault();
        dispatch(
            setToastStatus({
                status: "loading",
                message: "Loading...",
            })
        );
        update_expenses({
            id: data.id,
            branch_id: branch_id,
            seller_id: data.seller_id,
            user_id: form.user_id,
            raw_materials_id: form.raw_materials_id,
            selecta_id: form.selecta_id,
            amount: form.amount,
            discription: form.discription,
            status: "unpaid",
            meridiem: moment().format("A"),
            date: moment().format("L"),
        }).then((res) => {
            setOpen(false);
            dispatch(setToastStatus(res.notify));
            dispatch(setExpenses(res.status));
        });
    }

    function selectUser(e) {
        const selectedIndex = e.target.selectedIndex;
        const id = e.target.options[selectedIndex].getAttribute("dataid");
        setForm({ ...form, user_id: id });
    }
    function selectBread(e) {
        const selectedIndex = e.target.selectedIndex;
        const id = e.target.options[selectedIndex].getAttribute("dataid");
        setForm({ ...form, raw_materials_id: id });
    }
    function selectSelecta(e) {
        const selectedIndex = e.target.selectedIndex;
        const id = e.target.options[selectedIndex].getAttribute("dataid");
        setForm({ ...form, selecta_id: id });
    }
    return (
        <Drawer
            title="Update Credit"
            open={open}
            setOpen={setOpen}
            button={
                <div className=" inset-0 flex items-center justify-center">
                    <button type="button" onClick={() => setOpen(true)}>
                        <PencilIcon
                            className="-ml-0.5 mr-1.5 h-6 w-6 text-blue-500"
                            aria-hidden="true"
                        />
                    </button>
                </div>
            }
        >
            <form
                ref={ref}
                name="form"
                onSubmit={submitHandler}
                className="flex flex-col h-full w-full"
            >
                <div className="flex-1">
                    <Select
                        title="GB Employee"
                        value={form.user_id}
                        onChange={(e) => selectUser(e)}
                        items={users.map((res) => ({
                            value: res.name,
                            id: res.id,
                        }))}
                    />

                    <Select
                        title="Select Raw Materials"
                        value={form.raw_materials_id}
                        onChange={(e) => selectBread(e)}
                        items={rawMaterials.map((res) => ({
                            value: res.name,
                            id: res.id,
                        }))}
                    />

                    <textarea
                        onChange={(e) =>
                            setForm({ ...form, discription: e.target.value })
                        }
                        value={form.discription}
                        name="description"
                        placeholder="Write your discription"
                        className={`border-red-500 appearance-none block w-full bg-gray-200 text-gray-700 border-2  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    ></textarea>
                    <Input
                        onChange={(e) =>
                            setForm({ ...form, amount: e.target.value })
                        }
                        value={form.amount} // Provide the actual value if applicable
                        name={`amount`} // Use a unique name for each input
                        title="Input amount"
                        placeholder={`Input amount`}
                        type="text"
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
                            UPDATE
                        </button>
                    )}
                </div>
            </form>
        </Drawer>
    );
}
