import FlagProps from '../../../utils/types';
import cx from 'classnames';

const ChinaFlag = ({ size }: FlagProps) => {
  return (
    <svg
      className={cx('mr-2 rounded-full', {
        'w-3.5 h-3.5': size === 'sm',
        'w-5 h-5': size === 'lg'
      })}
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      id='flag-icon-css-cn'
      viewBox='0 0 512 512'>
      <defs>
        <path id='a' fill='#ffde00' d='M1-.3L-.7.8 0-1 .6.8-1-.3z' />
      </defs>
      <path fill='#de2910' d='M0 0h512v512H0z' />
      <use width={30} height={20} transform='matrix(76.8 0 0 76.8 128 128)' xlinkHref='#a' />
      <use
        width={30}
        height={20}
        transform='rotate(-121 142.6 -47) scale(25.5827)'
        xlinkHref='#a'
      />
      <use width={30} height={20} transform='rotate(-98.1 198 -82) scale(25.6)' xlinkHref='#a' />
      <use
        width={30}
        height={20}
        transform='rotate(-74 272.4 -114) scale(25.6137)'
        xlinkHref='#a'
      />
      <use
        width={30}
        height={20}
        transform='matrix(16 -19.968 19.968 16 256 230.4)'
        xlinkHref='#a'
      />
    </svg>
  );
};

export default ChinaFlag;
