import Link from 'next/link';
import { useEffect } from 'react';
import { useGss } from '../hook/getGss';

const Home: React.FC = () => {
  const { getGss, gss } = useGss();

  useEffect(() => {
    getGss();
  }, []);

  return (
    <>
      <header>
        <div>
          {gss.map((row, index) => (
            <p key={index}>\ 現在 {row.count}名 がダウンロード /</p>
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
