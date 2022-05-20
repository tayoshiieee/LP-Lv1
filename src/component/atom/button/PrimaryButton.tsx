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
      <button className='font-mono rounded-[5px] bg-gradient-to-r from-orange to-yellow px-[50px] py-[20px] text-lg tracking-widest text-white hover:opacity-70'>
        <Link href={toLink}>
          <a className={fontSize} target='_blank'>
            {children}
          </a>
        </Link>
      </button>
    </>
  );
};
