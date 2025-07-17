import React from 'react';
import GenericCategoryPage from './genericPage';
import { ChefHat } from 'lucide-react';

const PastryPage = () => {
  return <GenericCategoryPage categoryKey="pastry" categoryIcon={ChefHat} />;
};

export default PastryPage;