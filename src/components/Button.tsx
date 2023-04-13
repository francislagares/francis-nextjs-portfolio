import Link from 'next/link';
import React from 'react';

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
