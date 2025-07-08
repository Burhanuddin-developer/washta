import DashboardLayout from "../layout/dashboard";
import ChatSupportPage from "../components/chatSupport";
import Header from "../components/header";
export default function ChatSupport() {

return(
    <DashboardLayout>
        <Header title="Chat Support" />
        <ChatSupportPage />
    </DashboardLayout>
)
}   
