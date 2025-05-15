export type CharacterType = 'togoCup' | 'delivery' | 'bottle';
export type BinnyType = 'cup' | 'container' | 'bottle';

export interface Binny {
  id: number;
  name: string;
  level: number;
  binny_type: BinnyType;
  xp: number;
}
