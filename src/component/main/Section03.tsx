import Image from 'next/image';
import React from 'react';
import { TextWithUnderbar } from '../atom/text-decoration/TextWithUnderbar';

export const Section03: React.FC = () => (
  <>
    <div className='my-32 flex flex-col items-center space-y-16 bg-sec3 px-4 py-10 font-body'>
      <TextWithUnderbar textDef='あなたが本気で変わるために必要な２つの条件' />
      <p className='text-center font-bold text-primary-800 md:text-[48px]'>
        成果 = モチベーション × 能力
      </p>
      <div className='mx-autp max-w-lg justify-center space-y-16 md:flex md:space-x-24 md:space-y-0'>
        <Card
          index='仲間'
          titleLg='モチベーション'
          titleSm=''
          img='/img/motivation.png'
          text1='熱量の高い'
          text2='最高の仲間と切磋琢磨'
        />
        <Card
          index='目的'
          titleLg='能力'
          titleSm=''
          img='/img/ability.png'
          text1='プロレベルで必要な'
          text2='技術ロードマップを網羅'
        />
      </div>
      <p className='max-w-5xl text-center font-bold text-primary-800 md:text-2xl'>
        良き仲間と目的を持った学びができる環境を提供します。
        <br />
        成果に繋がる学びがここにあります。
      </p>
    </div>
  </>
);

type CardProps = {
  index: string;
  titleLg: string;
  titleSm: string;
  img: string;
  text1: string;
  text2: string;
};

const Card: React.FC<CardProps> = (props: CardProps) => {
  const { index, titleLg, titleSm, img, text1, text2 } = props;
  return (
    <div className='min-w-full max-w-md rounded bg-primary-50 text-center shadow-md shadow-primary-200'>
      <div className='space-y-4 px-8 py-12 text-primary-800'>
        <p>{index}</p>
        <div>
          <Image src='/img/Arrow.png' alt='arrow' width={30} height={30} objectFit='contain' />
        </div>
        <TextWithUnderbar textDef={titleLg} textCus={titleSm} />
        <div>
          <Image src={img} alt={img} width={315} height={315} objectFit='contain' />
        </div>
        <div>
          <p className='text-base font-bold md:px-20 md:text-lg'>{text1}</p>
          <p className='text-base font-bold md:px-20 md:text-lg'>{text2}</p>
        </div>
      </div>
    </div>
  );
};
