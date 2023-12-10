import { useRef, useState } from "react";
import Drawer from "@/_components/drawer";
import { useDispatch } from "react-redux";
import { EyeIcon, PencilIcon } from "@heroicons/react/24/outline";

export default function RawMaterialsGroupShow({ data }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const ref = useRef();
    const [open, setOpen] = useState(false);

    function submitHandler(e) {}

    return (
        <>
            <Drawer
                title="Show Raw Materials"
                open={open}
                setOpen={setOpen}
                button={
                    <button onClick={() => setOpen(true)}>
                        <EyeIcon
                            className="-ml-0.5 mr-1.5 h-6 w-6 text-blue-500"
                            aria-hidden="true"
                        />
                    </button>
                }
            >
                <ul role="list" className="divide-y divide-gray-100">
                    {data.map((res,index) => (
                        <li
                            key={index}
                            className="flex justify-between gap-x-6 py-3"
                        >
                            <div className="flex min-w-0 gap-x-4">
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">
                                        {res.raw_materials.name}
                                    </p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                        Bind: {res.raw_materials.bind}
                                    </p>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900">
                                    {res.group_name}
                                </p>
                                <div className="mt-1 flex items-center gap-x-1.5">
                                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                    </div>
                                    <p className="text-xs leading-5 text-gray-500">
                                        Raw Materials
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </Drawer>
        </>
    );
}
