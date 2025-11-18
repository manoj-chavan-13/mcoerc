import React from "react";
import { Award, BookOpen, CheckCircle2, MapPin, Users } from "lucide-react";

// Placeholder for the logo you uploaded (image_fa4acc.jpg)
// You should replace '/path-to-your-logo.jpg' with the actual path to that file.
import { Wifi, Monitor, Coffee, Bus, Home, Book } from "lucide-react";

import CollegeLogo from "../assets/logo.png";
const AboutOverview = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-600 selection:bg-amber-100 selection:text-amber-900">
      {/* --- SECTION 1: HERO INTRO & BIG LOGO --- */}
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Est. 2008
            </div>

            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700">
                Matoshri College
              </span>
            </h1>

            <p className="text-lg leading-relaxed text-slate-600">
              Matoshri College of Engineering & Research Centre was established
              in 2008 in the rural area of Eklahare near Odhagaon. We operate
              under the aegis of the{" "}
              <strong>Matoshri Education Society, Yeola</strong>, established in
              2007.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-100 text-amber-700 rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    Strategic Location
                  </h4>
                  <p className="text-sm">Eklahare, Nashik</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Autonomous</h4>
                  <p className="text-sm">UGC Granted (2024-25)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The BIG Logo (As requested) */}
          <div className="lg:w-1/2 flex justify-center rounded-full">
            <div className="relative w-[300px] h-[360px] lg:w-[400px] lg:h-[480px] transition-transform hover:scale-[1.02] duration-500">
              {/* Decorative back glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-200 to-blue-200 rounded-[3rem] blur-3xl opacity-30"></div>

              {/* The Image Container */}
              <img
                src={CollegeLogo}
                alt="MES Logo Crest"
                className="relative w-full h-full object-cover drop-shadow-2xl rounded-4xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* --- SECTION 2: VISIONARIES (Styled like the uploaded image) --- */}
      <div className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          {/* The "Guided by Visionaries" Style */}
          <div className="mb-10">
            <span className="px-4 py-1 rounded-full border border-blue-200 bg-white text-blue-900 text-[10px] font-bold uppercase tracking-[0.2em]">
              Leadership
            </span>
            <h2 className="mt-6 font-serif text-5xl text-slate-900 font-bold">
              Guided by Visionaries
            </h2>
            {/* The Orange Underline */}
            <div className="w-24 h-1.5 bg-amber-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <p className="text-lg text-slate-700 leading-loose">
            The visionary leaders{" "}
            <span className="font-bold text-slate-900">
              Hon. Naredrabhau Darade
            </span>{" "}
            and{" "}
            <span className="font-bold text-slate-900">
              Hon. Kishorbhau Darade
            </span>{" "}
            are the founders of the Matoshri Education Society. Their motto is
            to provide education for the masses, the afflicted, and the
            downtrodden.
          </p>
          <p className="mt-6 text-lg text-slate-700 leading-loose">
            Young and dynamic Secretary{" "}
            <span className="font-bold text-slate-900">
              Er. Kunalbhau Darade
            </span>{" "}
            has played a major role in developing the Nashik campus. With
            consistent management support, the campus has evolved in name and
            fame within a short time span.
          </p>
        </div>
      </div>
      {/* --- SECTION 3: OBJECTIVES & ACCREDITATIONS --- */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-blue-950 text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
            <h3 className="text-3xl font-serif font-bold mb-6 relative z-10">
              Core Objectives
            </h3>
            <p className="text-blue-100 text-lg leading-relaxed relative z-10 mb-8">
              To provide quality technical education for the masses to uplift
              the living standard of the society. The institute offers 7 UG
              programmes, 5 PG programmes, and has 3 research centers (Ph.D.).
            </p>

            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-amber-400" />
                <span>Approved by AICTE</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-amber-400" />
                <span>Affiliated to SPPU, Pune</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-amber-400" />
                <span>NAAC Accredited</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-amber-400" />
                <span>Recognized under 2(F)/12(B) by UGC</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Student Development
              </h3>
              <p className="text-slate-600">
                We provide assistance to economically weaker sections via
                Government Scholarships, Minority Scholarships, and the 'Earn
                and Learn' scheme.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Social Awareness
              </h3>
              <p className="text-slate-600">
                Through active NSS units and NCC motivation, we encourage
                students to participate in community services and
                nation-building activities.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* --- SECTION 4: PROGRAMMES TABLE --- */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-slate-900">
              Programmes Offered
            </h2>
            <div className="w-16 h-1 bg-slate-300 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200">
                    <th className="p-5 font-bold text-slate-700 text-sm uppercase tracking-wider">
                      Discipline
                    </th>
                    <th className="p-5 font-bold text-slate-700 text-sm uppercase tracking-wider text-center">
                      UG Seats
                    </th>
                    <th className="p-5 font-bold text-slate-700 text-sm uppercase tracking-wider text-center">
                      PG Seats
                    </th>
                    <th className="p-5 font-bold text-slate-700 text-sm uppercase tracking-wider">
                      PG Specialization
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600 text-sm md:text-base">
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-5 font-medium text-slate-900">
                      Computer Engineering
                    </td>
                    <td className="p-5 text-center font-bold bg-slate-50/50">
                      180
                    </td>
                    <td className="p-5 text-center">18</td>
                    <td className="p-5 text-blue-700">Data Science</td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-5 font-medium text-slate-900">
                      Mechanical Engineering
                    </td>
                    <td className="p-5 text-center font-bold bg-slate-50/50">
                      60
                    </td>
                    <td className="p-5 text-center">24</td>
                    <td className="p-5 text-blue-700">
                      Heat Power Engineering
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-5 font-medium text-slate-900">
                      Information Technology
                    </td>
                    <td className="p-5 text-center font-bold bg-slate-50/50">
                      120
                    </td>
                    <td className="p-5 text-center text-slate-400">-</td>
                    <td className="p-5 text-slate-400">-</td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-5 font-medium text-slate-900">
                      Electronics & Telecomm.
                    </td>
                    <td className="p-5 text-center font-bold bg-slate-50/50">
                      60
                    </td>
                    <td className="p-5 text-center">12</td>
                    <td className="p-5 text-blue-700">
                      VLSI & Embedded Systems
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-5 font-medium text-slate-900">
                      Electrical Engineering
                    </td>
                    <td className="p-5 text-center font-bold bg-slate-50/50">
                      60
                    </td>
                    <td className="p-5 text-center">24</td>
                    <td className="p-5 text-blue-700">
                      Electrical Power Systems
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-5 font-medium text-slate-900">
                      Civil Engineering
                    </td>
                    <td className="p-5 text-center font-bold bg-slate-50/50">
                      60
                    </td>
                    <td className="p-5 text-center">24</td>
                    <td className="p-5 text-blue-700">
                      Geotechnical Engineering
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-5 font-medium text-slate-900">
                      AI & Data Science
                    </td>
                    <td className="p-5 text-center font-bold bg-slate-50/50">
                      120
                    </td>
                    <td className="p-5 text-center text-slate-400">-</td>
                    <td className="p-5 text-slate-400">-</td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-5 font-medium text-slate-900">
                      Electronics & Computer Eng.
                    </td>
                    <td className="p-5 text-center font-bold bg-slate-50/50">
                      120
                    </td>
                    <td className="p-5 text-center text-slate-400">-</td>
                    <td className="p-5 text-slate-400">-</td>
                  </tr>
                  <tr className="bg-amber-50/50 border-t-2 border-amber-100">
                    <td className="p-5 font-bold text-amber-900">
                      Master of Computer Applications (MCA)
                    </td>
                    <td className="p-5 text-center font-bold text-amber-900">
                      -
                    </td>
                    <td className="p-5 text-center font-bold text-amber-900">
                      60
                    </td>
                    <td className="p-5 text-amber-700">Post Graduate Degree</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-slate-900 text-white p-6 flex items-start gap-4">
              <BookOpen className="shrink-0 mt-1 text-amber-400" />
              <div>
                <h4 className="font-bold text-lg">
                  Doctoral Programmes (Ph.D.)
                </h4>
                <p className="text-slate-300 text-sm mt-1">
                  Institute offers Ph.D. in Computer Engineering, Electronics &
                  Telecommunication, Mechanical Engineering, and Electrical
                  Engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfrastructureSection />
    </div>
  );
};

