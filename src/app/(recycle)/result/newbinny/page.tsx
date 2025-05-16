import BinnyModel from '@/components/Modeling/BinnyModel';
import NameInput from '@/components/Input/NameInput';
import { redirect } from 'next/navigation';

async function NewBinnyPage({ searchParams }: any) {
  const { id, type, name } = await searchParams;
  if (!(id && type && name)) redirect('/');

  return (
    <div>
      <section className="flex flex-col items-center text-XXL">
        <p>🎉</p>
        <p className={`text-center text-main-800`}>New character collected!</p>
      </section>

      <section className="mx-auto w-[360px] h-[360px]">
        <BinnyModel type={type} />
      </section>

      <NameInput binnyId={id} binnyType={type} defaultValue={name} />
      <p className="text-center mt-6 break-words mx-auto">
        Binny is a cheerful little recycling bin who loves helping kids learn
        how to sort waste the right way! 🌱🗑️
      </p>
    </div>
  );
}

export default NewBinnyPage;
