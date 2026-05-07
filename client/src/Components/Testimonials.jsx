// Testimonials.jsx
import React, { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const sectionRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Khanna",
      location: "Amritsar",
      rating: 5,
      text: "Excellent taxi service! The drivers are very professional and punctual. I booked a cab for my family to visit Golden Temple and Wagah Border. The vehicle was clean and comfortable. Highly recommended!",
      avatar: "RK",
      date: "March 2025"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Delhi",
      rating: 5,
      text: "Best taxi service in Amritsar! They provided a smooth ride from Amritsar to Dharamshala. The chauffeur was knowledgeable about the routes and very courteous. Will definitely use again.",
      avatar: "PS",
      date: "February 2025"
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Mumbai",
      rating: 4,
      text: "Very reliable and affordable taxi service. Booked Innova for a week-long Punjab tour. Everything was well organized. The 24/7 customer support is very helpful.",
      avatar: "AP",
      date: "January 2025"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      location: "Bangalore",
      rating: 5,
      text: "Amazing experience! The Mercedes cab was luxurious and the driver was very professional. Perfect for corporate travel. Punctual and well-maintained fleet.",
      avatar: "SR",
      date: "December 2024"
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Chandigarh",
      rating: 5,
      text: "Great service! Booked Tempo Traveller for a group trip to Vaishno Devi. The vehicle was spacious and clean. Driver was experienced and drove safely.",
      avatar: "VS",
      date: "November 2024"
    },
    {
      id: 6,
      name: "Neha Gupta",
      location: "Amritsar",
      rating: 4,
      text: "Prompt and professional service. Used their airport transfer service multiple times. Always on time and very reasonable pricing. Highly recommend!",
      avatar: "NG",
      date: "October 2024"
    },
    {
      id: 7,
      name: "Harpreet Singh",
      location: "Ludhiana",
      rating: 5,
      text: "Wonderful experience with Amritsar Sight Seeing ! The tempo traveller was perfect for our family reunion trip to Dalhousie. Driver was very experienced.",
      avatar: "HS",
      date: "September 2024"
    },
    {
      id: 8,
      name: "Meera Joshi",
      location: "Mumbai",
      rating: 4,
      text: "Very professional service. Booked a cab for Wagah Border ceremony. Driver arrived 15 minutes early and was very courteous throughout the trip.",
      avatar: "MJ",
      date: "August 2024"
    }
  ];

  // Responsive cards per view
  const getCardsPerView = () => {
    if (windowWidth < 768) return 1;      // Mobile
    if (windowWidth < 1024) return 2;     // Tablet
    return 4;                              // Desktop
  };

  const cardsPerView = getCardsPerView();
  const totalPages = Math.ceil(testimonials.length / cardsPerView);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying && totalPages > 1) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex, totalPages]);

  // Reset current index when cards per view changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [cardsPerView]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getCurrentCards = () => {
    const start = currentIndex * cardsPerView;
    const end = start + cardsPerView;
    return testimonials.slice(start, end);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
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
    <section 
      ref={sectionRef}
      className="py-20 px-4 md:px-8"
      style={{ backgroundColor: '#fff7f0' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ color: '#1e2a3e' }}
          >
            What Our Clients Say
          </h2>
          <div 
            className={`w-24 h-1 mx-auto rounded-full transition-all duration-700 delay-200 transform ${
              isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}
            style={{ backgroundColor: '#e67e22' }}
          />
          <p 
            className={`max-w-2xl mx-auto mt-4 text-gray-600 transition-all duration-700 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Trusted by hundreds of happy customers across Punjab
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          {totalPages > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-10"
                style={{ backgroundColor: '#1e2a3e', color: '#e67e22' }}
                aria-label="Previous testimonials"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-10"
                style={{ backgroundColor: '#1e2a3e', color: '#e67e22' }}
                aria-label="Next testimonials"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Cards Container - Responsive Grid */}
          <div 
            className={`transition-all duration-700 delay-400 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {getCurrentCards().map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  className="group relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  style={{
                    backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8f4f0',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
                  }}
                >
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#e67e22' }}>
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Rating */}
                  <div className="mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 leading-relaxed mb-6 line-clamp-4">
                    "{testimonial.text}"
                  </p>

                  {/* Avatar & Info */}
                  <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: '#f0e6dc' }}>
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white"
                      style={{ backgroundColor: '#e67e22' }}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold" style={{ color: '#1e2a3e' }}>{testimonial.name}</h4>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{testimonial.location}</span>
                        <span>•</span>
                        <span>{testimonial.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(idx);
                  setTimeout(() => setIsAutoPlaying(true), 10000);
                }}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: currentIndex === idx ? '32px' : '8px',
                  backgroundColor: currentIndex === idx ? '#e67e22' : '#d1c4b3'
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Auto-play indicator */}
        {totalPages > 1 && (
          <div className="text-center mt-6">
            <p className="text-xs text-gray-400">
              {isAutoPlaying ? "✨ Auto-sliding • Touch to pause" : "⏸ Paused • Click auto-play to resume"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;