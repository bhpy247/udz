import React from "react";
import { Metadata } from "next";
import AdminDashboardClient from "./AdminDashboardClient";

export const metadata: Metadata = {
  title: "Host Management Portal | Udaipur Unfolded",
  description: "Secure management dashboard for rooms, partner stays, and enquiries.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <AdminDashboardClient />;
}
