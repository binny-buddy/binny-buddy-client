'use client';

import Image from 'next/image';
import BackIcon from '@/assets/icons/back.svg';
import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface Props {
  children: ReactNode;
}
function SecondHeader({ children }: Props) {
  const router = useRouter();

  return (
    <header className="fixed z-10 top-0 left-1/2 -translate-x-1/2 max:w-[430px] w-full px-4 py-5 h-[72px] flex items-center justify-center text-XXL">
      <button onClick={() => router.back()}>
        <Image
          src={BackIcon}
          alt="뒤로가기"
          width={32}
          height={32}
          className="absolute top-5 left-4"
        />
      </button>
      {children}
    </header>
  );
}

export default SecondHeader;
