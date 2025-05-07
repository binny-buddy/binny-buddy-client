import CollectionIcon from '../Icon/CollectionIcon';
import HomeIcon from '../Icon/HomeIcon';
import RecycleIcon from '../Icon/RecycleIcon';
import CenterCircle from './CenterCircle';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

function TabBar() {
  return (
    <div className="flex w-full h-[106px]">
      <LeftSide />
      <button className="tabbar-center flex flex-col items-center text-S text-gray-200 pt-2">
        <HomeIcon />
        <span>Home</span>
      </button>
      <div className="relative">
        <button className="absolute-center top-0 shadow-tabbar-center w-20 h-20 bg-white rounded-full flex items-center justify-center">
          <RecycleIcon />
        </button>
        <CenterCircle />
      </div>
      <button className="tabbar-center flex flex-col items-center text-S text-gray-200 pt-2">
        <CollectionIcon />
        <span>Collection</span>
      </button>
      <RightSide />
    </div>
  );
}

export default TabBar;
