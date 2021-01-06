import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ItemService } from '../item.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {

  items: Item[];
  selectedItem: Item;
  sortBy: string = 'id';

  constructor(private itemService: ItemService, private messageService: MessageService) {}

  ngOnInit() {
    this.getItems();
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
    this.messageService.add(`itemsComponent: Selected item id=${item.id}`);
  }

  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => this.items = items);
  }

  Add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.itemService.AddItem({ name } as Item)
      .subscribe(item => {
        this.items.push(item);
      });
  }

  delete(item: Item): void {
    this.items = this.items.filter(h => h !== item);
    this.itemService.deleteItem(item).subscribe();
  }

  sortItem(sortBy: string){
    this.sortBy = sortBy
    this.sort();
  }
  sort() {
    if(this.sortBy === 'name')
      this.items.sort((a,b) => a.name.localeCompare(b.name));

    if(this.sortBy === 'id')
      this.items.sort((a,b) => a.id > b.id ? 1 : -1);

    if(this.sortBy === 'price')
      this.items.sort((a,b) => a.price > b.price ? 1 : -1);
  }
}
