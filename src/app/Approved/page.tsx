
import App from "next/app";
import DashboardLayout from "../layout/dashboard";
import Approved from "../components/approved";
export default function ApprovedPage() {
  return (
       <DashboardLayout>
      <Approved/>
       </DashboardLayout>
  );
}