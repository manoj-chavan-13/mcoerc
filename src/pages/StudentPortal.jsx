import React, { useState } from "react";
import {
  LogIn,
  Gauge,
  User,
  CreditCard,
  CheckCircle,
  AlertTriangle,
  Receipt,
  Download,
  Calendar,
  DollarSign,
  Phone,
  FileText,
  Layers,
  ChevronRight,
  Menu,
  X,
  BookOpen,
  Shield,
  MapPin,
  Mail,
  Home,
  Users,
  BookOpenText,
  LayoutDashboard, // New Icon for clearer dashboard identity
} from "lucide-react";

import LOGO_URL from "/logo.png";
// --- Configuration & Mock Data (Unchanged) ---

const MOCK_STUDENT = {
  prn: "1313",
  mobile: "1313",
  name: "Manoj Chavan",
  department: "Information Technology",
  year: "Third Year (TE)",
  totalFees: 95000,
  paidFees: 75000,
  pendingFees: 20000,
  email: "manojchavan@matoshri.edu.in",
};

const MOCK_TRANSACTIONS = [
  {
    id: "T20250915A",
    date: "Sep 15, 2025",
    amount: 40000,
    type: "Tuition Fee - Ist Installment",
    status: "Paid",
  },
  {
    id: "T20250801B",
    date: "Aug 01, 2025",
    amount: 35000,
    type: "Admission Fee & Caution Deposit",
    status: "Paid",
  },
  {
    id: "T20240901C",
    date: "Sep 01, 2024",
    amount: 90000,
    type: "Full Fees (SE Academic Year)",
    status: "Paid",
  },
];

const navItems = [
  { name: "Dashboard", icon: Home, view: "dashboard" },
  { name: "Fees & Receipts", icon: Receipt, view: "transactions" },
  {
    name: "Documents",
    icon: FileText,
    action: () => alert("Document download initiated."),
  },
  {
    name: "Academic Portal",
    icon: BookOpenText,
    action: () => alert("Redirecting to Academic portal."),
  },
  {
    name: "Grievance Portal",
    icon: Layers,
    action: () => alert("Student Grievance form opened."),
  },
];

// --- Reusable Components (Refined Typography in InfoItem) ---

const InfoItem = ({ label, value, mono = false, bold = false }) => (
  <div className="text-slate-600 space-y-0.5">
    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
      {label}
    </p>
    <p
      className={`text-slate-900 ${mono ? "font-mono text-lg" : "text-lg"} ${
        bold ? "font-bold" : "font-medium"
      }`}
    >
      {value}
    </p>
  </div>
);

// Simplified TopNavBar (Only for mobile view)
const TopNavBar = ({ setIsSidebarOpen }) => (
  <nav className="bg-white shadow-md sticky top-0 z-50 lg:hidden border-b border-slate-100">
    <div className="flex items-center justify-between h-16 px-4">
      <div className="flex items-center shrink-0">
        <img
          className="w-8 h-8 rounded-md border-2 border-[#0B1C3E]"
          src={LOGO_URL}
          alt="MES Logo"
        />
        <h1 className="text-xl font-serif font-extrabold text-[#0B1C3E] ml-3">
          MES Portal
        </h1>
      </div>
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-amber-500 hover:bg-slate-100 focus:outline-none"
      >
        <Menu size={24} />
      </button>
    </div>
  </nav>
);

