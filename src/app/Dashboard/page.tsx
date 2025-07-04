"use client";
import Dashboard from '../components/dashboard';
import { Header } from '../components/header';
import DashboardLayout from '../layout/dashboard';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Header />
      <Dashboard />
    </DashboardLayout>
  );
}
