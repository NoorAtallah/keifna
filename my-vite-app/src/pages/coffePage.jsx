import React from 'react';
import GenericCategoryPage from './genericPage';
import { Coffee } from 'lucide-react';

const CoffeePage = () => {
  return <GenericCategoryPage categoryKey="coffee" categoryIcon={Coffee} />;
};

export default CoffeePage;
