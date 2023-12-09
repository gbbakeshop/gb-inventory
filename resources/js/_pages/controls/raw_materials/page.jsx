import AdministratorLayout from "@/_layouts/administrator-layout";
import RadioGroupComponent from "../_components/RadioGroupComponent";
import RawMaterialsTabs from "./_components/raw-materials-tabs";

export default function RawMaterialsPage({auth}) {
  return ( 
    <AdministratorLayout 
    auth={auth}
    subNav={<RadioGroupComponent />}
    >
    <RawMaterialsTabs />
    </AdministratorLayout>
   );
}
