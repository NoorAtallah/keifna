import React from 'react';
import GenericCategoryPage from './genericPage';
import { Flame } from 'lucide-react';

const HotDrinksPage = () => {
  return <GenericCategoryPage categoryKey="hotDrinks" categoryIcon={Flame} />;
};

export default HotDrinksPage;
