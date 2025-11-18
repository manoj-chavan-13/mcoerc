import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
/* --- DATA STRUCTURE --- */
const NAV_DATA = [
  { title: "Home", path: "/" },
  {
    title: "About",
    path: "/about",
    layout: "spotlight",
    columns: [
      {
        heading: "Institution",
        links: [
          { label: "Overview", desc: "Who we are", path: "/about/overview" },
          {
            label: "Vision & Mission",
            desc: "Our goals",
            path: "/about/vision",
          },
          {
            label: "Leadership",
            desc: "Board members",
            path: "/about/governance",
          },
        ],
      },
      {
        heading: "Campus Life",
        links: [
          {
            label: "Policies",
            desc: "Student handbook",
            path: "/about/policies",
          },
          {
            label: "Facilities",
            desc: "Labs & Library",
            path: "/about/facilities",
          },
        ],
      },
    ],
  },
  {
    title: "Academics",
    path: "/academics",
    layout: "grid",
    columns: [
      {
        heading: "Computer & IT",
        links: [
          { label: "Computer Engineering", path: "/academics/comp-eng" },
          { label: "Information Technology", path: "/academics/it" },
          { label: "Electronics & Telecom (ENTC)", path: "/academics/entc" },
          { label: "Engineering Sciences", path: "/academics/eng-sci" },
        ],
      },
      {
        heading: "Core Engineering",
        links: [
          { label: "Mechanical Engineering", path: "/academics/mech" },
          { label: "Civil Engineering", path: "/academics/civil" },
          { label: "Electrical Engineering", path: "/academics/electrical" },
          { label: "Central Library", path: "/academics/library" },
        ],
      },
      {
        heading: "Advanced Studies",
        links: [
          { label: "AI & Data Science", path: "/academics/aids" },
          { label: "Master of Computer Applications", path: "/academics/mca" },
          {
            label: "Electronics & Computer Eng.",
            path: "/academics/elec-comp",
          },
        ],
      },
    ],
  },
  { title: "Admissions", path: "/admissions" },
  { title: "Contact", path: "/contact" },
  { title: "Training&Placement", path: "/t&p" },
  { title: "Alumni", path: "/alumni" },
  { title: "Gallery", path: "/gallery" },
];

const NOTICES = [
  "📢 Admissions Open for Academic Year 2025-26",
  "🏆 College ranks Top 10 in National Innovation Contest",
  "📅 Final Semester Exam Schedule released - Check Student Portal",
  "🛑 Library closed on Sunday for maintenance",
];

