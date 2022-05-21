import { Link as ScrollLink } from 'react-scroll';
import { FwywdLogo } from './atom/logo/FwywdLogo';
import { SnsIcon } from './atom/logo/SnsIcon';

export const Footer: React.FC = () => (
  <>
    <div className='bg-primary-800'>
      <div className='mx-10 font-body text-lg text-white'>
        <div className='flex flex-col items-center border-b-2 border-white py-6 lg:flex-row lg:items-end lg:justify-between'>
          <FwywdLogo />
          <div className='my-8 flex h-[62px] items-center text-lg font-normal text-white lg:my-0'>
            <p>良き仲間との出会いは人生最大の財産である</p>
          </div>
          <div>
            <div className='mb-4 flex justify-center'>
              <p className='text-base md:text-lg'>\ SNS でシェア /</p>
            </div>
            <div className='flex'>
              <SnsIcon img={'/img/facebook.png'} />
              <SnsIcon img={'/img/twitter.png'} />
              <SnsIcon img={'/img/line.png'} />
              <SnsIcon img={'/img/hatena.png'} />
              <SnsIcon img={'/img/pinterest.png'} />
            </div>
          </div>
        </div>
        <div className='my-8 grid gap-4 md:grid-cols-5'>
          <FooterLinks
            heading='About'
            link1='悩み'
            toLink1='problem'
            link2='解決策'
            toLink2='answer'
            link3='料金'
            toLink3='price'
            link4=''
            toLink4=''
          />
          <FooterLinks
            heading='Legal'
            link1='利用規約'
            toLink1=''
            link2='プライバシーポリシー'
            toLink2=''
            link3='特記法表記'
            toLink3=''
            link4='運営会社'
            toLink4=''
          />
          <FooterLinks
            heading='Links'
            link1='メディアキット'
            toLink1=''
            link2='サイトマップ'
            toLink2=''
            link3=''
            toLink3=''
            link4=''
            toLink4=''
          />
        </div>
        <div className='mt-10 flex justify-center py-10'>
          <p className='text-center text-sm lg:text-lg'>
            ©️ 2022, KIKAGAKU, Inc., All right reserved.
          </p>
        </div>
      </div>
    </div>
  </>
);

type FooterLinks = {
  heading: string;
  link1: string;
  link2: string;
  link3: string;
  link4: string;
  toLink1: string;
  toLink2: string;
  toLink3: string;
  toLink4: string;
};

const FooterLinks = (props: FooterLinks) => {
  const { heading, link1, link2, link3, link4, toLink1, toLink2, toLink3, toLink4 } = props;
  return (
    <div className='text-base lg:text-lg'>
      <div>
        <p className='font-bold'>{heading}</p>
      </div>
      <div className='mt-4 font-light'>
        <SLink toLink={toLink1}>{link1}</SLink>
        <SLink toLink={toLink2}>{link2}</SLink>
        <SLink toLink={toLink3}>{link3}</SLink>
        <SLink toLink={toLink4}>{link4}</SLink>
      </div>
    </div>
  );
};

type FooterLink = {
  children: string;
  toLink: string;
};

const SLink = (props: FooterLink) => {
  const { toLink, children } = props;
  return (
    <div>
      <ScrollLink
        to={toLink}
        className='hover:cursor-pointer hover:opacity-70'
        smooth={true}
        duration={300}
      >
        {children}
      </ScrollLink>
    </div>
  );
};
