import Link from 'next/link';

const Home: React.FC = () => (
  <>
    <header>
      <button className='rounded bg-primary-500 py-2 px-4 font-bold text-white hover:bg-primary-700'>
        <Link href='https://www.netflix.com/'>
          <a> 資料ダウンロード</a>
        </Link>
      </button>
    </header>
    <main className='mx-auto max-w-6xl py-6'>
      <h1 className='text-lg font-bold text-primary-800'>Welcome to Kikagaku Next.js Starter!!</h1>
    </main>
  </>
);

export default Home;
