"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Lock,
  LogOut,
  Bed,
  Building2,
  MapPin,
  Calendar,
  MessageCircle,
  Settings,
  CheckCircle2,
  Save,
  Eye,
  EyeOff,
  AlertCircle,
  TrendingUp,
} from "lucide-react";
import { roomsData, hotelsData, attractionsData, itinerariesData, siteSettings } from "@/lib/data";
import { Room, Hotel, Attraction, Itinerary } from "@/lib/types";

type EnquiryStatus = "New" | "Contacted" | "Confirmed" | "Cancelled" | "Completed";
type DashboardTab = "overview" | "rooms" | "enquiries" | "hotels" | "destinations" | "itineraries" | "settings";

interface EnquiryItem {
  id: string;
  guestName: string;
  guestPhone: string;
  guestEmail?: string;
  roomName: string;
  checkInDate: string;
  checkOutDate: string;
  guestCount: number;
  status: EnquiryStatus;
  notes?: string;
  internalNotes: { id: string; author: string; text: string; date: string }[];
}

export default function AdminDashboardClient() {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");

  // Tab navigation
  const [activeTab, setActiveTab] = useState<DashboardTab>("overview");

  // Dynamic state for data management
  const [rooms, setRooms] = useState<Room[]>(roomsData);
  const [hotels] = useState<Hotel[]>(hotelsData);
  const [attractions] = useState<Attraction[]>(attractionsData);
  const [itineraries] = useState<Itinerary[]>(itinerariesData);
  const [settings, setSettings] = useState(siteSettings);

  // Enquiries state
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>([
    {
      id: "enq-101",
      guestName: "Pooja Sharma",
      guestPhone: "+91 98200 XXXXX",
      guestEmail: "pooja.sharma@example.com",
      roomName: "Room 1 — The Courtyard Haven",
      checkInDate: "2026-12-05",
      checkOutDate: "2026-12-08",
      guestCount: 2,
      status: "Confirmed",
      notes: "Arriving for 3-day anniversary trip. Enquired about lake sunset boat booking.",
      internalNotes: [
        {
          id: "note-1",
          author: "Host",
          text: "Confirmed on WhatsApp. Informed about 1 PM check-in and parking availability.",
          date: "2026-11-15 14:30",
        },
      ],
    },
    {
      id: "enq-102",
      guestName: "Arjun Mehta",
      guestPhone: "+91 94140 XXXXX",
      guestEmail: "arjun.m@example.com",
      roomName: "Room 2 — The Amber Verandah Room",
      checkInDate: "2026-12-12",
      checkOutDate: "2026-12-14",
      guestCount: 2,
      status: "New",
      notes: "Requested quiet workspace and high-speed Wi-Fi.",
      internalNotes: [],
    },
    {
      id: "enq-103",
      guestName: "Dev & Priya Verma",
      guestPhone: "+91 97110 XXXXX",
      roomName: "Both Rooms — Complete Residential Wing",
      checkInDate: "2026-12-24",
      checkOutDate: "2026-12-27",
      guestCount: 4,
      status: "Contacted",
      notes: "Family holiday with two children. Inquired about Lake Pichola boat booking.",
      internalNotes: [
        {
          id: "note-2",
          author: "Host",
          text: "Messaged on WhatsApp sharing rate of ₹3,300/night for both rooms combined.",
          date: "2026-11-16 11:20",
        },
      ],
    },
  ]);

  // Selected enquiry filter
  const [enquiryStatusFilter, setEnquiryStatusFilter] = useState("All");
  const [newNoteText, setNewNoteText] = useState("");
  const [selectedEnquiryId, setSelectedEnquiryId] = useState<string | null>(null);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState("");

  // Check existing session
  useEffect(() => {
    const savedToken = localStorage.getItem("uu_admin_token");
    if (savedToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");

    if (email.trim().toLowerCase() === "admin@udaipurunfolded.com" && password === "Udaipur@Admin2026") {
      localStorage.setItem("uu_admin_token", "jwt_token_udaipur_host_secure_session");
      setIsAuthenticated(true);
    } else {
      setAuthError("Invalid credentials. Please use admin@udaipurunfolded.com and the secure host password.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("uu_admin_token");
    setIsAuthenticated(false);
  };

  const flashMessage = (msg: string) => {
    setSaveSuccessMsg(msg);
    setTimeout(() => setSaveSuccessMsg(""), 3000);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "Contacted":
        return "bg-amber-100 text-amber-800 border-amber-300";
      case "Confirmed":
        return "bg-emerald-100 text-emerald-800 border-emerald-300";
      case "Cancelled":
        return "bg-rose-100 text-rose-800 border-rose-300";
      case "Completed":
        return "bg-gray-100 text-gray-800 border-gray-300";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center bg-[#F7F4ED]">
        <div className="w-full max-w-md bg-[#FAF7F2] border border-[#DACBB7] p-8 shadow-xl">
          <div className="text-center space-y-2 mb-8">
            <div className="w-12 h-12 bg-[#B56B4B]/10 text-[#B56B4B] mx-auto flex items-center justify-center rounded-none">
              <Lock className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#B56B4B] uppercase">
              Udaipur Unfolded
            </span>
            <h1 className="font-serif text-2xl font-bold text-[#252820]">
              Host & Management Portal
            </h1>
            <p className="text-xs text-[#777C61]">
              Secure administration for rooms, partner stays, and WhatsApp enquiries.
            </p>
          </div>

          {authError && (
            <div className="mb-5 p-3 bg-red-50 border border-red-200 text-xs text-red-700 flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#252820] mb-1">
                Admin Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@udaipurunfolded.com"
                className="w-full bg-[#F7F4ED] border border-[#DACBB7] px-3.5 py-2.5 text-sm text-[#252820] focus:outline-none focus:border-[#B56B4B]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#252820] mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#F7F4ED] border border-[#DACBB7] px-3.5 py-2.5 text-sm text-[#252820] focus:outline-none focus:border-[#B56B4B] pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-[#777C61] hover:text-[#252820]"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center space-x-2 bg-[#B56B4B] hover:bg-[#9E593A] text-white py-3 px-6 font-semibold uppercase tracking-wider text-xs transition-colors shadow-sm"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Log In to Host Portal</span>
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-[#DACBB7]/70 text-[11px] text-[#777C61] text-center space-y-1">
            <p>Protected area. All actions are logged and authenticated.</p>
            <p className="font-mono text-[10px]">Demo credentials: admin@udaipurunfolded.com / Udaipur@Admin2026</p>
          </div>
        </div>
      </div>
    );
  }

  const filteredEnquiries = enquiries.filter((e) => {
    if (enquiryStatusFilter !== "All" && e.status !== enquiryStatusFilter) {
      return false;
    }
    return true;
  });

  return (
    <div className="pt-24 pb-20 bg-[#F7F4ED] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="bg-[#FAF7F2] border border-[#DACBB7] p-5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="font-serif text-xl font-bold text-[#252820]">
                Udaipur Unfolded Host Dashboard
              </span>
            </div>
            <p className="text-xs text-[#777C61] mt-0.5">
              Logged in as <span className="font-mono text-[#252820]">admin@udaipurunfolded.com</span> • Ambamata Property Wing
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="/"
              target="_blank"
              className="text-xs font-semibold text-[#777C61] hover:text-[#252820] px-3 py-1.5 border border-[#DACBB7]"
            >
              View Public Website ↗
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center space-x-1.5 bg-[#252820] hover:bg-[#B56B4B] text-white text-xs font-semibold px-3.5 py-1.5 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>

        {saveSuccessMsg && (
          <div className="mb-6 p-3 bg-emerald-50 border border-emerald-300 text-xs text-emerald-800 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{saveSuccessMsg}</span>
          </div>
        )}

        {/* Dashboard Navigation Tabs */}
        <div className="flex border-b border-[#DACBB7] mb-8 overflow-x-auto space-x-1 sm:space-x-2 text-xs font-semibold uppercase tracking-wider">
          {[
            { id: "overview", label: "Overview", icon: TrendingUp },
            { id: "rooms", label: "Rooms (2)", icon: Bed },
            { id: "enquiries", label: `Enquiries (${enquiries.length})`, icon: MessageCircle },
            { id: "hotels", label: `Hotels (${hotels.length})`, icon: Building2 },
            { id: "destinations", label: `Destinations (${attractions.length})`, icon: MapPin },
            { id: "itineraries", label: `Itineraries (${itineraries.length})`, icon: Calendar },
            { id: "settings", label: "Settings", icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as DashboardTab)}
                className={`py-3 px-4 flex items-center space-x-2 transition-colors border-b-2 -mb-[1px] whitespace-nowrap ${
                  isActive
                    ? "border-[#B56B4B] text-[#B56B4B] bg-[#FAF7F2] font-bold"
                    : "border-transparent text-[#777C61] hover:text-[#252820]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="bg-[#FAF7F2] border border-[#DACBB7] p-5 space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#777C61]">Total Rooms</span>
                <div className="font-serif text-2xl font-bold text-[#252820]">{rooms.length}</div>
                <span className="text-[10px] text-[#777C61]">Ambamata Homestay</span>
              </div>
              <div className="bg-[#FAF7F2] border border-[#DACBB7] p-5 space-y-1">
                <span className="text-[10px] uppercase font-bold text-blue-600">New Enquiries</span>
                <div className="font-serif text-2xl font-bold text-blue-700">
                  {enquiries.filter((e) => e.status === "New").length}
                </div>
                <span className="text-[10px] text-[#777C61]">Awaiting WhatsApp reply</span>
              </div>
              <div className="bg-[#FAF7F2] border border-[#DACBB7] p-5 space-y-1">
                <span className="text-[10px] uppercase font-bold text-emerald-600">Confirmed Stays</span>
                <div className="font-serif text-2xl font-bold text-emerald-700">
                  {enquiries.filter((e) => e.status === "Confirmed").length}
                </div>
                <span className="text-[10px] text-[#777C61]">Dates locked</span>
              </div>
              <div className="bg-[#FAF7F2] border border-[#DACBB7] p-5 space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#777C61]">Partner Hotels</span>
                <div className="font-serif text-2xl font-bold text-[#252820]">{hotels.length}</div>
                <span className="text-[10px] text-[#777C61]">Verified directory</span>
              </div>
              <div className="bg-[#FAF7F2] border border-[#DACBB7] p-5 space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#777C61]">Destinations</span>
                <div className="font-serif text-2xl font-bold text-[#252820]">{attractions.length}</div>
                <span className="text-[10px] text-[#777C61]">Sightseeing guides</span>
              </div>
              <div className="bg-[#FAF7F2] border border-[#DACBB7] p-5 space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#777C61]">Itineraries</span>
                <div className="font-serif text-2xl font-bold text-[#252820]">{itineraries.length}</div>
                <span className="text-[10px] text-[#777C61]">Day-wise plans</span>
              </div>
            </div>

            <div className="bg-[#FAF7F2] border border-[#DACBB7] p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[#DACBB7]/70 pb-3">
                <h3 className="font-serif text-lg font-bold text-[#252820]">
                  Recent Guest Enquiries
                </h3>
                <button
                  onClick={() => setActiveTab("enquiries")}
                  className="text-xs text-[#B56B4B] font-semibold hover:underline"
                >
                  View All Enquiries →
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-[#DACBB7] text-[#777C61] uppercase tracking-wider font-semibold">
                      <th className="py-2.5">Guest</th>
                      <th className="py-2.5">Room</th>
                      <th className="py-2.5">Dates</th>
                      <th className="py-2.5">Status</th>
                      <th className="py-2.5">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DACBB7]/50">
                    {enquiries.slice(0, 4).map((enq) => (
                      <tr key={enq.id} className="hover:bg-[#F7F4ED]">
                        <td className="py-3 font-medium text-[#252820]">
                          <div>{enq.guestName}</div>
                          <div className="text-[#777C61] font-mono text-[10px]">{enq.guestPhone}</div>
                        </td>
                        <td className="py-3 text-[#252820]">{enq.roomName}</td>
                        <td className="py-3 text-[#777C61]">
                          {enq.checkInDate} to {enq.checkOutDate} ({enq.guestCount} guests)
                        </td>
                        <td className="py-3">
                          <span
                            className={`px-2 py-0.5 rounded-none border text-[10px] font-semibold uppercase ${getStatusBadge(
                              enq.status
                            )}`}
                          >
                            {enq.status}
                          </span>
                        </td>
                        <td className="py-3">
                          <button
                            onClick={() => {
                              setSelectedEnquiryId(enq.id);
                              setActiveTab("enquiries");
                            }}
                            className="text-[#B56B4B] font-semibold hover:underline"
                          >
                            Manage
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ROOM MANAGEMENT */}
        {activeTab === "rooms" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#252820]">
                  Room Inventory & Pricing
                </h2>
                <p className="text-xs text-[#777C61]">
                  Configure our primary two guest rooms. Initial rates remain below ₹2,000/night.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rooms.map((room) => (
                <div key={room.id} className="bg-[#FAF7F2] border border-[#DACBB7] p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#DACBB7] pb-3">
                    <span className="font-serif text-lg font-bold text-[#252820]">
                      {room.name}
                    </span>
                    <span
                      className={`px-2 py-0.5 text-[10px] font-bold uppercase ${
                        room.isAvailable ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {room.isAvailable ? "Available" : "Blocked"}
                    </span>
                  </div>

                  <div className="relative h-48 w-full bg-[#E9DFCF] overflow-hidden">
                    <Image src={room.images[0]} alt={room.name} fill className="object-cover" />
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block text-[#777C61] font-semibold uppercase tracking-wider mb-1">
                        Price Per Night (₹)
                      </label>
                      <input
                        type="number"
                        value={room.pricePerNight}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setRooms(
                            rooms.map((r) => (r.id === room.id ? { ...r, pricePerNight: val } : r))
                          );
                        }}
                        className="w-full bg-[#F7F4ED] border border-[#DACBB7] px-3 py-1.5 text-sm font-semibold text-[#252820] focus:outline-none focus:border-[#B56B4B]"
                      />
                      <span className="text-[10px] text-[#777C61] mt-0.5 block">
                        Recommended initial baseline: below ₹2,000/night
                      </span>
                    </div>

                    <div>
                      <label className="block text-[#777C61] font-semibold uppercase tracking-wider mb-1">
                        Tagline
                      </label>
                      <input
                        type="text"
                        value={room.tagline}
                        onChange={(e) => {
                          const val = e.target.value;
                          setRooms(rooms.map((r) => (r.id === room.id ? { ...r, tagline: val } : r)));
                        }}
                        className="w-full bg-[#F7F4ED] border border-[#DACBB7] px-3 py-1.5 text-xs text-[#252820] focus:outline-none focus:border-[#B56B4B]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#777C61] font-semibold uppercase tracking-wider mb-1">
                        Guest Capacity
                      </label>
                      <select
                        value={room.maxGuests}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setRooms(
                            rooms.map((r) => (r.id === room.id ? { ...r, maxGuests: val } : r))
                          );
                        }}
                        className="w-full bg-[#F7F4ED] border border-[#DACBB7] px-3 py-1.5 text-xs text-[#252820]"
                      >
                        <option value={1}>1 Guest</option>
                        <option value={2}>2 Guests</option>
                      </select>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        onClick={() => {
                          setRooms(
                            rooms.map((r) =>
                              r.id === room.id ? { ...r, isAvailable: !r.isAvailable } : r
                            )
                          );
                          flashMessage(`${room.name} availability toggled.`);
                        }}
                        className="text-xs text-[#777C61] hover:text-[#252820] underline"
                      >
                        Toggle Availability Status
                      </button>

                      <button
                        onClick={() => flashMessage(`Saved settings for ${room.name}.`)}
                        className="inline-flex items-center space-x-1 bg-[#B56B4B] hover:bg-[#9E593A] text-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider"
                      >
                        <Save className="w-3.5 h-3.5" />
                        <span>Save Room</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: ENQUIRY MANAGEMENT */}
        {activeTab === "enquiries" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#252820]">
                  Accommodation Enquiries
                </h2>
                <p className="text-xs text-[#777C61]">
                  Manage direct inquiries initiated via WhatsApp & Website.
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold uppercase text-[#777C61]">Filter:</span>
                <select
                  value={enquiryStatusFilter}
                  onChange={(e) => setEnquiryStatusFilter(e.target.value)}
                  className="bg-[#FAF7F2] border border-[#DACBB7] text-xs px-3 py-1.5 text-[#252820]"
                >
                  <option value="All">All Enquiries</option>
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                {filteredEnquiries.map((enq) => {
                  const isSelected = selectedEnquiryId === enq.id;
                  return (
                    <div
                      key={enq.id}
                      onClick={() => setSelectedEnquiryId(enq.id)}
                      className={`bg-[#FAF7F2] border p-5 cursor-pointer transition-all ${
                        isSelected ? "border-[#B56B4B] shadow-md" : "border-[#DACBB7] hover:border-[#777C61]"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-serif text-base font-bold text-[#252820]">
                            {enq.guestName}
                          </h3>
                          <p className="text-xs text-[#777C61] font-mono">{enq.guestPhone}</p>
                        </div>

                        <span
                          className={`px-2.5 py-0.5 text-[10px] font-bold uppercase border ${getStatusBadge(
                            enq.status
                          )}`}
                        >
                          {enq.status}
                        </span>
                      </div>

                      <div className="mt-3 text-xs text-[#252820] space-y-1">
                        <div>
                          <span className="text-[#777C61]">Room:</span> {enq.roomName}
                        </div>
                        <div>
                          <span className="text-[#777C61]">Stay Dates:</span> {enq.checkInDate} → {enq.checkOutDate} ({enq.guestCount} guests)
                        </div>
                        {enq.notes && (
                          <div className="text-xs text-[#777C61] italic mt-1 bg-[#F7F4ED] p-2 border border-[#DACBB7]/50">
                            &ldquo;{enq.notes}&rdquo;
                          </div>
                        )}
                      </div>

                      <div className="mt-3 pt-3 border-t border-[#DACBB7]/50 flex items-center justify-between text-[11px] text-[#777C61]">
                        <span>{enq.internalNotes.length} Internal Notes</span>
                        <span className="text-[#B56B4B] font-semibold">Click to update status & notes →</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="lg:col-span-5 bg-[#FAF7F2] border border-[#DACBB7] p-6 space-y-5 sticky top-24">
                {selectedEnquiryId ? (
                  (() => {
                    const activeEnq = enquiries.find((e) => e.id === selectedEnquiryId)!;
                    return (
                      <div className="space-y-4">
                        <div className="border-b border-[#DACBB7] pb-3">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#B56B4B]">
                            Enquiry Details
                          </span>
                          <h3 className="font-serif text-xl font-bold text-[#252820] mt-1">
                            {activeEnq.guestName}
                          </h3>
                          <p className="text-xs text-[#777C61] font-mono">{activeEnq.guestPhone}</p>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-[#252820] mb-1.5">
                            Update Enquiry Status
                          </label>
                          <select
                            value={activeEnq.status}
                            onChange={(e) => {
                              const newStatus = e.target.value as EnquiryStatus;
                              setEnquiries(
                                enquiries.map((item) =>
                                  item.id === activeEnq.id ? { ...item, status: newStatus } : item
                                )
                              );
                              flashMessage(`Status changed to ${newStatus}`);
                            }}
                            className="w-full bg-[#F7F4ED] border border-[#DACBB7] px-3 py-2 text-xs font-semibold text-[#252820]"
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Cancelled">Cancelled</option>
                            <option value="Completed">Completed</option>
                          </select>
                        </div>

                        <div className="space-y-3 pt-3 border-t border-[#DACBB7]/70">
                          <span className="text-xs font-semibold uppercase tracking-wider text-[#252820] block">
                            Internal Host Notes (Private)
                          </span>

                          <div className="space-y-2 max-h-48 overflow-y-auto">
                            {activeEnq.internalNotes.length === 0 ? (
                              <p className="text-xs text-[#777C61] italic">No internal notes added yet.</p>
                            ) : (
                              activeEnq.internalNotes.map((note) => (
                                <div key={note.id} className="bg-[#F7F4ED] p-2.5 border border-[#DACBB7]/60 text-xs">
                                  <p className="text-[#252820]">{note.text}</p>
                                  <span className="text-[10px] text-[#777C61] mt-1 block">
                                    By {note.author} on {note.date}
                                  </span>
                                </div>
                              ))
                            )}
                          </div>

                          <div className="space-y-2 pt-2">
                            <textarea
                              rows={2}
                              value={newNoteText}
                              onChange={(e) => setNewNoteText(e.target.value)}
                              placeholder="Add internal note (e.g. Sent advance payment QR over WhatsApp)..."
                              className="w-full bg-[#F7F4ED] border border-[#DACBB7] p-2 text-xs text-[#252820] resize-none"
                            />
                            <button
                              onClick={() => {
                                if (!newNoteText.trim()) return;
                                const updatedNotes = [
                                  ...activeEnq.internalNotes,
                                  {
                                    id: `note-${Date.now()}`,
                                    author: "Host",
                                    text: newNoteText.trim(),
                                    date: new Date().toLocaleString(),
                                  },
                                ];
                                setEnquiries(
                                  enquiries.map((item) =>
                                    item.id === activeEnq.id ? { ...item, internalNotes: updatedNotes } : item
                                  )
                                );
                                setNewNoteText("");
                                flashMessage("Internal note saved.");
                              }}
                              className="w-full bg-[#777C61] hover:bg-[#646950] text-white py-2 text-xs font-semibold uppercase tracking-wider"
                            >
                              Add Host Note
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })()
                ) : (
                  <div className="text-center py-12 text-[#777C61] text-xs">
                    Select an enquiry from the list to update status or record private notes.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: HOTEL MANAGEMENT */}
        {activeTab === "hotels" && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#252820]">
                Curated Hotel Directory
              </h2>
              <p className="text-xs text-[#777C61]">
                Manage partner and recommended properties. Commission notes are kept strictly private.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.map((hotel) => (
                <div key={hotel.id} className="bg-[#FAF7F2] border border-[#DACBB7] p-5 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#252820]">{hotel.name}</h3>
                      <span className="text-[10px] text-[#777C61] uppercase">{hotel.category}</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-[#E9DFCF] text-[#252820]">
                      {hotel.partnershipType}
                    </span>
                  </div>

                  <div className="text-xs text-[#252820] space-y-1">
                    <div><strong>Tariff:</strong> {hotel.indicativePriceRange}</div>
                    <div><strong>Location:</strong> {hotel.location}</div>
                  </div>

                  {hotel.commissionNotePrivate && (
                    <div className="bg-amber-50 p-2.5 border border-amber-200 text-[11px] text-amber-900">
                      <strong>Private Commission:</strong> {hotel.commissionNotePrivate}
                    </div>
                  )}

                  <div className="pt-2 border-t border-[#DACBB7] flex items-center justify-end">
                    <button
                      onClick={() => flashMessage(`Editing disabled in demo view for ${hotel.name}.`)}
                      className="text-xs text-[#B56B4B] font-semibold hover:underline"
                    >
                      Edit Listing
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: DESTINATIONS */}
        {activeTab === "destinations" && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#252820]">
                Attraction & Destination Management
              </h2>
              <p className="text-xs text-[#777C61]">
                Visitor information, verified entry fees, and opening hours for all 15 tourist attractions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {attractions.map((attr) => (
                <div key={attr.id} className="bg-[#FAF7F2] border border-[#DACBB7] p-5 space-y-2">
                  <span className="text-[10px] font-bold uppercase text-[#B56B4B]">{attr.category}</span>
                  <h3 className="font-serif text-base font-bold text-[#252820]">{attr.name}</h3>
                  <p className="text-xs text-[#777C61] line-clamp-2">{attr.shortDescription}</p>
                  <div className="text-[11px] text-[#252820] pt-2 border-t border-[#DACBB7]">
                    <strong>Fee:</strong> {attr.verifiedEntryFee || "Free admission"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: ITINERARIES */}
        {activeTab === "itineraries" && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#252820]">
                Curated Travel Plans
              </h2>
              <p className="text-xs text-[#777C61]">
                Sequence day-wise activities, timings, and stop recommendations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {itineraries.map((it) => (
                <div key={it.id} className="bg-[#FAF7F2] border border-[#DACBB7] p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#B56B4B]">{it.duration}</span>
                    <span className="text-[10px] font-mono bg-[#E9DFCF] px-2 py-0.5">{it.targetAudience}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#252820]">{it.title}</h3>
                  <p className="text-xs text-[#777C61]">{it.overview}</p>
                  <div className="text-xs text-[#252820] pt-2 border-t border-[#DACBB7]">
                    Days: {it.days.length} • Total Stops: {it.days.reduce((acc, d) => acc + d.stops.length, 0)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: GENERAL SETTINGS */}
        {activeTab === "settings" && (
          <div className="max-w-2xl bg-[#FAF7F2] border border-[#DACBB7] p-8 space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#252820]">
                General Platform Settings
              </h2>
              <p className="text-xs text-[#777C61]">
                Configure WhatsApp Click-to-Chat number, business email, and metadata.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#252820] mb-1">
                  WhatsApp Contact Number (No spaces, include country code)
                </label>
                <input
                  type="text"
                  value={settings.whatsappNumber}
                  onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })}
                  className="w-full bg-[#F7F4ED] border border-[#DACBB7] px-3.5 py-2 font-mono text-sm text-[#252820]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#252820] mb-1">
                  Public WhatsApp Display Text
                </label>
                <input
                  type="text"
                  value={settings.whatsappDisplayNumber}
                  onChange={(e) => setSettings({ ...settings, whatsappDisplayNumber: e.target.value })}
                  className="w-full bg-[#F7F4ED] border border-[#DACBB7] px-3.5 py-2 text-sm text-[#252820]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#252820] mb-1">
                  Official Business Email
                </label>
                <input
                  type="email"
                  value={settings.businessEmail}
                  onChange={(e) => setSettings({ ...settings, businessEmail: e.target.value })}
                  className="w-full bg-[#F7F4ED] border border-[#DACBB7] px-3.5 py-2 text-sm text-[#252820]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#252820] mb-1">
                  Brand Tagline
                </label>
                <input
                  type="text"
                  value={settings.brandTagline}
                  onChange={(e) => setSettings({ ...settings, brandTagline: e.target.value })}
                  className="w-full bg-[#F7F4ED] border border-[#DACBB7] px-3.5 py-2 text-sm text-[#252820]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#252820] mb-1">
                  Public Reference Location
                </label>
                <input
                  type="text"
                  value={settings.generalLocation}
                  onChange={(e) => setSettings({ ...settings, generalLocation: e.target.value })}
                  className="w-full bg-[#F7F4ED] border border-[#DACBB7] px-3.5 py-2 text-sm text-[#252820]"
                />
              </div>

              <div className="pt-4">
                <button
                  onClick={() => flashMessage("General settings successfully saved.")}
                  className="inline-flex items-center space-x-2 bg-[#B56B4B] hover:bg-[#9E593A] text-white py-2.5 px-6 font-semibold uppercase tracking-wider text-xs transition-colors"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Settings</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
