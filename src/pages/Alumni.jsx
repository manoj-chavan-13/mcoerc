import React, { useState } from "react";
import {
  Globe,
  Users,
  Building2,
  Linkedin,
  Home,
  Menu,
  X,
  ArrowUpRight,
  MapPin,
  GraduationCap,
} from "lucide-react";

// --- MOCK DATA ---
const ALUMNI_STORIES = [
  {
    name: "Rahul Deshmukh",
    batch: "2015 Batch",
    role: "Senior SDE at Google",
    location: "California, USA",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    quote:
      "The foundation laid at Matoshri was pivotal. The faculty's support went beyond the classroom, helping me aim for the global stage.",
  },
  {
    name: "Priya Patil",
    batch: "2018 Batch",
    role: "Data Scientist at Microsoft",
    location: "Bangalore, India",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    quote:
      "From hackathons to cultural events, the holistic development I received here was unmatched. It prepared me for the corporate world.",
  },
  {
    name: "Amit Verma",
    batch: "2012 Batch",
    role: "Founder, TechSolutions",
    location: "Pune, India",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    quote:
      "Matoshri gave me the courage to pursue entrepreneurship. The incubation center support was crucial during my early days.",
  },
  {
    name: "Sneha Gupta",
    batch: "2016 Batch",
    role: "Product Manager, Uber",
    location: "Amsterdam, Netherlands",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    quote:
      "A vibrant campus life and rigorous academics helped me build a balanced personality required for leadership roles.",
  },
];

// --- COMPONENTS ---

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-10 border-b border-slate-200 pb-4">
    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3">
      {title}
    </h2>
    {subtitle && (
      <p className="text-slate-500 text-lg font-light">{subtitle}</p>
    )}
  </div>
);

// --- MAIN COMPONENT ---

const Alumni = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 px-6 bg-slate-900 overflow-hidden">
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
          <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold mb-4 border border-amber-500/30">
            ALUMNI NETWORK
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
            Connect. Engage. Inspire.
          </h1>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
            Our alumni are our greatest strength. Join a global network of over
            5,000+ engineers making a difference in the world.
          </p>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="container mx-auto px-6 pt-16 pb-16">
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center hover:-translate-y-1 transition-transform duration-300 group">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Globe size={32} />
            </div>
            <h3 className="font-bold text-xl text-slate-900 mb-2">
              Global Presence
            </h3>
            <p className="text-slate-500">
              Alumni working in USA, UK, Germany, Japan, and Australia.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center hover:-translate-y-1 transition-transform duration-300 group">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mx-auto mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Users size={32} />
            </div>
            <h3 className="font-bold text-xl text-slate-900 mb-2">
              Mentorship
            </h3>
            <p className="text-slate-500">
              Regular alumni talks and mentorship sessions for current students.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center hover:-translate-y-1 transition-transform duration-300 group">
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Building2 size={32} />
            </div>
            <h3 className="font-bold text-xl text-slate-900 mb-2">
              Entrepreneurs
            </h3>
            <p className="text-slate-500">
              Over 50+ startups founded by our engineering graduates.
            </p>
          </div>
        </div>

        {/* Stories Section */}
        <SectionHeader
          title="Alumni Stories"
          subtitle="Hear from those who walked these halls"
        />
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {ALUMNI_STORIES.map((story, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col sm:flex-row gap-6 items-start hover:shadow-xl transition-all group"
            >
              <img
                src={story.image}
                alt={story.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-50 shadow-sm shrink-0 group-hover:scale-105 transition-transform"
              />
              <div>
                <p className="italic text-slate-600 mb-4 text-lg leading-relaxed">
                  "{story.quote}"
                </p>
                <div className="border-t border-slate-100 pt-4 mt-4">
                  <h4 className="font-bold text-slate-900 text-lg">
                    {story.name}
                  </h4>
                  <p className="text-blue-600 text-sm font-bold uppercase tracking-wide">
                    {story.role}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-slate-400">
                    <span>{story.batch}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span className="flex items-center gap-1">
                      <MapPin size={10} /> {story.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-slate-900 rounded-3xl p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Abstract Shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Are you an Alumnus?
            </h2>
            <p className="text-blue-200 text-lg mb-10 leading-relaxed">
              Join the official Matoshri Alumni Association (MAA). Reconnect
              with your batchmates, get updates on events, access job referrals,
              and give back to your alma mater.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-xl transition-colors shadow-lg shadow-amber-900/20">
                Register Now
              </button>
              <button className="px-8 py-4 bg-transparent border border-slate-600 hover:bg-slate-800 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2">
                <Linkedin size={20} /> Join LinkedIn Group
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
