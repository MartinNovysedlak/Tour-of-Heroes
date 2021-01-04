import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ITEMS } from './mock-items';
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

  constructor(private itemService: ItemService, private messageService: MessageService) {}

  ngOnInit() {
    this.getItems();
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
    this.messageService.add(`HeroesComponent: Selected hero id=${item.id}`);
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
}
