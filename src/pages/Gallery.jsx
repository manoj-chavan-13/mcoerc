import React, { useState } from "react";
import {
  Image,
  Play,
  X,
  Menu,
  ArrowUpRight,
  Maximize2,
  ChevronRight,
  Camera,
  Grid3X3,
  Layers,
  Instagram,
  Facebook,
  Twitter,
  Heart,
  MessageCircle,
} from "lucide-react";

// --- MOCK DATA ---

const GALLERY_ITEMS = [
  {
    id: 1,
    type: "image",
    category: "campus",
    src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    title: "Administrative Building",
    desc: "The heart of our campus, established 2008.",
    size: "large", // 2x2
  },
  {
    id: 2,
    type: "image",
    category: "events",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
    title: "Annual Gathering",
    desc: "Students showcasing their cultural talents.",
    size: "tall", // 1x2
  },
  {
    id: 3,
    type: "image",
    category: "labs",
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80",
    title: "Robotics Laboratory",
    desc: "Advanced automation and AI research center.",
    size: "normal", // 1x1
  },
  {
    id: 4,
    type: "image",
    category: "sports",
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
    title: "Football Championship",
    desc: "Victory moment at the district level.",
    size: "wide", // 2x1
  },
  {
    id: 5,
    type: "image",
    category: "campus",
    src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600&q=80",
    title: "Central Library",
    desc: "A quiet space for focus and learning.",
    size: "normal", // 1x1
  },
  {
    id: 6,
    type: "image",
    category: "events",
    src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=600&q=80",
    title: "Convocation Ceremony",
    desc: "Graduating batch of 2024.",
    size: "normal", // 1x1
  },
  {
    id: 7,
    type: "image",
    category: "labs",
    src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80",
    title: "Computer Center",
    desc: "High-performance computing facility.",
    size: "large", // 2x2
  },
  {
    id: 8,
    type: "image",
    category: "campus",
    src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80",
    title: "Student Hostels",
    desc: "Safe and comfortable accommodation.",
    size: "tall", // 1x2
  },
  {
    id: 9,
    type: "image",
    category: "sports",
    src: "https://images.unsplash.com/photo-1519766304707-500e0a898638?auto=format&fit=crop&w=800&q=80",
    title: "Indoor Gymnasium",
    desc: "Fitness and health center.",
    size: "wide", // 2x1
  },
  {
    id: 10,
    type: "image",
    category: "events",
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&q=80",
    title: "TechFest 2025",
    desc: "Innovation and creativity unleashed.",
    size: "normal", // 1x1
  },
  {
    id: 11,
    type: "image",
    category: "labs",
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
    title: "Chemistry Lab",
    desc: "Research and development wing.",
    size: "normal", // 1x1
  },
];

const VIDEOS = [
  {
    id: 1,
    title: "Campus Tour 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    duration: "4:30",
  },
  {
    id: 2,
    title: "Life at Matoshri",
    thumbnail:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    duration: "2:15",
  },
  {
    id: 3,
    title: "TechFest Highlights",
    thumbnail:
      "https://images.unsplash.com/photo-1504384308090-c54be3855091?auto=format&fit=crop&w=800&q=80",
    duration: "3:45",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Media" },
  { id: "campus", label: "Campus Life" },
  { id: "events", label: "Events" },
  { id: "labs", label: "Labs" },
  { id: "sports", label: "Sports" },
];

const SOCIAL_FEED = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80",
    likes: "1.2k",
    comments: "45",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80",
    likes: "856",
    comments: "22",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=400&q=80",
    likes: "2.1k",
    comments: "112",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=400&q=80",
    likes: "940",
    comments: "34",
  },
];

// --- COMPONENTS ---

