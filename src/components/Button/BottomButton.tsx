'use client';

import Link from 'next/link';
import HomeIcon from '../Icon/HomeIcon';
import { useEffect, useState } from 'react';
import { RewardHistorySchema } from '../../../types/models/data-contracts';

interface Props {
  path: '/guide' | '/result/gain' | '/result/newbinny';
}

function BottomButton({ path }: Props) {
  const [data, setData] = useState<null | RewardHistorySchema>(null);

  useEffect(() => {
    setData(
      JSON.parse(window.localStorage.getItem('binnybuddy-1-result') || '')
    );
  }, []);

  const clickReward = () => {
    if (!data) return;
    if (data.is_level_up) window.location.href = '/result/levelup';
    if (data.is_binny_created)
      window.location.href = `/result/newbinny?id=${data.binny?.id}&type=${data.binny?.binny_type}&name=${data.binny?.name}`;
  };

  const handlebtnClick = () => {
    if (!data) return;
    if (path === '/guide' && data.detection_result?.is_clean) clickReward();
    if (path === '/guide' && !data.detection_result?.is_clean)
      window.location.href = '/camera';
    if (path.startsWith('/result'))
      window.location.href = `/binny/${data.binny?.id}`;
  };

  const returnBtnText = () => {
    if (!data) return;
    if (path === '/guide' && data.detection_result?.is_clean)
      return 'Get Reward!';
    if (path === '/guide' && !data.detection_result?.is_clean)
      return 'Try Again';
    if (path === '/result/newbinny') return 'Explore Character';
  };

  return (
    <div className="w-full max:w-[430px] fixed bottom-0 left-1/2 -translate-x-1/2 bg-white shadow-card rounded-t-2xl pt-5 pb-[66px] px-4 flex gap-[10px]">
      <Link href={'/'} className="w-11 h-11 bg-main-50 p-[6px] rounded-lg">
        <HomeIcon />
      </Link>
      <button
        onClick={handlebtnClick}
        className="h-[46px] px-4 w-full bg-main-400 hover:bg-main-600 rounded-lg text-white text-L"
      >
        {returnBtnText()}
      </button>
    </div>
  );
}

export default BottomButton;