/* --- MAIN COMPONENT --- */
export default function ProfessionalNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // We trigger "scrolled" state slightly later now to clear the big branding row
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 140);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      {/* // <header className="w-full font-sans relative z-[100]">*}
      {/* ================================================================== *
          ROW 1: UTILITY BAR (Dark Royal)
          - Contact Info, Socials, Staff/Student Portals
      ================================================================== */}
      <div className="bg-slate-950 text-slate-400 text-[11px] font-bold tracking-wider border-b border-slate-800">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <PhoneIcon className="w-3 h-3 text-amber-500" /> +91 1234 567 890
            </span>
            <span className="w-px h-3 bg-slate-800"></span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <MailIcon className="w-3 h-3 text-amber-500" /> info@mcoerc.org
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-4 text-slate-400 uppercase">
              <a href="#" className="hover:text-white transition-colors">
                Alumni
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Staff
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Portal
              </a>
            </div>
            <div className="flex items-center gap-3 border-l border-slate-800 pl-6">
              <SocialLink type="linkedin" />
              <SocialLink type="twitter" />
              <SocialLink type="instagram" />
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================================
          ROW 2: BRANDING HEADER (White, Big, Not Sticky)
          - Massive Logo, Full Name, Accreditations
      ================================================================== */}
      {/* ==================================================================
          ROW 2: BRANDING HEADER (Massive, Autonomous, Grand)
      ================================================================== */}
      <div className="bg-white border-b border-slate-100 py-10 hidden lg:block relative z-40">
        <div className="max-w-[1600px] mx-auto px-8 xl:px-12 flex items-center justify-between gap-12">
          {/* --- LEFT SECTION: IDENTITY --- */}
          <Link to="/" className="flex items-start gap-8 group shrink-0">
            {/* 1. Massive Logo Box */}
            {/* 1. Massive Logo Box (Now with Image) */}
            <div className="relative flex items-center justify-center w-28 h-28 bg-white rounded-2xl shadow-2xl shadow-blue-900/20 border border-slate-100 group-hover:scale-105 transition-transform duration-500">
              {/* Insert your logo source here */}
              <img
                src={logo}
                alt="Matoshri College Logo"
                className="w-full h-full object-fill p-2 rounded-2xl"
              />

              {/* Decorative Gold Badge on Logo (Kept as is) */}
              <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full border-4 border-white flex items-center justify-center shadow-md z-10">
                <span className="text-white text-xs">★</span>
              </div>
            </div>

            {/* 2. Text Content */}
            <div className="flex flex-col pt-1">
              {/* Top Line: Society Name */}
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-2">
                Matoshri Education Society's
              </span>

              {/* Main Headline: College Name */}
              <h1 className="font-serif font-extrabold text-4xl xl:text-5xl text-slate-900 leading-[1.1] tracking-tight mb-2 group-hover:text-blue-900 transition-colors">
                Matoshri College of Engineering <br />
                <span className="text-slate-700">& Research Centre</span>
              </h1>

              {/* The "Autonomous" Highlight - BIG STYLE */}
              <div className="flex items-center gap-4 mt-1">
                <span className="inline-block bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent text-lg font-bold uppercase tracking-widest border-b-2 border-amber-500/30 pb-1">
                  An Autonomous Institute
                </span>
                <span className="hidden xl:inline-block h-1 w-1 rounded-full bg-slate-300"></span>
                <p className="font-medium text-slate-500 text-sm flex items-center gap-1.5">
                  <MapPinIcon className="w-4 h-4 text-slate-400" />
                  Eklahare, Nashik
                </p>
              </div>
            </div>
          </Link>

          {/* --- RIGHT SECTION: AUTHORITY & CODES --- */}
          <div className="flex flex-col items-end gap-5 shrink-0">
            {/* DTE Code Block (Very Professional) */}
            <div className="flex items-center gap-4 bg-slate-50 px-6 py-3 rounded-xl border border-slate-100">
              <div className="text-right">
                <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-[0.2em]">
                  DTE Code
                </p>
                <p className="text-3xl font-serif font-bold text-blue-900 leading-none">
                  5109
                </p>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div className="text-left">
                <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-[0.2em]">
                  Est.
                </p>
                <p className="text-3xl font-serif font-bold text-slate-700 leading-none">
                  2009
                </p>
              </div>
            </div>

            {/* Accreditation Badges (Grid Layout for neatness) */}
            <div className="grid grid-cols-2 gap-x-3 gap-y-2">
              <Badge color="blue">
                NAAC <strong>A++</strong> Accredited
              </Badge>
              <Badge color="green">ISO 9001:2015 Certified</Badge>
              <Badge color="amber">NBA Accredited</Badge>
              <Badge color="slate">Affiliated to SPPU, Pune</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================================
          ROW 3: NAVIGATION BAR (Sticky, Royal Blue)
          - This sticks to the top.
          - Contains Links and a "Mini Logo" that appears on scroll.
      ================================================================== */}
      <div
        className={`sticky top-0 w-full z-50 transition-all duration-500 shadow-xl ${
          isScrolled
            ? "bg-blue-950/95 backdrop-blur-md py-0"
            : "bg-blue-900 py-0"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-14">
            {/* 3A: MINI LOGO (Visible ONLY when scrolled) */}
            <Link
              to="/"
              className={`flex items-center gap-3 transition-all duration-500 ${
                isScrolled
                  ? "opacity-100 w-auto translate-x-0"
                  : "opacity-0 w-0 -translate-x-10 overflow-hidden"
              }`}
            >
              <div className="w-8 h-8  text-blue-900 rounded-2xl flex items-center justify-center font-serif font-bold text-lg shadow-lg">
                <img
                  src={logo}
                  alt="Matoshri College Logo"
                  className="w-full h-full object-fill rounded-2xl"
                />

                {/* Decorative Gold Badge on Logo (Kept as is) */}
              </div>
              <span className="font-bold text-white text-lg hidden xl:block">
                MCOERC
              </span>
            </Link>

            {/* 3B: DESKTOP MENU LINKS */}
            <nav
              className={`hidden lg:flex items-center gap-1 h-full transition-all duration-500 ${
                isScrolled ? "ml-8" : "mx-auto"
              }`}
            >
              {NAV_DATA.map((item) => (
                <DesktopNavItem
                  key={item.title}
                  item={item}
                  currentPath={location.pathname}
                />
              ))}
            </nav>

            {/* 3C: ACTIONS */}
            <div className="flex items-center gap-4">
              <button className="hidden lg:flex items-center justify-center w-8 h-8 text-blue-200 hover:text-white hover:bg-white/10 rounded-full transition-all">
                <SearchIcon className="w-4 h-4" />
              </button>
              <Link
                to="/apply"
                className="bg-amber-500 hover:bg-amber-600 text-white text-[11px] font-bold uppercase tracking-widest px-6 py-2 rounded-full shadow-lg shadow-amber-900/20 transition-all transform hover:-translate-y-0.5"
              >
                Apply Now
              </Link>
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-white"
              >
                <MenuIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================================
          ROW 4: NOTICE TICKER
          - Attached to the bottom of the nav
      ================================================================== */}
      <div className="bg-slate-100 border-b border-slate-200 h-8 flex relative overflow-hidden">
        <div className="bg-slate-800 text-white px-6 flex items-center gap-2 z-10">
          <BellIcon className="w-3 h-3 text-amber-400 animate-pulse" />
          <span className="text-[9px] font-bold uppercase tracking-widest">
            Latest News
          </span>
          {/* Triangle for visual flair */}
          <div className="absolute right-[-12px] top-0 w-0 h-0 border-t-[32px] border-t-slate-800 border-r-[12px] border-r-transparent"></div>
        </div>
        <div className="flex-1 flex items-center overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex gap-12 pl-8">
            {[...NOTICES, ...NOTICES].map((notice, i) => (
              <span
                key={i}
                className="text-[11px] font-bold text-slate-600 flex items-center gap-2 cursor-pointer hover:text-blue-700 transition-colors"
              >
                <span className="w-1 h-1 rounded-full bg-amber-500"></span>
                {notice}
              </span>
            ))}
          </div>
        </div>
      </div>

      <MobileDrawer
        isOpen={mobileOpen}
        close={() => setMobileOpen(false)}
        navData={NAV_DATA}
        currentPath={location.pathname}
      />
    </>
  );
}

/* --- DESKTOP NAV ITEM (Dark Theme for Row 3) --- */
function DesktopNavItem({ item, currentPath }) {
  const isActive =
    currentPath === item.path ||
    (item.columns &&
      item.columns.some((col) =>
        col.links.some((l) => l.path === currentPath)
      ));

  return (
    <div className="group relative h-full flex items-center px-2">
      <Link
        to={item.path}
        className={`
          relative px-3 py-2 text-[12px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1 rounded-lg
          ${
            isActive
              ? "text-white bg-white/10"
              : "text-blue-100 hover:text-white hover:bg-white/5"
          }
        `}
      >
        {item.title}
        {item.columns && (
          <ChevronDown className="w-3 h-3 opacity-50 group-hover:translate-y-0.5 transition-transform" />
        )}
      </Link>

      {/* MEGA MENU 
        Note: Because the parent Row 3 is Sticky, we position this carefully.
        Using 'fixed' strategy or clever absolute positioning.
      */}
      {item.columns && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto min-w-max">
          <div className="bg-white rounded-lg shadow-2xl border-t-4 border-amber-500 overflow-hidden">
            <div className="flex">
              {/* MENU COLUMNS */}
              <div
                className={`p-8 grid ${
                  item.layout === "spotlight"
                    ? "grid-cols-2 w-[500px] gap-10"
                    : "grid-cols-3 w-[800px] gap-8"
                } bg-white`}
              >
                {item.columns.map((col, idx) => (
                  <div key={idx} className="space-y-4">
                    <h4 className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-widest pb-2 border-b border-slate-100">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          idx === 0 ? "bg-blue-600" : "bg-amber-500"
                        }`}
                      ></span>
                      {col.heading}
                    </h4>
                    <ul className="space-y-2">
                      {col.links.map((link) => (
                        <li key={link.path}>
                          <Link to={link.path} className="group/link block">
                            <div className="text-sm font-bold text-slate-600 group-hover/link:text-blue-700 transition-colors flex items-center gap-2">
                              <ChevronRight className="w-3 h-3 text-slate-300 group-hover/link:text-amber-500 transition-colors" />
                              {link.label}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* SPOTLIGHT SIDEBAR */}
              {item.layout === "spotlight" && (
                <div className="w-[260px] bg-slate-50 border-l border-slate-100 p-6 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">
                      In Focus
                    </h4>
                    <h3 className="font-serif font-bold text-xl text-slate-900 mb-2">
                      Research & Innovation
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                      Discover how our students are solving real-world problems.
                    </p>
                    <Link
                      to="/research"
                      className="text-xs font-bold text-blue-700 uppercase tracking-wide flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Read More <ArrowRightIcon className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="w-full h-32 bg-slate-200 rounded-lg mt-4 overflow-hidden relative">
                    <img
                      src="/api/placeholder/400/300"
                      alt="Research"
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* --- MOBILE DRAWER (Same as before) --- */
function MobileDrawer({ isOpen, close, navData, currentPath }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-slate-900/80 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
      />
      <div
        className={`fixed inset-y-0 right-0 z-[70] w-[320px] bg-white shadow-2xl transform transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <span className="font-serif font-bold text-xl text-slate-900">
            Menu
          </span>
          <button
            onClick={close}
            className="p-2 hover:bg-white rounded-full text-slate-500 transition-colors hover:text-red-500 shadow-sm"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100%-80px)] p-6">
          <div className="space-y-6">
            {navData.map((item) => (
              <div key={item.title}>
                <Link
                  to={item.path}
                  onClick={!item.columns ? close : undefined}
                  className={`text-lg font-bold flex items-center justify-between ${
                    currentPath === item.path
                      ? "text-blue-900"
                      : "text-slate-700"
                  }`}
                >
                  {item.title}
                </Link>
                {item.columns && (
                  <div className="mt-3 pl-4 border-l-2 border-slate-100 space-y-4">
                    {item.columns.map((col, i) => (
                      <div key={i}>
                        <h5 className="text-[10px] font-bold text-slate-400 uppercase mb-2">
                          {col.heading}
                        </h5>
                        <div className="flex flex-col gap-2">
                          {col.links.map((l) => (
                            <Link
                              key={l.path}
                              to={l.path}
                              onClick={close}
                              className="text-sm font-medium text-slate-600 hover:text-blue-900"
                            >
                              {l.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* --- HELPER COMPONENTS --- */
const Badge = ({ color, children }) => {
  const colors = {
    blue: "bg-blue-50 text-blue-800 border-blue-200",
    green: "bg-green-50 text-green-800 border-green-200",
    amber: "bg-amber-50 text-amber-800 border-amber-200",
    slate: "bg-slate-50 text-slate-800 border-slate-200",
  };
  return (
    <span
      className={`px-2 py-0.5 border rounded text-[10px] font-bold uppercase tracking-wide ${colors[color]}`}
    >
      {children}
    </span>
  );
};

/* --- ICONS --- */
const ChevronDown = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);
const ChevronRight = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);
const MenuIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);
const CloseIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);
const PhoneIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const MailIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const MapPinIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const BellIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);
const SearchIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);
const ArrowRightIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);
const SocialLink = ({ type }) => {
  const icons = {
    linkedin: (
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
    ),
    twitter: (
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    ),
    instagram: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </>
    ),
  };
  return (
    <svg
      className="w-3.5 h-3.5 text-slate-500 hover:text-white transition-colors cursor-pointer"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[type]}
    </svg>
  );
};
