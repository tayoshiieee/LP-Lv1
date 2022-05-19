import { Link as ScrollLink } from 'react-scroll';
import { FwywdLogo } from './atom/logo/FwywdLogo';
import { SnsIcon } from './atom/logo/SnsIcon';

export const Footer: React.FC = () => (
  <>
    <div className='bg-primary-800 '>
      <div className='mx-10 font-body text-lg text-white'>
        <div className='items-end justify-between border-b-2 border-white py-6  md:flex'>
          <FwywdLogo />
          <div className='font-medium flex h-[62px] items-center text-lg text-white'>
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
          <FooterLinks heading='About' link1='悩み' link2='解決策' link3='料金' link4='' />
          <FooterLinks
            heading='Legal'
            link1='利用規約'
            link2='プライバシーポリシー'
            link3='特記法表記'
            link4='運営会社'
          />
          <FooterLinks
            heading='Links'
            link1='メディアキット'
            link2='サイトマップ'
            link3=''
            link4=''
          />
        </div>
        <div className='mt-10 flex justify-center py-10'>
          <p className='text-base md:text-lg'>©️ 2022, KIKAGAKU, Inc., All right reserved.</p>
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
};

const FooterLinks = (props: FooterLinks) => {
  const { heading, link1, link2, link3, link4 } = props;
  return (
    <div className='text-base md:text-lg'>
      <div>
        <p className='font-bold'>{heading}</p>
      </div>
      <div className='mt-4 font-light'>
        <SLink toLink='/'>{link1}</SLink>
        <SLink toLink='/'>{link2}</SLink>
        <SLink toLink='/'>{link3}</SLink>
        <SLink toLink='/'>{link4}</SLink>
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
