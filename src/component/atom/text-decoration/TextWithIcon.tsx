import Image from 'next/image';

type Props = {
  children: string;
  isUnCheck?: boolean;
};

export const TextWithIcon: React.FC<Props> = (props: Props) => {
  const { children, isUnCheck } = props;
  return (
    <>
      <div className={isUnCheck ? 'opacity-30' : 'opacity-100'}>
        <div className='flex items-center'>
          <Image
            src={isUnCheck ? '/img/check-off.png' : '/img/check-on.png'}
            alt='check-mark'
            width={36}
            height={36}
            objectFit='contain'
          />
          <p className='ml-2 text-base font-bold  md:text-lg'>{children}</p>
        </div>
      </div>
    </>
  );
};
