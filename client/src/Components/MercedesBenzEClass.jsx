// pages/MercedesBenzEClass.jsx
import React from 'react';
import CarDetailLayout from './Reuseable';

const MercedesBenzEClass = () => {
  const carData = {
    name: "Mercedes Benz E Class",
    type: "Luxury Cars",
    heroImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&h=600&fit=crop",
    description: "The Mercedes Benz E Class is the epitome of luxury and performance. This 4 seater premium sedan features leather upholstery, massaging seats, ambient lighting, and a state-of-the-art sound system. Experience travel like never before.",
    features: {
      type: "Luxury Sedan",
      seats: "4",
      doors: "4",
      transmission: "Automatic",
      ac: "Yes",
      largeBags: "2"
    },
    packages: {
      outstation: {
        price: "₹15/km",
        duration: "12 HRS / 250 KMS"
      },
      city: {
        full: {
          price: "₹6,000/-",
          duration: "8 HRS / 80 KMS"
        },
        half: {
          price: "₹4,000/-",
          duration: "4 HRS / 40 KMS"
        }
      }
    }
  };

  return <CarDetailLayout carData={carData} />;
};

export default MercedesBenzEClass;