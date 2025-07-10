"use client";
import React, { useEffect, useState } from "react";
import AdminDashboard from '../components/adminDashboard';
import AgentDashboard from '../components/agentDashboard';
import { Header } from '../components/header';
import DashboardLayout from '../layout/dashboard';
import Notification from '../components/notification';

export default function DashboardPage() {
  const [role, setRole] = useState<string | null>(null);
  // const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRole(localStorage.getItem('role'));
      // if (localStorage.getItem('showNotification') === 'true') {
      //   setShowNotifications(true);
      //   localStorage.removeItem('showNotification');
      // }
    }
  }, []); 

  let dashboardContent = null;
  let headerTitle = null;

  if (!role) {
    dashboardContent = null; 
  } else if (role === 'admin') {
    headerTitle = <Header title="Admin Dashboard" />;
    dashboardContent = <AdminDashboard />;
  } else if (role === 'agent') {
    headerTitle = <Header title="Agent Dashboard"/>;
    dashboardContent = <AgentDashboard />;
  } else {
    dashboardContent = <div>Unauthorized</div>;
  }

  return (
    <DashboardLayout>
    
      {/* {showNotifications ? <Header title="Notifications" /> :*/ headerTitle} 
      {/* {showNotifications ? <Notification /> : */ dashboardContent}
    </DashboardLayout>
  );
}
