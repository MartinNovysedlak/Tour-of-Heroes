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
      { id: 11, name: 'Dr Nice', money: 33, items: [], life: 95, strength: 20},
      { id: 12, name: 'Narco', money: 90, items: [], life: 90, strength: 30 },
      { id: 13, name: 'Bombasto', money: 80, items: [], life: 85, strength: 40 },
      { id: 14, name: 'Celeritas', money: 47, items: [], life: 50, strength: 28 },
      { id: 15, name: 'Magneta', money: 58, items: [], life: 115, strength: 36 },
      { id: 16, name: 'RubberMan', money: 76, items: [], life: 36, strength: 43 },
      { id: 17, name: 'Dynama', money: 96, items: [], life: 87, strength: 27 },
      { id: 18, name: 'Dr IQ', money: 43, items: [], life: 93, strength: 44 },
      { id: 19, name: 'Magma', money: 55, items: [], life: 44, strength: 15 },
      { id: 20, name: 'Tornado', money: 87, items: [], life: 68, strength: 18 }
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