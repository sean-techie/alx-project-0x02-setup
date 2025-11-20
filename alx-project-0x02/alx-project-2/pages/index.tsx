import type { NextPage } from 'next';
import Header from '../components/layout/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">Welcome to ALX Project 0x02!</h1>
        <p className="mt-4 text-lg text-gray-600">
          Your Next.js app with TypeScript and Tailwind CSS is ready.
        </p>
      </main>
    </div>
  );
};

export default Home;
