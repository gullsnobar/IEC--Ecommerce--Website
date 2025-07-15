import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Star, Minus, Plus } from 'lucide-react';
import products from '../data/products';

const ProductDetails = ({ onBack, onAddToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!product) {
    return <div className="p-8 text-center text-gray-700">Product not found.</div>;
  }

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity((prev) => Math.min(prev + 1, 10));
    } else {
      setQuantity((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900 cursor-pointer" onClick={onBack}>
              GroceryShop
            </h1>
            <div className="text-gray-600">
              Seller: <span className="font-medium text-green-700">{product.seller}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Image Section */}
          <div>
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex space-x-2 mt-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-green-700' : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt={`Thumb ${index}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <p className="text-lg text-gray-600 mt-1">{product.weight}</p>
              </div>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-2 rounded-full ${
                  isFavorite ? 'text-red-500' : 'text-gray-400'
                } hover:bg-gray-100`}
              >
                <Heart className={`w-6 h-6 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="text-white px-3 py-1 rounded-lg flex items-center space-x-1 bg-green-700">
                <span className="font-semibold">{product.rating}</span>
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            {/* Price */}
            <div className="text-4xl font-bold text-green-700">
              ${Number(product.price).toFixed(2)}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-white rounded-lg bg-green-700">
                <button
                  onClick={() => handleQuantityChange('decrease')}
                  disabled={quantity <= 1}
                  className="p-3 hover:opacity-80 disabled:opacity-50"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="px-6 py-3 font-semibold text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange('increase')}
                  disabled={quantity >= 10}
                  className="p-3 hover:opacity-80 disabled:opacity-50"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <span className="text-gray-600">{product.availability}</span>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-green-700 text-white py-4 rounded-lg font-semibold text-lg hover:opacity-90"
            >
              Add to Cart
            </button>

            {/* Categories */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {product.categories.map((cat, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Full Details */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Details</h2>
          <p className="text-gray-700 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
