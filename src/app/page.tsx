'use cient';
import dynamic from 'next/dynamic';

const ThreeScene = dynamic(() => import('./lib/components/ThreeScene'), { ssr: false });

export default function Home() {
  return (
    <div>
      <ThreeScene />
    </div>
  );
}