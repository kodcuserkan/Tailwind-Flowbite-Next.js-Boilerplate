import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div>
      <h1>Page not found!</h1>
      <h2>
        <Link href='/'>
          <a>Go back home</a>
        </Link>
      </h2>
    </div>
  );
};

export default NotFound;
