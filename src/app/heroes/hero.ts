import { Item } from '../items/item';
export interface Hero {
    id: number;
    name: string;
    items: Item[];
  }