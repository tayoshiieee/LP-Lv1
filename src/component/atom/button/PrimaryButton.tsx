import Link from 'next/link';

type ButtonWithLink = {
  children: string;
  toLink: string;
  fontSize?: string;
};

export const PrimaryButton = (props: ButtonWithLink) => {
  const { children, toLink, fontSize } = props;
  return (
    <>
      <button className='font-mono rounded-[5px] bg-gradient-to-r from-orange to-yellow px-[50px] py-[20px] text-base tracking-widest text-white hover:opacity-70 md:text-lg'>
        <Link href={toLink}>
          <a className={fontSize} target='_blank'>
            {children}
          </a>
        </Link>
      </button>
    </>
  );
};
