import React from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Users,
  TrendingUp,
  Globe,
  Cpu,
  Zap,
  Building2,
  Microscope,
  Play,
  CheckCircle2,
  Quote,
  Briefcase,
  Lightbulb,
  ChevronDown,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import colHero from "../assets/college.png";
import gk from "../assets/gk.jpg";
import kd from "../assets/kd.jpg";
import lab from "../assets/lab.png";
import lib from "../assets/lib.png";
/* --- REUSABLE COMPONENTS --- */
const SectionHeading = ({ subtitle, title, align = "center" }) => (
  <div className={`mb-16 ${align === "left" ? "text-left" : "text-center"}`}>
    <span className="inline-block py-1 px-3 border border-blue-100 rounded-full bg-blue-50 text-blue-900 text-xs font-bold tracking-widest uppercase mb-4">
      {subtitle}
    </span>
    <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">
      {title}
    </h2>
    <div
      className={`h-1.5 w-24 bg-amber-600 mt-6 ${
        align === "left" ? "" : "mx-auto"
      }`}
    ></div>
  </div>
);

const ScrollIndicator = () => (
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 flex flex-col items-center gap-2">
    <span className="text-[10px] font-bold uppercase tracking-widest">
      Scroll
    </span>
    <ChevronDown size={20} />
  </div>
);

/* --- 1. HERO SECTION (Full Screen) --- */
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center bg-white overflow-hidden px-6 py-20">
    {/* Royal Background Accents */}
    <div className="absolute top-0 right-0 w-[50vw] h-[80vh] bg-blue-50/50 rounded-bl-[10rem] -mr-20 -mt-20 -z-10"></div>

    <div className="container mx-auto h-full flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
        {/* Left Text */}
        <div className="space-y-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-slate-900 text-white rounded-full text-sm font-semibold tracking-wide shadow-xl">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            ADMISSIONS OPEN 2025-26
          </div>

          <h1 className="text-6xl md:text-8xl font-serif font-bold text-slate-900 leading-[1.1] tracking-tight">
            Excellence <br />
            <span className="text-blue-900">Redefined.</span>
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed max-w-xl font-light border-l-4 border-amber-500 pl-6">
            Matoshri College of Engineering & Research Centre. <br />
            Where tradition meets technology to forge the{" "}
            <strong>leaders of tomorrow</strong>.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-10 py-5 bg-blue-900 text-white rounded-none font-bold hover:bg-blue-800 transition-all shadow-lg text-lg flex items-center gap-3 group">
              Apply Now{" "}
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </button>
            <button className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-200 rounded-none font-bold hover:border-blue-900 hover:text-blue-900 transition-all shadow-sm text-lg">
              Download Brochure
            </button>
          </div>

          {/* Credentials Strip */}
          <div className="flex items-center gap-8 pt-8 text-slate-500 text-sm font-bold tracking-wider">
            <div className="flex items-center gap-2">
              <Award size={18} className="text-amber-600" /> NAAC 'A++' Grade
            </div>
            <div className="w-px h-4 bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <Globe size={18} className="text-blue-900" /> NBA Accredited
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-full flex items-center justify-center">
          <div className="relative w-full aspect-[4/5] max-h-[80vh]">
            <div className="absolute inset-0 bg-slate-900 transform translate-x-4 translate-y-4 -z-10"></div>
            <img
              src={colHero}
              alt="MCOERC Campus"
              className="w-full h-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 shadow-2xl max-w-xs border-l-4 border-amber-500 hidden lg:block">
              <p className="text-4xl font-serif font-bold text-slate-900 mb-1">
                16+
              </p>
              <p className="text-slate-500 uppercase text-sm tracking-widest font-bold">
                Years of Legacy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ScrollIndicator />
  </section>
);

/* --- 2. VISION & ABOUT (Full Screen) --- */
const AboutSection = () => (
  <section className="relative min-h-screen flex items-center bg-slate-50 px-6 py-20">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={lib}
              className="w-full h-64 object-cover rounded-none shadow-lg mb-8"
              alt="Library"
            />
            <img
              src={lab}
              className="w-full h-64 object-cover rounded-none shadow-lg mt-8"
              alt="Lab"
            />
          </div>
          <div className="absolute inset-0 border-2 border-blue-900/10 -m-4 -z-10"></div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            subtitle="Our Philosophy"
            title="Bridging Theory with Practice"
          />

          <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
            <p>
              Established in 2009, MCOERC has been a beacon of quality technical
              education in Nashik. We believe that true engineering is not just
              about knowing, but about <strong>doing</strong>.
            </p>
            <p>
              Our curriculum goes beyond the university syllabus. We integrate
              industry-standard workshops, soft-skills training, and ethical
              value education to shape holistic professionals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {[
                "State-of-the-art Laboratories",
                "Ph.D. Qualified Faculty",
                "Research-Driven Culture",
                "Global University Tie-ups",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 font-semibold text-slate-800"
                >
                  <div className="w-2 h-2 bg-amber-500 rotate-45"></div>
                  {item}
                </div>
              ))}
            </div>

            <button className="mt-8 text-blue-900 font-bold uppercase tracking-wider hover:text-amber-600 transition-colors flex items-center gap-2">
              Read Our Full History <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* --- 3. LEADERSHIP (Full Screen) --- */
