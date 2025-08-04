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
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">차종 선택</h2>
        <p className="text-lg text-gray-600 mb-12">현장에 맞는 최적의 스카이차를 선택하세요</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div key={vehicle.name} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
              <div className="relative mb-6">
                <Image 
                  src={vehicle.imageUrl} 
                  alt={`${vehicle.name} 스카이차`} 
                  width={300} 
                  height={200} 
                  className="w-full h-48 object-contain rounded-lg" 
                  loading="lazy" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{vehicle.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{vehicle.specs}</p>
              <p className="text-orange-600 font-bold text-xl">{vehicle.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleSelector; 