import axios from 'axios';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type GssType = {
  count: number;
};

const Home: React.FC = () => {
  const [gss, setGss] = useState<Array<GssType>>([]);
  useEffect(() => {
    const getGss = () => {
      axios
        .get<Array<GssType>>(
          'https://api.steinhq.com/v1/storages/627bbaacbca21f053e928f18/downloadCount',
        )
        .then((res) => {
          setGss(res.data);
        });
    };
    getGss();
  }, []);

  return (
    <>
      <header>
        <div>
          {gss.map((row, index) => (
            <p key={index}>＼ 現在 {row.count}名 がダウンロード ／</p>
          ))}
        </div>
        <button className='m-2 rounded bg-primary-500 py-2 px-4 font-bold text-white hover:bg-primary-700'>
          <Link href='https://docs.google.com/forms/d/e/1FAIpQLSek7WW2F9YDR3rVgyShjGvARQ4CGMmEuzi64wXzyGYn7tpvUg/viewform?usp=sf_link'>
            <a target='_blank'> 資料ダウンロード</a>
          </Link>
        </button>
      </header>
      <main className='mx-auto max-w-6xl py-6'>
        <h1 className='text-lg font-bold text-primary-800'>
          Welcome to Kikagaku Next.js Starter!!
        </h1>
      </main>
    </>
  );
};

export default Home;
