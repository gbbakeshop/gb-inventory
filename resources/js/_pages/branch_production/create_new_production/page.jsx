import BranchLayout from "@/_layouts/branch-layout";
import BranchProductionTabs from "../_components/branch-production-tabs";
import BranchBreadCrumbs from "../_components/branch-breadcrumbs";
import ProductionCreateBeginningTable from "@/_pages/branches/production/_section/create_beginning/_components/production-create-beginning-table";
import RecipeListTableHeader from "@/_pages/controls/recipes/recipe_list/_components/recipe-list-table-header";

export default function BranchCreateNewProductionPage({ auth }) {
    return (
        <BranchLayout account={auth}>
            <BranchBreadCrumbs  account={auth.user} />
            <BranchProductionTabs account={auth.user} />
            <RecipeListTableHeader />
            <ProductionCreateBeginningTable account={auth.user} />
        </BranchLayout>
    );
}
