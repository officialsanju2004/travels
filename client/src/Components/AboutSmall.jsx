// AboutSection.jsx (without React Router)
import React, { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const stats = [
    { value: "15,000+", label: "Happy Customers", icon: "😊" },
    { value: "50,000+", label: "Trips Completed", icon: "🚗" },
    { value: "25+", label: "Fleet Size", icon: "🚘" },
    { value: "12+", label: "Years of Service", icon: "⭐" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 md:px-8"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div 
            className={`relative rounded-2xl overflow-hidden transition-all duration-700 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}
            style={{ boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.15)' }}
          >
            <img 
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop" 
              alt="Amritsar Sight Seeing "
              className="w-full h-full object-cover"
            />
            <div 
              className="absolute bottom-6 left-6 px-4 py-2 rounded-xl"
              style={{ backgroundColor: '#e67e22' }}
            >
              <p className="text-white font-bold text-lg">12+ Years</p>
              <p className="text-white text-xs opacity-90">of Excellence</p>
            </div>
          </div>

          {/* Right Side - Content */}
          <div 
            className={`transition-all duration-700 delay-200 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
          >
            <p 
              className="text-sm uppercase tracking-wider mb-3"
              style={{ color: '#e67e22', letterSpacing: '3px' }}
            >
              About Us
            </p>
            
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: '#1e2a3e' }}
            >
              Welcome to <span style={{ color: '#e67e22' }}>Amritsar Sight Seeing</span>
            </h2>
            
            <div 
              className="w-16 h-1 mb-6 rounded-full"
              style={{ backgroundColor: '#e67e22' }}
            />
            
            <p className="text-gray-600 leading-relaxed mb-4">
              Amritsar Sight Seeing is Amritsar's most trusted taxi service provider, 
              offering luxury and comfort for over a decade. We take pride in serving 
              thousands of satisfied customers with our reliable and punctual service.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Our fleet includes premium vehicles like Mercedes Benz, Toyota Innova, 
              Tempo Travellers, and luxury coaches. Whether it's a family trip, 
              corporate travel, or pilgrimage tour, we have the perfect vehicle for you.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-3 rounded-xl text-center transition-all duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: '#fff7f0' }}
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-xl font-bold" style={{ color: '#e67e22' }}>{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                "24/7 Customer Support",
                "Professional Chauffeurs",
                "Clean & Well Maintained",
                "Best Price Guarantee"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#e67e22' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <a 
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
              style={{ backgroundColor: '#e67e22', color: '#ffffff' }}
            >
              Read More About Us
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;