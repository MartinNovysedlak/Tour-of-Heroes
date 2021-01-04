import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heroes/hero';
import { Item } from './items/item';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    const items = [
    { id: 11, price: 30, name: 'Staff' },
    { id: 12, price: 15, name: 'Knife' },
    { id: 13, price: 25, name: 'Bow' },
    { id: 14, price: 45, name: 'Gun' },
    { id: 15, price: 20, name: 'Axe' }
    ];

    return {heroes, items}
  }
  

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  genItemId(items: Item[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 11;
  }
}