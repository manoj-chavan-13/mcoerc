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
  FileText,
  GraduationCap,
  Download,
  Newspaper,
  Phone,
  Mail,
  MapPin,
  Globe,
  Home,
  AlertCircle,
  Layers,
  ArrowRight,
  Info,
  Microscope,
} from "lucide-react";

// --- MOCK ASSETS ---
const ContactImage = (initials) =>
  `https://ui-avatars.com/api/?name=${initials}&background=0D8ABC&color=fff&size=128`;

// --- DATA CONSTANTS ---

const NOTIFICATIONS = [
  {
    title: "Admission Process Started (2025-26)",
    desc: "Centralized Admission Process (CAP) for First Year Engineering has officially commenced.",
    date: "Aug 15, 2025",
  },
  {
    title: "Revised Eligibility Criteria",
    desc: "DTE Maharashtra has released updated eligibility norms for OBC & EBC categories.",
    date: "Aug 10, 2025",
  },
  {
    title: "Scholarship Applications Open",
    desc: "MahaDBT portal is now open for EBC, SC, ST, and OBC scholarship applications.",
    date: "Aug 01, 2025",
  },
];

const CONTACTS_DATA = [
  {
    name: "Dr. Khule S. S.",
    role: "Admission Incharge",
    phone: "+91 9850519948",
    email: "shridhar.khule@matoshri.edu.in",
    img: null,
  },
  {
    name: "Dr. Ahire D. D.",
    role: "Admission Coordinator",
    phone: "+91 9011050548",
    email: "dnyaneshwar.ahire@matoshri.edu.in",
    img: null,
  },
  {
    name: "Mr. Kshatriya R. R.",
    role: "Admission Coordinator",
    phone: "+91 9403277555",
    email: "rahul.kshatriya@matoshri.edu.in",
    img: null,
  },
  {
    name: "Mr. Khatale G. D.",
    role: "Admission Coordinator",
    phone: "+91 7719912798",
    email: "ganesh.katale@matoshri.edu.in",
    img: null,
  },
  {
    name: "Ms. Jane K. C.",
    role: "Admission Coordinator",
    phone: "+91 8275049880",
    email: "kunjal.jane@matoshri.edu.in",
    img: null,
  },
  {
    name: "Ms. Riya B. Shikare",
    role: "Admission Coordinator",
    phone: "+91 8329808768",
    email: "riya.shikare.rs@gmail.com",
    img: null,
  },
  {
    name: "Mrs. Singh Meenakshi",
    role: "Admission Coordinator",
    phone: "+91 7588109316",
    email: "meenakshirajput28@gmail.com",
    img: null,
  },
];

// --- REUSABLE COMPONENTS ---

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-8 border-b border-slate-100 pb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <h2 className="text-3xl font-serif font-bold text-slate-900">{title}</h2>
    {subtitle && <p className="text-slate-500 mt-2 text-lg">{subtitle}</p>}
  </div>
);

