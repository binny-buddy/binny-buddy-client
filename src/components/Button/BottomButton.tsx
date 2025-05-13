'use client';

import Link from 'next/link';
import HomeIcon from '../Icon/HomeIcon';

interface Props {
  btnText?: string;
  handlebtnClick?: () => void;
}

function BottomButton({ btnText = 'Get Reward!', handlebtnClick }: Props) {
  return (
    <div className="w-full max:w-[430px] fixed bottom-0 left-1/2 -translate-x-1/2 bg-white shadow-card rounded-t-2xl pt-5 pb-[66px] px-4 flex gap-[10px]">
      <Link href={'/'} className="w-11 h-11 bg-main-50 p-[6px] rounded-lg">
        <HomeIcon />
      </Link>
      <button
        onClick={handlebtnClick}
        className="h-[46px] px-4 w-full bg-main-400 hover:bg-main-600 rounded-lg text-white text-L"
      >
        {btnText}
      </button>
    </div>
  );
}

export default BottomButton;
