import Image from 'next/image';
import React from 'react';

export const Section02: React.FC = () => (
  <>
    <div className='flex flex-col items-center space-y-12 bg-primary-50 py-20 font-body'>
      <TextWithUnderbar textDef='夢を叶える仲間が欲しい、あなたへ' />
      <div className='flex flex-col items-center'>
        <div className='space-y-4'>
          <TextWithIcon img={'/img/check.png'}>新しいことを始めたい気持ちは強い</TextWithIcon>
          <TextWithIcon img={'/img/check.png'}>
            学びに必要な教材がたくさんあることは知っている
          </TextWithIcon>
          <TextWithIcon img={'/img/check.png'}>最後のひと押しの勇気が欲しい</TextWithIcon>
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
    <div className='min-w-full max-w-md rounded bg-white text-center shadow-md shadow-primary-200'>
      <p className='absolute bg-primary-800 py-1 px-5 text-base text-white'>{index}</p>
      <div className='px-8 py-12 text-primary-800'>
        <TextWithUnderbar textDef={titleLg} textCus={titleSm} />
        <Image src={img} alt={img} width={315} height={315} objectFit='contain' />
        <p className='px-20 font-bold'>{text}</p>
      </div>
    </div>
  );
};

type Onlichildren = {
  textDef: string;
  textCus?: string;
};

const TextWithUnderbar: React.FC<Onlichildren> = (props: Onlichildren) => {
  const { textDef, textCus } = props;
  return (
    <div className='text-center'>
      <p className='inline-block border-b-8 border-b-yellow text-2xl font-bold tracking-wide text-primary-800'>
        {textDef}
        <span className='text-lg'>{textCus}</span>
      </p>
    </div>
  );
};

type Props = {
  img: string;
  children: string;
};

const TextWithIcon: React.FC<Props> = (props: Props) => {
  const { img, children } = props;
  return (
    <>
      <div className='flex items-center'>
        <Image src={img} alt='check-mark' width={36} height={36} objectFit='contain' />
        <p className='ml-2 font-bold text-primary-800'>{children}</p>
      </div>
    </>
  );
};