const LeadershipSection = () => (
  <section className="relative min-h-screen flex items-center bg-white px-6 py-20">
    <div className="container mx-auto">
      <SectionHeading subtitle="Governance" title="Guided by Visionaries" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
        {/* Principal */}
        <div className="group bg-white border border-slate-100 hover:border-blue-900/30 p-10 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[5rem] -mr-10 -mt-10 z-0"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
            <img
              src={gk}
              alt="Principal"
              className="w-32 h-32 object-cover grayscale group-hover:grayscale-0 transition-all shadow-lg"
            />
            <div>
              <Quote className="text-amber-500 mb-4" size={40} />
              <p className="text-slate-600 italic mb-6 text-lg leading-relaxed">
                "Our mission is to create an educational environment where
                students are encouraged to think critically and innovate
                fearlessly."
              </p>
              <div>
                <h3 className="text-2xl font-serif font-bold text-slate-900">
                  Dr. G.K. Kharate
                </h3>
                <p className="text-blue-900 font-bold text-sm uppercase tracking-wide">
                  Principal
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Director */}
        <div className="group bg-white border border-slate-100 hover:border-blue-900/30 p-10 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-[5rem] -mr-10 -mt-10 z-0"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
            <img
              src={kd}
              alt="Director"
              className="w-32 h-32 object-cover grayscale group-hover:grayscale-0 transition-all shadow-lg"
            />
            <div>
              <Quote className="text-blue-900 mb-4" size={40} />
              <p className="text-slate-600 italic mb-6 text-lg leading-relaxed">
                "We are committed to providing infrastructure that matches
                global standards, ensuring our students have every resource they
                need."
              </p>
              <div>
                <h3 className="text-2xl font-serif font-bold text-slate-900">
                  Hon. Kunal Darade
                </h3>
                <p className="text-amber-600 font-bold text-sm uppercase tracking-wide">
                  Secretary
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* --- 4. STATISTICS (Full Screen - Dark Royal) --- */
const StatsSection = () => (
  <section className="relative min-h-screen flex items-center bg-slate-900 text-white px-6 py-20">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            Numbers that define <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">
              Our Success.
            </span>
          </h2>
          <p className="text-slate-400 text-xl leading-relaxed max-w-md">
            Our achievements are a testament to the hard work of our students
            and the dedication of our faculty.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            {
              num: "18 LPA",
              label: "Highest Package",
              icon: <Briefcase className="text-amber-500" />,
            },
            {
              num: "100%",
              label: "Placement Assistance",
              icon: <CheckCircle2 className="text-blue-500" />,
            },
            {
              num: "50+",
              label: "Industry MOUs",
              icon: <Building2 className="text-amber-500" />,
            },
            {
              num: "2500+",
              label: "Happy Students",
              icon: <Users className="text-blue-500" />,
            },
            {
              num: "15+",
              label: "Startups Incubated",
              icon: <Lightbulb className="text-amber-500" />,
            },
            {
              num: "120+",
              label: "Expert Faculty",
              icon: <GraduationCap className="text-blue-500" />,
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-slate-800/50 p-8 border border-slate-700 hover:bg-slate-800 transition-all duration-300"
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold mb-2">{stat.num}</h3>
              <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* --- 5. ACADEMICS (Full Screen) --- */
const AcademicsSection = () => {
  const depts = [
    {
      title: "Computer Engineering",
      desc: "AI, Machine Learning, & Full Stack Dev.",
    },
    {
      title: "Information Technology",
      desc: "Cloud Computing, Cyber Security & IoT.",
    },
    {
      title: "AI & Data Science",
      desc: "Big Data Analytics, Neural Networks.",
    },
    {
      title: "E & TC Engineering",
      desc: "VLSI Design, Embedded Systems, Robotics.",
    },
    { title: "Mechanical Engg", desc: "Automation, CAD/CAM, Thermal Engg." },
    {
      title: "Civil Engineering",
      desc: "Structural Design, Smart Infrastructure.",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-white px-6 py-20">
      <div className="container mx-auto">
        <SectionHeading
          subtitle="Academic Spectrum"
          title="Departments of Excellence"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-200 mt-12">
          {depts.map((dept, idx) => (
            <div
              key={idx}
              className="group p-12 border-r border-b border-slate-200 hover:bg-blue-50 transition-colors duration-300 cursor-pointer relative"
            >
              <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="text-blue-900" size={24} />
              </div>
              <span className="text-xs font-bold text-amber-600 mb-4 block">
                0{idx + 1}
              </span>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors">
                {dept.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">{dept.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 border-2 border-slate-900 text-slate-900 font-bold uppercase hover:bg-slate-900 hover:text-white transition-all tracking-widest text-sm">
            View Full Syllabus
          </button>
        </div>
      </div>
    </section>
  );
};

/* --- 6. PLACEMENTS (Full Screen) --- */
const PlacementSection = () => (
  <section className="relative min-h-screen flex items-center bg-slate-50 px-6 py-20">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Info */}
        <div className="lg:col-span-5">
          <SectionHeading
            align="left"
            subtitle="Career Trajectory"
            title="Your Future Starts Here"
          />
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            We don't just provide a degree; we provide a career. Our dedicated
            Training & Placement Cell works round the clock to ensure our
            students are placed in top-tier MNCs.
          </p>

          <div className="bg-white p-8 shadow-lg border-l-4 border-blue-900 mb-8">
            <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mb-2">
              Star Placement
            </p>
            <p className="text-3xl font-bold text-slate-900">
              ₹ 18,00,000 / Year
            </p>
            <p className="text-sm text-slate-600 mt-1">
              Offer secured by Final Year Student
            </p>
          </div>

          <button className="text-blue-900 font-bold flex items-center gap-2 hover:gap-4 transition-all">
            Download Placement Report <ArrowRight size={20} />
          </button>
        </div>

        {/* Right Logos Grid */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div
                key={i}
                className="aspect-video bg-white flex items-center justify-center border border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300 group"
              >
                <span className="text-slate-400 font-bold text-lg group-hover:text-slate-900">
                  RECRUITER {i}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* --- 7. TESTIMONIALS (Strict Professional Theme) --- */
const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aditya Deshmukh",
      role: "Software Engineer @ Google",
      batch: "Class of 2021",
      quote:
        "The infrastructure and faculty support at MCOERC are unmatched. I was encouraged to publish two research papers during my undergrad, which was crucial for my placement.",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Data Scientist @ Microsoft",
      batch: "Class of 2020",
      quote:
        "Matoshri didn't just teach me coding; it taught me how to think like an engineer. The hackathons and coding clubs were the highlight of my four years here.",
    },
    {
      id: 3,
      name: "Rahul Verma",
      role: "Founder, TechNova Solutions",
      batch: "Class of 2019",
      quote:
        "From the incubation center to the entrepreneurship cell, the college provided every resource I needed to start my own agency right out of campus.",
    },
  ];

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* --- BACKGROUND TEXTURE --- */}
      {/* Very subtle grid to keep it white but not 'flat' */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* --- HEADER (MATCHING IMAGE STYLE) --- */}
        <div className="mb-20">
          {/* 1. The Pill Badge */}
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 text-[#0B1C3E] text-[11px] font-extrabold uppercase tracking-[0.15em] mb-6">
            Student Success Stories
          </span>

          {/* 2. The Serif Headline */}
          <h2
            className="text-5xl md:text-6xl font-black text-[#0B1C3E] mb-6 leading-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Your Future Starts <br className="hidden md:block" />
            Here.
          </h2>

          {/* 3. The Orange Accent Line */}
          <div className="w-24 h-2 bg-[#D97706] rounded-full"></div>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-none border-l-4 border-transparent hover:border-[#0B1C3E] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
            >
              {/* Quote Mark */}
              <div className="text-[#D97706] opacity-20 mb-6">
                <QuoteIcon size={48} />
              </div>

              {/* The Quote */}
              <p
                className="text-slate-600 text-lg leading-relaxed font-medium mb-8"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                "{item.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 bg-[#0B1C3E] rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-bold text-[#0B1C3E] text-base leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCall = () => {
  return (
    <>
      <div className=" bg-white p-24 border-t border-slate-100">
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
    </>
  );
};
/* --- ICONS --- */
const QuoteIcon = ({ size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
  </svg>
);

/* --- MAIN PAGE COMPONENT --- */
const HomePage = () => {
  return (
    <main className="font-sans bg-white text-slate-900 w-full overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <LeadershipSection />
      <StatsSection />
      <AcademicsSection />
      <PlacementSection />
      <TestimonialSection />
      <FinalCall />
    </main>
  );
};

export default HomePage;
