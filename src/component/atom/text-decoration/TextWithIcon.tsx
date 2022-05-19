import Image from 'next/image';

type Props = {
  img: string;
  children: string;
};

export const TextWithIcon: React.FC<Props> = (props: Props) => {
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
