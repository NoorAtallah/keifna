import React from 'react';
import GenericCategoryPage from './genericPage';
import { IceCream } from 'lucide-react';

const IceCreamPage = () => {
  return <GenericCategoryPage categoryKey="iceCream" categoryIcon={IceCream} />;
};

export default IceCreamPage;