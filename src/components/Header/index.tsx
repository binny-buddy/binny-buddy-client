import { PathType } from '@/types/setting';
import profileImage from '../../../public/dummy_profile.png';
import Image from 'next/image';

const PAGE_NAME = {
  '/': 'Binny Buddy',
  '/collection': 'Collection',
};

interface Props {
  curPath: PathType;
}

function Header({ curPath }: Props) {
  const user = {
    image: profileImage,
    // image:
    //   'https://encrypteod-tbn0.gstatic.com/images?q=tbn:ANd9GcTr9MatAnJ1UD9OnFt3TgxY9gG9LcYUOSQFdQE_4g0Ul_JgmAEv4CnNEBvmvbKBTGyycKQ&usqp=CAU',
  };

  return (
    <header className="p-4 flex justify-between text-L absolute top-0 left-0 right-0">
      <button>{PAGE_NAME[curPath]}</button>
      <button>
        <div className="relative w-10 h-10 rounded-full border-2 border-main-400 object-cover object-center overflow-hidden">
          <Image
            src={user.image}
            width={40}
            height={40}
            alt="프로필 이미지"
            className="absolute"
          />
        </div>
      </button>
    </header>
  );
}

export default Header;
