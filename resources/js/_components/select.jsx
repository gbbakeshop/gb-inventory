export default function Select({ title, items, value, onChange }) {
    return (
        <>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                {title}
            </label>
            <select
                onInput={onChange}
                className={`${
                    value == "" || value == null ? "border-red-500" : ""
                } appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
            >
                <option value=""></option>
                {items.map((res, index) => (
                    <option
                        dataId={res.id}
                        key={index}
                        value={res.value}
                        selected={res.id == value}
                    >
                        {res.value}
                    </option>
                ))}
            </select>
            {value == "" && (
                <p className="text-red-500 text-xs italic">
                    Please fill out this field.
                </p>
            )}
        </>
    );
}
