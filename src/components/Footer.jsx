import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Linkedin,
  ChevronRight,
  ArrowUp,
} from "lucide-react";
import logo from "../assets/logo.png";
// Data Constants
const usefulLinksColumn1 = [
  { name: "Academic Calendar", href: "#" },
  { name: "Admission Brochure", href: "#" },
  { name: "IQAC", href: "#" },
  { name: "Institute Audit Statements", href: "#" },
  { name: "Syllabus", href: "#" },
  { name: "NSS", href: "#" },
  { name: "Mandatory Disclosure", href: "#" },
  { name: "Fee Regulatory Authority", href: "#" },
  { name: "Publications", href: "#" },
  { name: "Available Scholarship", href: "#" },
  { name: "Received Scholarship", href: "#" },
  { name: "Equal Opportunity Center", href: "#" },
  { name: "NIRF", href: "#" },
];

const usefulLinksColumn2 = [
  { name: "College Development Plan", href: "#" },
  { name: "Governing Body", href: "#" },
  { name: "College Development Committee", href: "#" },
  { name: "College Grievance Redressal Cell", href: "#" },
  { name: "Institute Academic Advisory Committee", href: "#" },
  { name: "Anti Ragging Cell", href: "#" },
  { name: "Women's Grievance Cell", href: "#" },
  { name: "SC/ ST Committee", href: "#" },
  { name: "Engineering Workshop", href: "#" },
  { name: "Service Rules and Regulations", href: "#" },
  { name: "IIC", href: "#" },
  { name: "Matoshri Education Society", href: "#" },
];

const contactInfo = {
  address:
    "Eklahare shivar, Near Odhagaon, Opp Nashik-Ch. Sambhaji Nagar (Aurangabad) Highway, Nashik, Maharashtra 422105",
  email: "info@matoshri.edu.in",
  phone: "+91 0253 2406600",
};

const Footer = () => {
  return (
    <div className="relative mt-32">
      {/* Curved Top Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -translate-y-[98%] z-10">
        <svg
          className="relative block w-full h-[80px] md:h-[120px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-slate-900"
          ></path>
        </svg>
      </div>

      <footer className="bg-slate-900 text-slate-300 pt-10 pb-8 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
            {/* Column 1: Institute Info (4 cols wide) */}
            <div className="lg:col-span-4 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8  text-blue-900 rounded-2xl flex items-center justify-center font-serif font-bold text-lg shadow-lg">
                    <img
                      src={logo}
                      alt="Matoshri College Logo"
                      className="w-full h-full object-fill rounded-2xl"
                    />

                    {/* Decorative Gold Badge on Logo (Kept as is) */}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                      MCOERC
                    </h2>
                    <p className="text-xs text-blue-400 font-semibold tracking-widest uppercase">
                      Matoshri Education Society
                    </p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 border-l-2 border-blue-600 pl-4">
                  Matoshri College of Engineering and Research Centre, Eklahare,
                  Nashik. Empowering students through excellence in technical
                  education.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="mt-1 p-2 bg-slate-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <span className="text-sm leading-relaxed group-hover:text-white transition-colors">
                    {contactInfo.address}
                  </span>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Mail size={16} className="text-white" />
                  </div>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm group-hover:text-white transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Phone size={16} className="text-white" />
                  </div>
                  <span className="text-sm group-hover:text-white transition-colors">
                    {contactInfo.phone}
                  </span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 pt-4">
                {[
                  { Icon: Facebook, color: "hover:bg-blue-600" },
                  { Icon: Twitter, color: "hover:bg-sky-500" },
                  { Icon: Youtube, color: "hover:bg-red-600" },
                  { Icon: Instagram, color: "hover:bg-pink-600" },
                  { Icon: Linkedin, color: "hover:bg-blue-700" },
                ].map(({ Icon, color }, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className={`w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 shadow-lg ${color}`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Useful Links 1 (4 cols wide) */}
            <div className="lg:col-span-4">
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                Useful Links
              </h3>
              <ul className="space-y-2">
                {usefulLinksColumn1.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-blue-400 hover:pl-2 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <ChevronRight
                        size={14}
                        className="text-slate-600 group-hover:text-blue-500"
                      />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Useful Links 2 (4 cols wide) */}
            <div className="lg:col-span-4">
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                Administrative & Cells
              </h3>
              <ul className="space-y-2">
                {usefulLinksColumn2.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-blue-400 hover:pl-2 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <ChevronRight
                        size={14}
                        className="text-slate-600 group-hover:text-blue-500"
                      />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} Matoshri Education Society. All
              Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all hover:-translate-y-1 hidden md:block"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </footer>
    </div>
  );
};

export default Footer;
