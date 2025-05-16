import { LEVEL_MAX } from '@/const/level';
import BinnyModel from '@/components/Modeling/BinnyModel';
import { redirect } from 'next/navigation';

async function GainPage({ searchParams }: any) {
  const { id, type, name, level, earned, before } = await searchParams;
  if (!(id && type && name && level && earned && before)) redirect('/');

  return (
    <>
      <section className="flex flex-col gap-6 items-center">
        <div className="text-XXL text-center">
          <p>⚡️</p>
          <p className="text-main-800">Nice! XP gained!</p>
        </div>
        <div>
          <div className="flex gap-5 items-center">
            <p className="text-gray-400">
              Lv. {String(level).padStart(2, '0')}
            </p>
            <p className="text-main-800 text-M">
              {before} → {Number(before) + Number(earned)}
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="mb-2 flex justify-between items-center">
            <p className="text-XL">
              Lv.{' '}
              <span className="font-bold text-main-800">
                {String(level).padStart(2, '0')}
              </span>
            </p>
            <p className="text-gray-400 text-M">
              {String(Number(before) + Number(earned))} /{' '}
              {String(LEVEL_MAX[level]).padStart(3, '0')}
            </p>
          </div>
          <div className="relative w-full bg-main-200 h-2">
            <div
              className={`absolute h-2 bg-main-400 `}
              style={{
                width: `${
                  ((Number(before) + Number(earned)) / LEVEL_MAX[level]) * 100
                }%`,
              }}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto">
        <div className="w-[360px] h-[360px]">
          <BinnyModel type={type} />
        </div>
        <p className="mt-4 text-gray-800 text-XXL font-bold text-center">
          {name}
        </p>
      </section>
    </>
  );
}

export default GainPage;
