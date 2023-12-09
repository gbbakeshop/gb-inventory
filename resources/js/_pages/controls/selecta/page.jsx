import AdministratorLayout from "@/_layouts/administrator-layout";
import RadioGroupComponent from "../_components/RadioGroupComponent";
import ControlsBreadCrumbs from "../_components/control-breadcrumbs";

export default function SelectaPage({auth}) {
  return ( 
    <AdministratorLayout 
    auth={auth}
    subNav={<RadioGroupComponent />}
    >
      <ControlsBreadCrumbs />
    SelectaPage
    </AdministratorLayout>
   );
}
