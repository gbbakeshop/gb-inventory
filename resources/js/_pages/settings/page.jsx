import AdministratorLayout from "@/_layouts/administrator-layout";
import UpdateProfileInformationForm from "./components/update-profile-information";

export default function SettingsPage({ auth, mustVerifyEmail, status }) {
  return (
    <AdministratorLayout>
      <div className="flex">
        <div >

        </div>
      </div>
      <UpdateProfileInformationForm
        mustVerifyEmail={mustVerifyEmail}
        status={status}
        className="max-w-xl"
      />
    </AdministratorLayout>
  );
}
