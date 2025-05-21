import CollectionCard from '@/components/CollectionCard';
import { API_BASE_URL } from '@/lib/config';
import { Binny } from '@/types/character';

async function CollectionPage() {
  const user = await (
    await fetch(`${API_BASE_URL}/api-public/v1/home`)
  ).json();

  const data = (await (
    await fetch(
      `${API_BASE_URL}/api-public/v1/collection/${user.collection_id}`
    )
  ).json()) as {
    id: number;
    binny_list: Binny[];
  };

  return (
    <div className="grid grid-cols-2 gap-y-5 justify-items-center">
      {data.binny_list.map(({ id, name, level, binny_type, xp }) => (
        <CollectionCard
          key={id}
          id={id}
          name={name}
          level={level}
          type={binny_type}
          xp={xp}
        />
      ))}
    </div>
  );
}

export default CollectionPage;
