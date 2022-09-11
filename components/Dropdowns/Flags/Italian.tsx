import FlagProps from '../../../utils/types';
import cx from 'classnames';

const ItalianFlag = ({ size }: FlagProps) => {
  return (
    <svg
      className={cx('mr-2 rounded-full', {
        'w-3.5 h-3.5': size === 'sm',
        'w-5 h-5': size === 'lg'
      })}
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      id='flag-icon-css-it'
      viewBox='0 0 512 512'>
      <g fillRule='evenodd' strokeWidth='1pt'>
        <path fill='#fff' d='M0 0h512v512H0z' />
        <path fill='#009246' d='M0 0h170.7v512H0z' />
        <path fill='#ce2b37' d='M341.3 0H512v512H341.3z' />
      </g>
    </svg>
  );
};

export default ItalianFlag;
