import Drawer from "@/_components/drawer";
import LoadingComponent from "@/_components/loading-component";
import { PencilIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setToastStatus } from "@/_redux/app-slice";
import { setAccounts } from "../../_redux/controls-slice";
import { update_account } from "@/_services/account-service";
import Input from "@/_components/input";
import Select from "@/_components/select";

export default function UpdateAccount({ data, branches }) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const ref = useRef();
    const dispatch = useDispatch();
    // const [form, setForm] = useState({
    //     user_id: data.user_id,
    //     bread_id: data.bread_id,
    //     selecta_id: data.selecta_id,
    //     amount: data.amount,
    //     discription: data.discription,
    // });

    function submitHandler(e) {
        e.preventDefault();
        setLoading(true)
        dispatch(
            setToastStatus({
                status: "loading",
                message: "Loading...",
            })
        );
        const formData = new FormData(ref.current);
        const branch = branches.find(
            (res) => res.branch_name == formData.get("branch_id")
        );

        const newData = {
            id: data.id,
            name: formData.get("name"),
            branch: branch.id,
            position: formData.get("position"),
            email: formData.get("email"),
        };

        update_account(newData).then((res) => {
            setOpen(false);
            setLoading(false)
            dispatch(setToastStatus(res.notify));
            dispatch(setAccounts(res.status.original.status));
        });
    }

    const position = [
        {
            id: 1,
            name: "Supervisor",
            icon: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 2,
            name: "Chief Baker",
            icon: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 3,
            name: "Baker",
            icon: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
        },
        {
            id: 4,
            name: "Cashier",
            icon: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 5,
            name: "Sales Lady",
            icon: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 6,
            name: "Lamesador",
            icon: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 7,
            name: "Hornero",
            icon: "https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    ];
    return (
        <Drawer
            title="Update Account"
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
                    <Input
                        value={data.name} // Provide the actual value if applicable
                        name={`name`} // Use a unique name for each input
                        title="Input name"
                        placeholder={`Input name`}
                        type="text"
                    />
                    <Input
                        value={data.email} // Provide the actual value if applicable
                        name={`email`} // Use a unique email for each input
                        title="Input email"
                        placeholder={`Input email`}
                        type="text"
                    />
                    <Select
                        name="position"
                        title="Select Position"
                        value={data.position}
                        items={position.map((res) => ({
                            value: res.name,
                            id: res.name,
                        }))}
                    />
                    <Select
                        name="branch_id"
                        title="Select Branch"
                        value={data.branch_id}
                        items={branches.map((res) => ({
                            value: res.branch_name,
                            id: res.id,
                        }))}
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
