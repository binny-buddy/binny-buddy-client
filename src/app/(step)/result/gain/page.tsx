import { BINNY } from '@/app/binny/[id]/page';

function GainPage() {
  return (
    <>
      <section className="flex flex-col gap-6 items-center">
        <div className="text-XXL text-center">
          <p>⚡️</p>
          <p className="text-main-800">Nice! XP gained!</p>
        </div>

        <div className="w-full">
          <div className="mb-2 flex justify-between items-center">
            <p className="text-XL">
              Lv.{' '}
              <span className="font-bold text-main-800">
                {String(BINNY.level).padStart(2, '0')}
              </span>
            </p>
            <p className="text-gray-400 text-M">
              {String(BINNY.level_cur)} /{' '}
              {String(BINNY.level_max).padStart(3, '0')}
            </p>
          </div>
          <div className="relative w-full bg-main-200 h-2">
            <div className={`absolute h-2 bg-main-400 ${'w-1/2'}`} />
          </div>
        </div>
      </section>

      <section>모델링</section>
    </>
  );
}

export default GainPage;
