import RecipeListTableHeader from "@/_pages/controls/recipes/recipe_list/_components/recipe-list-table-header";
import ProductionCreateBeginningTable from "./_components/production-create-beginning-table";

export default function CreateBeginningPage({ account }) {
    return (
        <>
            <RecipeListTableHeader />
            <ProductionCreateBeginningTable account={account} />
        </>
    );
}
