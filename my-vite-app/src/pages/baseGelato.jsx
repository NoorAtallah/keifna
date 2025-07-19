import React from 'react';
import GenericCategoryPage from './genericPage';
import { Factory } from 'lucide-react';

const BaseGelatoPage = () => {
  return <GenericCategoryPage categoryKey="baseGelato" categoryIcon={Factory} />;
};

export default BaseGelatoPage;