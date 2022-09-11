import cx from 'classnames';
import React, { useState } from 'react';
import ChinaFlag from './Flags/Chinese';
import DeutschFlag from './Flags/Deutsch';
import EnglishFlag from './Flags/English';
import ItalianFlag from './Flags/Italian';
import { languages } from '../../utils';
import { FlagCode } from '../../utils/types';

const LanguageDropdown = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [selectedLang, setSelectedLang] = useState<FlagCode>('en');

  const renderFlag = (lang:FlagCode, isBig:boolean ) => {
    const size = isBig ? 'lg' : 'sm';
    const elements = {
      en: <EnglishFlag size={size} />,
      it: <ItalianFlag size={size} />,
      de: <DeutschFlag size={size} />,
      cn: <ChinaFlag size={size} />
    };

    return elements[lang];
  };

  return (
    <div className='flex items-center flex-col md:order-2'>
      <button
        type='button'
        onClick={() => setIsHidden(!isHidden)}
        data-dropdown-toggle='language-dropdown-menu'
        className='inline-flex justify-center items-center p-2 text-sm text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'>
        {renderFlag(selectedLang, true)}
        {languages.find(({code}) => code === selectedLang)?.name}
      </button>
      {/* Dropdown */}
      <div
        className={cx(
          'z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700',
          {
            hidden: !isHidden
          }
        )}
        id='language-dropdown-menu'>
        <ul className='py-1' role='none'>
          {languages.map(({name, code}) => (
            <li key={name}>
              <a
                href='#'
                className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedLang(code as FlagCode);
                  setIsHidden(false);
                }}
                role='menuitem'>
                <div className='inline-flex items-center'>
                  {renderFlag(code as FlagCode, false)}
                  {name}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LanguageDropdown;
