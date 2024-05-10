import React from 'react';

import Link from 'next/link';

const Button = ({
  text,
  link,
  target,
}: {
  text: string;
  link: string;
  target?: string;
}) => {
  return (
    <Link className='btn' href={link} target={target}>
      {text}
    </Link>
  );
};

export default Button;
