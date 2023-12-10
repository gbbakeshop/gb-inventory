import { Fragment, useRef, useState } from "react";
import Drawer from "@/_components/drawer";
import { useDispatch, useSelector } from "react-redux";
import {
    CheckIcon,
    PencilSquareIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import {
    delete_specific_bread_group,
    update_bread_group,
} from "@/_services/bread-group-service";
import { setBreadGroup } from "@/_pages/controls/_redux/controls-slice";
import { Combobox, Transition } from "@headlessui/react";
import LoadingComponent from "@/_components/loading-component";

export default function BreadGroupEdit({ data }) {
    const dispatch = useDispatch();
    const [selectedBreads, setSelectedBreads] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const ref = useRef();
    const [query, setQuery] = useState("");
    const { breads } = useSelector((state) => state.controls);
    const [open, setOpen] = useState(false);
    const [currentId, setCurrentId] = useState(0);

    function deleteSpecificBreadGroup(id) {
        setLoading(true);
        setCurrentId(id);
        delete_specific_bread_group(id).then((res) => {
            setCurrentId(false);
            dispatch(setBreadGroup(res.data.original.status));
        });
    }

    const filteredBreads =
        query === ""
            ? breads
            : breads.filter((bread) => {
                  return bread.name.toLowerCase().includes(query.toLowerCase());
              });

    function submitHandler(e) {
        e.preventDefault();
        setLoading2(true);
        update_bread_group(selectedBreads, data[0]).then((res) => {
            setSelectedBreads([]);
            setLoading2(false);
            dispatch(setBreadGroup(res.data.original.status));
        });
    }

    return (
        <>
            <Drawer
                title="Edit Bread"
                open={open}
                setOpen={setOpen}
                button={
                    <button onClick={() => setOpen(true)}>
                        <PencilSquareIcon
                            className="-ml-0.5 mr-1.5 h-6 w-6 text-violet-500"
                            aria-hidden="true"
                        />
                    </button>
                }
            >
                <form
                    name="form"
                    onSubmit={submitHandler}
                    className="flex flex-col h-full w-full"
                >
                    <div className="flex-none">
                        <Combobox
                            value={selectedBreads}
                            onChange={setSelectedBreads}
                            multiple
                        >
                            <div className="relative mt-1">
                                <div className="relative w-full cursor-default rounded-lg text-left  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-red-300 sm:text-sm">
                                    <Combobox.Input
                                        placeholder="Search bread"
                                        className="w-full h-full border rounded-md border-red-500 py-4 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                                        // displayValue={(bread) => bread.map(res=>res.name)}
                                        onChange={(event) =>
                                            setQuery(event.target.value)
                                        }
                                    />
                                    <div className="flex flex-wrap">
                                        {selectedBreads.length > 0 &&
                                            selectedBreads.map((res) => (
                                                <div className="m-1 p-2 bg-red-500 rounded-md text-white">
                                                    {res.name}
                                                </div>
                                            ))}
                                    </div>
                                </div>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                    afterLeave={() => setQuery("")}
                                >
                                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                        {filteredBreads.length === 0 &&
                                        query !== "" ? (
                                            <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                                                Nothing found.
                                            </div>
                                        ) : (
                                            filteredBreads.map((bread) => (
                                                <Combobox.Option
                                                    key={bread.id}
                                                    className={({ active }) =>
                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                            active
                                                                ? "bg-red-500 text-white"
                                                                : "text-gray-900"
                                                        }`
                                                    }
                                                    value={bread}
                                                >
                                                    {({ selected, active }) => (
                                                        <>
                                                            <span
                                                                className={`block truncate ${
                                                                    selected
                                                                        ? "font-medium"
                                                                        : "font-normal"
                                                                }`}
                                                            >
                                                                {bread.name}
                                                            </span>
                                                            {selected ? (
                                                                <span
                                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                                        active
                                                                            ? "text-white"
                                                                            : "text-red-500"
                                                                    }`}
                                                                >
                                                                    <CheckIcon
                                                                        className="h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Combobox.Option>
                                            ))
                                        )}
                                    </Combobox.Options>
                                </Transition>
                            </div>
                        </Combobox>
                    </div>
                    <div className="flex-1">
                        <ul role="list" className="divide-y divide-gray-100">
                            {data.map((res, index) => (
                                <li
                                    key={index}
                                    className="flex justify-between gap-x-6 py-3"
                                >
                                    <div className="flex min-w-0 gap-x-4">
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-sm font-semibold leading-6 text-gray-900">
                                                {res.bread.name}
                                            </p>
                                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                                Price: {res.bread.price}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                        <p className="text-sm leading-6 text-gray-900">
                                            {res.group_name}
                                        </p>
                                        <div className="mt-1 flex items-center gap-x-1.5">
                                            {loading && currentId == res.id ? (
                                                <div className="text-sm leading-5 text-red-500">
                                                    Loading...
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() =>
                                                        deleteSpecificBreadGroup(
                                                            res.id
                                                        )
                                                    }
                                                    className="text-lg leading-5 text-red-500"
                                                >
                                                    <TrashIcon className="h-4" />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {selectedBreads.length !== 0 && (
                        <div className="flex-none">
                            {loading2 ? (
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
                    )}
                </form>
            </Drawer>
        </>
    );
}
