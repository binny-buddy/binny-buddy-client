import TogoCupIcon from '@/assets/icons/Symbol/to-goCup.svg';
import DeliveryIcon from '@/assets/icons/Symbol/delivery.svg';
import BottleIcon from '@/assets/icons/Symbol/bottle.svg';
import Image from 'next/image';
import HomeModel from '@/components/Modeling/HomeModel';

const USER = {
  recycle: {
    total: 19,
    togo: 12,
    delivery: 0,
    bottle: 7,
  },
  attend: [false, true, false, false, true, false, true],
};

const WEEK_MSG = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export default function Home() {
  return (
    <>
      {/* Recycle Count */}
      <div className="mb-3 rounded-2xl px-5 py-6 flex flex-col gap-2 bg-main-400 shadow-card text-white text-L">
        <p>
          You recycled{' '}
          <span className="font-bold">
            {String(USER.recycle.total).padStart(2, '0')}
          </span>{' '}
          times this month!
        </p>
        <div className="flex gap-[10px] justify-end">
          <div className="text-togo-100 flex items-center gap-2">
            <Image src={TogoCupIcon} alt="togo-Cup icon" />
            <p>{String(USER.recycle.togo).padStart(2, '0')}</p>
          </div>
          <div className="text-delivery-100 flex items-center gap-2">
            <Image src={DeliveryIcon} alt="Delivery icon" />
            <p>{String(USER.recycle.delivery).padStart(2, '0')}</p>
          </div>
          <div className="text-bottle-100 flex items-center gap-2">
            <Image src={BottleIcon} alt="Bottle icon" />
            <p>{String(USER.recycle.bottle).padStart(2, '0')}</p>
          </div>
        </div>
      </div>

      {/* Attend */}
      <div className="rounded-2xl px-5 py-6 flex flex-col gap-2 bg-white shadow-card text-L">
        <p>
          <span className="text-main-800 font-bold">00</span> check-ins this
          week!
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
        <HomeModel />
      </section>
    </>
  );
}
