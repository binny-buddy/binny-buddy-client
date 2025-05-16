import { TYPE_ICON } from '@/components/CollectionCard';
import { Binny } from '@/types/character';
import Image from 'next/image';

import SecondHeader from '@/components/Header/SecondHeader';
import BinnyModel from '@/components/Modeling/BinnyModel';
import {
  BinnySchema,
  HomeSchema,
} from '../../../../types/models/data-contracts';
import NameInput from '@/components/Input/NameInput';

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
  ).json()) as BinnySchema;

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
            <NameInput
              defaultValue={data.name}
              binnyType={data.binny_type}
              binnyId={data.id}
            />
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
                {String(data.reward_count).padStart(2, '0')}
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
