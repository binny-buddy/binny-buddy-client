import { TYPE_ICON } from '@/components/CollectionCard';
import { Binny } from '@/types/character';
import Image from 'next/image';
import EditIcon from '@/assets/icons/Icon/pen.svg';
import SecondHeader from '@/components/Header/SecondHeader';
import BinnyModel from '@/components/Modeling/BinnyModel';

const COLOR = {
  border: {
    cup: 'border-togo-300',
    container: 'border-delivery-300',
    bottle: 'border-bottle-300',
  },
  text: {
    cup: 'text-togo-300',
    container: 'text-delivery-300',
    bottle: 'text-bottle-300',
  },
};

async function BinnyPage({ params }: any) {
  const { id } = await params;
  const data = (await (
    await fetch(
      `https://binny-buddy-server.kodori.dev/api-public/v1/binny/${id}`
    )
  ).json()) as Binny;

  return (
    <>
      <SecondHeader>Details</SecondHeader>

      <div className="min-h-dvh pt-24 px-4 h-full flex flex-col justify-between">
        <section className=" mx-auto w-[360px] h-[360px]">
          <BinnyModel type={data.binny_type} />
        </section>

        {/* Bottom Sheet */}
        <div className="py-6 px-5 pb-12 flex flex-col gap-10 w-full bg-white rounded-t-2xl shadow-card">
          {/* Binny Info */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center justify-center">
              <Image src={TYPE_ICON[data.binny_type]} alt="recycle type icon" />
              <label className="flex gap-2 relative h-6">
                <input
                  defaultValue={data.name}
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
                  {String(data.level).padStart(2, '0')}
                </span>
              </p>
              <p className="text-gray-400">
                {String(data.xp)} / {String(2000)}
              </p>
            </div>
            <div className="relative bg-main-50 h-2">
              <div
                className={`absolute h-2 bg-main-400 `}
                style={{ width: `${(data.xp / 2000) * 100}%` }}
              />
            </div>
          </div>

          {/* Binny message */}
          <div
            className={`border rounded-2xl px-5 py-6 flex flex-col gap-3 ${
              COLOR.border[data.binny_type]
            }`}
          >
            <p>
              Recycle{' '}
              <span className={COLOR.text[data.binny_type]}>To-go cup</span> to
              help Binny grow!
            </p>
            <p
              className={`text-L flex gap-2 items-center ${
                COLOR.text[data.binny_type]
              }`}
            >
              <Image src={TYPE_ICON[data.binny_type]} alt="recycle type icon" />
              Recycled{' '}
              <span className="font-bold">
                {String(data.recycle_num ?? 0).padStart(2, '0')}
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
