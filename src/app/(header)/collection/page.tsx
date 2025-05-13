import CollectionCard from '@/components/CollectionCard';
import { CharacterType } from '@/types/character';

const DUMMY: {
  id: number;
  name: string;
  level: number;
  type: CharacterType;
}[] = [
  {
    id: 0,
    name: 'Binny',
    level: 0,
    type: 'togoCup',
  },
  {
    id: 1,
    name: 'Binny',
    level: 0,
    type: 'togoCup',
  },
  {
    id: 2,
    name: 'Binny',
    level: 1,
    type: 'togoCup',
  },
  {
    id: 3,
    name: 'Binny',
    level: 1,
    type: 'togoCup',
  },
];

function CollectionPage() {
  return (
    <div>
      {DUMMY.map(({ id, name, level, type }) => (
        <CollectionCard key={id} name={name} level={level} type={type} />
      ))}
    </div>
  );
}

export default CollectionPage;
