import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

export default function RecipesStepper() {
    const { stepperValue } = useSelector((state) => state.controls);

    function isActive1(value) {
        return value <= stepperValue
            ? "flex items-center text-red-600  space-x-2.5 rtl:space-x-reverse"
            : "flex items-center text-gray-500  space-x-2.5 rtl:space-x-reverse";
    }
    function isActive2(value) {
      return value <= stepperValue
      ? "flex items-center justify-center w-8 h-8 border border-red-600 rounded-full shrink-0"
      : "flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0";
    }
    return (
        <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
            <li className={isActive1(1)}>
                <span className={isActive2(1)}>
                    1
                </span>
                <span>
                    <h3 className="font-medium leading-tight">
                        Recipe Details
                    </h3>
                    <p className="text-sm">Create Recipe Details</p>
                </span>
                <ChevronDoubleRightIcon className="h-6" />
            </li>
            <li className={isActive1(2)}>
                <span  className={isActive2(2)}>
                    2
                </span>
                <span>
                    <h3 className="font-medium leading-tight">
                        Group of Bread
                    </h3>
                    <p className="text-sm">Select Group of Bread</p>
                </span>
                <ChevronDoubleRightIcon className="h-6" />
            </li>
            <li className={isActive1(3)}>
                <span  className={isActive2(3)}>
                    3
                </span>
                <span>
                    <h3 className="font-medium leading-tight">
                        Group of Raw Materials
                    </h3>
                    <p className="text-sm">Select Group of Raw Materials</p>
                </span>
            </li>
        </ol>
    );
}
