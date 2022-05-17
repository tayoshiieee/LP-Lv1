import Image from 'next/image';

type IconImage = {
  img: string;
};

export const SnsIcon = (props: IconImage) => {
  const { img } = props;
  return (
    <div className='mx-3 flex h-[62px] w-[62px] items-center justify-center rounded-md bg-white '>
      <Image src={img} alt='logo' width={40} height={40} objectFit='contain' />
    </div>
  );
};
