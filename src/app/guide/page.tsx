import { TYPE_ICON } from '@/components/CollectionCard';
import GuideResultIcon from '@/components/Icon/GuideResultIcon';
import { CharacterType } from '@/types/character';
import Image from 'next/image';

const DUMMY_SUCCESS: {
  isSuccessed: boolean;
  type: CharacterType;
  msg: string;
} = {
  isSuccessed: true,
  type: 'togoCup',
  msg: 'Don’t forget to take off the lid, straw, and sleeve—they go in the trash too, or get sorted by their material. Clean cups help the planet, so let’s do it right! 🌍✨',
};

const TYPE_MSG = {
  togoCup: 'To-go Cup',
  delivery: 'Delivery',
  bottle: 'Bottle',
};

const MSG = {
  success: 'Well done! A reward is waiting for you!',
  fail: 'Try again with the guide for your reward!',
};

function GuidePage() {
  const data = DUMMY_SUCCESS;

  return (
    <div className="flex flex-col gap-6">
      <section className="flex flex-col gap-2 items-center">
        <GuideResultIcon isSuccessed={data.isSuccessed} />
        <p
          className={`text-L font-bold text-center ${
            data.isSuccessed ? 'text-main-400' : 'text-gray-600'
          }`}
        >
          {MSG[data.isSuccessed ? 'success' : 'fail']}
        </p>
      </section>

      <section>
        <div className="mx-auto relative rounded-2xl shadow-card overflow-hidden w-[171px] h-[171px]">
          <Image
            src={
              'https://png.pngtree.com/thumb_back/fh260/background/20230112/pngtree-cell-phone-wallpaper-flowers-healing-system-fresh-wallpaper-spring-image_1511567.jpg'
            }
            alt="recycle picture"
            width={171}
            height={171}
            className="w-full h-full object-center object-cover"
            priority
          />
          <Image
            src={TYPE_ICON[data.type]}
            alt="recycle type icon"
            className="absolute top-2 right-2"
          />
        </div>
        <p className="text-L text-gray-800 text-center mt-3">
          <span className="text-togo-300">{TYPE_MSG[data.type]}</span> found!
        </p>
      </section>

      <section className="bg-white rounded-2xl px-5 py-6 flex flex-col gap-4">
        <p className="text-L">How to recycle?</p>
        <p className="text-gray-600">{data.msg}</p>
      </section>
    </div>
  );
}

export default GuidePage;
