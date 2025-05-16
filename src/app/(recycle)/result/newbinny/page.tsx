import { TYPE_ICON } from '@/components/CollectionCard';
import BinnyModel from '@/components/Modeling/BinnyModel';
import Image from 'next/image';
import EditIcon from '@/assets/icons/Icon/pen.svg';
import { BinnyType } from '@/types/character';

async function NewBinnyPage({ searchParams }: any) {
  const { id, type, name } = await searchParams;

  return (
    <div>
      <section className="flex flex-col items-center text-XXL">
        <p>🎉</p>
        <p className={`text-center text-main-800`}>New character collected!</p>
      </section>

      <section className="mx-auto w-[360px] h-[360px]">
        <BinnyModel type={type} />
      </section>

      <div className="flex gap-4 items-center justify-center">
        <Image src={TYPE_ICON[type as BinnyType]} alt="recycle type icon" />
        <label className="flex gap-2 relative h-6">
          <input
            defaultValue={name}
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
      <p className="text-center mt-6 break-words mx-auto">
        Binny is a cheerful little recycling bin who loves helping kids learn
        how to sort waste the right way! 🌱🗑️
      </p>
    </div>
  );
}

export default NewBinnyPage;
