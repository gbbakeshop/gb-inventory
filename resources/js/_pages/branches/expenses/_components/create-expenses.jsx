import Drawer from "@/_components/drawer";
import LoadingComponent from "@/_components/loading-component";
import { PlusIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import React, { useRef, useState } from "react";
import {  setExpenses } from "../_redux/expenses-slice";
import { useDispatch } from "react-redux";
import { setToastStatus } from "@/_redux/app-slice";
import Select from "@/_components/select";
import Input from "@/_components/input";
import { create_expenses } from "@/_services/expenses-service";

export default function CreateExpenses({
    account,
    branch_id,
    selecta,
    breads,
    users,
    rawMaterials
}) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const ref = useRef();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        user_id: null,
        raw_materials_id: null,
        selecta_id: null,
        amount: 0,
        discription: "",
    });

    function submitHandler(e) {
        e.preventDefault();
        dispatch(
            setToastStatus({
                status: "loading",
                message: "Loading...",
            })
        );
        create_expenses({
            branch_id: branch_id,
            seller_id: account.id,
            user_id: form.user_id,
            raw_materials_id: form.raw_materials_id,
            amount: form.amount,
            discription: form.discription,
            status: "paid",
            meridiem: moment().format("A"),
            date: moment().format("L"),
        }).then((res) => {
            setForm({
                user_id: null,
                raw_materials_id: null,
                selecta_id: null,
                amount: 0,
                discription: "",
            });
            setOpen(false)
            dispatch(setToastStatus(res.notify));
            dispatch(setExpenses(res.status));
        });
    }

    function selectUser(e) {
        const selectedIndex = e.target.selectedIndex;
        const id = e.target.options[selectedIndex].getAttribute("dataid");
        setForm({ ...form, user_id: id });
    }
    function selectRawMaterials(e) {
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
            title="Create Expenses"
            open={open}
            setOpen={setOpen}
            button={
                <span className="hidden sm:block">
                    <button onClick={() => setOpen(true)} type="button">
                        <PlusIcon
                            className="-ml-0.5 mr-1.5 h-6 w-6 text-green-500"
                            aria-hidden="true"
                        />
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
                        onChange={(e) => selectRawMaterials(e)}
                        items={rawMaterials.map((res) => ({
                            value: res.name,
                            id: res.id,
                        }))}
                    />
                 
                    <textarea
                        onChange={(e) =>
                            setForm({ ...form, discription: e.target.value })
                        }
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
                            CREATE
                        </button>
                    )}
                </div>
            </form>
        </Drawer>
    );
}
