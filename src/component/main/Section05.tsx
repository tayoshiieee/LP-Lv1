import Image from 'next/image';
import { PrimaryButton } from '../atom/button/PrimaryButton';

export const Section05: React.FC = () => (
  <>
    <div className='mx-auto bg-gradient-to-r from-primary-800 to-primary-500 px-4 py-8 md:px-20'>
      <div className='justify-between lg:flex'>
        <div className='my-auto'>
          <p className='font-normal tracking-wide text-white md:text-3xl'>
            <span className='text-2xl md:text-3xl lg:text-[64px]'>良き仲間</span>との出会いは
            <br />
            <span className='text-2xl md:text-3xl lg:text-[64px]'>人生最大の財産</span>である
          </p>
          <div className='pt-8 text-left lg:pt-24'>
            <PrimaryButton
              toLink='https://docs.google.com/forms/d/e/1FAIpQLSek7WW2F9YDR3rVgyShjGvARQ4CGMmEuzi64wXzyGYn7tpvUg/viewform?usp=sf_link'
              fontSize='md:text-2xl'
            >
              資料ダウンロード
            </PrimaryButton>
          </div>
        </div>
        <Image
          src='/img/good-team.png'
          alt='good team'
          width={600}
          height={600}
          objectFit='contain'
        />
      </div>
    </div>
  </>
);
