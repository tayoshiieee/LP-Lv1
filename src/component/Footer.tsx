import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

export const Footer: React.FC = () => (
  <>
    <div className='justify-between bg-primary-800  md:flex'>
      <div className='flex items-center px-8 py-4'>
        <Image
          src='/img/fwywd-white.png'
          alt='logo'
          width={156}
          height={60}
          // layout="fill"
          objectFit='contain'
        />
      </div>
      <div className='font-medium my-auto flex justify-center text-white md:my-0 md:text-lg'>
        <SLink toLink='/'>TOP</SLink>
        <SLink toLink='problem'>悩み</SLink>
        <SLink toLink='answer'>解決策</SLink>
        <SLink toLink='price'>料金</SLink>
      </div>
      <button className='mx-8 my-4 rounded-[5px] bg-gradient-to-r from-orange to-yellow px-[50px] py-[20px] text-white hover:opacity-70 md:text-lg'>
        資料ダウンロード
      </button>
    </div>
  </>
);

type HeaderLink = {
  children: string;
  toLink: string;
};

const SLink = (props: HeaderLink) => {
  const { toLink, children } = props;
  return (
    <ScrollLink
      to={toLink}
      className='mx-2 py-8 px-8 hover:cursor-pointer hover:border-b-2 hover:bg-primary-600 md:mx-4'
      smooth={true}
      duration={300}
    >
      {children}
    </ScrollLink>
  );
};
