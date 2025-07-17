import React from 'react';
import GenericCategoryPage from './genericPage';
import { Coffee } from 'lucide-react';

const KarakTeaPage = () => {
  return <GenericCategoryPage categoryKey="karakTea" categoryIcon={Coffee} />;
};

export default KarakTeaPage;