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
    </div>
  );
};

export default components;
