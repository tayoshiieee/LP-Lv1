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
      <div className='m-4 mx-auto h-[800px] bg-top bg-no-repeat py-6'>
        <div className='max-w-3xl p-24'>
          <p className='font-mono text-[64px] tracking-wide text-shadow-white'>
            良心ある自己実現ができる世界へ
          </p>
          <p className='pt-8 font-mono text-xl tracking-wide'>貢献が正しく評価される仕組みを創る</p>
          <div className='inline-block pt-24 text-center'>
            <div className=''>
              {gss.map((row, index) => (
                <p
                  key={index}
                  className='bg-gradient-to-r from-orange to-yellow bg-clip-text font-mono font-bold text-transparent '
                >
                  \ 現在 <span className='text-xl font-normal'>{row.count}</span> 名がダウンロード /
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