const ContactGrid = ({ people }) => (
  <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    {people.map((p, i) => (
      <div
        key={i}
        className="bg-white border border-slate-200 rounded-xl p-6 flex items-start gap-5 hover:border-blue-400 hover:shadow-lg transition-all group"
      >
        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 shrink-0 overflow-hidden border border-slate-100 group-hover:scale-105 transition-transform">
          {p.img ? (
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="font-bold text-slate-300 text-xl">
              {p.name.charAt(0)}
            </span>
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-800 transition-colors">
            {p.name}
          </h3>
          <p className="text-amber-600 font-bold text-xs uppercase tracking-wide mt-1 mb-3">
            {p.role}
          </p>
          <div className="flex flex-col gap-1.5 text-sm text-slate-500">
            <a
              href={`tel:${p.phone}`}
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <Phone size={14} className="text-slate-400" /> {p.phone}
            </a>
            <a
              href={`mailto:${p.email}`}
              className="flex items-center gap-2 hover:text-blue-600 transition-colors break-all"
            >
              <Mail size={14} className="text-slate-400" /> {p.email}
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const DocumentTable = ({ headers, rows, highlightCol }) => (
  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-sm mb-8">
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
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
              {Object.values(row).map((cell, j) => (
                <td
                  key={j}
                  className={`p-5 text-sm font-medium ${
                    j === highlightCol
                      ? "text-blue-700 font-bold"
                      : "text-slate-600 group-hover:text-slate-900"
                  }`}
                >
                  {cell}
                </td>
              ))}
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
        className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex gap-5 group relative overflow-hidden"
      >
        <div className="absolute left-0 top-0 w-1 h-full bg-amber-500 group-hover:bg-blue-600 transition-colors"></div>
        <div className="shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <Icon size={20} />
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

const EligibilityList = ({ title, items }) => (
  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-6 h-full">
    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
      <CheckCircle2 className="text-amber-600" size={20} /> {title}
    </h4>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const SectionSubHeader = ({ icon: Icon, title }) => (
  <h3 className="font-bold text-lg text-slate-800 mt-10 mb-4 flex items-center gap-2">
    <Icon size={20} className="text-blue-600" /> {title}
  </h3>
);

// --- TAB CONTENT RENDERERS ---

const AdmissionOverview = () => (
  <div className="space-y-10 animate-in fade-in duration-500">
    {/* Key Metrics */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="p-6 rounded-2xl border border-slate-200 flex items-center gap-4 hover:shadow-md transition-shadow bg-white">
        <div className="p-3 bg-blue-50 text-blue-700 rounded-lg">
          <Hash />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
            Institute Code
          </p>
          <p className="text-2xl font-serif font-bold text-slate-900">5109</p>
        </div>
      </div>
      <div className="p-6 rounded-2xl border border-slate-200 flex items-center gap-4 hover:shadow-md transition-shadow bg-white">
        <div className="p-3 bg-amber-50 text-amber-700 rounded-lg">
          <Users />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
            Total Intake
          </p>
          <p className="text-2xl font-serif font-bold text-slate-900">
            480+ Seats
          </p>
        </div>
      </div>
      <div className="p-6 rounded-2xl border border-slate-200 flex items-center gap-4 hover:shadow-md transition-shadow bg-white">
        <div className="p-3 bg-slate-100 text-slate-700 rounded-lg">
          <Award />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
            Accreditation
          </p>
          <p className="text-2xl font-serif font-bold text-slate-900">
            NAAC 'A'
          </p>
        </div>
      </div>
    </div>

    {/* Welcome Text */}
    <div className="flex flex-col md:flex-row gap-10 items-start">
      <div className="flex-1 space-y-6">
        <div>
          <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">
            Welcome to Admissions 2025-26
          </h3>
          <div className="h-1 w-16 bg-amber-500 rounded-full mb-4"></div>
        </div>
        <p className="text-slate-600 leading-loose text-lg">
          Matoshri College of Engineering invites aspiring engineers to join our
          vibrant community. We offer a range of undergraduate and postgraduate
          programs designed to foster innovation, leadership, and technical
          excellence.
        </p>
        <p className="text-slate-600 leading-loose text-lg">
          Admission is strictly based on merit and the guidelines prescribed by
          the
          <span className="font-bold text-slate-800">
            {" "}
            Directorate of Technical Education (DTE), Maharashtra State
          </span>
          . Select your preferred course from the menu to view specific details.
        </p>
      </div>
    </div>

    {/* Notifications */}
    <div>
      <SectionHeader
        title="Latest Notifications"
        subtitle="Important updates regarding admission process"
      />
      <InfoCards items={NOTIFICATIONS} icon={AlertCircle} />
    </div>
  </div>
);

const FirstYearContent = () => (
  <div className="animate-in fade-in duration-500">
    <SectionHeader
      title="First Year B.Tech"
      subtitle="Four Year Full-Time Undergraduate Degree"
    />

    {/* 1. Eligibility */}
    <SectionSubHeader icon={CheckCircle2} title="Eligibility Criteria" />
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <EligibilityList
        title="Maharashtra State Candidature"
        items={[
          "The Candidate should be an Indian National.",
          "Passed HSC or its equivalent examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry or Biotechnology or Biology or Technical Vocational subject.",
          "Obtained at least 45% marks (40% marks for Backward class categories and PWD candidates) in the above subjects taken together.",
          "Obtained non-zero score in MHT-CET 2025.",
        ]}
      />
      <EligibilityList
        title="All India Candidature"
        items={[
          "The Candidate should be an Indian National.",
          "Passed HSC or its equivalent examination with Physics and Mathematics as compulsory subjects.",
          "Obtained at least 45% marks (40% for reserved categories) in relevant subjects.",
          "Obtained non-zero positive score in JEE (Main) Paper-I or MHT-CET 2025.",
        ]}
      />
    </div>

    {/* 2. Intake */}
    <SectionSubHeader icon={Users} title="Sanctioned Intake (First Year)" />
    <DocumentTable
      headers={["Course Name", "Code", "Intake"]}
      rows={[
        { n: "Computer Engineering", c: "510924510", i: "120" },
        { n: "Information Technology", c: "510924610", i: "60" },
        { n: "AI & Data Science", c: "510999510", i: "60" },
        { n: "Electronics & Telecomm.", c: "510937210", i: "60" },
        { n: "Mechanical Engineering", c: "510961210", i: "60" },
        { n: "Civil Engineering", c: "510919110", i: "60" },
        { n: "Electrical Engineering", c: "510929310", i: "60" },
      ]}
      highlightCol={2}
    />

    {/* 3. Fees */}
    <SectionSubHeader icon={Download} title="Fee Structure (First Year)" />
    <DocumentTable
      headers={["Category", "Tuition Fee", "Development Fee", "Total Fees"]}
      rows={[
        { c: "Open", t: "₹ 85,000", d: "₹ 10,000", total: "₹ 95,000" },
        { c: "OBC / EBC", t: "₹ 42,500", d: "₹ 10,000", total: "₹ 52,500" },
        { c: "SC / ST", t: "₹ 0", d: "₹ 0", total: "₹ 0" },
        { c: "VJNT / SBC / TFWS", t: "₹ 0", d: "₹ 10,000", total: "₹ 10,000" },
      ]}
      highlightCol={3}
    />

    {/* 4. Documents */}
    <SectionSubHeader icon={FileText} title="Required Documents" />
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 grid md:grid-cols-2 gap-y-2 gap-x-8">
      {[
        "10th & 12th Marksheet",
        "Leaving / Transfer Certificate",
        "MHT-CET / JEE Score Card",
        "Domicile & Nationality Certificate",
        "Caste Certificate (If applicable)",
        "Caste Validity (If applicable)",
        "Non-Creamy Layer (If applicable)",
        "Aadhar Card (Photocopy)",
        "Income Certificate",
        "GAP Certificate (If applicable)",
      ].map((doc, i) => (
        <div key={i} className="flex items-center text-sm text-slate-700 py-1">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
          {doc}
        </div>
      ))}
    </div>
  </div>
);

const SecondYearContent = () => (
  <div className="animate-in fade-in duration-500">
    <SectionHeader
      title="Direct Second Year (DSE)"
      subtitle="Lateral Entry into Third Semester"
    />

    {/* 1. Eligibility */}
    <SectionSubHeader icon={CheckCircle2} title="Eligibility Criteria" />
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-bold text-slate-900 mb-2 text-lg">
            Diploma Students
          </h4>
          <p className="text-slate-600 mb-4">
            Passed Diploma in Engineering/Technology with at least 45% marks
            (40% for reserved category) in appropriate branch of Engineering and
            Technology.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2 text-lg">
            B.Sc Students
          </h4>
          <p className="text-slate-600 mb-4">
            Passed B.Sc. Degree from a UGC recognized university with at least
            45% marks and passed HSC with Mathematics as a subject.
          </p>
        </div>
      </div>
    </div>

    {/* 2. Intake */}
    <SectionSubHeader icon={Users} title="Intake Capacity (DSE)" />
    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8">
      <p className="text-blue-900 font-medium">
        <Info size={18} className="inline mr-2 mb-1" />
        Intake is 10% of the Sanctioned Intake of the First Year + Vacant Seats
        (if any) from the previous year.
      </p>
    </div>

    {/* 3. Fees */}
    <SectionSubHeader icon={Download} title="Fee Structure (DSE)" />
    <DocumentTable
      headers={["Category", "Tuition Fee", "Development Fee", "Total Fees"]}
      rows={[
        { c: "Open", t: "₹ 85,000", d: "₹ 10,000", total: "₹ 95,000" },
        { c: "OBC / EBC", t: "₹ 42,500", d: "₹ 10,000", total: "₹ 52,500" },
        { c: "SC / ST", t: "₹ 0", d: "₹ 0", total: "₹ 0" },
        { c: "VJNT / SBC", t: "₹ 0", d: "₹ 10,000", total: "₹ 10,000" },
      ]}
      highlightCol={3}
    />

    {/* 4. Documents */}
    <SectionSubHeader icon={FileText} title="Required Documents" />
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 grid md:grid-cols-2 gap-y-2 gap-x-8">
      {[
        "10th Marksheet",
        "Diploma / B.Sc Marksheets (All Sems)",
        "Diploma Leaving Certificate",
        "Equivalence Certificate (If required)",
        "Domicile & Nationality Certificate",
        "Caste Certificate (If applicable)",
        "Caste Validity (If applicable)",
        "Non-Creamy Layer (If applicable)",
        "Aadhar Card",
        "GAP Certificate (If applicable)",
      ].map((doc, i) => (
        <div key={i} className="flex items-center text-sm text-slate-700 py-1">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
          {doc}
        </div>
      ))}
    </div>
  </div>
);

const MTechContent = () => (
  <div className="animate-in fade-in duration-500">
    <SectionHeader
      title="M.Tech Admissions"
      subtitle="Master of Technology - 2 Year Program"
    />

    <SectionSubHeader icon={CheckCircle2} title="Eligibility Criteria" />
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
      <ul className="space-y-2 text-slate-700">
        <li className="flex gap-2">
          <CheckCircle2 size={16} className="text-blue-600 mt-1" /> Bachelor's
          Degree in relevant field of Engineering/Technology from AICTE/UGC
          approved institution.
        </li>
        <li className="flex gap-2">
          <CheckCircle2 size={16} className="text-blue-600 mt-1" /> Obtained at
          least 50% marks (45% for reserved categories).
        </li>
        <li className="flex gap-2">
          <CheckCircle2 size={16} className="text-blue-600 mt-1" /> Obtained
          non-zero positive score in <strong>GATE</strong>.
        </li>
      </ul>
    </div>

    <SectionSubHeader icon={Users} title="Specializations & Intake" />
    <DocumentTable
      headers={["Specialization", "Department", "Intake"]}
      rows={[
        { s: "Computer Engineering", d: "Computer Dept", i: "24" },
        { s: "VLSI & Embedded Systems", d: "E&TC Dept", i: "18" },
        { s: "Mechanical Design", d: "Mechanical Dept", i: "18" },
        { s: "Electrical Power Systems", d: "Electrical Dept", i: "18" },
        { s: "Geo-Technical Engg", d: "Civil Dept", i: "18" },
      ]}
      highlightCol={2}
    />

    <SectionSubHeader icon={Download} title="Fee Structure (M.Tech)" />
    <DocumentTable
      headers={["Particulars", "Amount (Per Year)"]}
      rows={[
        { p: "Tuition Fee", a: "₹ 75,000" },
        { p: "Development Fee", a: "₹ 10,000" },
        { p: "Total Fee", a: "₹ 85,000" },
      ]}
      highlightCol={1}
    />

    <SectionSubHeader icon={FileText} title="Documents Required" />
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 grid md:grid-cols-2 gap-y-2">
      {[
        "GATE Score Card",
        "BE/B.Tech Marksheets",
        "Degree Certificate",
        "TC / Migration Certificate",
        "Caste / Validity / NCL (If applicable)",
      ].map((doc, i) => (
        <div key={i} className="flex items-center text-sm text-slate-700 py-1">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
          {doc}
        </div>
      ))}
    </div>
  </div>
);

const MCAContent = () => (
  <div className="animate-in fade-in duration-500">
    <SectionHeader
      title="MCA Admissions"
      subtitle="Master of Computer Applications - 2 Year Program"
    />

    <SectionSubHeader icon={CheckCircle2} title="Eligibility Criteria" />
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
      <ul className="space-y-2 text-slate-700">
        <li className="flex gap-2">
          <CheckCircle2 size={16} className="text-blue-600 mt-1" /> Passed BCA /
          B.Sc (Computer Science / IT) / BE (CSE / IT).
        </li>
        <li className="flex gap-2">
          <CheckCircle2 size={16} className="text-blue-600 mt-1" /> OR Passed
          any graduation (B.Sc / B.Com / BA) with Mathematics at 10+2 or
          Graduation Level.
        </li>
        <li className="flex gap-2">
          <CheckCircle2 size={16} className="text-blue-600 mt-1" /> Obtained at
          least 50% marks (45% for reserved categories).
        </li>
        <li className="flex gap-2">
          <CheckCircle2 size={16} className="text-blue-600 mt-1" /> Obtained
          non-zero positive score in <strong>MAH-MCA-CET</strong>.
        </li>
      </ul>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <SectionSubHeader icon={Users} title="Intake Capacity" />
        <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
          <p className="text-3xl font-bold text-blue-700">60 Seats</p>
          <p className="text-sm text-slate-500 mt-1">Full Time Program</p>
        </div>
      </div>
      <div>
        <SectionSubHeader icon={Download} title="Fee Structure" />
        <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
          <p className="text-3xl font-bold text-blue-700">₹ 80,000</p>
          <p className="text-sm text-slate-500 mt-1">Per Year (Approx.)</p>
        </div>
      </div>
    </div>

    <SectionSubHeader icon={FileText} title="Documents Required" />
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 grid md:grid-cols-2 gap-y-2 mt-4">
      {[
        "MAH-MCA-CET Score Card",
        "Graduation Marksheets",
        "10th & 12th Marksheets",
        "TC / Migration",
        "Domicile & Nationality",
        "Caste Documents (If applicable)",
      ].map((doc, i) => (
        <div key={i} className="flex items-center text-sm text-slate-700 py-1">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
          {doc}
        </div>
      ))}
    </div>
  </div>
);

const PhDContent = () => (
  <div className="animate-in fade-in duration-500">
    <SectionHeader
      title="Ph.D Admissions"
      subtitle="Doctor of Philosophy - Research Center"
    />

    <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center mb-8">
      <Microscope size={48} className="text-blue-600 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-slate-900 mb-2">
        Research Center Affiliated to SPPU, Pune
      </h3>
      <p className="text-slate-600 max-w-2xl mx-auto">
        We offer Ph.D programs for aspirants who wish to pursue advanced
        research. Admission is subject to the availability of guides and
        vacancies in the respective research center.
      </p>
    </div>

    <SectionSubHeader icon={CheckCircle2} title="Eligibility & Process" />
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h4 className="font-bold text-slate-900 mb-3">Requirements</h4>
        <ul className="space-y-2 text-sm text-slate-700">
          <li>• Master’s degree in relevant branch with min 55% marks.</li>
          <li>• Valid score in PET (Ph.D Entrance Test) conducted by SPPU.</li>
          <li>• OR Valid score in GATE / SET / NET / JRF.</li>
        </ul>
      </div>
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h4 className="font-bold text-slate-900 mb-3">Fees Structure</h4>
        <p className="text-sm text-slate-700 mb-2">
          Fees for Ph.D are subject to university guidelines and research costs.
        </p>
        <p className="text-2xl font-bold text-slate-800">
          ₹ 1,00,000 - ₹ 1,20,000
        </p>
        <p className="text-xs text-slate-500">(Estimated Per Year)</p>
      </div>
    </div>

    <SectionSubHeader icon={Users} title="Research Domains" />
    <div className="flex flex-wrap gap-3">
      {[
        "Computer Engineering",
        "E&TC Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
      ].map((d, i) => (
        <span
          key={i}
          className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 font-medium shadow-sm"
        >
          {d}
        </span>
      ))}
    </div>
  </div>
);

// --- MAIN PAGE COMPONENT ---

const AdmissionsPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const menuItems = [
    { id: "overview", label: "Overview", icon: Layers },
    { id: "first-year", label: "First Year B.Tech", icon: GraduationCap },
    { id: "second-year", label: "Direct Second Year", icon: ArrowRight },
    { id: "mtech", label: "M.Tech", icon: BookOpen },
    { id: "mca", label: "MCA", icon: Layers },
    { id: "phd", label: "Ph.D", icon: Microscope },
    { id: "contacts", label: "Contact Us", icon: Phone },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <AdmissionOverview />;
      case "first-year":
        return <FirstYearContent />;
      case "second-year":
        return <SecondYearContent />;
      case "mtech":
        return <MTechContent />;
      case "mca":
        return <MCAContent />;
      case "phd":
        return <PhDContent />;
      case "contacts":
        return (
          <>
            <SectionHeader
              title="Admission Contacts"
              subtitle="Reach out to our coordinators for assistance"
            />
            <ContactGrid people={CONTACTS_DATA} />
          </>
        );
      default:
        return <AdmissionOverview />;
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-600">
      {/* --- HERO SECTION (MATCHING REFERENCE) --- */}
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
                <ChevronRight size={10} />
                <span className="text-amber-400">Admissions</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight leading-none mb-6">
                Admissions <br /> 2025-26
              </h1>

              <p className="text-blue-100/80 text-lg md:text-xl max-w-2xl font-light leading-relaxed border-l-4 border-amber-500 pl-6">
                Gateway to your future. Join a legacy of excellence in
                engineering education and research.
              </p>
            </div>

            {/* Glass Badge */}
            <div className="hidden lg:block">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl text-right shadow-2xl">
                <p className="text-xs text-blue-200 font-bold uppercase tracking-widest mb-1">
                  Institute Code
                </p>
                <p className="text-3xl font-mono font-bold text-white tracking-tighter">
                  5109
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
                  <BookOpen size={18} className="text-amber-600" /> Admission
                  Programs
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
                Need Assistance?
              </h4>
              <p className="text-slate-400 text-sm mb-4">
                Call our admission cell for expert guidance.
              </p>
              <a
                href="tel:+919850519948"
                className="block w-full py-3 bg-amber-500 hover:bg-amber-600 rounded-xl font-bold text-sm transition-colors shadow-lg shadow-amber-900/20 text-slate-900"
              >
                +91 9850519948
              </a>
            </div>
          </div>

          {/* --- DYNAMIC CONTENT --- */}
          <div className="flex-1 w-full min-h-[500px]">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPage;
