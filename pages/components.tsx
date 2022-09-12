import React from 'react';
import CustomBreadCrumb from '../components/BreadCrumb';
import { LanguageDropdown, CustomDropdown } from '../components/Dropdowns';

const components = () => {
  return (
    <div>
      <h1>Components</h1>
      <div className='pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700'>
        <CustomBreadCrumb />
      </div>
      <div className='pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700'>
        <CustomDropdown />
      </div>
      <div className='pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700'>
        <LanguageDropdown />
      </div>
      <div className='pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700'>
        <div className="w-12 h-4 bg-blue-600"></div>
        <div className="w-24 h-4 bg-yellow-600"></div>
        <div className="w-32 h-4 bg-orange-600"></div>
        <div className="w-48 h-4 bg-green-600"></div>
        <div className="w-64 h-4 bg-red-600"></div>
        <div className="w-72 h-4 bg-gray-600"></div>
        <div className="w-96 h-4 bg-blue-600"></div>
      </div>
    </div>
  );
};

export default components;
