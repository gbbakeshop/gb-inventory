import { useRef, useState } from "react";
import Drawer from "@/_components/drawer";
import LoadingComponent from "@/_components/loading-component";
import { useDispatch, useSelector } from "react-redux";
import { setBreads } from "../../_redux/controls-slice";
import { Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { create_bread_group } from "@/_services/bread-group-service";
import Input from "@/_components/input";

export default function CreateBreadGroupForm() {
    const [selectedBreads, setSelectedBreads] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const { breads } = useSelector((state) => state.controls);
    const [groupName,setGroupName] = useState('')

    function submitHandler(e) {
        e.preventDefault();
        if (selectedBreads.length !== 0) {
            setLoading(true);
            create_bread_group(selectedBreads,groupName).then((res) => {
               if(res.status == 'success'){
                setSelectedBreads([])
                setQuery('')
               }else{
                  alert('exist')
               }
               setLoading(false);
            })
            .catch(err=>{
              setLoading(false);
            });
        }else{
          alert('ss')
        }
    }

    const filteredBreads =
        query === ""
            ? breads
            : breads.filter((bread) => {
                  return bread.name.toLowerCase().includes(query.toLowerCase());
              });

    return (
        <div className="w-full">
            <Drawer title="Create Bread Group">
                <form
                    onSubmit={submitHandler}
                    className="flex flex-col h-full w-full"
                >
                    <div className="flex-1">
                    <Input
                            onChange={(e) => setGroupName(e.target.value)}
                            value=''
                            name="bread_name"
                            title="Group Name"
                            placeholder="Enter of Group"
                            type="text"
                        />
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
        </div>
    );
}
