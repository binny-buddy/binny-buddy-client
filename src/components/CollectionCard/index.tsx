import TogoCupIcon from '@/assets/icons/Symbol/to-goCup.svg';
import DeliveryIcon from '@/assets/icons/Symbol/delivery.svg';
import BottleIcon from '@/assets/icons/Symbol/delivery.svg';
import togoBinny from '@/assets/binny/binnybuddycup 1.svg';
import deliveryBinny from '@/assets/binny/container_ss 1.svg';
import bottleBinny from '@/assets/binny/pet 1.svg';
import { CharacterType } from '@/types/character';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  id: number;
  name: string;
  level: number;
  type: CharacterType;
}

export const TYPE_ICON = {
  togoCup: TogoCupIcon,
  delivery: DeliveryIcon,
  bottle: BottleIcon,
};

const TYPE_IMG = {
  togoCup: togoBinny,
  delivery: deliveryBinny,
  bottle: bottleBinny,
};

function CollectionCard({ id, name, level, type }: Props) {
  return (
    <Link href={`/binny/${id}`}>
      <div className="shadow-card p-5 w-[171px] h-[224px] bg-white hover:bg-main-50 rounded-2xl flex flex-col gap-2 relative cursor-pointer">
        <div className="relative w-[128px] h-[128px]">
          <Image
            src={TYPE_ICON[type]}
            alt="recycle type icon"
            className="absolute top-0 right-0"
          />
          <Image
            src={TYPE_IMG[type]}
            alt="binny img"
            className="w-full h-full object-center"
            width={128}
            height={128}
            priority
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-M font-bold">{name}</p>
          <div className="flex gap-1 items-center">
            <p>{`Lv.${String(level).padStart(2, '0')}`}</p>
            <div className="relative w-[92px] bg-main-50 h-1">
              <div className={`absolute h-1 bg-main-400 ${'w-1/2'}`} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CollectionCard;
