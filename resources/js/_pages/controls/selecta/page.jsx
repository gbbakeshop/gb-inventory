import AdministratorLayout from "@/_layouts/administrator-layout";
import RadioGroupComponent from "../_components/RadioGroupComponent";

export default function SelectaPage({auth}) {
  return ( 
    <AdministratorLayout 
    auth={auth}
    subNav={<RadioGroupComponent />}
    >
    SelectaPage
    </AdministratorLayout>
   );
}
