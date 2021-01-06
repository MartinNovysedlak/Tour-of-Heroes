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
      { id: 11, name: 'Dr Nice', money: 100, items: [], life: 95 },
      { id: 12, name: 'Narco', money: 100, items: [], life: 90 },
      { id: 13, name: 'Bombasto', money: 100, items: [], life: 85 },
      { id: 14, name: 'Celeritas', money: 100, items: [], life: 50 },
      { id: 15, name: 'Magneta', money: 100, items: [], life: 115 },
      { id: 16, name: 'RubberMan', money: 100, items: [], life: 36 },
      { id: 17, name: 'Dynama', money: 100, items: [], life: 87 },
      { id: 18, name: 'Dr IQ', money: 100, items: [], life: 93 },
      { id: 19, name: 'Magma', money: 100, items: [], life: 44 },
      { id: 20, name: 'Tornado', money: 100, items: [], life: 68 }
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