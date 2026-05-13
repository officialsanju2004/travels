// Footer.jsx
import React, { useEffect, useRef, useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Car rentals data
  const carRentals = [
    "Mercedes Benz E Class", "Mercedes Benz S Class", "Toyota Etios", "Honda Amaze",
    "Honda Wrx", "Ford Endeavour", "Toyota Innova Hycross", "Toyota Innova Crysta",
    "Toyota Innova", "Toyota HiAcc", "SML 12STD", "Tempo Traveller 12STD",
    "Tempo Traveller 16STD", "SML 20STD", "Coach 40STD"
  ];

  // Top destinations data
  const topDestinations = [
    "Amritsar to Chandigarh", "Amritsar to Shimla", "Amritsar to Dalhousie", "Amritsar to Dharamshala",
    "Amritsar to Palampur", "Amritsar to Srinagar", "Amritsar to Patnitop", "Amritsar to Chintpuri Temple",
    "Amritsar to Jwala Ji Temple", "Amritsar to Kangra Devi", "Amritsar to Chamunda Devi", "Amritsar to Maa Vaishno Devi",
    "Amritsar to TarnTaran Sahib", "Amritsar to Khadur Sahib", "Amritsar to Goindwal Sahib", "Amritsar to Baba Budha Sahib",
    "Amritsar to San Sahib", "Amritsar to Shri Chheharta Sahib", "Amritsar to Anandpur Sahib"
  ];

  // Taxi services in Amritsar data
  const taxiServices = [
    "Golden Temple Taxi Service", "Jallianwala Bagh Taxi Service", "Wagah Border Taxi Service",
    "Durgiana Temple Taxi Service", "Partition Museum Taxi Service", "Sada Pind Taxi Service",
    "Gurudwara Shaheedan Sahib Taxi Service", "Mata Lal Devi Temple Taxi Service",
    "Gobind Garh Fort Taxi Service", "War Heroes Memorial Museum Taxi Service"
  ];

  const fadeInClass = (delay) => 
    `transition-all duration-700 delay-${delay} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`;

  return (
    <footer ref={footerRef} className="pt-16 pb-8 px-4 md:px-8" style={{ backgroundColor: '#1e2a3e' }}>
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Contact Info */}
          <div className={fadeInClass('0')}>
            <h3 className="text-xl font-bold mb-5 pb-2 inline-block border-b-2" 
                style={{ color: '#e67e22', borderBottomColor: '#e67e22' }}>
              Contact Info
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Got Questions? Call us 24/7!</p>
                <p className="text-white font-semibold text-lg flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#e67e22' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 9592257332
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1 flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#e67e22' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@amritsarsightseeing.com
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm flex items-start gap-2">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#e67e22' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300 text-sm">Albert Road Opposite Railway Station Amritsar Punjab 143001</span>
                </p>
              </div>
       
            </div>
          </div>

          {/* Column 2: Car Rentals */}
          <div className={fadeInClass('100')}>
            <h3 className="text-xl font-bold mb-5 pb-2 inline-block border-b-2" 
                style={{ color: '#e67e22', borderBottomColor: '#e67e22' }}>
              Car Rentals
            </h3>
            <div className="grid grid-cols-1 gap-1">
              {carRentals.map((car, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-orange-500 text-sm py-1 transition-colors duration-200 flex items-center gap-1">
                  <span className="text-orange-500">›</span> {car}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Top Destinations */}
          <div className={fadeInClass('200')}>
            <h3 className="text-xl font-bold mb-5 pb-2 inline-block border-b-2" 
                style={{ color: '#e67e22', borderBottomColor: '#e67e22' }}>
              Top Destinations
            </h3>
            <div className="grid grid-cols-1 gap-1 max-h-80 overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin' }}>
              {topDestinations.map((destination, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-orange-500 text-sm py-1 transition-colors duration-200 flex items-center gap-1">
                  <span className="text-orange-500">›</span> {destination}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Taxi Service In Amritsar */}
          <div className={fadeInClass('300')}>
            <h3 className="text-xl font-bold mb-5 pb-2 inline-block border-b-2" 
                style={{ color: '#e67e22', borderBottomColor: '#e67e22' }}>
              Taxi Service In Amritsar
            </h3>
            <div className="grid grid-cols-1 gap-1">
              {taxiServices.map((service, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-orange-500 text-sm py-1 transition-colors duration-200 flex items-center gap-1">
                  <span className="text-orange-500">›</span> {service}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-4 border-t text-center" style={{ borderColor: '#2d3e4e' }}>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Amritsar Sight Seeing. All rights reserved.
          </p>
        </div>
      </div>

      {/* Custom CSS for transition delays */}
      <style jsx>{`
        .delay-0 { transition-delay: 0ms; }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .max-h-80 { max-height: 20rem; }
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #2d3e4e;
          border-radius: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #e67e22;
          border-radius: 4px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;