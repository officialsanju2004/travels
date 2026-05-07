// pages/FordEndeavour.jsx
import React from 'react';
import CarDetailLayout from './Reuseable';

const FordEndeavour = () => {
  const carData = {
    name: "Ford Endeavour",
    type: "Regular SUV",
    heroImage: "https://images.unsplash.com/photo-1606664515524-ed8f3c0590e5?w=1200&h=600&fit=crop",
    description: "The Ford Endeavour is a powerful 7 seater SUV with automatic transmission. It comes with 4x4 capability, leather seats, and premium sound system. Perfect for family trips and off-road adventures.",
    features: {
      type: "SUV",
      seats: "7",
      doors: "4",
      transmission: "Automatic",
      ac: "Yes",
      largeBags: "4"
    },
    packages: {
      outstation: {
        price: "₹6,000/-",
        duration: "12 HRS / 250 KMS"
      },
      city: {
        full: {
          price: "₹3,500/-",
          duration: "8 HRS / 80 KMS"
        },
        half: {
          price: "₹2,000/-",
          duration: "4 HRS / 40 KMS"
        }
      }
    }
  };

  return <CarDetailLayout carData={carData} />;
};

export default FordEndeavour;