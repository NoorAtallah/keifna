import React from 'react';
import GenericCategoryPage from './genericPage';
import { Award } from 'lucide-react';

const PastePage = () => {
  return <GenericCategoryPage categoryKey="paste" categoryIcon={Award} />;
};

export default PastePage;