export default AboutOverview;

const InfrastructureSection = () => {
  const facilities = [
    {
      icon: <Book className="w-6 h-6 text-amber-600" />,
      title: "Central Library",
      desc: "A vast collection of over 50,000+ books, journals, and digital resources available 24/7 for research.",
    },
    {
      icon: <Monitor className="w-6 h-6 text-blue-600" />,
      title: "Hi-Tech Laboratories",
      desc: "State-of-the-art computer labs and mechanical workshops equipped with the latest industry-standard software.",
    },
    {
      icon: <Wifi className="w-6 h-6 text-amber-600" />,
      title: "Wi-Fi Campus",
      desc: "High-speed internet connectivity across the entire campus to facilitate seamless digital learning.",
    },
    {
      icon: <Home className="w-6 h-6 text-blue-600" />,
      title: "Hostel Facilities",
      desc: "Secure and comfortable separate hostels for boys and girls with study rooms and recreational areas.",
    },
    {
      icon: <Bus className="w-6 h-6 text-amber-600" />,
      title: "Transport Service",
      desc: "A fleet of college buses providing safe transportation from all major routes in Nashik and Yeola.",
    },
    {
      icon: <Coffee className="w-6 h-6 text-blue-600" />,
      title: "Cafeteria",
      desc: "Hygienic and spacious cafeteria serving nutritious meals and refreshments for students and staff.",
    },
  ];

  return (
    <div className="bg-white py-24 border-t border-slate-100">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">
            World-Class Environment
          </span>
          <h2 className="font-serif text-4xl font-bold text-slate-900 mb-6">
            Infrastructure & Facilities
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            We believe that a conducive environment is essential for academic
            excellence. Our campus is designed to provide holistic support for
            every student's journey.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-blue-800 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Final Call to Action (Footer Hook) */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 px-8 py-16 text-center">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Be a Part of Our Legacy
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Join a community of innovators, leaders, and changemakers.
              Admissions are open for the academic year 2024-25.
            </p>
            <button className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-all shadow-lg shadow-amber-500/25 transform hover:-translate-y-1">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
