import { useRef, useState } from "react";
import Input from "@/_components/input";
import Drawer from "@/_components/drawer";
import LoadingComponent from "@/_components/loading-component";
import { useDispatch } from "react-redux";
// import { setRawMaterials } from "../../../_redux/controls-slice";
import { setToastStatus } from "@/_redux/app-slice";
import { PencilIcon } from "@heroicons/react/24/outline";
import Select from "@/_components/select";
import { create_raw_materials } from "@/_services/raw-materials-service";

export default function ProductionCreateBeginningForm({ data }) {
    const [form, setForm] = useState({
        name: "",
        bind: "Grams",
    });
    const [loading, setLoading] = useState(false);
    const ref = useRef();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    function submitHandler(e) {
        e.preventDefault();
        const formData = new FormData(ref.current);
        
  
        const raw_materials = data.bread_group.map((res, index) => ({
          ...res,
          quantity: formData.get(`quantity_${index}`).replace(/[^0-9.]/g, ""),
      }));
      console.log('sssss',raw_materials)
        // dispatch(
        //     setToastStatus({
        //         status: "loading",
        //         message: "Loading...",
        //     })
        // );
        // setLoading(true);
        // create_raw_materials(form)
        //     .then((res) => {
        //         dispatch(setToastStatus(res.notify));
        //         if (res.status == "success") {
        //             dispatch(setRawMaterials(res.data.original.status));
        //             setForm({
        //                 name: "",
        //                 bind: "Grams",
        //             });
        //             ref.current.reset();
        //         }
        //         setLoading(false);
        //     })
        //     .catch((err) => {
        //         dispatch(
        //             setToastStatus({
        //                 status: "error",
        //                 message: "Loading...",
        //             })
        //         );
        //         setLoading(false);
        //     });
    }
    console.log("data", data);
    return (
        <>
            <Drawer
                title="Create New Production"
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
                            Create New Production
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
                    <div className="flex-none">
                        {data.bread_group.map((res, index) => (
                            <Input
                                key={index}
                                // onChange={(e) => handleInputChange(e)}
                                value={0} // Provide the actual value if applicable
                                name={`quantity_${index}`} // Use a unique name for each input
                                title={res.bread.name}
                                placeholder={`Enter bread ${index + 1}`}
                                type="number"
                            />
                        ))}
                    </div>
                    <div className="flex-1">
                        <div className="relative ">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-2 py-3">
                                            Raw Materials
                                        </th>
                                        <th scope="col" className="px-2 py-3">
                                            Deduction
                                        </th>
                                        <th scope="col" className="px-2 py-3">
                                            Current Remaining
                                        </th>
                                        {/* <th scope="col" className="px-2 py-3">
                                            Calculation
                                        </th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.raw_materials_group.map(
                                        (res, index) => (
                                            <tr
                                                key={index}
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                >
                                                    {res.raw_materials.name}
                                                </th>
                                                <td className="px-2 py-4">
                                                    {res.grams}mg
                                                </td>
                                                <td className="px-2 py-4">
                                                    Laptop
                                                </td>
                                                <td className="px-2 py-4">
                                                    $2999
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>
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
