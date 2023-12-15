import { get_all_bread_group } from "@/_services/bread-group-service";
import RecipeListTable from "./_components/recipe-list-table";
import {
    setBreadGroup,
    setRawMaterialsGroup,
} from "../../_redux/controls-slice";
import { useDispatch } from "react-redux";
import { get_all_raw_materials_group } from "@/_services/raw-materials-group-service";

export default function RecipesListPage() {
    const dispatch = useDispatch();
    get_all_bread_group().then((res) => {
        dispatch(setBreadGroup(res.status));
    });
    get_all_raw_materials_group().then((res) => {
        dispatch(setRawMaterialsGroup(res.status));
    });
    return (
        <>
            <RecipeListTable />
        </>
    );
}
