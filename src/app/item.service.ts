import { Injectable } from '@angular/core';
import { Item } from './items/item';
import { ITEMS } from './items/mock-items';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  getItems(): Observable<Item[]> {
    this.messageService.add('ItemService: fetched items');
    return of(ITEMS);
  }
  getItem(id: number): Observable<Item> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`ItemService: fetched item id=${id}`);
    return of(ITEMS.find(item => item.id === id));
  }

  constructor(private messageService: MessageService) { }
}
