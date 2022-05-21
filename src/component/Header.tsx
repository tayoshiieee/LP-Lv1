import { Link as ScrollLink } from 'react-scroll';
import { PrimaryButton } from './atom/button/PrimaryButton';
import { FwywdLogo } from './atom/logo/FwywdLogo';

export const Header: React.FC = () => (
  <>
    <div className='flex flex-col items-center bg-primary-800 p-4 lg:flex-row lg:justify-between lg:px-8 lg:py-0'>
      <FwywdLogo />
      <div className='font-medium my-auto flex justify-center text-white md:text-lg'>
        <SLink toLink='/'>TOP</SLink>
        <SLink toLink='problem'>悩み</SLink>
        <SLink toLink='answer'>解決策</SLink>
        <SLink toLink='price'>料金</SLink>
      </div>
      <div className='lg:my-4'>
        <PrimaryButton toLink='https://docs.google.com/forms/d/e/1FAIpQLSek7WW2F9YDR3rVgyShjGvARQ4CGMmEuzi64wXzyGYn7tpvUg/viewform?usp=sf_link'>
          資料ダウンロード
        </PrimaryButton>
      </div>
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
      className='mx-2 inline-block py-8 px-2 hover:cursor-pointer hover:border-b-2 hover:bg-primary-600 md:mx-4 md:px-8'
      smooth={true}
      duration={300}
    >
      {children}
    </ScrollLink>
  );
};
