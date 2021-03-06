import { useEffect } from 'react';
import { useGss } from '../../hook/getGss';
import { PrimaryButton } from '../atom/button/PrimaryButton';

export const Section01: React.FC = () => {
  const { getGss, gss } = useGss();
  useEffect(() => {
    getGss();
  }, []);

  return (
    <>
      <div className='m-4 mx-auto bg-topSp2 bg-no-repeat px-4 py-6 lg:h-[800px] lg:bg-top'>
        <div className='flex max-w-3xl flex-col items-center md:items-start md:p-16 lg:block lg:p-24'>
          <p className='font-mono text-2xl tracking-wide text-shadow-white md:text-3xl lg:text-[64px]'>
            良心ある自己実現ができる世界へ
          </p>
          <p className='font-mono tracking-wide md:pt-8 md:text-xl'>
            貢献が正しく評価される仕組みを創る
          </p>
          <div className='inline-block pt-4 text-center lg:pt-24'>
            <div>
              {gss.map((row, index) => (
                <p
                  key={index}
                  className='font-mono bg-gradient-to-r from-orange to-yellow bg-clip-text text-base font-bold text-transparent '
                >
                  \ 現在 <span className='text-2xl font-normal'>{row.count}</span> 名がダウンロード
                  /
                </p>
              ))}
            </div>
            <PrimaryButton toLink='https://docs.google.com/forms/d/e/1FAIpQLSek7WW2F9YDR3rVgyShjGvARQ4CGMmEuzi64wXzyGYn7tpvUg/viewform?usp=sf_link'>
              資料ダウンロード
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
};
