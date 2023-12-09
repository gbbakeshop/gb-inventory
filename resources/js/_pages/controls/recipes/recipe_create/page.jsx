import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import RecipesStepper from "./_components/recipes-stepper";
import { useDispatch, useSelector } from "react-redux";
import { setStepperValue } from "../../_redux/controls-slice";
import RecipeDetailsSection from "./_sections/recipe-details";
import GroupBreadSection from "./_sections/group-bread";
import GroupRawMaterialsSection from "./_sections/group-raw-materials";

export default function RecipesCreatePage() {
    const dispatch = useDispatch();
    const { stepperValue } = useSelector((state) => state.controls);
    return (
        <>
            <RecipesStepper />
            <div className="flex min-h-[69vh] mt-2">
                <div className="flex flex-col w-full gap-2">
                    <div className="flex-1 ">
                      {stepperValue == 1 && <RecipeDetailsSection />}
                      {stepperValue == 2 && <GroupBreadSection />}
                      {stepperValue == 3 && <GroupRawMaterialsSection />}
                    </div>
                    <div className="flex-none ">
                        <div className="flex w-full items-center justify-end">
                            <button
                                onClick={()=>dispatch(setStepperValue(stepperValue+1))}
                                type="button"
                                class="flex  justify-center rounded-md bg-red-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                            >
                                NEXT PAGE{" "}
                                <ChevronDoubleRightIcon className="h-6 ml-3" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
