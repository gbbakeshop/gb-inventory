import AdministratorLayout from "@/_layouts/administrator-layout";
import RadioGroupComponent from "../_components/RadioGroupComponent";
import RecipesTabs from "./_components/recipes-tabs";
export default function RecipesPage({ auth }) {
    return (
        <AdministratorLayout 
            auth={auth} 
            subNav={<RadioGroupComponent />}
            >
              <RecipesTabs />
        </AdministratorLayout>
    );
}
