import { Location } from '@angular/common';
import { ItemService } from './../item.service';
import { Item } from '../items/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  model = new Item(null, '', 0);

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
  }

  Submit():void {
    this.itemService.AddItem(this.model).subscribe();
    
 }
}