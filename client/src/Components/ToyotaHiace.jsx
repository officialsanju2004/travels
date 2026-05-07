// pages/ToyotaHiace.jsx
import React from 'react';
import CarDetailLayout from './Reuseable';


const ToyotaHiace = () => {
  const carData = {
    name: "Toyota Hiace",
    type: "Luxury Coaches",
    heroImage: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=1200&h=600&fit=crop",
    description: "The Toyota Hiace is a spacious 12 seater luxury van. Perfect for group travel, family reunions, and corporate outings. Equipped with comfortable push-back seats, AC, and entertainment system.",
    features: {
      type: "Luxury Van",
      seats: "12",
      doors: "2",
      transmission: "Manual",
      ac: "Yes",
      largeBags: "6"
    },
    packages: {
      outstation: {
        price: "₹8,000/-",
        duration: "12 HRS / 250 KMS"
      },
      city: {
        full: {
          price: "₹5,000/-",
          duration: "8 HRS / 80 KMS"
        },
        half: {
          price: "₹3,000/-",
          duration: "4 HRS / 40 KMS"
        }
      }
    }
  };

  return <CarDetailLayout carData={carData} />;
};

export default ToyotaHiace;