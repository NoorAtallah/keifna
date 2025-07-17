import React from 'react';
import GenericCategoryPage from './genericPage';
import { Droplets } from 'lucide-react';

const IceDrinksPage = () => {
  return <GenericCategoryPage categoryKey="iceDrinks" categoryIcon={Droplets} />;
};

export default IceDrinksPage;
