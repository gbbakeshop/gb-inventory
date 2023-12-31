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
            <div className="flex min-h-[57vh] mt-2">
                <div className="flex flex-col w-full gap-2">
                    <div className="flex-1 ">
                        {stepperValue == 1 && <RecipeDetailsSection />}
                        {stepperValue == 2 && <GroupBreadSection />}
                        {stepperValue == 3 && <GroupRawMaterialsSection />}
                    </div>
                </div>
            </div>
        </>
    );
}
