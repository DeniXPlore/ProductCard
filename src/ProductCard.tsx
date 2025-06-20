import React from 'react';

interface ProductCardProps {
  title: string;
  origin: string;
  price?: number;
  currency: 'RUB' | 'USD' | 'EUR';
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, origin, price = 34900, currency, imageUrl }) => {
  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency,
  }).format(price / 100);

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:max-w-xs">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">Страна: {origin}</p>
        <p className="text-lg font-bold text-gray-900">{formattedPrice}</p>
      </div>
    </div>
  );
};

export default ProductCard;