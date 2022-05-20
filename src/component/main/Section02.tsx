import Image from 'next/image';
import React from 'react';
import { TextWithIcon } from '../atom/text-decoration/TextWithIcon';
import { TextWithUnderbar } from '../atom/text-decoration/TextWithUnderbar';

export const Section02: React.FC = () => (
  <>
    <div className='flex flex-col items-center space-y-12 bg-primary-50 px-4 py-24 font-body text-primary-800'>
      <TextWithUnderbar textDef='夢を叶える仲間が欲しい、あなたへ' />
      <div className='flex flex-col items-center'>
        <div className='space-y-4'>
          <TextWithIcon>新しいことを始めたい気持ちは強い</TextWithIcon>
          <TextWithIcon>学びに必要な教材がたくさんあることは知っている</TextWithIcon>
          <TextWithIcon>最後のひと押しの勇気が欲しい</TextWithIcon>
        </div>
      </div>
      <div className='mx-autp max-w-lg justify-center space-y-16 md:flex md:space-x-24 md:space-y-0'>
        <CardWithIndex
          index='悩み1'
          titleLg='仲間'
          titleSm='がいない'
          img='/img/fellow.png'
          text='会社の同僚や友人と一緒に学ぶのは難しい'
        />
        <CardWithIndex
          index='悩み2'
          titleLg='目的'
          titleSm='があいまい'
          img='/img/purpose.png'
          text='会社の同僚や友人と一緒に学ぶのは難しい'
        />
      </div>
    </div>
  </>
);

type CardProps = {
  index: string;
  titleLg: string;
  titleSm: string;
  img: string;
  text: string;
};

const CardWithIndex: React.FC<CardProps> = (props: CardProps) => {
  const { index, titleLg, titleSm, img, text } = props;
  return (
    <div className='min-w-full max-w-md  rounded bg-white text-center shadow-md shadow-primary-200'>
      <p className='absolute bg-primary-800 py-1 px-5 text-base text-white'>{index}</p>
      <div className='flex flex-col items-center space-y-4 px-8 py-12 text-primary-800'>
        <TextWithUnderbar textDef={titleLg} textCus={titleSm} />
        <div>
          <Image src={img} alt={img} width={315} height={315} objectFit='contain' />
        </div>
        <p className='max-w-[300px] text-base font-bold md:text-lg'>{text}</p>
      </div>
    </div>
  );
};
