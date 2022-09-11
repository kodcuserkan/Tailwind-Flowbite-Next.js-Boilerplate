import cx from 'classnames';
import FlagProps from '../../../utils/types';

const DeutschFlag = ({ size }: FlagProps) => {
  return (
    <svg
      className={cx('mr-2 rounded-full', {
        'w-3.5 h-3.5': size === 'sm',
        'w-5 h-5': size === 'lg'
      })}
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      id='flag-icon-css-de'
      viewBox='0 0 512 512'>
      <path fill='#ffce00' d='M0 341.3h512V512H0z' />
      <path d='M0 0h512v170.7H0z' />
      <path fill='#d00' d='M0 170.7h512v170.6H0z' />
    </svg>
  );
};

export default DeutschFlag;
