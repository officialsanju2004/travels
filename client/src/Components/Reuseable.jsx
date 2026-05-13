// components/CarDetailLayout.jsx
import React, { useState,useRef } from 'react';
import { FaCar, FaUsers, FaDoorOpen, FaCogs, FaSnowflake, FaSuitcase, FaCheckCircle, FaClock, FaShieldAlt, FaHeadset, FaChartLine } from 'react-icons/fa';
import Footer from './Footer';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
const CarDetailLayout = ({ carData }) => {
  const [formData, setFormData] = useState({
    name: '',
    from: '',
    to: '',
    mobile: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileOpenMenus, setMobileOpenMenus] = useState({});
    const [isVisible, setIsVisible] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const autoPlayRef = useRef(null);
    const footerRef = useRef(null);
  const [isNotRobot, setIsNotRobot] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isNotRobot) {
      alert("Please confirm you're not a robot");
      return;
    }
    console.log('Enquiry submitted:', formData);
    alert('Enquiry submitted successfully! We will contact you soon.');
  };
// CORRECTED NAVIGATION STRUCTURE
  const navStructure = {
    "HOME": { type: "link", href: "/" },
    "ABOUT": { type: "link", href: "/about" },
    "OUR FLEETS": {
      type: "dropdown",
      items: {
      "SEDAN": {
  items: [
    { name: "Toyota Etios", link: "/car/toyota-etios" },
    { name: "Honda Amaze", link: "/fleet/honda-amaze" },
    { name: "Honda WRV", link: "/fleet/honda-wrv" }
  ]
},
        "REGULAR SUV": { items: [ {"name": "Ford Endeavour", "link": "/car/ford-endeavour"}, {"name": "Toyota Innova Hycross", "link": "/fleet/toyota-innova-hycross"}, {"name": "Toyota Innova Crysta", "link": "/fleet/toyota-innova-crysta"}, {"name": "Toyota Innova", "link": "/fleet/toyota-innova"} ] },
        "COACHES": { items: [ {"name": "Toyota Hiace", "link": "/car/toyota-hiace"}, {"name": "SML 12STD", "link": "/fleet/sml-12std"}, {"name": "Tempo Traveller 12STD", "link": "/fleet/tempo-traveller-12std"}, {"name": "Tempo Traveller 16STD", "link": "/fleet/tempo-traveller-16std"}, {"name": "SML 20STD", "link": "/fleet/sml-20std"}, {"name": "Coach 40STD", "link": "/fleet/coach-40std"} ] },
        "LUXURY CARS": { items: [ {"name": "Mercedes Benz E Class", "link": "/car/mercedes-e-class"}, {"name": "Mercedes Benz S Class", "link": "/fleet/mercedes-benz-s-class"} ] }
      }
    },
    "CONTACT": {
      type: "dropdown",
      items: {
        "Contact Us": { items: []  },
        "Travel Desk": { items: []  }
      }
    }
  };

  const whyRTT = [
    { icon: <FaChartLine />, text: "Business Transparency" },
    { icon: <FaClock />, text: "We operate 24X7" },
    { icon: <FaCar />, text: "All type of luxury cars, tempo travellers, buses are available on rental basis" },
    { icon: <FaCheckCircle />, text: "Unmatched quality and high service standards" },
    { icon: <FaClock />, text: "On Time Service" },
    { icon: <FaHeadset />, text: "Hassle Free Bookings" },
    { icon: <FaShieldAlt />, text: "Meticulously maintained and constantly updated vehicles" },
    { icon: <FaShieldAlt />, text: "Police Verified Experienced & Uniformed Chauffeurs" }
  ];

  return (
    <>
     {/* Top Bar */}
          <div className="hidden md:block py-2.5 px-6" style={{ backgroundColor: '#1e2a3e' }}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="flex items-center gap-6">
                <a href="tel:+919592257332" className="text-gray-300 hover:text-orange-400 text-sm transition flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#e67e22' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 95922 57332
                </a>
                <a href="mailto:info@amritsarsightseeing.com" className="text-gray-300 hover:text-orange-400 text-sm transition flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#e67e22' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@amritsarsightseeing.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-400">Follow us:</span>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition"><FaInstagram className="w-5 h-5" /></a>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition"><FaFacebookF className="w-5 h-5" /></a>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition"><FaWhatsapp className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
    
          {/* Main Navbar */}
          <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'shadow-md py-2 bg-white/95 backdrop-blur-sm' : 'py-4 bg-white'}`} style={{ borderBottom: '1px solid #f0e6dc' }}>
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <div className="flex justify-between items-center">
                <a href="/" className="flex items-center group">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-lg" style={{ backgroundColor: '#e67e22' }}>
                            <span className="font-bold text-xl tracking-tight" style={{ color: '#ffffff' }}>A</span>
         
                  </div>
                  <div className="ml-3">
                    <span className="font-bold text-xl tracking-tight" style={{ color: '#1e2a3e' }}>Amritsar</span>
                    <span className="block text-xs -mt-0.5 font-medium" style={{ color: '#e67e22' }}>Sight Seeing</span>
                  </div>
                </a>
    
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-1">
                  {Object.entries(navStructure).map(([label, config], idx) => (
                    <div key={idx} className="relative group" onMouseEnter={() => config.type !== "link" && setActiveDropdown(label)} onMouseLeave={() => config.type !== "link" && setActiveDropdown(null)}>
                      {config.type === "link" ? (
                        <a href={config.href} className="px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:bg-orange-50 hover:text-orange-500 block" style={{ color: '#1e2a3e' }}>{label}</a>
                      ) : (
                        <>
                          <button className={`px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center gap-1.5 ${activeDropdown === label ? 'bg-orange-50 text-orange-500' : 'hover:bg-orange-50 hover:text-orange-500'}`} style={{ color: '#1e2a3e' }}>
                            {label}
                            <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          <div className={`absolute left-0 mt-1 w-64 rounded-xl shadow-xl overflow-hidden transition-all duration-200 origin-top ${activeDropdown === label ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`} style={{ backgroundColor: '#ffffff', border: '1px solid #f0e6dc' }}>
                            {Object.entries(config.items).map(([category, categoryData], catIdx) => (
                              <div key={catIdx}>
                                <div className="px-5 py-2.5 bg-orange-50">
                                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#e67e22' }}>{category}</span>
                                </div>
                                <div className="py-1">
                                  {categoryData.items.length > 0 ? categoryData.items.map((item, itemIdx) => (
                                    <a  key={itemIdx}
        href={item.link} className="block px-5 py-2 text-sm transition-all duration-200 hover:bg-orange-50 hover:text-orange-500" style={{ color: '#1e2a3e' }}>{item.name}</a>
                                  )) : (
                                    <a href={`/${category.toLowerCase().replace(/ /g, '')}`} className="block px-5 py-2 text-sm transition-all duration-200 hover:bg-orange-50 hover:text-orange-500" style={{ color: '#1e2a3e' }}>{category}</a>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
    
                <div className="hidden lg:block">
                  <a href="/contactus" className="px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2" style={{ backgroundColor: '#e67e22', color: '#ffffff' }}>
                    <span>🚕</span> Book Now
                  </a>
                </div>
    
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 rounded-xl transition-all duration-200 hover:bg-orange-50" style={{ color: '#1e2a3e' }}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                  </svg>
                </button>
              </div>
    
              {/* Mobile Menu */}
              <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[70vh] opacity-100 mt-5 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
                <div className="py-3 space-y-1 border-t" style={{ borderColor: '#f0e6dc' }}>
                  {Object.entries(navStructure).map(([label, config], idx) => (
                    <div key={idx}>
                      {config.type === "link" ? (
                        <a href={config.href} className="block py-3 px-3 rounded-xl font-medium transition-all duration-200 hover:bg-orange-50 hover:text-orange-500" style={{ color: '#1e2a3e' }} onClick={() => setIsMenuOpen(false)}>{label}</a>
                      ) : (
                        <>
                          <button onClick={() => toggleMobileMenu(label)} className="w-full flex justify-between items-center py-3 px-3 rounded-xl font-medium transition-all duration-200 hover:bg-orange-50" style={{ color: '#1e2a3e' }}>
                            <span>{label}</span>
                            <svg className={`w-5 h-5 transition-transform duration-200 ${mobileOpenMenus[label] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {mobileOpenMenus[label] && (
                            <div className="ml-5 mt-1 space-y-3 border-l-2 pl-3" style={{ borderColor: '#e67e22' }}>
                              {Object.entries(config.items).map(([category, categoryData], catIdx) => (
                                <div key={catIdx} className="space-y-1">
                                  <div className="px-3 py-1.5"><span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#e67e22' }}>{category}</span></div>
                                  {categoryData.items.length > 0 ? categoryData.items.map((item, itemIdx) => (
                                    <a  key={itemIdx}
        href={item.link} className="block py-2 px-4 text-sm rounded-lg transition-all duration-200 hover:bg-orange-50 hover:text-orange-500" style={{ color: '#1e2a3e' }}>{item.name}</a>
                                  )) : (
                                    <a href={`/${category.toLowerCase().replace(/ /g, '')}`} className="block py-2 px-4 text-sm rounded-lg transition-all duration-200 hover:bg-orange-50 hover:text-orange-500" style={{ color: '#1e2a3e' }}>{category}</a>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                  
                  <div className="pt-4 mt-4 border-t" style={{ borderColor: '#f0e6dc' }}>
                    <a href="/contactus" className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl font-semibold transition-all duration-300" style={{ backgroundColor: '#e67e22', color: '#ffffff' }} onClick={() => setIsMenuOpen(false)}>
                      <span>🚕</span> Book Now
                    </a>
                  </div>
    
                  <div className="pt-4 space-y-2 text-sm text-gray-500 px-2">
                    <a href="tel:+919592257332" className="flex items-center gap-2 py-1 text-gray-600"><span>📞</span> +91 95922 57332</a>
                    <a href="mailto:info@amritsarsightseeing.com" className="flex items-center gap-2 py-1 text-gray-600"><span>✉️</span> info@amritsarsightseeing.com</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <img 
          src={carData.heroImage} 
          alt={carData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{carData.name}</h1>
            <p className="text-orange-400 text-lg">{carData.type}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-orange-50 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1e2a3e' }}>Description</h2>
              <p className="text-gray-700 leading-relaxed">{carData.description}</p>
            </div>

            {/* Car Features */}
            <div className="bg-white rounded-2xl p-6 border" style={{ borderColor: '#f0e6dc' }}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#1e2a3e' }}>Car Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl">
                  <FaCar className="text-orange-500 text-xl" />
                  <div>
                    <p className="text-xs text-gray-500">Type</p>
                    <p className="font-semibold" style={{ color: '#1e2a3e' }}>{carData.features.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl">
                  <FaUsers className="text-orange-500 text-xl" />
                  <div>
                    <p className="text-xs text-gray-500">Seats</p>
                    <p className="font-semibold" style={{ color: '#1e2a3e' }}>{carData.features.seats}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl">
                  <FaDoorOpen className="text-orange-500 text-xl" />
                  <div>
                    <p className="text-xs text-gray-500">Door Count</p>
                    <p className="font-semibold" style={{ color: '#1e2a3e' }}>{carData.features.doors}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl">
                  <FaCogs className="text-orange-500 text-xl" />
                  <div>
                    <p className="text-xs text-gray-500">Transmission</p>
                    <p className="font-semibold" style={{ color: '#1e2a3e' }}>{carData.features.transmission}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl">
                  <FaSnowflake className="text-orange-500 text-xl" />
                  <div>
                    <p className="text-xs text-gray-500">Air-conditioned</p>
                    <p className="font-semibold" style={{ color: '#1e2a3e' }}>{carData.features.ac}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl">
                  <FaSuitcase className="text-orange-500 text-xl" />
                  <div>
                    <p className="text-xs text-gray-500">Large Bags</p>
                    <p className="font-semibold" style={{ color: '#1e2a3e' }}>{carData.features.largeBags}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Packages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Outstation Package */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">OUT STATION PACKAGE</h3>
                <p className="text-3xl font-bold mb-2">{carData.packages.outstation.price}</p>
                <p className="text-orange-100 text-sm">{carData.packages.outstation.duration}</p>
                <p className="text-orange-100 text-sm mt-2">Inclusive All</p>
              </div>

              {/* City Tour Package */}
              <div className="bg-gray-900 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">CITY TOUR PACKAGE</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-2xl font-bold text-orange-400">{carData.packages.city.full.price}</p>
                    <p className="text-gray-400 text-sm">{carData.packages.city.full.duration}</p>
                  </div>
                  <div className="border-t border-gray-700 pt-3">
                    <p className="text-2xl font-bold text-orange-400">{carData.packages.city.half.price}</p>
                    <p className="text-gray-400 text-sm">{carData.packages.city.half.duration}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why RTT Standout */}
            <div className="bg-orange-50 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#1e2a3e' }}>Why RTT Standout?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyRTT.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="text-orange-500 mt-1">{item.icon}</div>
                    <p className="text-gray-700 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Enquiry Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-xl overflow-hidden border" style={{ borderColor: '#f0e6dc' }}>
              <div className="bg-orange-500 py-4 px-6">
                <h2 className="text-xl font-bold text-white">Enquiry For Taxi</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-1" style={{ color: '#1e2a3e' }}>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                    required
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500"
                    style={{ borderColor: '#e5ddd0' }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-semibold mb-1" style={{ color: '#1e2a3e' }}>From</label>
                    <input
                      type="text"
                      name="from"
                      value={formData.from}
                      onChange={handleChange}
                      placeholder="Pick Up From"
                      required
                      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500"
                      style={{ borderColor: '#e5ddd0' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1" style={{ color: '#1e2a3e' }}>To</label>
                    <input
                      type="text"
                      name="to"
                      value={formData.to}
                      onChange={handleChange}
                      placeholder="Drop To"
                      required
                      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500"
                      style={{ borderColor: '#e5ddd0' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-semibold mb-1" style={{ color: '#1e2a3e' }}>Mobile</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter Mobile"
                      required
                      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500"
                      style={{ borderColor: '#e5ddd0' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1" style={{ color: '#1e2a3e' }}>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Email"
                      required
                      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500"
                      style={{ borderColor: '#e5ddd0' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1" style={{ color: '#1e2a3e' }}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows="3"
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                    style={{ borderColor: '#e5ddd0' }}
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="robot"
                    checked={isNotRobot}
                    onChange={(e) => setIsNotRobot(e.target.checked)}
                    className="w-5 h-5 rounded accent-orange-500"
                  />
                  <label htmlFor="robot" className="text-gray-700 cursor-pointer">I'm not a robot</label>
                </div>

                <button
                  type="submit"
                    className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ backgroundColor: '#e67e22' }}
                >
                  SUBMIT ENQUIRY
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CarDetailLayout;