import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  User,
} from "lucide-react";

// --- COMPONENTS ---

const SectionHeader = ({ title, subtitle, align = "left" }) => (
  <div
    className={`mb-10 border-b border-slate-200 pb-4 ${
      align === "center" ? "text-center" : "text-left"
    }`}
  >
    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3">
      {title}
    </h2>
    {subtitle && (
      <p className="text-slate-500 text-lg font-light">{subtitle}</p>
    )}
  </div>
);

// --- DATA ---
const ADMIN_CONTACTS = [
  {
    name: "Dr. G. K. Kharate",
    role: "Principal",
    phone: "+91 0253 2406601",
    email: "principal@matoshri.edu.in",
  },
  {
    name: "Mr. T. A. Kulkarni",
    role: "Registrar",
    phone: "+91 0253 2406602",
    email: "registrar@matoshri.edu.in",
  },
  {
    name: "Accounts Section",
    role: "Student Fees",
    phone: "+91 0253 2406603",
    email: "accounts@matoshri.edu.in",
  },
];

// --- MAIN COMPONENT ---

const Contact = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      {/* Hero Section */}
      <div className="relative pt-24 pb-20 px-6 bg-blue-950 overflow-hidden">
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
            GET IN TOUCH
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100/80 font-light max-w-2xl mx-auto">
            We are here to answer your questions. Reach out to us for
            admissions, academic inquiries, or campus visits.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Contact Card & Map Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 mb-16 flex flex-col lg:flex-row">
          {/* Left Panel: Detailed Contact Info (Blue BG) */}
          <div className="lg:w-2/5 bg-slate-900 text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-6 border-b border-white/20 pb-4">
                Reach Us At
              </h3>

              <div className="space-y-8">
                {/* Main Campus */}
                <div>
                  <h4 className="font-bold text-blue-200 mb-2 text-sm uppercase tracking-wider flex items-center gap-2">
                    <MapPin size={14} /> Main Campus
                  </h4>
                  <p className="font-medium text-lg leading-tight mb-2">
                    Matoshri College of Engineering & Research Centre
                  </p>
                  <div className="text-blue-100/80 text-sm leading-relaxed">
                    Eklahare Shivar, Near Odhagaon, Opp Nashik- Ch. Sambhaji
                    Nagar (Aurangabad) Highway, Nashik, Maharashtra 422105
                  </div>
                </div>

                {/* General Communication */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-blue-100/90 hover:text-white transition-colors">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail size={16} />
                    </div>
                    <a href="mailto:info@matoshri.edu.in">
                      info@matoshri.edu.in
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-blue-100/90 hover:text-white transition-colors">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone size={16} />
                    </div>
                    <a href="tel:+9102532406600">+91 0253 2406600</a>
                  </div>
                </div>

                {/* Departmental Directory (New Detail) */}
                <div className="pt-6 border-t border-white/10">
                  <h4 className="font-bold text-blue-200 mb-3 text-sm uppercase tracking-wider">
                    Departmental Emails
                  </h4>
                  <ul className="space-y-2 text-sm text-blue-100/80">
                    <li className="flex justify-between">
                      <span>Principal Office:</span>{" "}
                      <span className="text-white">
                        principal@matoshri.edu.in
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Establishment:</span>{" "}
                      <span className="text-white">est@matoshri.edu.in</span>
                    </li>
                    <li className="flex justify-between">
                      <span>T & P Cell:</span>{" "}
                      <span className="text-white">tpo@matoshri.edu.in</span>
                    </li>
                  </ul>
                </div>

                {/* Office Hours (New Detail) */}
                <div className="pt-4">
                  <h4 className="font-bold text-blue-200 mb-2 text-sm uppercase tracking-wider flex items-center gap-2">
                    <Clock size={14} /> Office Hours
                  </h4>
                  <p className="text-sm text-blue-100/80">
                    Monday - Saturday: 9:00 AM - 5:00 PM
                  </p>
                  <p className="text-xs text-blue-100/60">
                    Closed on Sundays and Public Holidays
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-8 relative z-10">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-sky-500 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-pink-600 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Right Panel: Map */}
          <div className="lg:w-3/5 bg-slate-100 min-h-[500px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.659380281096!2d73.8376163149183!3d19.98094698657525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb43113253b1%3A0x674365333840458!2sMatoshri%20College%20of%20Engineering%20and%20Research%20Center!5e0!3m2!1sen!2sin!4v1677834567890!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Matoshri College Location"
            ></iframe>
          </div>
        </div>

        {/* Key Administrative Contacts (New Section) */}
        <div className="mb-20">
          <SectionHeader
            title="Key Administrative Contacts"
            subtitle="Direct lines for specific departments"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {ADMIN_CONTACTS.map((contact, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{contact.name}</h4>
                  <p className="text-xs font-bold text-amber-600 uppercase tracking-wide mb-2">
                    {contact.role}
                  </p>
                  <a
                    href={`tel:${contact.phone}`}
                    className="block text-sm text-slate-600 hover:text-blue-600 mb-1 flex items-center gap-2"
                  >
                    <Phone size={12} /> {contact.phone}
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="block text-sm text-slate-600 hover:text-blue-600 flex items-center gap-2"
                  >
                    <Mail size={12} /> {contact.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inquiry Form Section */}
        <div className="max-w-4xl mx-auto bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">
              Send us a Message
            </h2>
            <p className="text-slate-500">
              Have a general query? Fill out the form below and we'll get back
              to you.
            </p>
          </div>

          <form>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Department / Subject
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white">
                  <option>General Inquiry</option>
                  <option>Admissions</option>
                  <option>Training & Placement</option>
                  <option>Administration</option>
                </select>
              </div>
            </div>
            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="How can we help you?"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="button"
                className="px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-200 flex items-center gap-2 mx-auto"
              >
                <Send size={18} /> Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
