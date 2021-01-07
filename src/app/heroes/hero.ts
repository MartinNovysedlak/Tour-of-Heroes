import { Item } from '../items/item';
export class Hero {

  constructor(
    public id: number,
    public name: string,
    public items: Item[],
    public money: number,
    public life: number,
    public strength: number
  ){}
}
