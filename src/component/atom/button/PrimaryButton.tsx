import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonWithLink = {
  children: string;
  toLink: string;
};

export const PrimaryButton = (props: ButtonWithLink) => {
  const { children, toLink } = props;
  return (
    <>
      <button className='rounded-[5px] bg-gradient-to-r from-orange to-yellow px-[50px] py-[20px] font-mono tracking-widest text-white hover:opacity-70 md:text-lg'>
        <Link href={toLink}>
          <a target='_blank'>{children}</a>
        </Link>
      </button>
    </>
  );
};
