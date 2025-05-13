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
  {
    id: 36,
    name: 'Binny',
    level: 1,
    type: 'togoCup',
  },
  {
    id: 35,
    name: 'Binny',
    level: 1,
    type: 'togoCup',
  },
  {
    id: 34,
    name: 'Binny',
    level: 1,
    type: 'togoCup',
  },
  {
    id: 37,
    name: 'Binny',
    level: 1,
    type: 'togoCup',
  },
  {
    id: 33,
    name: 'Binny',
    level: 1,
    type: 'togoCup',
  },
  {
    id: 32,
    name: 'Binny',
    level: 1,
    type: 'togoCup',
  },
  {
    id: 31,
    name: 'Binny',
    level: 1,
    type: 'togoCup',
  },
];

function CollectionPage() {
  return (
    <div className="grid grid-cols-2 gap-y-5 justify-items-center">
      {DUMMY.map(({ id, name, level, type }) => (
        <CollectionCard key={id} name={name} level={level} type={type} />
      ))}
    </div>
  );
}

export default CollectionPage;
