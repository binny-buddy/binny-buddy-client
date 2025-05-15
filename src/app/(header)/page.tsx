import TogoCupIcon from '@/assets/icons/Symbol/to-goCup.svg';
import DeliveryIcon from '@/assets/icons/Symbol/delivery.svg';
import BottleIcon from '@/assets/icons/Symbol/bottle.svg';
import Image from 'next/image';
import HomeModel from '@/components/Modeling/HomeModel';
import { BinnyType } from '@/types/character';

const USER = {
  recycle: {
    total: 19,
    togo: 12,
    delivery: 0,
    bottle: 7,
  },
  attend: [true, true, false, false, true, false, true],
};

const WEEK_MSG = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export default async function Home() {
  let collectionType = {
    cup: false,
    container: false,
    bottle: false,
  };

  let recycleCnt = {
    total: 0,
    cup: 0,
    container: 0,
    bottle: 0,
  };

  const data = await (
    await fetch('https://binny-buddy-server.kodori.dev/api-public/v1/home')
  )
    .json()
    .then((data) => {
      for (let item of data.recent_reward_histories) {
        if (!item.detection_result) continue;
        recycleCnt[item.detection_result.binny_type as BinnyType]++;
        recycleCnt.total++;
      }
      return data;
    });

  const collectionData = await (
    await fetch(
      `https://binny-buddy-server.kodori.dev/api-public/v1/collection/${data.collection_id}`
    )
  )
    .json()
    .then((item) => {
      for (let binny of item.binny_list) {
        collectionType[binny.binny_type as BinnyType] = true;
      }
    });

  return (
    <>
      {/* Recycle Count */}
      <div className="mt-4 mb-3 rounded-2xl px-5 py-6 flex flex-col gap-2 bg-main-400 shadow-card text-white text-L">
        <p>
          You recycled{' '}
          <span className="font-bold">
            {String(recycleCnt.total).padStart(2, '0')}
          </span>{' '}
          times this month!
        </p>
        <div className="flex gap-[10px] justify-end">
          <div className="text-togo-100 flex items-center gap-2">
            <Image src={TogoCupIcon} alt="togo-Cup icon" />
            <p>{String(recycleCnt.cup).padStart(2, '0')}</p>
          </div>
          <div className="text-delivery-100 flex items-center gap-2">
            <Image src={DeliveryIcon} alt="Delivery icon" />
            <p>{String(recycleCnt.container).padStart(2, '0')}</p>
          </div>
          <div className="text-bottle-100 flex items-center gap-2">
            <Image src={BottleIcon} alt="Bottle icon" />
            <p>{String(recycleCnt.bottle).padStart(2, '0')}</p>
          </div>
        </div>
      </div>

      {/* Attend */}
      <div className="rounded-2xl px-5 py-6 flex flex-col gap-2 bg-white shadow-card text-L">
        <p>
          <span className="text-main-800 font-bold">
            {String(recycleCnt.total).padStart(2, '0')}
          </span>{' '}
          check-ins this week!
        </p>
        <div className="flex gap-[10px] justify-end">
          {USER.attend.map((isAttend, idx) => (
            <div
              key={idx}
              className={`w-7 h-7 border-2 rounded-full flex justify-center items-center ${
                isAttend
                  ? 'text-main-400 border-main-400'
                  : 'text-main-50 border-main-50'
              }`}
            >
              {WEEK_MSG[idx]}
            </div>
          ))}
        </div>
      </div>

      {/* Modeling */}
      <section className="mt-7 h-[290px]">
        <HomeModel
          isCup={collectionType.cup}
          isContainer={collectionType.container}
          isBottle={collectionType.bottle}
        />
      </section>
    </>
  );
}
