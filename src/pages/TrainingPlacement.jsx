import React from "react";
import {
  Briefcase,
  Building2,
  Users,
  TrendingUp,
  Award,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Home,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

// --- MOCK DATA ---
const RECRUITERS = [
  { name: "TCS Digital", logo: "TCS" },
  { name: "Infosys", logo: "INF" },
  { name: "Capgemini", logo: "CAP" },
  { name: "Wipro", logo: "WIP" },
  { name: "Cognizant", logo: "CTS" },
  { name: "Accenture", logo: "ACN" },
  { name: "Jio", logo: "JIO" },
  { name: "Amazon", logo: "AMZ" },
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

const StatCard = ({ icon: Icon, value, label, color = "blue" }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center gap-5 group">
    <div
      className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform bg-gradient-to-br from-${color}-500 to-${color}-700`}
    >
      <Icon size={28} />
    </div>
    <div>
      <h4 className="text-3xl font-bold text-slate-900">{value}</h4>
      <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">
        {label}
      </p>
    </div>
  </div>
);

// --- MAIN COMPONENT ---

const TrainingPlacement = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      {/* Navigation (Simplified for Standalone Page) */}

      {/* Hero Section */}
      <div className="relative pt-32 pb-24 px-6 bg-gradient-to-br from-slate-900 to-blue-950 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="container mx-auto relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-200 text-sm font-bold mb-4 border border-blue-500/30">
            CAREER DEVELOPMENT CELL
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
            Training & Placement
          </h1>
          <p className="text-xl text-blue-100/80 font-light max-w-2xl mx-auto">
            Shaping careers and fulfilling dreams through industry-aligned
            training and premier placement opportunities.
          </p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="container mx-auto px-6 -mt-12 relative z-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard
            icon={Briefcase}
            value="85%"
            label="Placements"
            color="blue"
          />
          <StatCard
            icon={TrendingUp}
            value="12 LPA"
            label="Highest Package"
            color="amber"
          />
          <StatCard
            icon={Users}
            value="4.5 LPA"
            label="Avg Package"
            color="emerald"
          />
          <StatCard
            icon={Building2}
            value="150+"
            label="Recruiters"
            color="purple"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 mb-24">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Content */}
          <div className="flex-1">
            <SectionHeader
              title="Our Vision"
              subtitle="Bridging the gap between Industry and Academia."
            />

            <div className="prose text-slate-600 leading-relaxed text-lg mb-12">
              <p className="mb-4">
                The Training and Placement Cell is an integral part of our
                institution. It is not just about getting a job; it is about
                defining a career. We ensure that our students are trained in
                aptitude, soft skills, and technical domains right from the
                second year.
              </p>
              <p>
                Our dedicated team works round the clock to maintain strong
                industry relations, organize campus drives, and facilitate
                internships for pre-final year students.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 mb-12">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Award className="text-amber-600" /> Key Activities
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Campus Recruitment Training (CRT) from 3rd Year",
                  "Expert Talks by Industry Leaders",
                  "Mock Interviews & Group Discussions",
                  "Industrial Visits & Internships",
                  "Foreign Language Certification (Japanese/German)",
                  "Center of Excellence with MNCs",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-blue-600 mt-1 shrink-0"
                    />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recruiters Grid */}
            <SectionHeader
              title="Our Top Recruiters"
              subtitle="Leading companies that trust our talent"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {RECRUITERS.map((rec, i) => (
                <div
                  key={i}
                  className="h-24 border border-slate-200 rounded-xl flex items-center justify-center hover:shadow-lg hover:border-blue-300 transition-all bg-white group cursor-pointer"
                >
                  <span className="text-xl font-bold text-slate-300 group-hover:text-blue-800 transition-colors">
                    {rec.logo}
                  </span>
                </div>
              ))}
              <div className="h-24 border border-dashed border-slate-300 rounded-xl flex items-center justify-center text-slate-400 text-sm">
                and 100+ more...
              </div>
            </div>
          </div>

          {/* Right Sidebar / TPO Profile */}
          <div className="lg:w-80 shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-xl shadow-blue-900/5 border border-slate-100 sticky top-24">
              <div className="text-center border-b border-slate-100 pb-6 mb-6">
                <div className="w-24 h-24 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center text-slate-300 border-4 border-white shadow-sm">
                  <Users size={32} />
                </div>
                <h4 className="font-serif font-bold text-xl text-slate-900">
                  Dr. N. C. Ghuge
                </h4>
                <p className="text-amber-600 font-bold text-xs uppercase tracking-widest mt-1">
                  Training & Placement Officer
                </p>
              </div>

              <div className="space-y-5 text-sm">
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                    <Phone size={14} />
                  </div>
                  <span>+91 9850519948</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                    <Mail size={14} />
                  </div>
                  <span className="break-all">tpo@matoshri.edu.in</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                    <MapPin size={14} />
                  </div>
                  <span>Administrative Block, 1st Floor</span>
                </div>
              </div>

              <button className="w-full mt-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-colors shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
                Download Brochure <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPlacement;
