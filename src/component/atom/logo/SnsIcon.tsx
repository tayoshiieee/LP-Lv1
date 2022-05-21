import Image from 'next/image';

type IconImage = {
  img: string;
};

export const SnsIcon = (props: IconImage) => {
  const { img } = props;
  return (
    <div className='mx-1 flex h-[40px] w-[40px] items-center justify-center rounded-md bg-white p-2 md:mx-3 md:h-[62px] md:w-[62px] '>
      <Image src={img} alt='logo' width={40} height={40} objectFit='contain' />
    </div>
  );
};
