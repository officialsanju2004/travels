// AboutPage.jsx
import React, { useEffect, useRef, useState } from 'react';
import Footer from './Footer';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('reviews');
  const sectionRef = useRef(null);


 const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
          const [activeDropdown, setActiveDropdown] = useState(null);
          const [mobileOpenMenus, setMobileOpenMenus] = useState({});
         
          const [isVideoPlaying, setIsVideoPlaying] = useState(false);
          const [currentSlide, setCurrentSlide] = useState(0);
          const [isAutoPlaying, setIsAutoPlaying] = useState(true);
          const [showBackToTop, setShowBackToTop] = useState(false);
          const autoPlayRef = useRef(null);
          const footerRef = useRef(null);
/// CORRECTED NAVIGATION STRUCTURE
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

  // Client Reviews Data
  const clientReviews = [
    {
      id: 1,
      name: "Rajesh Khanna",
      location: "Amritsar",
      rating: 5,
      review: "Excellent service! The Mercedes cab was spotless and the driver was very professional. Reached Wagah Border on time. Highly recommended!",
      date: "March 2025",
      avatar: "RK",
      tripType: "Airport Transfer"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Delhi",
      rating: 5,
      review: "Booked Innova for Golden Temple visit. Driver was courteous and knew all the routes. Very reasonable pricing. Will use again.",
      date: "February 2025",
      avatar: "PS",
      tripType: "Temple Tour"
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Mumbai",
      rating: 4,
      review: "Great experience with Tempo Traveller for group trip to Dharamshala. Vehicle was comfortable and well-maintained.",
      date: "January 2025",
      avatar: "AP",
      tripType: "Group Tour"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      location: "Bangalore",
      rating: 5,
      review: "Best taxi service in Amritsar! Punctual, professional and great fleet. The S-Class was amazing for our corporate event.",
      date: "December 2024",
      avatar: "SR",
      tripType: "Corporate"
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Chandigarh",
      rating: 5,
      review: "Used their service for Vaishno Devi yatra. Everything was perfectly arranged. The driver was very experienced and helpful.",
      date: "November 2024",
      avatar: "VS",
      tripType: "Pilgrimage"
    },
    {
      id: 6,
      name: "Neha Gupta",
      location: "Punjab",
      rating: 4,
      review: "Reliable and affordable. The 24/7 customer support is very responsive. Highly recommended for outstation trips.",
      date: "October 2024",
      avatar: "NG",
      tripType: "Outstation"
    }
  ];

  // Top Services Data
  const topServices = [
    {
      id: 1,
      title: "Airport Transfer",
      description: "Hassle-free pick-up and drop from Sri Guru Ram Dass Jee International Airport",
      icon: "✈️",
      count: "5000+ Trips"
    },
    {
      id: 2,
      title: "Temple Tours",
      description: "Specialized tours to Golden Temple, Durgiana Temple, and other holy sites",
      icon: "🛕",
      count: "3000+ Trips"
    },
    {
      id: 3,
      title: "Outstation Cabs",
      description: "Comfortable travel to Chandigarh, Delhi, Shimla, Manali, and more",
      icon: "🏔️",
      count: "8000+ Trips"
    },
    {
      id: 4,
      title: "Wedding Car Rental",
      description: "Luxury fleet for wedding ceremonies and special occasions",
      icon: "💍",
      count: "500+ Events"
    },
    {
      id: 5,
      title: "Corporate Travel",
      description: "Professional chauffeur service for business meetings and events",
      icon: "💼",
      count: "2000+ Trips"
    },
    {
      id: 6,
      title: "Group Tours",
      description: "Tempo Traveller and Coach services for groups up to 40 people",
      icon: "👥",
      count: "1000+ Tours"
    }
  ];

  // Patrons / Clients Data
  const patrons = [
    { id: 1, name: "Hotel Ranjeet's", type: "Hotel Partner", logo: "🏨" },
    { id: 2, name: "Golden Temple Trust", type: "Pilgrimage Partner", logo: "🛕" },
    { id: 3, name: "Amritsar Travels", type: "Travel Partner", logo: "🧳" },
    { id: 4, name: "Punjab Tourism", type: "Government Partner", logo: "🏛️" },
    { id: 5, name: "Hotel Sapphire", type: "Hotel Partner", logo: "🏨" },
    { id: 6, name: "Corporate Events Inc.", type: "Corporate Partner", logo: "🏢" }
  ];

  // Chauffeurs Data
  const chauffeurs = [
    {
      id: 1,
      name: "Gurpreet Singh",
      experience: "12 years",
      languages: ["Hindi", "Punjabi", "English"],
      rating: 4.9,
      trips: 4500,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      specialization: "Luxury Cars"
    },
    {
      id: 2,
      name: "Harjeet Kaur",
      experience: "8 years",
      languages: ["Hindi", "Punjabi", "English"],
      rating: 4.8,
      trips: 3200,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      specialization: "Temple Tours"
    },
    {
      id: 3,
      name: "Manpreet Singh",
      experience: "15 years",
      languages: ["Hindi", "Punjabi", "English", "Urdu"],
      rating: 5.0,
      trips: 5800,
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      specialization: "Tempo Traveller"
    },
    {
      id: 4,
      name: "Amandeep Kaur",
      experience: "6 years",
      languages: ["Hindi", "Punjabi"],
      rating: 4.7,
      trips: 2100,
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      specialization: "Corporate Travel"
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4"
            fill={i < rating ? '#e67e22' : '#e2e8f0'}
            stroke="none"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
    );
  };

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
    
    <div id="about" ref={sectionRef} className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      {/* Hero Banner */}
      <div className="relative py-20 px-4 md:px-8 overflow-hidden" style={{ backgroundColor: '#1e2a3e' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full" style={{ backgroundColor: '#e67e22' }} />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full" style={{ backgroundColor: '#e67e22' }} />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p 
            className={`text-sm uppercase tracking-wider mb-3 transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ color: '#e67e22', letterSpacing: '3px' }}
          >
            About Us
          </p>
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-700 delay-100 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ color: '#ffffff' }}
          >
            Amritsar Sight Seeing
          </h1>
          <div 
            className={`w-20 h-1 mx-auto rounded-full transition-all duration-700 delay-200 transform ${
              isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}
            style={{ backgroundColor: '#e67e22' }}
          />
          <p 
            className={`text-gray-300 max-w-2xl mx-auto mt-6 text-lg transition-all duration-700 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Amritsar's most trusted taxi service provider, offering luxury and comfort for over a decade.
            We take pride in serving thousands of satisfied customers with our reliable and punctual service.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 px-4 md:px-8 border-b" style={{ borderColor: '#f0e6dc' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Happy Customers", value: "15,000+", icon: "😊" },
            { label: "Trips Completed", value: "50,000+", icon: "🚗" },
            { label: "Fleet Size", value: "25+", icon: "🚘" },
            { label: "Years of Service", value: "12+", icon: "⭐" }
          ].map((stat, idx) => (
            <div 
              key={idx}
              className={`transition-all duration-700 delay-${idx * 100} transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold" style={{ color: '#e67e22' }}>{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Services Section */}
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#1e2a3e' }}>Our Top Services</h2>
            <div className="w-20 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: '#e67e22' }} />
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We offer a wide range of taxi services to meet all your travel needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topServices.map((service, idx) => (
              <div
                key={service.id}
                className={`group p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ 
                  backgroundColor: idx % 2 === 0 ? '#fff7f0' : '#f8f4f0',
                  transitionDelay: `${idx * 100}ms`
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{service.icon}</span>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#e67e22', color: '#fff' }}>
                    {service.count}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1e2a3e' }}>{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Reviews Section with Tabs */}
      <div className="py-16 px-4 md:px-8" style={{ backgroundColor: '#fff7f0' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#1e2a3e' }}>Client Reviews</h2>
            <div className="w-20 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: '#e67e22' }} />
            <p className="text-gray-600 mt-4">What our customers say about us</p>
          </div>

          {/* Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientReviews.slice(0, 6).map((review, idx) => (
              <div
                key={review.id}
                className={`p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ 
                  backgroundColor: '#ffffff',
                  transitionDelay: `${idx * 100}ms`,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#e67e22' }}>
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold" style={{ color: '#1e2a3e' }}>{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.location} • {review.tripType}</p>
                    {renderStars(review.rating)}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">"{review.review}"</p>
                <div className="mt-4 pt-3 border-t text-xs text-gray-400" style={{ borderColor: '#f0e6dc' }}>
                  {review.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Patrons Section */}
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#1e2a3e' }}>Our Patrons</h2>
            <div className="w-20 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: '#e67e22' }} />
            <p className="text-gray-600 mt-4">Trusted by leading organizations and partners</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {patrons.map((patron, idx) => (
              <div
                key={patron.id}
                className={`text-center p-4 rounded-xl transition-all duration-500 hover:-translate-y-2 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ 
                  backgroundColor: '#f8f4f0',
                  transitionDelay: `${idx * 100}ms`
                }}
              >
                <div className="text-4xl mb-2">{patron.logo}</div>
                <h4 className="font-semibold text-sm" style={{ color: '#1e2a3e' }}>{patron.name}</h4>
                <p className="text-xs text-gray-500 mt-1">{patron.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chauffeurs Section */}
      <div className="py-16 px-4 md:px-8" style={{ backgroundColor: '#fff7f0' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#1e2a3e' }}>Our Professional Chauffeurs</h2>
            <div className="w-20 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: '#e67e22' }} />
            <p className="text-gray-600 mt-4">Experienced, trained, and dedicated to your comfort and safety</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chauffeurs.map((chauffeur, idx) => (
              <div
                key={chauffeur.id}
                className={`group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ 
                  backgroundColor: '#ffffff',
                  transitionDelay: `${idx * 100}ms`
                }}
              >
                <div className="relative">
                  <img src={chauffeur.image} alt={chauffeur.name} className="w-full h-56 object-cover" />
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#e67e22', color: '#fff' }}>
                    ⭐ {chauffeur.rating}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1" style={{ color: '#1e2a3e' }}>{chauffeur.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">Experience: {chauffeur.experience}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {chauffeur.languages.map((lang, i) => (
                      <span key={i} className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#fff0e6', color: '#e67e22' }}>
                        {lang}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t" style={{ borderColor: '#f0e6dc' }}>
                    <span className="text-sm text-gray-600">
                      <span style={{ color: '#e67e22' }}>{chauffeur.trips}</span> trips
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#f8f4f0', color: '#1e2a3e' }}>
                      {chauffeur.specialization}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 md:px-8 text-center" style={{ backgroundColor: '#1e2a3e' }}>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>Experience the Best Taxi Service in Amritsar</h3>
          <p className="text-gray-300 mb-6">Book your ride today and enjoy a comfortable, safe, and reliable journey</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl"
              style={{ backgroundColor: '#e67e22', color: '#ffffff' }}
            >
              Book Now
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold transition-all duration-300 border-2"
              style={{ borderColor: '#e67e22', color: '#e67e22', backgroundColor: 'transparent' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e67e22';
                e.target.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#e67e22';
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutPage;