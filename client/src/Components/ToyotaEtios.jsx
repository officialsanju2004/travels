// pages/ToyotaEtios.jsx
import React from 'react';
import CarDetailLayout from './Reuseable';

const ToyotaEtios = () => {
  const carData = {
    name: "Toyota Etios",
    type: "Sedan",
    heroImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&h=600&fit=crop",
    description: "The Toyota Etios is a 4 seater Sedan car type. The Toyota Etios has 1 Engine and 1 transmission option : Manual. It is available with the Manual transmission and air-conditioned.",
    features: {
      type: "Sedan",
      seats: "4",
      doors: "4",
      transmission: "Manual",
      ac: "Yes",
      largeBags: "2"
    },
    packages: {
      outstation: {
        price: "₹4,000/-",
        duration: "12 HRS / 250 KMS"
      },
      city: {
        full: {
          price: "₹2,500/-",
          duration: "8 HRS / 80 KMS"
        },
        half: {
          price: "₹1,500/-",
          duration: "4 HRS / 40 KMS"
        }
      }
    }
  };

  return <CarDetailLayout carData={carData} />;
};

export default ToyotaEtios;