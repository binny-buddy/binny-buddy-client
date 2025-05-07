'use client';

import CollectionIcon from '../Icon/CollectionIcon';
import HomeIcon from '../Icon/HomeIcon';
import RecycleIcon from '../Icon/RecycleIcon';
import CenterCircle from './CenterCircle';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import { PathType } from '@/types/setting';

interface Props {
  curPath: PathType;
}

function TabBar({ curPath }: Props) {
  return (
    <div className="flex w-full h-[106px]">
      <LeftSide />
      <button
        onClick={() => (window.location.href = '/')}
        className={`tabbar-center flex flex-col items-center text-S ${
          curPath === '/' ? 'text-main-600' : 'text-gray-200'
        } pt-2`}
      >
        <HomeIcon isSelected={curPath === '/'} />
        <span>Home</span>
      </button>

      <div className="relative">
        <button className="absolute-center top-0 shadow-tabbar-center w-20 h-20 bg-white rounded-full flex items-center justify-center">
          <RecycleIcon />
        </button>
        <CenterCircle />
      </div>

      <button
        onClick={() => (window.location.href = '/collection')}
        className={`tabbar-center flex flex-col items-center text-S ${
          curPath === '/collection' ? 'text-main-600' : 'text-gray-200'
        } pt-2`}
      >
        <CollectionIcon isSelected={curPath === '/collection'} />
        <span>Collection</span>
      </button>
      <RightSide />
    </div>
  );
}

export default TabBar;
