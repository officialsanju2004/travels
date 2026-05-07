// TravelDesk.jsx
import React, { useEffect, useRef, useState } from 'react';
import Footer from './Footer';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
const TravelDesk = () => {

  const [activeHotel, setActiveHotel] = useState(null);
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

  // Hotel Partners Data
  const hotels = [
    { 
      id: 1, 
      name: "HYATT AMRITSAR", 
      phone: "+91 98887 67474",
      rating: 5,
      price: "₹8,000+",
      location: "Airport Road",
      amenities: ["Pool", "Spa", "Restaurant", "Free WiFi"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop"
    },
    { 
      id: 2, 
      name: "RADISSON BLU AMRITSAR", 
      phone: "+91 98887 67474",
      rating: 5,
      price: "₹7,500+",
      location: "Albert Road",
      amenities: ["Bar", "Restaurant", "Gym", "Free WiFi"],
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=500&fit=crop"
    },
    { 
      id: 3, 
      name: "LEMON TREE AMRITSAR", 
      phone: "+91 98887 67474",
      rating: 4,
      price: "₹5,000+",
      location: "Ranjit Avenue",
      amenities: ["Restaurant", "Bar", "Free WiFi", "Parking"],
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3080a4e?w=800&h=500&fit=crop"
    },
    { 
      id: 4, 
      name: "FAIRFIELD BY MARRIOTT AMRITSAR", 
      phone: "+91 98887 67474",
      rating: 5,
      price: "₹9,000+",
      location: "Golden Temple Road",
      amenities: ["Pool", "Restaurant", "Gym", "Conference Room"],
      image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&h=500&fit=crop"
    }
  ];

  // Car Rentals Data
  const carRentals = [
    "Mercedes Benz E Class", "Mercedes Benz S Class", "Toyota Etios", "Honda Amaze",
    "Honda Wrx", "Ford Endeavour", "Toyota Innova Hycross", "Toyota Innova Crysta",
    "Toyota Innova", "Toyota HiAce", "SML 12STD", "Tempo Traveller 12STD",
    "Tempo Traveller 16STD", "SML 20STD", "Coach 40STD"
  ];

  // Quick Services Data
  const quickServices = [
    { title: "Airport Transfer", time: "24/7 Available", icon: "✈️" },
    { title: "Local Sightseeing", time: "Custom Packages", icon: "🏛️" },
    { title: "Outstation Cabs", time: "One-way & Round Trip", icon: "🛣️" },
    { title: "Wedding Cars", time: "Special Decoration", icon: "💍" },
    { title: "Corporate Travel", time: "Executive Fleet", icon: "💼" },
    { title: "Group Tours", time: "Tempo Traveller", icon: "👥" }
  ];

  // Special Offers Data
  const specialOffers = [
    { title: "Early Bird Discount", description: "Book 7 days in advance & get 15% off", validTill: "Dec 2025", discount: "15%" },
    { title: "Corporate Package", description: "Special rates for corporate clients", validTill: "Lifetime", discount: "20%" },
    { title: "Group Booking", description: "Book tempo traveller for group of 10+", validTill: "Limited Offer", discount: "25%" }
  ];

  const fadeInClass = (delay) => 
    `transition-all duration-700 delay-${delay} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`;

  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4" fill={i < rating ? '#e67e22' : '#e2e8f0'} viewBox="0 0 24 24">
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
    
    <div ref={sectionRef} className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      
      {/* Hero Section / Breadcrumb */}
      <div className="relative py-16 px-4 md:px-8" style={{ backgroundColor: '#1e2a3e' }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className={`flex justify-center items-center gap-2 text-sm mb-4 ${fadeInClass('0')}`}>
            <a href="/" className="text-gray-400 hover:text-orange-400 transition">Home</a>
            <span className="text-gray-500">|</span>
            <span style={{ color: '#e67e22' }}>Travel Desk</span>
          </div>
          <h1 className={`text-4xl md:text-5xl font-bold mb-3 ${fadeInClass('100')}`} style={{ color: '#ffffff' }}>
            Travel Desk
          </h1>
          <div className={`w-20 h-1 mx-auto rounded-full ${fadeInClass('200')}`} style={{ backgroundColor: '#e67e22' }} />
          <p className={`text-gray-300 max-w-2xl mx-auto mt-5 ${fadeInClass('300')}`}>
            Your one-stop solution for hotel bookings, taxi services, and travel assistance in Amritsar
          </p>
        </div>
      </div>

      {/* Hotel Partners Section */}
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#1e2a3e' }}>Partner Hotels</h2>
            <div className="w-20 h-1 mx-auto mt-3 rounded-full" style={{ backgroundColor: '#e67e22' }} />
            <p className="text-gray-600 mt-4">Luxury stays at best prices with our exclusive partnership</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hotels.map((hotel, idx) => (
              <div 
                key={hotel.id}
                className={`group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${fadeInClass(idx * 100)}`}
                style={{ backgroundColor: '#ffffff', boxShadow: '0 10px 30px -12px rgba(0,0,0,0.1)' }}
                onMouseEnter={() => setActiveHotel(hotel.id)}
                onMouseLeave={() => setActiveHotel(null)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white font-bold text-sm" style={{ backgroundColor: '#e67e22' }}>
                    {hotel.price}/night
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {renderStars(hotel.rating)}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold" style={{ color: '#1e2a3e' }}>{hotel.name}</h3>
                    <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#fff0e6', color: '#e67e22' }}>
                      {hotel.location}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.map((item, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">{item}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: '#f0e6dc' }}>
                    <a 
                      href={`tel:${hotel.phone}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:scale-105"
                      style={{ backgroundColor: '#1e2a3e', color: '#e67e22' }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {hotel.phone}
                    </a>
                    <button className="px-4 py-2 rounded-lg font-semibold transition-all hover:shadow-md" style={{ backgroundColor: '#f8f4f0', color: '#1e2a3e' }}>
                      Book Now →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Services Section */}
      <div className="py-16 px-4 md:px-8" style={{ backgroundColor: '#fff7f0' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#1e2a3e' }}>Quick Services</h2>
            <div className="w-20 h-1 mx-auto mt-3 rounded-full" style={{ backgroundColor: '#e67e22' }} />
            <p className="text-gray-600 mt-4">We offer all travel-related services at your fingertips</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickServices.map((service, idx) => (
              <div 
                key={idx}
                className={`p-6 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${fadeInClass(idx * 100)}`}
                style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold mb-1" style={{ color: '#1e2a3e' }}>{service.title}</h3>
                <p className="text-sm text-gray-500">{service.time}</p>
                <button className="mt-4 text-sm font-semibold hover:underline" style={{ color: '#e67e22' }}>
                  Enquire Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Special Offers Banner */}
      <div className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#1e2a3e' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: '#3d5a6c' }}>
              {specialOffers.map((offer, idx) => (
                <div key={idx} className={`p-6 text-center ${fadeInClass(idx * 100)}`}>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3" style={{ backgroundColor: '#e67e22', color: '#fff' }}>
                    {offer.discount} OFF
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#e67e22' }}>{offer.title}</h3>
                  <p className="text-gray-300 text-sm mb-2">{offer.description}</p>
                  <p className="text-gray-500 text-xs">Valid till: {offer.validTill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact & Car Rentals Combined Section */}
      <div className="py-16 px-4 md:px-8" style={{ backgroundColor: '#f8f4f0' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Contact Info Column */}
            <div className={`${fadeInClass('0')}`}>
              <h3 className="text-2xl font-bold mb-6 pb-2 inline-block border-b-2" style={{ color: '#1e2a3e', borderBottomColor: '#e67e22' }}>
                Contact Info
              </h3>
              <div className="space-y-5">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Got Questions? Call us 24/7!</p>
                  <a href="tel:+919888767474" className="text-2xl font-bold flex items-center gap-2 hover:opacity-80 transition" style={{ color: '#e67e22' }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 98887 67474
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Email Us</p>
                  <a href="mailto:info@ranveertravels.com" className="text-gray-800 font-medium hover:text-orange-500 transition">
                    info@ranveertravels.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Office Addresses</p>
                  <p className="text-gray-700 text-sm">📍 79 Kennedy Avenue Amritsar Punjab 143001</p>
                  <p className="text-gray-700 text-sm mt-2">📍 2 Maple Street, Back side IVY Hospital, Airport Road, Amritsar Punjab 143001</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t" style={{ borderColor: '#e5ddd0' }}>
                <p className="text-gray-600 text-sm mb-3">Follow Us</p>
                <div className="flex gap-4">
                  {["facebook", "instagram", "twitter", "youtube"].map((social, idx) => (
                    <a key={idx} href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ backgroundColor: '#1e2a3e', color: '#e67e22' }}>
                      <span className="text-lg">{social === "facebook" ? "📘" : social === "instagram" ? "📷" : social === "twitter" ? "🐦" : "📺"}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Car Rentals Column */}
            <div className={`${fadeInClass('200')}`}>
              <h3 className="text-2xl font-bold mb-6 pb-2 inline-block border-b-2" style={{ color: '#1e2a3e', borderBottomColor: '#e67e22' }}>
                Car Rentals
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-96 overflow-y-auto pr-3" style={{ scrollbarWidth: 'thin' }}>
                {carRentals.map((car, index) => (
                  <a key={index} href="#" className="text-gray-700 hover:text-orange-500 text-sm py-2 transition-colors duration-200 flex items-center gap-2 border-b" style={{ borderColor: '#e5ddd0' }}>
                    <span className="text-orange-500">🚗</span> {car}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Banner */}
      <div className="py-8 px-4 md:px-8" style={{ backgroundColor: '#1e2a3e' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center animate-pulse" style={{ backgroundColor: '#e67e22' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Emergency Support</p>
                <p className="text-white font-bold text-xl">+91 98887 67474</p>
              </div>
            </div>
            <div className="w-px h-10 bg-gray-700 hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e67e22' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Quick Response</p>
                <p className="text-white font-bold text-xl">Within 30 Minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .delay-0 { transition-delay: 0ms; }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }
        .delay-500 { transition-delay: 500ms; }
        .max-h-96 { max-height: 24rem; }
        .overflow-y-auto::-webkit-scrollbar { width: 4px; }
        .overflow-y-auto::-webkit-scrollbar-track { background: #e5ddd0; border-radius: 4px; }
        .overflow-y-auto::-webkit-scrollbar-thumb { background: #e67e22; border-radius: 4px; }
      `}</style>
    </div>
    <Footer/>
    </>
  );
};

export default TravelDesk;