import { PathType } from '@/types/setting';
import Image from 'next/image';
import logoImg from '@/assets/Logo.svg';

interface Props {
  curPath: PathType;
}

function Header({ curPath }: Props) {
  const user = {
    // image: profileImage,
    image:
      'https://lh6.googleusercontent.com/proxy/par5zeMOPk55pGy-uus46ovpSLkltrIDbOIuW8yEtUmjXS6YTZfTrH6BLR1S2fCCLDlKKmbzs_iHND1Dwnp1HNF6s5GGYNo6EIq0QGMltAXCS-yv',
  };

  return (
    <header className="p-4 flex justify-between text-XXL absolute top-0 left-0 right-0 h-[72px] bg-main-50 z-10">
      <button>
        {curPath === '/collection' ? (
          'Collection'
        ) : (
          <Image src={logoImg} alt="Binny Buddy logo" height={48} priority />
        )}
      </button>
      <button>
        <div className="relative w-10 h-10 rounded-full border-2 border-main-400 object-cover object-center overflow-hidden">
          <Image
            src={user.image}
            width={40}
            height={40}
            alt="프로필 이미지"
            className="absolute object-cover w-full h-full object-center"
            priority
          />
        </div>
      </button>
    </header>
  );
}

export default Header;