// SideBar Component (Unchanged)
const SideBar = ({
  activeView,
  setActiveView,
  logout,
  student,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const NavButton = ({ item }) => {
    const isCurrent = activeView === item.view;
    const onClickHandler = item.view
      ? () => {
          setActiveView(item.view);
          setIsSidebarOpen(false);
        }
      : item.action;

    const classes = `w-full text-left flex items-center gap-3 p-3 rounded-xl font-bold transition-all duration-200 ${
      isCurrent
        ? "bg-amber-500 text-[#0B1C3E] shadow-lg"
        : "text-slate-300 hover:bg-blue-700/50 hover:text-white"
    }`;
    return (
      <button onClick={onClickHandler} className={classes}>
        <item.icon size={20} /> <span className="text-base">{item.name}</span>
      </button>
    );
  };

  return (
    <>
      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Sidebar Panel (Fixed for Desktop, Slide-in for Mobile) */}
      <div
        className={`
                fixed inset-y-0 left-0 z-50
                w-64 bg-[#0B1C3E]
                shadow-2xl border-r border-amber-500/50
                lg:translate-x-0 transition-transform duration-300
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                lg:sticky lg:top-0 lg:h-screen overflow-y-auto
            `}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Header/Close Button (Mobile) */}
          <div className="flex justify-between items-center mb-10 lg:hidden">
            <h3 className="text-2xl font-serif font-extrabold text-white">
              Navigation
            </h3>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-white p-1 hover:bg-blue-700/50 rounded-full"
            >
              <X size={24} />
            </button>
          </div>

          {/* Logo/Branding (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 pb-8 border-b border-blue-700 mb-8">
            <img
              className="w-12 h-12 rounded-lg"
              src={LOGO_URL}
              alt="MES Logo"
            />
            <span className="text-xl font-serif font-extrabold text-white">
              MES Portal
            </span>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3 flex-grow">
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">
              Menu
            </p>
            {navItems.map((item) => (
              <NavButton key={item.name} item={item} />
            ))}
          </div>

          {/* Student Info & Logout at the bottom of the sidebar */}
          <div className="mt-8 pt-6 border-t border-blue-700">
            <p className="text-sm font-medium text-slate-300 mb-3">
              <User size={16} className="inline mr-2 text-amber-500" />
              Welcome,{" "}
              <span className="font-bold text-white">
                {student.name.split(" ")[0]}
              </span>
            </p>
            <button
              onClick={logout}
              className="w-full text-left flex items-center gap-3 p-3 rounded-xl font-bold text-red-400 hover:bg-red-900/50 transition-colors"
            >
              <LogIn size={20} /> Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// --- Fee Receipt Component (Unchanged, but uses updated styling) ---
const FeeReceipt = ({ transaction, student }) => {
  const finalAmountInWords = "Rupees Forty Thousand Only";

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="receipt-print-area"
      className="bg-white p-6 md:p-12 rounded-2xl shadow-2xl max-w-4xl mx-auto border-4 border-slate-100 print:shadow-none print:border-none font-sans"
    >
      <div className="flex justify-between items-start border-b-4 border-amber-500 pb-4 mb-8">
        <div className="flex items-center gap-4">
          <img
            src={LOGO_URL}
            alt="MES Logo"
            className="w-16 h-16 object-contain shadow-md rounded-lg"
          />
          <div className="text-left">
            <h2 className="text-2xl font-serif font-extrabold text-[#0B1C3E] leading-tight">
              Matoshri College of Engineering
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Eklahare, Nashik, Maharashtra | **Knowledge, Perspective,
              Understanding**
            </p>
          </div>
        </div>
        <div className="text-right shrink-0">
          <h1 className="text-4xl font-extrabold text-blue-800 font-serif">
            RECEIPT
          </h1>
          <p className="text-sm font-medium text-slate-600 mt-1">
            Ref No:{" "}
            <span className="font-mono font-bold text-[#0B1C3E]">
              {transaction.id}
            </span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8 text-sm text-slate-700">
        <div>
          <p className="mb-1">
            <strong className="text-[#0B1C3E]">Student Name:</strong>{" "}
            <span className="text-slate-900 font-medium">{student.name}</span>
          </p>
          <p className="mb-1">
            <strong className="text-[#0B1C3E]">PRN:</strong>{" "}
            <span className="font-mono text-slate-900 font-bold">
              {student.prn}
            </span>
          </p>
          <p>
            <strong className="text-[#0B1C3E]">Department:</strong>{" "}
            <span className="text-slate-900 font-medium">
              {student.department}
            </span>
          </p>
        </div>
        <div>
          <p className="mb-1">
            <strong className="text-[#0B1C3E]">Date of Payment:</strong>{" "}
            <span className="text-slate-900 font-medium">
              {transaction.date}
            </span>
          </p>
          <p className="mb-1">
            <strong className="text-[#0B1C3E]">Academic Year:</strong>{" "}
            <span className="text-slate-900 font-medium">2025 - 2026</span>
          </p>
          <p>
            <strong className="text-[#0B1C3E]">Payment Mode:</strong>{" "}
            <span className="text-slate-900 font-medium">Online (Gateway)</span>
          </p>
        </div>
      </div>

      <div className="mb-8">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-amber-500 text-[#0B1C3E] text-sm uppercase font-extrabold border-b-2 border-blue-900">
              <th className="p-4 rounded-tl-lg">Description</th>
              <th className="p-4 text-right rounded-tr-lg">Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-200">
              <td className="p-4 font-medium text-slate-800">
                {transaction.type}
              </td>
              <td className="p-4 text-right font-medium text-slate-800">
                {transaction.amount.toLocaleString("en-IN")}
              </td>
            </tr>
            <tr className="bg-blue-50/70 border-t-2 border-blue-300 font-bold text-slate-900">
              <td className="p-4 text-lg">TOTAL AMOUNT PAID</td>
              <td className="p-4 text-right text-xl text-amber-700">
                ₹ {transaction.amount.toLocaleString("en-IN")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-slate-100 text-slate-900 p-5 rounded-xl shadow-inner mb-10 border border-slate-200">
        <p className="text-sm font-light opacity-80">Amount in Words:</p>
        <p className="text-xl font-bold italic">{finalAmountInWords}</p>
      </div>

      <div className="flex justify-between items-end text-xs text-slate-600 pt-4">
        <div className="max-w-xs">
          <p className="font-bold text-sm">
            Transaction Status: <span className="text-green-600">SUCCESS</span>
          </p>
          <p className="mt-3 text-slate-400">
            Note: This is a computer-generated receipt. Please retain this copy
            for your records.
          </p>
        </div>
        <div className="text-center">
          <img
            src="https://placehold.co/120x50/0B1C3E/ffffff?text=DIGITAL+SEAL"
            alt="Digital Seal"
            className="mx-auto mb-2 opacity-70"
          />
          <p className="font-bold text-slate-800 border-t border-slate-300 pt-1">
            Authorised Signatory
          </p>
        </div>
      </div>

      <div className="mt-10 text-center print:hidden">
        <button
          onClick={handlePrint}
          className="px-10 py-4 bg-[#0B1C3E] text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/50 flex items-center gap-3 mx-auto"
        >
          <Download size={20} /> Download / Print Receipt
        </button>
      </div>
    </div>
  );
};

// --- 💥 REDESIGNED DASHBOARD COMPONENT 💥 ---

const Dashboard = ({ student, transactions, logout }) => {
  const [activeView, setActiveView] = useState("dashboard");
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Conditionally render the Receipt View (Full Page)
  if (activeView === "receipt" && selectedReceipt) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans">
        {/* Simplified Nav/Header for print-friendly view */}
        <div className="bg-white p-4 shadow-sm print:hidden">
          <button
            onClick={() => {
              setActiveView("transactions");
              setSelectedReceipt(null);
            }}
            className="text-amber-600 font-medium flex items-center gap-1 hover:text-amber-800 transition-colors"
          >
            <ChevronRight size={16} className="transform rotate-180" /> Back to
            Fees & Receipts
          </button>
        </div>
        <div className="space-y-6 container mx-auto px-4 py-8 max-w-7xl">
          <FeeReceipt transaction={selectedReceipt} student={student} />
        </div>
      </div>
    );
  }

  // Main Dashboard/Transaction View
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <SideBar
        activeView={activeView}
        setActiveView={setActiveView}
        logout={logout}
        student={student}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="flex-grow">
        <TopNavBar setIsSidebarOpen={setIsSidebarOpen} />

        <div className="max-w-7xl mx-auto p-4 md:p-8">
          <div className="space-y-12">
            {/* Header/Greeting - Clean White/Pattern Banner */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden">
              <h1 className="text-4xl font-serif font-extrabold tracking-tight text-[#0B1C3E]">
                <span className="text-amber-500">
                  {activeView === "dashboard" ? "Dashboard" : "Fees & History"}
                </span>
              </h1>
              <p className="mt-2 text-lg text-slate-600">
                Welcome,{" "}
                <span className="font-extrabold text-amber-600">
                  {student.name}
                </span>
                ! Manage your student affairs efficiently.
              </p>
            </div>

            {/* --- DASHBOARD VIEW --- */}
            {activeView === "dashboard" && (
              <div className="animate-in fade-in duration-500 space-y-10">
                <h2 className="text-2xl font-serif font-bold text-slate-900 border-b border-slate-200 pb-2 flex items-center gap-2">
                  <LayoutDashboard size={24} className="text-amber-600" /> Fees
                  & Academic Status
                </h2>

                {/* NEW ASYMMETRIC LAYOUT: 1/3 Paid | 2/3 Total/Pending/Actions */}
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* 1. HERO CARD: AMOUNT PAID (Takes up 1/3 or full width on mobile) */}
                  <div className="bg-[#0B1C3E] text-white p-8 rounded-2xl shadow-2xl border border-blue-700 lg:col-span-1 flex flex-col justify-between">
                    <div>
                      <p className="text-lg uppercase font-semibold opacity-80 mb-2 flex items-center gap-2">
                        <CheckCircle size={28} className="text-amber-500" />{" "}
                        Current Year Fees Paid
                      </p>
                    </div>
                    <p className="text-5xl md:text-6xl font-extrabold mt-4 text-amber-500 tracking-tight">
                      ₹ {student.paidFees.toLocaleString("en-IN")}
                    </p>
                    <p className="text-sm opacity-60 mt-4">
                      As of{" "}
                      {new Date().toLocaleDateString("en-IN", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  {/* 2. SECONDARY CARDS (Takes up 2/3) */}
                  <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Total Fees */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-shadow">
                      <p className="text-sm uppercase font-semibold text-slate-500 mb-2 flex items-center gap-2">
                        <DollarSign size={20} className="text-blue-500" /> Total
                        Fees Applicable
                      </p>
                      <p className="text-4xl font-extrabold text-[#0B1C3E] mt-2">
                        ₹ {student.totalFees.toLocaleString("en-IN")}
                      </p>
                    </div>

                    {/* Amount Pending (Highlight) */}
                    <div
                      className={`p-6 rounded-2xl shadow-lg border flex flex-col justify-between ${
                        student.pendingFees > 0
                          ? "bg-red-50 border-red-300"
                          : "bg-green-50 border-green-300"
                      }`}
                    >
                      <p className="text-sm uppercase font-semibold text-slate-500 mb-2 flex items-center gap-2">
                        <AlertTriangle
                          size={20}
                          className={
                            student.pendingFees > 0
                              ? "text-red-600"
                              : "text-green-600"
                          }
                        />{" "}
                        Amount Pending
                      </p>
                      <p
                        className={`text-4xl font-extrabold mt-2 ${
                          student.pendingFees > 0
                            ? "text-red-900"
                            : "text-green-700"
                        }`}
                      >
                        ₹ {student.pendingFees.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Action Banner (Full Width) */}
                {student.pendingFees > 0 ? (
                  <div className="mt-8 bg-red-100 p-6 rounded-xl border border-red-400 flex flex-col sm:flex-row justify-between items-center shadow-lg">
                    <p className="font-bold text-xl text-red-900 flex items-center gap-3 mb-3 sm:mb-0">
                      <AlertTriangle
                        size={24}
                        className="text-red-700 shrink-0"
                      />
                      **Urgent Action:** Outstanding balance of{" "}
                      <span className="text-red-700 font-extrabold">
                        ₹ {student.pendingFees.toLocaleString("en-IN")}
                      </span>{" "}
                      is due.
                    </p>
                    <button
                      onClick={() => setActiveView("transactions")}
                      className="px-8 py-3 bg-amber-500 text-[#0B1C3E] font-bold rounded-xl hover:bg-amber-600 transition-all shadow-md flex items-center gap-2 whitespace-nowrap"
                    >
                      <CreditCard size={18} /> Proceed to Pay
                    </button>
                  </div>
                ) : (
                  <div className="mt-8 bg-green-100 p-6 rounded-xl border border-green-400 flex justify-center items-center shadow-lg">
                    <p className="font-bold text-xl text-green-900 flex items-center gap-2">
                      <CheckCircle
                        size={24}
                        className="text-green-700 shrink-0"
                      />
                      All fees cleared for the current academic year! 🎉
                    </p>
                  </div>
                )}

                {/* Student Info Card (Remains clean and structured) */}
                <h2 className="text-2xl font-serif font-bold text-slate-900 border-b border-slate-200 pb-2 pt-4 flex items-center gap-2">
                  <Users size={24} className="text-amber-600" /> Personal
                  Profile Details
                </h2>
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                  <div className="grid md:grid-cols-3 gap-8 text-slate-700">
                    <InfoItem label="Full Name" value={student.name} bold />
                    <InfoItem
                      label="PRN Number"
                      value={student.prn}
                      mono
                      bold
                    />
                    <InfoItem label="Current Year" value={student.year} />
                    <InfoItem label="Department" value={student.department} />
                    <InfoItem label="Email" value={student.email} />
                    <InfoItem label="Mobile" value={student.mobile} />
                  </div>
                </div>
              </div>
            )}

            {/* --- TRANSACTIONS VIEW (Receipts Table - Unchanged for functionality) --- */}
            {activeView === "transactions" && (
              <div className="animate-in fade-in duration-500">
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3 flex items-center gap-2">
                  <Receipt size={24} className="text-amber-600" /> Fees History
                  & Receipts
                </h2>

                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-x-auto">
                  <table className="min-w-full text-left">
                    <thead>
                      <tr className="bg-[#0B1C3E] text-white border-b-2 border-amber-500">
                        <th className="p-4 text-xs font-bold uppercase tracking-wider rounded-tl-xl">
                          Transaction ID
                        </th>
                        <th className="p-4 text-xs font-bold uppercase tracking-wider">
                          Date
                        </th>
                        <th className="p-4 text-xs font-bold uppercase tracking-wider">
                          Description
                        </th>
                        <th className="p-4 text-xs font-bold uppercase tracking-wider text-right">
                          Amount (₹)
                        </th>
                        <th className="p-4 text-xs font-bold uppercase tracking-wider text-center">
                          Status
                        </th>
                        <th className="p-4 text-xs font-bold uppercase tracking-wider text-center rounded-tr-xl">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((t) => (
                        <tr
                          key={t.id}
                          className="border-b border-slate-100 hover:bg-blue-50/50 transition-colors"
                        >
                          <td className="p-4 font-medium text-slate-800 font-mono text-base">
                            {t.id}
                          </td>
                          <td className="p-4 text-base text-slate-600 flex items-center gap-2">
                            <Calendar size={16} className="text-amber-500" />{" "}
                            {t.date}
                          </td>
                          <td className="p-4 text-base text-slate-600 font-medium">
                            {t.type}
                          </td>
                          <td className="p-4 font-bold text-right text-green-700 text-lg">
                            ₹ {t.amount.toLocaleString("en-IN")}
                          </td>
                          <td className="p-4 text-center">
                            <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full">
                              <CheckCircle size={14} /> Paid
                            </span>
                          </td>
                          <td className="p-4 text-center">
                            <button
                              onClick={() => {
                                setSelectedReceipt(t);
                                setActiveView("receipt");
                              }}
                              className="text-blue-600 hover:text-blue-800 text-base font-bold flex items-center gap-1 mx-auto transition-colors"
                            >
                              <Receipt size={18} /> View Receipt
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Login Screen & App Container (Simplified) ---
const LoginScreen = ({ login }) => {
  // ... LoginScreen implementation remains for completeness ...
  const [prn, setPrn] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (prn === MOCK_STUDENT.prn && mobile === MOCK_STUDENT.mobile) {
      login();
    } else {
      setTimeout(() => {
        setError(
          "Invalid PRN or Registered Mobile Number. Please check your credentials."
        );
      }, 500);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 p-6 font-sans">
      <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 w-full max-w-md border-t-8 border-[#0B1C3E] transform hover:shadow-3xl transition-all duration-300">
        <div className="text-center mb-10">
          <img
            src={LOGO_URL}
            alt="MES Logo"
            className="w-20 h-20 object-contain mx-auto mb-4 shadow-xl rounded-xl border-2 border-amber-500"
          />
          <h1 className="text-3xl font-serif font-extrabold text-[#0B1C3E]">
            Student Access Portal
          </h1>
          <p className="text-slate-500 mt-2 text-md">
            Login with your registered credentials for seamless access.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              PRN (Permanent Registration Number)
            </label>
            <div className="relative">
              <input
                type="text"
                value={prn}
                onChange={(e) => setPrn(e.target.value)}
                placeholder="e.g., 1150001001"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all text-slate-900 placeholder-slate-400 pl-12 shadow-sm"
              />
              <User
                size={20}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Mobile Number
            </label>
            <div className="relative">
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Registered Mobile Number"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all text-slate-900 placeholder-slate-400 pl-12 shadow-sm"
              />
              <Phone
                size={20}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
              />
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl text-sm font-medium flex items-start gap-2">
              <AlertTriangle size={18} className="shrink-0 mt-0.5" /> {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-[#0B1C3E] font-extrabold rounded-xl transition-all duration-300 shadow-xl shadow-amber-300/70 flex items-center justify-center gap-2 text-lg uppercase tracking-wider"
          >
            <LogIn size={20} /> Access Dashboard
          </button>
        </form>

        <p className="text-center text-xs text-slate-400 mt-8 pt-4 border-t border-slate-100">
          <Shield size={12} className="inline mr-1 mb-0.5" /> This is a secure
          portal. Contact IT support for assistance.
        </p>
      </div>
    </div>
  );
};

// Footer Component (Unchanged)
const Footer = () => (
  <footer className="bg-slate-900 text-white pt-12 pb-6 border-t border-amber-500/50">
    <div className="text-center text-xs text-slate-500">
      &copy; {new Date().getFullYear()} Matoshri Education Society. All Rights
      Reserved. | Designed for Professional Student Access.
    </div>
  </footer>
);

// Main App Container (Unchanged)
const StudentPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("You have been successfully logged out.");
  };

  return (
    <div className="font-sans">
      {isLoggedIn ? (
        <Dashboard
          student={MOCK_STUDENT}
          transactions={MOCK_TRANSACTIONS}
          logout={handleLogout}
        />
      ) : (
        <LoginScreen login={handleLogin} />
      )}
      <Footer />
    </div>
  );
};

export default StudentPortal;
