import Image from 'next/image';

type Props = {
  img: string;
  children: string;
  color?: string;
};

export const TextWithIcon: React.FC<Props> = (props: Props) => {
  const { img, children, color } = props;
  return (
    <>
      <div className='flex items-center'>
        <Image src={img} alt='check-mark' width={36} height={36} objectFit='contain' />
        <div className={color}>
          <p className='ml-2 text-base font-bold  md:text-lg'>{children}</p>
        </div>
      </div>
    </>
  );
};
