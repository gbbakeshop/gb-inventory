import AdministratorLayout from "@/_layouts/administrator-layout";
import RadioGroupComponent from "../_components/RadioGroupComponent";
import BreadTabs from "./_components/bread-tabs";

export default function BreadPage({auth}) {
  return ( 
    <AdministratorLayout 
    auth={auth}
    subNav={<RadioGroupComponent />}
    >
    <BreadTabs />
    </AdministratorLayout>
   );
}
