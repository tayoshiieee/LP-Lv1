type Onlichildren = {
  textDef: string;
  textCus?: string;
};

export const TextWithUnderbar: React.FC<Onlichildren> = (props: Onlichildren) => {
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