const Lightbox = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
      >
        <X size={32} />
      </button>

      <div className="max-w-6xl w-full max-h-[90vh] flex flex-col items-center">
        <div className="relative w-full h-auto max-h-[80vh] rounded-lg overflow-hidden shadow-2xl border border-white/10">
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-contain bg-black"
          />
        </div>
        <div className="mt-6 text-center max-w-2xl">
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 block">
            {item.category}
          </span>
          <h3 className="text-3xl font-serif font-bold text-white mb-2">
            {item.title}
          </h3>
          <p className="text-white/60 text-lg">{item.desc}</p>
        </div>
      </div>
    </div>
  );
};

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredItems =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Helper to assign grid classes based on size
  const getItemSpanClass = (size) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "wide":
        return "md:col-span-2 md:row-span-1";
      case "tall":
        return "md:col-span-1 md:row-span-2";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100">
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 px-6 bg-slate-900 overflow-hidden">
        {/* Abstract Tech Pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none"></div>

        <div className="container mx-auto relative z-10 text-center">
          <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 text-white/80 text-sm font-bold mb-6 border border-white/20 backdrop-blur-md">
            <Camera size={14} /> CAMPUS MEMORIES
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight">
            Life at Matoshri
          </h1>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
            Explore the vibrant moments, state-of-the-art infrastructure, and
            dynamic student life through our lens.
          </p>
        </div>
      </div>

      {/* Main Content - Mosaic Grid */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 sticky top-4 z-40 py-2 bg-slate-50/80 backdrop-blur-sm rounded-full max-w-fit mx-auto px-4 border border-slate-200/50 shadow-sm">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 flex items-center gap-2
                ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white shadow-md transform scale-105"
                    : "bg-transparent text-slate-500 hover:bg-slate-200 hover:text-slate-900"
                }`}
            >
              {cat.id === "all" ? <Grid3X3 size={14} /> : <Layers size={14} />}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Mosaic / Destroyed Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px] grid-flow-dense">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`group relative rounded-xl overflow-hidden cursor-pointer bg-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${getItemSpanClass(
                item.size
              )}`}
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-[10%] group-hover:grayscale-0"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {CATEGORIES.find((c) => c.id === item.category)?.label}
                </span>
                <h3 className="text-white font-bold text-xl leading-tight mb-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  {item.title}
                </h3>
                <div className="h-1 w-12 bg-amber-500 mt-3 rounded-full opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 delay-150 origin-left"></div>

                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full text-white border border-white/20 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                  <Maximize2 size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section (Dark) */}
      <div className="bg-slate-900 py-24 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="relative z-10">
              <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-2 block">
                Multimedia
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                Video Showcase
              </h2>
              <p className="text-slate-400 max-w-lg text-lg">
                Watch campus tours, event highlights, and student testimonials
                to get a real feel of the atmosphere.
              </p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium group relative z-10">
              View YouTube Channel{" "}
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Featured Large Video */}
            <div className="md:col-span-2 relative group rounded-2xl overflow-hidden aspect-video bg-black shadow-2xl border border-slate-700">
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80"
                alt="Main Video"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-blue-600/90 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-900/50 transition-all duration-300 group-hover:scale-110 backdrop-blur-sm border-4 border-white/10">
                  <Play size={32} fill="currentColor" className="ml-1" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <h3 className="text-2xl font-bold text-white">
                  Matoshri College: A Cinematic Tour
                </h3>
                <p className="text-slate-300 mt-1">
                  Experience our campus like never before.
                </p>
              </div>
            </div>

            {/* Sidebar Videos */}
            <div className="flex flex-col gap-6">
              {VIDEOS.map((video) => (
                <div
                  key={video.id}
                  className="flex gap-4 group cursor-pointer bg-slate-800/40 p-3 rounded-xl hover:bg-slate-800 transition-colors border border-slate-700/50 hover:border-slate-600"
                >
                  <div className="relative w-32 aspect-video rounded-lg overflow-hidden shrink-0 bg-slate-900">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-sm">
                        <Play size={12} fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-white font-bold text-sm line-clamp-2 group-hover:text-blue-400 transition-colors leading-snug">
                      {video.title}
                    </h4>
                    <p className="text-slate-500 text-xs mt-1.5 font-medium uppercase tracking-wide flex items-center gap-1">
                      <Play size={10} /> {video.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* NEW SECTION: Connect & Community (White BG) */}
      <div className="bg-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left: Text & Call to Action */}
            <div className="flex-1 text-center lg:text-left">
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">
                Social Connect
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                Moments Beyond the Lens
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our campus is alive with stories every single day. Follow our
                official social channels to catch the daily vibe, student
                features, and behind-the-scenes action.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button className="flex items-center gap-3 px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20 group">
                  <Instagram size={20} /> Follow @Matoshri_Edu
                </button>
                <div className="flex gap-2">
                  <button className="p-3 rounded-full border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all">
                    <Facebook size={20} />
                  </button>
                  <button className="p-3 rounded-full border border-slate-200 text-slate-600 hover:text-sky-500 hover:border-sky-200 hover:bg-sky-50 transition-all">
                    <Twitter size={20} />
                  </button>
                </div>
              </div>

              <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-100 inline-block text-left">
                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <Camera size={18} className="text-amber-500" /> specific
                  Photography Club?
                </h4>
                <p className="text-slate-500 text-sm mb-3">
                  Join the student media team and get your clicks featured.
                </p>
                <button className="text-blue-600 text-sm font-bold hover:underline flex items-center gap-1">
                  Submit your photos <ArrowUpRight size={14} />
                </button>
              </div>
            </div>

            {/* Right: Mock Social Grid */}
            <div className="flex-1 w-full max-w-xl">
              <div className="grid grid-cols-2 gap-4">
                {SOCIAL_FEED.map((post, i) => (
                  <div
                    key={post.id}
                    className={`group relative rounded-2xl overflow-hidden cursor-pointer aspect-square shadow-md hover:shadow-xl transition-all duration-300 ${
                      i % 2 !== 0 ? "mt-8" : ""
                    }`}
                  >
                    <img
                      src={post.img}
                      alt="Social Post"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white backdrop-blur-[2px]">
                      <div className="flex items-center gap-1 font-bold">
                        <Heart size={20} fill="white" /> {post.likes}
                      </div>
                      <div className="flex items-center gap-1 font-bold">
                        <MessageCircle size={20} fill="white" /> {post.comments}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

export default GalleryPage;
