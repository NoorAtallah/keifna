import React from 'react';
import { useNavigate } from 'react-router-dom';
import { productsData } from '../data/productsData';
import { ChefHat, Coffee, IceCream, Droplets, Flame, Award } from 'lucide-react';

const ProductsPage = () => {
  const navigate = useNavigate();

  const categories = [
    {
      ...productsData.pastry,
      icon: ChefHat,
      route: '/products/pastry'
    },
    {
      ...productsData.karakTea,
      icon: Coffee,
      route: '/products/karak-tea'
    },
    {
      ...productsData.iceCream,
      icon: IceCream,
      route: '/products/ice-cream'
    },
    {
      ...productsData.iceDrinks,
      icon: Droplets,
      route: '/products/ice-drinks'
    },
    {
      ...productsData.hotDrinks,
      icon: Flame,
      route: '/products/hot-drinks'
    },
    {
      ...productsData.coffee,
      icon: Coffee,
      route: '/products/coffee'
    },
    {
      ...productsData.paste,
      icon: Award,
      route: '/products/paste'
    }
  ];

  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: '#FFF6E4' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6"
            style={{ 
              color: '#27001F',
              fontFamily: 'Georgia, serif'
            }}
          >
            All Products
          </h1>
          <p 
            className="text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ color: '#27001F', opacity: 0.8 }}
          >
            Explore our complete range of premium food products, crafted with excellence and traditional methods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group cursor-pointer transition-all duration-500 hover:scale-105"
              onClick={() => navigate(category.route)}
            >
              <div 
                className="overflow-hidden shadow-lg"
                style={{ 
                  backgroundColor: '#FFF6E4',
                  border: '1px solid rgba(39, 0, 31, 0.1)',
                  borderRadius: '12px'
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.mainImage}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div 
                    className="absolute inset-0 group-hover:opacity-60 transition-opacity duration-300"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(39, 0, 31, 0.3) 0%, rgba(218, 41, 23, 0.2) 100%)',
                      opacity: 0.4
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <category.icon size={24} style={{ color: '#FFF6E4' }} />
                  </div>
                </div>
                
                <div className="p-6">
                  <span 
                    className="inline-block text-xs font-medium tracking-wider uppercase mb-2"
                    style={{ color: '#DA2917' }}
                  >
                    {category.badge}
                  </span>
                  <h3 
                    className="text-xl font-light mb-3"
                    style={{ 
                      color: '#27001F',
                      fontFamily: 'Georgia, serif'
                    }}
                  >
                    {category.title}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: '#27001F', opacity: 0.8 }}
                  >
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span 
                      className="text-sm font-medium"
                      style={{ color: '#DA2917' }}
                    >
                      {category.products.length} Products
                    </span>
                    <span 
                      className="text-sm font-medium group-hover:translate-x-1 transition-transform"
                      style={{ color: '#27001F' }}
                    >
                      Explore →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;