import React, { useState } from "react";
import {
  BookOpen,
  Wifi,
  Coffee,
  Bus,
  Dumbbell,
  Home,
  Search,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

// --- MOCK DATA ---
const FACILITIES_DATA = [
  {
    id: "library",
    title: "Central Library",
    desc: "A knowledge hub with over 50,000+ books, international journals, and a digital e-library section. The reading hall is open 24/7 during exams.",
    icon: BookOpen,
    stats: "50k+ Books",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "hostel",
    title: "Student Hostels",
    desc: "Separate, secure, and well-furnished hostels for boys and girls with 24/7 security, hot water, and hygienic mess facilities within the campus.",
    icon: Home,
    stats: "1200+ Capacity",
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "transport",
    title: "Transportation",
    desc: "A fleet of 20+ buses covering all major routes in Nashik city, Sinnar, and surrounding areas ensuring safe and timely commute.",
    icon: Bus,
    stats: "City-wide Coverage",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "gym",
    title: "Sports & Gym",
    desc: "State-of-the-art gymnasium with modern equipment and expansive playgrounds for cricket, football, volleyball, and indoor games.",
    icon: Dumbbell,
    stats: "Indoor & Outdoor",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "wifi",
    title: "Campus Wi-Fi",
    desc: "High-speed internet connectivity (100 Mbps Leased Line) across the campus to facilitate digital learning and research.",
    icon: Wifi,
    stats: "100 Mbps+",
    image:
      "https://images.unsplash.com/photo-1563770095-39d468f9583d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "canteen",
    title: "Cafeteria",
    desc: "Hygienic and spacious cafeteria serving nutritious and delicious food at affordable rates. A perfect place for students to unwind.",
    icon: Coffee,
    stats: "Hygienic Food",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
  },
];

// --- MAIN COMPONENT ---

const Facilities = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      {/* Navigation */}
      {/* Hero Section - Blue Theme */}
      <div className="relative pt-32 pb-24 px-6 bg-blue-950 overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="container mx-auto relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-800/50 text-blue-200 text-sm font-bold mb-4 border border-blue-700">
            INFRASTRUCTURE
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
            World Class Facilities
          </h1>
          <p className="text-xl text-blue-100/80 font-light max-w-2xl mx-auto">
            An environment designed to inspire. Explore our 45-acre lush green
            campus equipped with modern amenities.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES_DATA.map((facility) => (
            <div
              key={facility.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Area */}
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-900 z-20 shadow-sm">
                  {facility.stats}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <facility.icon size={24} />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {facility.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                  {facility.desc}
                </p>
                <button className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* IT Infrastructure Strip */}
        <div className="mt-24 bg-blue-50 rounded-3xl border border-blue-100 p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-sm">
          {/* Decorative Blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl font-serif font-bold text-blue-900 mb-4">
              Digital Campus Initiative
            </h3>
            <p className="text-blue-800/80 text-lg leading-relaxed mb-8">
              We are a fully digital campus with 1000+ computers, centralized
              ERP system for student management, smart classrooms with
              projectors, and a digital library accessible from anywhere.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
              View IT Policy
            </button>
          </div>

          <div className="flex gap-6 relative z-10">
            <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-sm min-w-[120px] border border-blue-100">
              <Wifi className="text-blue-500 mb-3" size={32} />
              <span className="font-bold text-slate-900">Wi-Fi 6</span>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-sm min-w-[120px] border border-blue-100">
              <Search className="text-blue-500 mb-3" size={32} />
              <span className="font-bold text-slate-900">e-Library</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
