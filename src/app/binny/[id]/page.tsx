import BackIcon from '@/assets/icons/back.svg';
import { TYPE_ICON } from '@/components/CollectionCard';
import { CharacterType } from '@/types/character';
import Image from 'next/image';
import EditIcon from '@/assets/icons/Icon/pen.svg';

const BINNY: {
  id: number;
  name: string;
  level: number;
  level_cur: number;
  level_max: number;
  recycle_num: number;
  type: CharacterType;
} = {
  id: 2,
  name: 'Binny',
  level: 1,
  level_cur: 50,
  level_max: 500,
  recycle_num: 5,
  type: 'togoCup',
};

function BinnyPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full px-4 py-5 h-[72px] flex items-center justify-center text-XXL">
        <Image
          src={BackIcon}
          alt="뒤로가기"
          width={32}
          height={32}
          className="absolute top-5 left-4"
        />
        Details
      </header>

      <div className="min-h-dvh pt-24 px-4 h-full flex flex-col justify-between">
        <section className=" mx-auto w-[360px] h-[360px]"></section>

        {/* Bottom Sheet */}
        <div className="py-6 px-5 pb-12 flex flex-col gap-10 w-full bg-white rounded-t-2xl shadow-card">
          {/* Binny Info */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center justify-center">
              <Image src={TYPE_ICON[BINNY.type]} alt="recycle type icon" />
              <label className="flex gap-2 relative h-6">
                <input
                  defaultValue={BINNY.name}
                  className="text-XXL font-bold w-auto border-b-2 border-transparent focus:border-b-black focus:outline-none"
                />
                <Image
                  src={EditIcon}
                  alt="edit icon"
                  width={24}
                  height={24}
                  className="absolute right-0 cursor-pointer"
                />
              </label>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-XL">
                Lv.{' '}
                <span className="font-bold text-main-800">
                  {String(BINNY.level).padStart(2, '0')}
                </span>
              </p>
              <p className="text-gray-400">
                {String(BINNY.level_cur)} /{' '}
                {String(BINNY.level_max).padStart(3, '0')}
              </p>
            </div>
            <div className="relative bg-main-50 h-2">
              <div className={`absolute h-2 bg-main-400 ${'w-1/2'}`} />
            </div>
          </div>

          {/* Binny message */}
          <div className="border border-togo-300 rounded-2xl px-5 py-6 flex flex-col gap-3">
            <p>
              Recycle <span className="text-togo-300">To-go cup</span> to help
              Binny grow!
            </p>
            <p className="text-L text-togo-300 flex gap-2 items-center">
              <Image src={TYPE_ICON[BINNY.type]} alt="recycle type icon" />
              Recycled{' '}
              <span className="font-bold">
                {String(BINNY.recycle_num).padStart(2, '0')}
              </span>{' '}
              times
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BinnyPage;
