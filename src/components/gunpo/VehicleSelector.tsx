// file: src/components/gunpo/VehicleSelector.tsx
import React from 'react';
import Image from 'next/image';

interface Vehicle {
  name: string;
  specs: string;
  price: string;
  imageUrl: string;
}

interface VehicleSelectorProps {
  vehicles: Vehicle[];
}

const VehicleSelector: React.FC<VehicleSelectorProps> = ({ vehicles }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">차종 선택</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div key={vehicle.name} className="border rounded-2xl p-4 hover:shadow-xl transition-shadow">
              <Image 
                src={vehicle.imageUrl} 
                alt={`${vehicle.name} 스카이차`} 
                width={300} 
                height={200} 
                className="rounded-lg mb-4" 
                loading="lazy" 
              />
              <h3 className="text-lg font-bold">{vehicle.name}</h3>
              <p className="text-gray-500 text-sm">{vehicle.specs}</p>
              <p className="text-primary font-bold text-lg mt-2">{vehicle.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleSelector; 