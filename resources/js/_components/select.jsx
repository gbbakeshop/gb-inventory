export default function Select({
    title,
    items,
    value,
    onChange,
}) {
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
                {items.map((res,index) => (
                    <option key={index} value={res} selected={res == value}>{res}</option>
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
