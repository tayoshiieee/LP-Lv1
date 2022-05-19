import React from 'react';
import { TextWithIcon } from '../atom/text-decoration/TextWithIcon';

export const Section04: React.FC = () => (
  <>
    <div className='flex flex-col items-center space-y-12 bg-primary-50 px-4 py-24 font-body font-bold text-primary-800'>
      <div className='text-center'>
        <p className='md:text-3xl'>料金</p>
        <p className='pt-4'>\ 学びのスタイルに合わせた３つのプランを用意 /</p>
      </div>
      <div>
        <p className='hidden text-center md:block'>\ おすすめ /</p>
        <div className='mx-auto max-w-[410px] justify-center space-y-16 md:flex md:space-x-6 md:space-y-0'>
          <CardForPrice
            titleLg='起業挑戦'
            titleSm='プラン'
            price='3,000'
            subtitle1='仕事と学びを両立したい人に'
            subtitle2='おすすめのプラン'
            subprice1='0'
            subtax1='0'
            subprice2='3,000'
            subtax2='3,300'
          />
          <p className='md:hidden'>\ おすすめ /</p>
          <CardForPrice
            titleLg='スタンダード'
            titleSm='プラン'
            price='13,000'
            subtitle1='仕事と学びを両立したい人に'
            subtitle2='おすすめのプラン'
            subprice1='10,000'
            subtax1='11,000'
            subprice2='3,000'
            subtax2='3,300'
          />
          <CardForPrice
            titleLg='フルサポート'
            titleSm='プラン'
            price='63,000'
            subtitle1='標準プランに加えて運営側からの'
            subtitle2='フォロー希望の方向け'
            subprice1='60,000'
            subtax1='66,000'
            subprice2='3,000'
            subtax2='3,300'
          />
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='space-y-4'>
          <TextWithIcon img={'/img/check.png'}>
            基本的には同じプランの方とチームになりますが、集まっている人数によって変動します。
          </TextWithIcon>
          <TextWithIcon img={'/img/check.png'}>
            起業挑戦プランは Web 面接にてビジネスプランのプレゼンテーションで審査いたします。
          </TextWithIcon>
          <TextWithIcon img={'/img/check.png'}>
            起業挑戦プランの方が初年度以降を継続希望の場合は月額 10,000
            円の標準プランへと自動的に移行します。
          </TextWithIcon>
        </div>
      </div>
    </div>
  </>
);

type PriceProps = {
  titleLg: string;
  titleSm: string;
  subtitle1: string;
  subtitle2: string;
  price: string;
  subprice1: string;
  subtax1: string;
  subprice2: string;
  subtax2: string;
};

const CardForPrice: React.FC<PriceProps> = (props: PriceProps) => {
  const { titleLg, titleSm, subtitle1, subtitle2, price, subprice1, subtax1, subprice2, subtax2 } =
    props;
  return (
    <div className='min-w-full max-w-md rounded bg-white text-center font-normal shadow-md shadow-primary-200'>
      <div className='flex flex-col items-center space-y-4 px-4 py-12 text-primary-800'>
        <p className='max-w-[300px] text-base md:text-lg'>
          <span className='text-2xl'>{titleLg}</span>
          {titleSm}
        </p>
        <p>
          {subtitle1}
          <br />
          {subtitle2}
        </p>
        <p className='max-w-[300px] text-base md:text-lg'>
          月額
          <span className='text-2xl'> {price} </span>円<span className='text-sm'>（税抜）</span>
        </p>
        <div className='space-y-6 divide-y-2 divide-primary-200'>
          <div className='w-full'>
            <div className='flex  justify-between'>
              <div>
                <p>会費</p>
              </div>
              <div>
                <p>月額 {subprice1} 円</p>
                <p className='text-right text-sm'>税込 {subtax1} 円</p>
              </div>
            </div>
            <div className='flex w-full justify-between'>
              <div>
                <p>ツール利用料</p>
              </div>
              <div>
                <p>月額 {subprice2} 円</p>
                <p className='text-right text-sm'>税込 {subtax2} 円</p>
              </div>
            </div>
          </div>
          <div className='space-y-2 pt-6'>
            <TextWithIcon img={'/img/check.png'}>仲間との学び</TextWithIcon>
            <TextWithIcon img={'/img/check.png'}>コース課題と解答集</TextWithIcon>
            <TextWithIcon img={'/img/check.png'}>イベント参加</TextWithIcon>
            <TextWithIcon img={'/img/check-off.png'} color='text-primary-200'>
              運営側の質問対応
            </TextWithIcon>
          </div>
          <div className='flex w-full flex-col items-center pt-6'>
            <div className='space-y-2'>
              <TextWithIcon img={'/img/check.png'}>入学試験</TextWithIcon>
              <TextWithIcon img={'/img/check.png'}>Web 面接</TextWithIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
