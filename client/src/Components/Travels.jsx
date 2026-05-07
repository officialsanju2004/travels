// Home.jsx
import React, { useEffect, useRef, useState } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import Testimonials from './Testimonials';
import AboutSection from './AboutSmall';

const Home = () => {
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

  const VIDEO_ID = "YOUR_VIDEO_ID_HERE";
  const THUMBNAIL_URL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
  const VIDEO_URL = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`;

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handlePlayVideo = () => setIsVideoPlaying(true);

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  // Car rentals data
  const carRentals = [
    "Mercedes Benz E Class", "Mercedes Benz S Class", "Toyota Etios", "Honda Amaze",
    "Honda Wrx", "Ford Endeavour", "Toyota Innova Hycross", "Toyota Innova Crysta",
    "Toyota Innova", "Toyota HiAcc", "SML 12STD", "Tempo Traveller 12STD",
    "Tempo Traveller 16STD", "SML 20STD", "Coach 40STD"
  ];

  const topDestinations = [
    "Amritsar to Chandigarh", "Amritsar to Shimla", "Amritsar to Dalhousie", "Amritsar to Dharamshala",
    "Amritsar to Palampur", "Amritsar to Srinagar", "Amritsar to Patnitop", "Amritsar to Chintpuri Temple",
    "Amritsar to Jwala Ji Temple", "Amritsar to Kangra Devi", "Amritsar to Chamunda Devi",
    "Amritsar to Maa Vaishno Devi", "Amritsar to TarnTaran Sahib", "Amritsar to Khadur Sahib",
    "Amritsar to Goindwal Sahib", "Amritsar to Baba Budha Sahib", "Amritsar to San Sahib",
    "Amritsar to Shri Chheharta Sahib", "Amritsar to Anandpur Sahib"
  ];

  const taxiServices = [
    "Golden Temple Taxi Service", "Jallianwala Bagh Taxi Service", "Wagah Border Taxi Service",
    "Durgiana Temple Taxi Service", "Partition Museum Taxi Service", "Sada Pind Taxi Service",
    "Gurudwara Shaheedan Sahib Taxi Service", "Mata Lal Devi Temple Taxi Service",
    "Gobind Garh Fort Taxi Service", "War Heroes Memorial Museum Taxi Service"
  ];

  const fadeInClass = (delay) => 
    `transition-all duration-700 delay-${delay} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`;

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&h=1080&fit=crop",
      mobileImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=1200&fit=crop",
      title: "Luxury Fleet",
      subtitle: "Premium Cars for Every Journey",
      description: "Experience comfort and style with our premium collection of Mercedes, Toyota, and luxury vehicles.",
      ctaText: "Book Now",
      ctaLink: "#booking",
      tag: "Premium Collection"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1606664515524-ed8f3c0590e5?w=1920&h=1080&fit=crop",
      mobileImage: "https://images.unsplash.com/photo-1606664515524-ed8f3c0590e5?w=800&h=1200&fit=crop",
      title: "Tempo Traveller",
      subtitle: "Group Travel Made Easy",
      description: "Spacious and comfortable tempo travellers perfect for family trips and group tours.",
      ctaText: "Explore Fleet",
      ctaLink: "#fleet",
      tag: "Group Travel"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1920&h=1080&fit=crop",
      mobileImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=1200&fit=crop",
      title: "24/7 Taxi Service",
      subtitle: "Your Trusted Travel Partner",
      description: "Round-the-clock taxi services in Amritsar and across Punjab. Reliable, punctual, and professional.",
      ctaText: "Call Now",
      ctaLink: "tel:+919888767474",
      tag: "Always Available"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1920&h=1080&fit=crop",
      mobileImage: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=1200&fit=crop",
      title: "Temple & Tour Packages",
      subtitle: "Explore Holy Destinations",
      description: "Special packages for Golden Temple, Vaishno Devi, and all major pilgrimage sites.",
      ctaText: "View Packages",
      ctaLink: "#packages",
      tag: "Pilgrimage Tours"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const cars = [
    { id: 1, name: "Mercedes Benz E Class", image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=500&fit=crop", doors: 4, passengers: 3, luggage: 2, price: "From ₹15/km", type: "Luxury Sedan", features: ["Leather Seats", "AC", "WiFi", "Water Bottles"] },
    { id: 2, name: "Mercedes Benz S Class", image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=500&fit=crop", doors: 4, passengers: 3, luggage: 2, price: "From ₹20/km", type: "Luxury Sedan", features: ["Massage Seats", "AC", "WiFi", "Refreshments"] },
    { id: 3, name: "Toyota Innova Crysta", image: "https://images.unsplash.com/photo-1606664515524-ed8f3c0590e5?w=800&h=500&fit=crop", doors: 4, passengers: 7, luggage: 4, price: "From ₹12/km", type: "SUV/MUV", features: ["Spacious", "AC", "USB Charging", "Bottle Holders"] },
    { id: 4, name: "Tempo Traveller", image: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800&h=500&fit=crop", doors: 2, passengers: 12, luggage: 8, price: "From ₹25/km", type: "Luxury Bus", features: ["Pushback Seats", "AC", "TV", "Reading Lights"] }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = windowWidth < 768 ? 1 : 2;
  const totalPages = Math.ceil(cars.length / itemsPerPage);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isAutoPlaying && totalPages > 1) {
      const carInterval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
      }, 5000);
      return () => clearInterval(carInterval);
    }
  }, [isAutoPlaying, totalPages]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getCurrentCars = () => {
    const start = currentIndex * itemsPerPage;
    return cars.slice(start, start + itemsPerPage);
  };

  const current = slides[currentSlide];

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

  const toggleMobileMenu = (menuKey) => {
    setMobileOpenMenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };

  const features = [
    {
      title: "Competitive Pricing",
      description: "We offer competitive prices on Taxi Booking both in and out Amritsar.",
      icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>)
    },
    {
      title: "Award Winning Service",
      description: "24x7 Taxi service in Amritsar, Travel worry free.",
      icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>)
    },
    {
      title: "Area Coverage",
      description: "Apart from Amritsar, We Cover all major places in Punjab and other nearby places.",
      icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>)
    },
    {
      title: "Experienced Team",
      description: "We have well trained, experienced and professional team of chauffeurs.",
      icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>)
    }
  ];

  const getDelayClass = (index) => {
    const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-300'];
    return delays[index % delays.length];
  };

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

      {/* Hero Section with lazy loading */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with optimized loading */}
        <div className="absolute inset-0 w-full h-full">
          {slides.map((slide, idx) => (
            <div key={slide.id} className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}>
              <picture>
                <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" loading={idx === 0 ? "eager" : "lazy"} />
              </picture>
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </div>

        <button onClick={prevSlide} className="hidden md:flex absolute left-4 md:left-8 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl" style={{ backgroundColor: '#1e2a3e', color: '#e67e22' }}>
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={nextSlide} className="hidden md:flex absolute right-4 md:right-8 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl" style={{ backgroundColor: '#1e2a3e', color: '#e67e22' }}>
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 md:mb-6 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-medium" style={{ backgroundColor: '#e67e22', color: '#ffffff' }}>{current.tag}</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4" style={{ color: '#ffffff' }}>{current.title}</h1>
            <p className="text-xl sm:text-2xl md:text-3xl mb-4 md:mb-6" style={{ color: '#f0e6dc' }}>{current.subtitle}</p>
            <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8 max-w-2xl">{current.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={current.ctaLink} className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5" style={{ backgroundColor: '#e67e22', color: '#ffffff' }}>
                {current.ctaText}
                <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="#fleet" className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 border-2" style={{ borderColor: '#e67e22', color: '#e67e22', backgroundColor: 'transparent' }}
                onMouseEnter={(e) => { e.target.style.backgroundColor = '#e67e22'; e.target.style.color = '#ffffff'; }}
                onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#e67e22'; }}>
                View All Cars
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 md:bottom-10 left-0 right-0 z-20 flex justify-center gap-2 md:gap-3">
          {slides.map((_, idx) => (<button key={idx} onClick={() => goToSlide(idx)} className="h-2 md:h-2.5 rounded-full transition-all duration-300" style={{ width: currentSlide === idx ? '32px' : '8px', backgroundColor: currentSlide === idx ? '#e67e22' : 'rgba(255,255,255,0.5)' }} />))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1e2a3e' }}>Why Choose Us</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#e67e22' }} />
            <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">Through our world class services we have successfully catered to a large number of clients. Our taxi services in Amritsar have earned us accolades from all quarters for offering ultimate comfort to all our customers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`group relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${getDelayClass(index)}`} style={{ backgroundColor: index % 2 === 0 ? '#fff7f0' : '#f8f4f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)' }}>
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"><div className="absolute -top-8 -right-8 w-16 h-16 rotate-45" style={{ backgroundColor: '#e67e22' }} /></div>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ color: '#e67e22', backgroundColor: 'rgba(230, 126, 34, 0.1)' }}>{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-orange-600" style={{ color: '#1e2a3e' }}>{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20 px-4 md:px-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider mb-3" style={{ color: '#e67e22', letterSpacing: '3px' }}>Our Premium Fleet</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#1e2a3e' }}>Featured Cars</h2>
            <div className="w-20 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: '#e67e22' }} />
            <p className="max-w-2xl mx-auto mt-6 text-gray-600">Our car rental services are widely demanded and highly reliable. Whether it's a family trip or a business tour, we offer services round-the-clock.</p>
          </div>
          <div className="relative">
            {totalPages > 1 && (<>
              <button onClick={handlePrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-10" style={{ backgroundColor: '#1e2a3e', color: '#e67e22' }}><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
              <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-10" style={{ backgroundColor: '#1e2a3e', color: '#e67e22' }}><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
            </>)}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {getCurrentCars().map((car) => (
                <div key={car.id} className="group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl" style={{ backgroundColor: '#f8f4f0', boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.15)' }}>
                  <div className="relative overflow-hidden h-56 md:h-64"><img src={car.image} alt={car.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" /><div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white font-semibold text-sm" style={{ backgroundColor: '#e67e22' }}>{car.price}</div><div className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#1e2a3e', color: '#e67e22' }}>{car.type}</div></div>
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: '#1e2a3e' }}>{car.name}</h3>
                    <div className="flex items-center gap-6 mb-4 pb-3 border-b" style={{ borderColor: '#e5ddd0' }}>
                      <div className="flex items-center gap-2 text-gray-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#e67e22' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg><span>{car.doors} Doors</span></div>
                      <div className="flex items-center gap-2 text-gray-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#e67e22' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg><span>{car.passengers} Passengers</span></div>
                      <div className="flex items-center gap-2 text-gray-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#e67e22' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg><span>{car.luggage} Luggage</span></div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-5">{car.features.map((feature, i) => (<span key={i} className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#fff0e6', color: '#e67e22' }}>{feature}</span>))}</div>
                    <button className="w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5" style={{ backgroundColor: '#1e2a3e', color: '#e67e22', border: '1px solid #e67e22' }}
                      onMouseEnter={(e) => { e.target.style.backgroundColor = '#e67e22'; e.target.style.color = '#ffffff'; }}
                      onMouseLeave={(e) => { e.target.style.backgroundColor = '#1e2a3e'; e.target.style.color = '#e67e22'; }}>Book This Car</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {totalPages > 1 && (<div className="flex justify-center gap-2 mt-10">{[...Array(totalPages)].map((_, idx) => (<button key={idx} onClick={() => { setIsAutoPlaying(false); setCurrentIndex(idx); setTimeout(() => setIsAutoPlaying(true), 10000); }} className="h-2 rounded-full transition-all duration-300" style={{ width: currentIndex === idx ? '32px' : '8px', backgroundColor: currentIndex === idx ? '#e67e22' : '#d1c4b3' }} />))}</div>)}
        </div>
      </section>

      <AboutSection />

      {/* Video Section */}
      <section className="py-16 px-4 md:px-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10"><p className="text-sm uppercase tracking-wider mb-3" style={{ color: '#e67e22', letterSpacing: '3px' }}>Explore One of The Leading</p>
            <h2 className="text-3xl md:text-5xl font-bold" style={{ color: '#1e2a3e' }}>TAXI SERVICE IN AMRITSAR</h2>
            <div className="w-20 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: '#e67e22' }} />
          </div>
          <div className="text-center mb-10"><h3 className="text-2xl md:text-3xl font-semibold" style={{ color: '#1e2a3e' }}>RANVEER TOUR & TRAVELS</h3></div>
          <div className="rounded-2xl overflow-hidden transition-all duration-700" style={{ boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.15)', backgroundColor: '#f8f4f0' }}>
            <div className="relative aspect-video bg-gray-900">
              {!isVideoPlaying ? (
                <div className="relative w-full h-full cursor-pointer group" onClick={handlePlayVideo}>
                  <img src={THUMBNAIL_URL} alt="Ranveer Tour & Travels" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-2xl" style={{ backgroundColor: '#e67e22' }}>
                      <svg className="w-10 h-10 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-red-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    <span>Watch on YouTube</span>
                  </div>
                </div>
              ) : (<iframe className="absolute top-0 left-0 w-full h-full" src={VIDEO_URL} title="Ranveer Tour & Travels" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />)}
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3"><span className="text-gray-700 font-medium">Luxury Fleet in Amritsar</span><div className="flex flex-wrap gap-2"><span className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: '#fff0e6', color: '#e67e22' }}>#amritsar</span><span className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: '#fff0e6', color: '#e67e22' }}>#innovacrysta</span><span className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: '#fff0e6', color: '#e67e22' }}>#tempotraveller</span></div></div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: '#1e2a3e' }}><span className="text-white font-bold text-xl">SML</span><span className="text-gray-300 text-xs">Fleet</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Footer */}
      <footer ref={footerRef} className="pt-16 pb-8 px-4 md:px-8" style={{ backgroundColor: '#1e2a3e' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className={fadeInClass('0')}>
              <h3 className="text-xl font-bold mb-5 pb-2 inline-block border-b-2" style={{ color: '#e67e22', borderBottomColor: '#e67e22' }}>Contact Info</h3>
              <div className="space-y-4">
                <div><p className="text-gray-400 text-sm mb-1">Got Questions? Call us 24/7!</p><p className="text-white font-semibold text-lg flex items-center gap-2"><svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#e67e22' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>+91 98887 67474</p></div>
                <div><p className="text-gray-400 text-sm mb-1 flex items-center gap-2"><svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#e67e22' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>info@ranveertravels.com</p></div>
                <div><p className="text-gray-400 text-sm flex items-start gap-2"><svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#e67e22' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg><span className="text-gray-300 text-sm">79 Kennedy Avenue Amritsar Punjab 143001</span></p></div>
                <div><p className="text-gray-400 text-sm flex items-start gap-2"><svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#e67e22' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg><span className="text-gray-300 text-sm">2 Maple Street Back side IVY Hospital Airport Road Amritsar Punjab 143001</span></p></div>
              </div>
            </div>
            <div className={fadeInClass('100')}><h3 className="text-xl font-bold mb-5 pb-2 inline-block border-b-2" style={{ color: '#e67e22', borderBottomColor: '#e67e22' }}>Car Rentals</h3><div className="grid grid-cols-1 gap-1">{carRentals.map((car, index) => (<a key={index} href="#" className="text-gray-400 hover:text-orange-500 text-sm py-1 transition-colors duration-200 flex items-center gap-1"><span className="text-orange-500">›</span> {car}</a>))}</div></div>
            <div className={fadeInClass('200')}><h3 className="text-xl font-bold mb-5 pb-2 inline-block border-b-2" style={{ color: '#e67e22', borderBottomColor: '#e67e22' }}>Top Destinations</h3><div className="grid grid-cols-1 gap-1 max-h-80 overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin' }}>{topDestinations.map((destination, index) => (<a key={index} href="#" className="text-gray-400 hover:text-orange-500 text-sm py-1 transition-colors duration-200 flex items-center gap-1"><span className="text-orange-500">›</span> {destination}</a>))}</div></div>
            <div className={fadeInClass('300')}><h3 className="text-xl font-bold mb-5 pb-2 inline-block border-b-2" style={{ color: '#e67e22', borderBottomColor: '#e67e22' }}>Taxi Service In Amritsar</h3><div className="grid grid-cols-1 gap-1">{taxiServices.map((service, index) => (<a key={index} href="#" className="text-gray-400 hover:text-orange-500 text-sm py-1 transition-colors duration-200 flex items-center gap-1"><span className="text-orange-500">›</span> {service}</a>))}</div></div>
          </div>
          <div className="pt-8 mt-4 border-t text-center" style={{ borderColor: '#2d3e4e' }}><p className="text-gray-500 text-sm">© {new Date().getFullYear()} Ranveer Tour & Travels. All rights reserved.</p></div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg animate-bounce"
          style={{ backgroundColor: '#e67e22', color: '#ffffff' }}
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}

      <style jsx>{`
        .delay-0 { transition-delay: 0ms; }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .max-h-80 { max-height: 20rem; }
        .overflow-y-auto::-webkit-scrollbar { width: 4px; }
        .overflow-y-auto::-webkit-scrollbar-track { background: #2d3e4e; border-radius: 4px; }
        .overflow-y-auto::-webkit-scrollbar-thumb { background: #e67e22; border-radius: 4px; }
      `}</style>
    </>
  );
};

export default Home;