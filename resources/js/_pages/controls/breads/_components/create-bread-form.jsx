import { useRef, useState } from "react";
import Input from "@/_components/input";
import Drawer from "@/_components/drawer";
import LoadingComponent from "@/_components/loading-component";
import { create_bread } from "@/_services/breads-service";
import { useDispatch } from "react-redux";
import { setBreads } from "../../_redux/controls-slice";

export default function CreateBreadForm() {
  
    const [form,setForm] = useState({})
    const [loading, setLoading] = useState(false);
    const ref = useRef();
    const dispatch = useDispatch()

    function submitHandler(e) {
      e.preventDefault()
      setLoading(true)
      create_bread(form).then(res=>{
        dispatch(setBreads(res.data.original.status));
        setForm({})
        ref.current.reset();
        setLoading(false)
      })
    }

    return (
        <>
            <Drawer title="Create Bread">
                <form
                 ref={ref}
                    name="form"
                    onSubmit={submitHandler}
                    className="flex flex-col h-full w-full"
                >
                    <div className="flex-1">
                        <Input
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            value={form.name}
                            name="bread_name"
                            title="Name of Bread"
                            placeholder="Enter name of bread"
                            type="text"
                        />
                        <Input
                            onChange={(e) => setForm({ ...form, price: e.target.value })}
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
                            <button type="submit" className="flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0">
                                SUBMIT
                            </button>
                        )}
                    </div>
                </form>
            </Drawer>
        </>
    );
}
