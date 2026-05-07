// ContactPage.jsx
import React, { useEffect, useRef, useState } from 'react';
import Footer from './Footer';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const ContactPage = () => {
    
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
 
  const [formData, setFormData] = useState({
    name: '',
    from: '',
    to: '',
    mobile: '',
    email: '',
    message: ''
  });
  const [isRobot, setIsRobot] = useState(false);
  const sectionRef = useRef(null);
// CORRECTED NAVIGATION STRUCTURE
  const navStructure = {
    "HOME": { type: "link", href: "/" },
    "ABOUT": { type: "link", href: "/about" },
    "OUR FLEETS": {
      type: "dropdown",
      items: {
        "SEDAN": { items: ["Toyota Etios", "Honda Amaze", "Honda WRV"] },
        "REGULAR SUV": { items: ["Ford Endeavour", "Toyota Innova Hycross", "Toyota Innova Crysta", "Toyota Innova"] },
        "COACHES": { items: ["Toyota Hiace", "SML 12STD", "Tempo Traveller 12STD", "Tempo Traveller 16STD", "SML 20STD", "Coach 40STD"] },
        "LUXURY CARS": { items: ["Mercedes Benz E Class", "Mercedes Benz S Class"] }
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

  const toggleMobileMenu = (menuKey) => {
    setMobileOpenMenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isRobot) {
      alert("Please confirm you're not a robot");
      return;
    }
    console.log('Form submitted:', formData);
    alert('Enquiry submitted successfully! We will contact you soon.');
  };

  // Kennedy Avenue, Amritsar coordinates
  const mapAddress = "79 Kennedy Avenue, Amritsar, Punjab 143001";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.334!2d74.876!3d31.634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa4e73d0b5%3A0x6b3b5c5d5e5e5e5e!2sKennedy%20Avenue%2C%20Amritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  const fadeInClass = (delay) => 
    `transition-all duration-700 delay-${delay} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`;

  return (
    <>
    {/* Top Bar */}
          <div className="hidden md:block py-2.5 px-6" style={{ backgroundColor: '#1e2a3e' }}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="flex items-center gap-6">
                <a href="tel:+919888767474" className="text-gray-300 hover:text-orange-400 text-sm transition flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#e67e22' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 98887 67474
                </a>
                <a href="mailto:info@ranveertravels.com" className="text-gray-300 hover:text-orange-400 text-sm transition flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#e67e22' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@ranveertravels.com
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
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <span className="font-bold text-xl tracking-tight" style={{ color: '#1e2a3e' }}>RANVEER</span>
                    <span className="block text-xs -mt-0.5 font-medium" style={{ color: '#e67e22' }}>Tour & Travels</span>
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
                                    <a key={itemIdx} href="#" className="block px-5 py-2 text-sm transition-all duration-200 hover:bg-orange-50 hover:text-orange-500" style={{ color: '#1e2a3e' }}>{item}</a>
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
                  <a href="/contact" className="px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2" style={{ backgroundColor: '#e67e22', color: '#ffffff' }}>
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
                                    <a key={itemIdx} href="#" className="block py-2 px-4 text-sm rounded-lg transition-all duration-200 hover:bg-orange-50 hover:text-orange-500" style={{ color: '#1e2a3e' }}>{item}</a>
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
                    <a href="/contact" className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl font-semibold transition-all duration-300" style={{ backgroundColor: '#e67e22', color: '#ffffff' }} onClick={() => setIsMenuOpen(false)}>
                      <span>🚕</span> Book Now
                    </a>
                  </div>
    
                  <div className="pt-4 space-y-2 text-sm text-gray-500 px-2">
                    <a href="tel:+919888767474" className="flex items-center gap-2 py-1 text-gray-600"><span>📞</span> +91 98887 67474</a>
                    <a href="mailto:info@ranveertravels.com" className="flex items-center gap-2 py-1 text-gray-600"><span>✉️</span> info@ranveertravels.com</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
    
    <div ref={sectionRef} className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      
      {/* Hero Section */}
      <div className="relative py-20 px-4 md:px-8 overflow-hidden" style={{ backgroundColor: '#1e2a3e' }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full" style={{ backgroundColor: '#e67e22' }} />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full" style={{ backgroundColor: '#e67e22' }} />
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className={`text-sm uppercase tracking-wider mb-3 ${fadeInClass('0')}`} 
             style={{ color: '#e67e22', letterSpacing: '3px' }}>
            Get in Touch
          </p>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${fadeInClass('100')}`}
              style={{ color: '#ffffff' }}>
            Contact Us
          </h1>
          <div className={`w-20 h-1 mx-auto rounded-full ${fadeInClass('200')}`}
               style={{ backgroundColor: '#e67e22' }} />
          <p className={`text-gray-300 max-w-2xl mx-auto mt-6 text-lg ${fadeInClass('300')}`}>
            We're here to help you 24/7. Reach out to us for any taxi booking inquiries, 
            corporate travel needs, or group tour planning.
          </p>
        </div>
      </div>

      {/* Contact Info & Form Section */}
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Side - Contact Details & Bank Info */}
            <div>
              {/* Office Info Card */}
              <div className={`rounded-2xl p-6 mb-6 ${fadeInClass('0')}`}
                   style={{ backgroundColor: '#fff7f0', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <h2 className="text-2xl font-bold mb-5 flex items-center gap-2" style={{ color: '#1e2a3e' }}>
                  <span className="text-2xl">📍</span> Our Office
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Main Office</p>
                    <p className="text-gray-800 font-medium">79 Kennedy Avenue, Amritsar, Punjab 143001</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Branch Office</p>
                    <p className="text-gray-800 font-medium">2 Maple Street, Back side IVY Hospital, Airport Road, Amritsar, Punjab 143001</p>
                  </div>
                </div>
              </div>

              {/* Contact Details Card */}
              <div className={`rounded-2xl p-6 mb-6 ${fadeInClass('100')}`}
                   style={{ backgroundColor: '#fff7f0', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <h2 className="text-2xl font-bold mb-5 flex items-center gap-2" style={{ color: '#1e2a3e' }}>
                  <span className="text-2xl">📞</span> Contact Details
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e67e22' }}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Call Us 24/7</p>
                      <p className="font-semibold text-lg" style={{ color: '#1e2a3e' }}>+91 98887 67474</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e67e22' }}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email Us</p>
                      <p className="font-semibold" style={{ color: '#1e2a3e' }}>info@ranveertravels.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e67e22' }}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Working Hours</p>
                      <p className="font-semibold" style={{ color: '#1e2a3e' }}>24/7 - Always Open</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bank Details Card */}
              <div className={`rounded-2xl p-6 ${fadeInClass('200')}`}
                   style={{ backgroundColor: '#fff7f0', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <h2 className="text-2xl font-bold mb-5 flex items-center gap-2" style={{ color: '#1e2a3e' }}>
                  <span className="text-2xl">🏦</span> Bank Details
                </h2>
                
                {/* HDFC Bank */}
                <div className="mb-6 pb-5 border-b" style={{ borderColor: '#e5ddd0' }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold" style={{ color: '#004d40' }}>HDFC</span>
                    <span className="text-sm px-2 py-0.5 rounded" style={{ backgroundColor: '#004d40', color: '#fff' }}>BANK</span>
                  </div>
                  <p className="text-gray-800 font-semibold">RANVEER TOUR & TRAVELS</p>
                  <p className="text-gray-600 text-sm mt-2">Account No.: <span className="font-mono">50200008838217</span></p>
                  <p className="text-gray-600 text-sm">NEFT IFSC Code: <span className="font-mono font-semibold" style={{ color: '#e67e22' }}>HDFC0001359</span></p>
                </div>

                {/* ICICI Bank */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold" style={{ color: '#b31b1b' }}>ICICI</span>
                    <span className="text-sm px-2 py-0.5 rounded" style={{ backgroundColor: '#b31b1b', color: '#fff' }}>Bank</span>
                  </div>
                  <p className="text-gray-800 font-semibold">RANVEER TOUR & TRAVELS</p>
                  <p className="text-gray-600 text-sm mt-2">Account No.: <span className="font-mono">006605500476</span></p>
                  <p className="text-gray-600 text-sm">NEFT IFSC Code: <span className="font-mono font-semibold" style={{ color: '#e67e22' }}>ICIC0000066</span></p>
                </div>
              </div>
            </div>

            {/* Right Side - Enquiry Form */}
            <div className={`rounded-2xl p-6 md:p-8 ${fadeInClass('300')}`}
                 style={{ backgroundColor: '#f8f4f0', boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.1)' }}>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6" style={{ color: '#1e2a3e' }}>
                Enquiry For Taxi
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Your Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1e2a3e' }}>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                    required
                    className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all"
                    style={{ borderColor: '#e5ddd0', backgroundColor: '#ffffff', focusRingColor: '#e67e22' }}
                  />
                </div>

                {/* From & To - Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#1e2a3e' }}>From</label>
                    <input
                      type="text"
                      name="from"
                      value={formData.from}
                      onChange={handleChange}
                      placeholder="Pick Up From"
                      required
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
                      style={{ borderColor: '#e5ddd0', backgroundColor: '#ffffff' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#1e2a3e' }}>To</label>
                    <input
                      type="text"
                      name="to"
                      value={formData.to}
                      onChange={handleChange}
                      placeholder="Drop To"
                      required
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
                      style={{ borderColor: '#e5ddd0', backgroundColor: '#ffffff' }}
                    />
                  </div>
                </div>

                {/* Mobile & Email - Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#1e2a3e' }}>Mobile</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter Mobile"
                      required
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
                      style={{ borderColor: '#e5ddd0', backgroundColor: '#ffffff' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#1e2a3e' }}>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Email"
                      required
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
                      style={{ borderColor: '#e5ddd0', backgroundColor: '#ffffff' }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1e2a3e' }}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 resize-none"
                    style={{ borderColor: '#e5ddd0', backgroundColor: '#ffffff' }}
                  />
                </div>

                {/* I'm not a robot Checkbox */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="robotCheck"
                    checked={isRobot}
                    onChange={(e) => setIsRobot(e.target.checked)}
                    className="w-5 h-5 rounded cursor-pointer"
                    style={{ accentColor: '#e67e22' }}
                  />
                  <label htmlFor="robotCheck" className="text-gray-700 cursor-pointer">I'm not a robot</label>
                </div>

                {/* Submit Button */}
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

      {/* Map Section */}
      <div className={`py-8 px-4 md:px-8 ${fadeInClass('400')}`}>
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-xl" style={{ boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.15)' }}>
            <iframe
              src={mapEmbedUrl}
              className="w-full h-80 md:h-96"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ranveer Tour & Travels Office Location - Kennedy Avenue, Amritsar"
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-3">
            📍 79 Kennedy Avenue, Amritsar, Punjab 143001
          </p>
        </div>
      </div>

      {/* Custom CSS for transition delays */}
      <style jsx>{`
        .delay-0 { transition-delay: 0ms; }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }
        input:focus, textarea:focus {
          ring-color: #e67e22;
          border-color: #e67e22;
        }
      `}</style>
    </div>
    <Footer/>
    </>
  );
};

export default ContactPage;