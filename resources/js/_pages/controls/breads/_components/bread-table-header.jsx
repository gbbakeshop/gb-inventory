import {
    BriefcaseIcon,
    CalendarIcon,
    CheckIcon,
    CurrencyDollarIcon,
    DocumentPlusIcon,
    LinkIcon,
    MagnifyingGlassIcon,
    MapPinIcon,
    PencilIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredBreads } from "../../_redux/controls-slice";
import { useEffect, useState } from "react";
import CreateBreadForm from "./create-bread-form";

export default function BreadTableHeader() {
    const [query, setQuery] = useState("");
    const { breads, filteredBreads } = useSelector((state) => state.controls);
    const dispatch = useDispatch();

    const filtered =
        query === ""
            ? breads
            : breads.filter((bread) =>
                  bread.name
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .includes(query.toLowerCase().replace(/\s+/g, ""))
              );

    useEffect(() => {
        dispatch(setFilteredBreads(filtered));
    }, [query]);

    return (
        <div className="lg:flex lg:items-center lg:justify-between p-3">
            <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    List of Bread
                </h2>
                <div class=" flex mx-auto text-gray-600 ">
                    <button type="submit" class=" right-0 top-0 mx-3">
                        <MagnifyingGlassIcon className="h-6" />
                    </button>
                    <input
                        onChange={(event) => setQuery(event.target.value)}
                        class="border-2 h-10 px-5 pr-16 w-full rounded-lg text-sm "
                        type="search"
                        name="search"
                        placeholder="Search..."
                    />
                </div>
                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                        <BriefcaseIcon
                            className="mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                        />
                        Full-time
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                        <MapPinIcon
                            className="mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                        />
                        Remote
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                        <CurrencyDollarIcon
                            className="mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                        />
                        $120k &ndash; $140k
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                        <CalendarIcon
                            className="mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                        />
                        Closing on January 9, 2020
                    </div>
                </div>
            </div>
            <div className="mt-4 flex lg:ml-4 lg:mt-0">
                <span className="hidden sm:block">
                    <button
                        type="button"
                        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                        <PencilIcon
                            className="-ml-0.5 mr-1.5 h-6 w-6 text-gray-400"
                            aria-hidden="true"
                        />
                        Edit
                    </button>
                </span>

                <span className="ml-3 hidden sm:block">
                    <button
                        type="button"
                        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                        <LinkIcon
                            className="-ml-0.5 mr-1.5 h-6 w-6 text-gray-400"
                            aria-hidden="true"
                        />
                        View
                    </button>
                </span>

                <span className="sm:ml-3">
                    <CreateBreadForm />
                </span>
            </div>
        </div>
    );
}
