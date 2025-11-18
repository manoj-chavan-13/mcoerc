import React, { useState } from "react";
import {
  Calendar,
  Users,
  Hash,
  BookOpen,
  Target,
  Award,
  ChevronRight,
  CheckCircle2,
  Beaker,
  FileText,
  GraduationCap,
  Download,
  Newspaper,
  Briefcase,
  Lightbulb,
  Monitor,
  Globe,
  Table,
  UserCheck,
  Home,
} from "lucide-react";

// --- MOCK ASSETS ---
const HodImage =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";

// --- REUSABLE COMPONENTS ---

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-8 border-b border-slate-100 pb-4">
    <h2 className="text-3xl font-serif font-bold text-slate-900">{title}</h2>
    {subtitle && <p className="text-slate-500 mt-2 text-lg">{subtitle}</p>}
  </div>
);

const PersonGrid = ({ people }) => (
  <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    {people.map((p, i) => (
      <div
        key={i}
        className="bg-white border border-slate-200 rounded-xl p-6 flex items-start gap-5 hover:border-blue-400 hover:shadow-lg transition-all group"
      >
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 shrink-0 overflow-hidden border border-slate-100 group-hover:scale-105 transition-transform">
          {p.img ? (
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <Users size={28} />
          )}
        </div>
        <div>
          <h3 className="font-bold text-xl text-slate-900 group-hover:text-blue-800 transition-colors">
            {p.name}
          </h3>
          <p className="text-amber-600 font-bold text-sm uppercase tracking-wide mt-1">
            {p.role}
          </p>
          <div className="flex flex-col gap-1 mt-3 text-sm text-slate-500">
            {p.qual && (
              <span className="flex items-center gap-2">
                <GraduationCap size={14} className="text-slate-400" /> {p.qual}
              </span>
            )}
            {p.exp && (
              <span className="flex items-center gap-2">
                <Briefcase size={14} className="text-slate-400" /> {p.exp}
              </span>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);

const DocumentTable = ({ headers, rows }) => (
  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-sm">
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="p-5 font-bold text-slate-800 text-xs uppercase tracking-wider"
              >
                {h}
              </th>
            ))}
            <th className="p-5 font-bold text-slate-800 text-xs uppercase tracking-wider text-right">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
              {Object.values(row).map((cell, j) => (
                <td
                  key={j}
                  className="p-5 text-slate-600 text-sm font-medium group-hover:text-slate-900"
                >
                  {cell}
                </td>
              ))}
              <td className="p-5 text-right">
                <button className="inline-flex items-center gap-2 text-amber-600 font-bold text-xs hover:text-white hover:bg-amber-600 border border-amber-100 bg-amber-50 px-4 py-2 rounded-lg transition-all">
                  <Download size={14} /> Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const InfoCards = ({ items, icon: Icon }) => (
  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
    {items.map((item, i) => (
      <div
        key={i}
        className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex gap-5 group"
      >
        <div className="shrink-0 w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-800">
            {item.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
          {item.date && (
            <p className="text-xs text-amber-600 mt-3 font-bold uppercase tracking-wider flex items-center gap-2">
              <Calendar size={12} /> {item.date}
            </p>
          )}
        </div>
      </div>
    ))}
  </div>
);

// --- TAB CONTENT RENDERERS ---

const DepartmentOverview = () => (
  <div className="space-y-10 animate-in fade-in duration-500">
    {/* Key Metrics */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="p-6 rounded-2xl border border-slate-200 flex items-center gap-4 hover:shadow-md transition-shadow">
        <div className="p-3 bg-blue-50 text-blue-700 rounded-lg">
          <Calendar />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
            Established
          </p>
          <p className="text-2xl font-serif font-bold text-slate-900">2008</p>
        </div>
      </div>
      <div className="p-6 rounded-2xl border border-slate-200 flex items-center gap-4 hover:shadow-md transition-shadow">
        <div className="p-3 bg-amber-50 text-amber-700 rounded-lg">
          <Users />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
            Intake
          </p>
          <p className="text-2xl font-serif font-bold text-slate-900">
            60 Seats
          </p>
        </div>
      </div>
      <div className="p-6 rounded-2xl border border-slate-200 flex items-center gap-4 hover:shadow-md transition-shadow">
        <div className="p-3 bg-slate-100 text-slate-700 rounded-lg">
          <Hash />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
            DTE Code
          </p>
          <p className="text-2xl font-serif font-bold text-slate-900">5177</p>
        </div>
      </div>
    </div>

    {/* Main Content + HOD */}
    <div className="flex flex-col md:flex-row gap-10 items-start">
      <div className="flex-1 space-y-6">
        <div>
          <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">
            About the Department
          </h3>
          <div className="h-1 w-16 bg-amber-500 rounded-full mb-4"></div>
        </div>
        <p className="text-slate-600 leading-loose text-lg">
          The Department of Information Technology at Matoshri College of
          Engineering is a hub of innovation and technical excellence.
          Established in 2008 and re-established in 2024, we focus on bridging
          the gap between academic knowledge and industry requirements.
        </p>
        <p className="text-slate-600 leading-loose text-lg">
          We offer a comprehensive curriculum covering{" "}
          <span className="font-bold text-slate-800">
            Artificial Intelligence, Data Science, Cloud Computing
          </span>
          , and Core Software Engineering. Our state-of-the-art laboratories and
          experienced faculty ensure students are industry-ready.
        </p>
      </div>

      {/* HOD Profile Card */}
      <div className="w-full md:w-72 shrink-0">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-lg shadow-blue-900/5 text-center relative group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-blue-900 to-blue-800"></div>
          <div className="relative mx-auto w-32 h-32 mt-6 mb-4 rounded-full border-4 border-white shadow-md overflow-hidden">
            <img
              src={HodImage}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              alt="HOD"
            />
          </div>
          <h4 className="font-serif font-bold text-xl text-slate-900">
            Dr. D. R. Patil
          </h4>
          <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-4">
            Head of Department
          </p>
          <p className="text-sm text-slate-500 italic mb-4">
            "Excellence through innovation and continuous learning."
          </p>
          <button className="w-full py-2 rounded-lg border border-blue-100 text-blue-600 font-bold text-sm hover:bg-blue-50 transition-colors">
            View Profile
          </button>
        </div>
      </div>
    </div>
  </div>
);

const VisionMission = () => (
  <div className="grid gap-8 animate-in fade-in duration-500">
    <div className="bg-gradient-to-br from-blue-950 to-blue-900 text-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="relative z-10">
        <h3 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
          <Target className="text-amber-400" size={32} /> Vision
        </h3>
        <p className="text-xl text-blue-100 leading-relaxed font-light">
          "To develop competent IT professionals through quality education and
          ethical values for sustainable societal growth."
        </p>
      </div>
    </div>

    <div className="bg-white border border-slate-200 p-10 rounded-2xl shadow-sm relative">
      <div className="absolute top-0 left-0 w-1 h-full bg-amber-500 rounded-l-2xl"></div>
      <h3 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3 text-slate-900">
        <Award className="text-amber-600" size={32} /> Mission
      </h3>
      <div className="space-y-6">
        {[
          "To impart quality education in Information Technology with a focus on practical skills and academic excellence.",
          "To integrate emerging technologies into the curriculum to stay aligned with industry trends.",
          "To cultivate effective communication, teamwork, and leadership skills in a global work environment.",
        ].map((m, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm shrink-0 mt-1">
              M{i + 1}
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">{m}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- MAIN PAGE COMPONENT ---

const AcademicsIt = () => {
  const [activeTab, setActiveTab] = useState("dept-info");

  const menuItems = [
    {
      id: "dept-info",
      label: "Department Information",
      icon: BookOpen,
      category: "Overview",
    },
    {
      id: "news",
      label: "News & Announcements",
      icon: Newspaper,
      category: "Overview",
    },
    {
      id: "vision",
      label: "Vision / Mission / PEO",
      icon: Target,
      category: "Overview",
    },

    {
      id: "faculty",
      label: "Faculty Profile",
      icon: Users,
      category: "People",
    },
    {
      id: "adjunct",
      label: "Adjunct Faculty",
      icon: UserCheck,
      category: "People",
    },
    { id: "staff", label: "Technical Staff", icon: Users, category: "People" },

    {
      id: "syllabus",
      label: "Syllabus",
      icon: FileText,
      category: "Academics",
    },
    {
      id: "timetable",
      label: "Time Table",
      icon: Table,
      category: "Academics",
    },
    {
      id: "results",
      label: "Result Analysis",
      icon: CheckCircle2,
      category: "Academics",
    },

    {
      id: "infra",
      label: "Infrastructure",
      icon: Monitor,
      category: "Facilities",
    },

    {
      id: "achievements",
      label: "Student Achievements",
      icon: Award,
      category: "Student Life",
    },
    {
      id: "placements",
      label: "Placements",
      icon: Briefcase,
      category: "Research",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dept-info":
        return <DepartmentOverview />;
      case "vision":
        return <VisionMission />;

      case "news":
        return (
          <>
            <SectionHeader
              title="Department News"
              subtitle="Latest updates, events, and announcements"
            />
            <InfoCards
              icon={Newspaper}
              items={[
                {
                  title: "National Conference on AI 2024",
                  desc: "Department organized a 2-day national conference on Generative AI with speakers from Google and Microsoft.",
                  date: "Nov 10, 2024",
                },
                {
                  title: "Smart India Hackathon Winners",
                  desc: "Our TY IT students won first prize (1 Lakh) in the Smart India Hackathon Hardware Edition.",
                  date: "Oct 25, 2024",
                },
              ]}
            />
          </>
        );

      case "faculty":
        return (
          <>
            <SectionHeader
              title="Faculty Profile"
              subtitle="Meet our experienced and dedicated academic team"
            />
            <PersonGrid
              people={[
                {
                  name: "Dr. D. R. Patil",
                  role: "Professor & Head",
                  qual: "Ph.D (CSE)",
                  exp: "22 Years",
                },
                {
                  name: "Prof. S. A. Shukla",
                  role: "Assistant Professor",
                  qual: "M.E. (IT)",
                  exp: "15 Years",
                },
                {
                  name: "Prof. V. R. Sonawane",
                  role: "Assistant Professor",
                  qual: "M.Tech (CSE)",
                  exp: "12 Years",
                },
                {
                  name: "Prof. P. K. Desai",
                  role: "Assistant Professor",
                  qual: "M.E. (IT)",
                  exp: "10 Years",
                },
              ]}
            />
          </>
        );

      case "staff":
        return (
          <>
            <SectionHeader
              title="Technical Staff"
              subtitle="Supporting our laboratories and infrastructure"
            />
            <PersonGrid
              people={[
                {
                  name: "Mr. R. K. Jadhav",
                  role: "Lab Assistant",
                  qual: "B.Sc (Comp)",
                  exp: "8 Years",
                },
                {
                  name: "Mrs. P. M. More",
                  role: "Lab Assistant",
                  qual: "Diploma (IT)",
                  exp: "5 Years",
                },
              ]}
            />
          </>
        );

      case "syllabus":
        return (
          <>
            <SectionHeader
              title="Syllabus & Curriculum"
              subtitle="Download the latest SPPU syllabus copies"
            />
            <DocumentTable
              headers={["Pattern", "Class", "Semester"]}
              rows={[
                {
                  p: "2019 Pattern",
                  c: "SE Information Technology",
                  s: "Sem I & II",
                },
                {
                  p: "2019 Pattern",
                  c: "TE Information Technology",
                  s: "Sem I & II",
                },
                {
                  p: "2019 Pattern",
                  c: "BE Information Technology",
                  s: "Sem I & II",
                },
              ]}
            />
          </>
        );

      case "timetable":
        return (
          <>
            <SectionHeader
              title="Time Table"
              subtitle="Academic schedule for the current semester"
            />
            <DocumentTable
              headers={["Academic Year", "Class", "Description"]}
              rows={[
                {
                  y: "2024-25",
                  c: "SE / TE / BE",
                  d: "Class Time Table (Sem I)",
                },
                { y: "2024-25", c: "All Divisions", d: "Laboratory Schedule" },
              ]}
            />
          </>
        );

      case "infra":
        return (
          <>
            <SectionHeader
              title="Infrastructure"
              subtitle="World-class laboratories and learning spaces"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Software Engineering Lab",
                "Cloud Computing Lab",
                "Hardware Lab",
                "Seminar Hall",
              ].map((lab, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl h-64 bg-slate-900 border border-slate-200 shadow-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 z-10"></div>
                  <img
                    src={`https://source.unsplash.com/random/800x600?server,code,${i}`}
                    alt={lab}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                  />
                  <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <h3 className="text-white font-serif font-bold text-2xl mb-1">
                      {lab}
                    </h3>
                    <p className="text-blue-200 text-sm flex items-center gap-2">
                      <Monitor size={14} /> 30 High-End Workstations
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        );

      case "placements":
        return (
          <>
            <SectionHeader
              title="Placements"
              subtitle="Our students working in top MNCs"
            />
            <div className="flex flex-col md:flex-row gap-6 mb-10">
              <div className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center shadow-lg">
                <h3 className="text-5xl font-bold mb-2">85%</h3>
                <p className="opacity-80 font-medium">
                  Placement Record (2023-24)
                </p>
              </div>
              <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm">
                <h3 className="text-5xl font-bold text-slate-900 mb-2">
                  12 LPA
                </h3>
                <p className="text-slate-500 font-medium">Highest Package</p>
              </div>
              <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm">
                <h3 className="text-5xl font-bold text-slate-900 mb-2">
                  4.5 LPA
                </h3>
                <p className="text-slate-500 font-medium">Average Package</p>
              </div>
            </div>
            <DocumentTable
              headers={["Student Name", "Company", "Package"]}
              rows={[
                { n: "Rahul Sharma", c: "TCS Digital", p: "7.5 LPA" },
                { n: "Priya Patel", c: "Infosys", p: "5.0 LPA" },
                { n: "Amit Kumar", c: "Capgemini", p: "4.5 LPA" },
              ]}
            />
          </>
        );

      default:
        return (
          <div className="animate-in fade-in duration-500 py-12">
            <div className="bg-slate-50 border border-slate-200 border-dashed rounded-2xl p-16 text-center">
              <div className="w-20 h-20 bg-white shadow-sm rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                <FileText size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Content Coming Soon
              </h3>
              <p className="text-slate-500 max-w-md mx-auto">
                The detailed information for{" "}
                <span className="font-bold text-slate-700">
                  {menuItems.find((m) => m.id === activeTab)?.label}
                </span>{" "}
                is currently being updated by the department.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-600">
      {/* --- NEW HERO SECTION --- */}
      <div className="relative bg-blue-950 pt-28 pb-20 md:pt-32 md:pb-24 px-6 overflow-hidden">
        {/* Tech Pattern Background */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-900/80 to-transparent pointer-events-none"></div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-blue-300/80 text-xs font-bold tracking-widest uppercase mb-6">
                <Home size={12} /> <span>Home</span>
                <ChevronRight size={10} /> <span>Academics</span>
                <ChevronRight size={10} />{" "}
                <span className="text-amber-400">Information Technology</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight leading-none mb-6">
                Information <br /> Technology
              </h1>

              <p className="text-blue-100/80 text-lg md:text-xl max-w-2xl font-light leading-relaxed border-l-4 border-amber-500 pl-6">
                Empowering the next generation of tech leaders through
                innovation, research, and ethical computing.
              </p>
            </div>

            {/* Glass Badge */}
            <div className="hidden lg:block">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl text-right shadow-2xl">
                <p className="text-xs text-blue-200 font-bold uppercase tracking-widest mb-1">
                  DTE Code
                </p>
                <p className="text-3xl font-mono font-bold text-white tracking-tighter">
                  517226310
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* --- SIDEBAR --- */}
          <div className="lg:w-[280px] w-full shrink-0 sticky top-8">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 overflow-hidden">
              <div className="bg-slate-50 p-5 border-b border-slate-100">
                <h3 className="font-serif text-lg font-bold text-slate-900 flex items-center gap-2">
                  <BookOpen size={18} className="text-amber-600" /> Department
                  Menu
                </h3>
              </div>
              <div className="flex flex-col py-2 max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-hide">
                {menuItems.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`
                                w-full text-left px-6 py-3.5 text-sm font-medium transition-all flex items-center justify-between group relative
                                ${
                                  isActive
                                    ? "text-blue-800 bg-blue-50"
                                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                                }
                            `}
                    >
                      {isActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
                      )}
                      <span className="flex items-center gap-3">
                        <item.icon
                          size={18}
                          className={
                            isActive
                              ? "text-blue-600"
                              : "text-slate-400 group-hover:text-slate-600"
                          }
                        />
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Contact Box */}
            <div className="mt-6 bg-slate-900 rounded-2xl p-6 text-white text-center shadow-xl">
              <h4 className="font-serif font-bold text-xl mb-2">
                Admissions Open
              </h4>
              <p className="text-slate-400 text-sm mb-4">
                For Academic Year 2024-25
              </p>
              <button className="w-full py-3 bg-amber-500 hover:bg-amber-600 rounded-xl font-bold text-sm transition-colors shadow-lg shadow-amber-900/20">
                Enquire Now
              </button>
            </div>
          </div>

          {/* --- DYNAMIC CONTENT --- */}
          <div className="flex-1 w-full min-h-[500px]">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default AcademicsIt;
