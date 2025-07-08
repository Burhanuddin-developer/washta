import AgentProfile from "../components/agentProfile";
import Header from "../components/header";
import DashboardLayout from "../layout/dashboard";
export default function EditProfile() {
  return (
    <DashboardLayout>
        <Header title="Agent Profile" />
        <AgentProfile />
    </DashboardLayout>
  );
}