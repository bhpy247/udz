import React from "react";
import { Metadata } from "next";
import HotelsDirectoryClient from "./HotelsDirectoryClient";

export const metadata: Metadata = {
  title: "Curated Hotels & Boutique Stays in Udaipur | Udaipur Unfolded",
  description:
    "Explore verified partner hotels, heritage havelis, and boutique properties across Udaipur alongside our primary homestay in Ambamata.",
  keywords: [
    "Hotels in Udaipur",
    "Boutique stays Udaipur",
    "Heritage hotels Lake Pichola",
    "Partner hotels Udaipur Unfolded",
    "Budget to luxury hotels Udaipur",
  ],
};

export default function HotelsPage() {
  return <HotelsDirectoryClient />;
}
