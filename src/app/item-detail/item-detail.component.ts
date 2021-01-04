import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../items/item'
import { ItemService } from '../item.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: Item;
  
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id)
      .subscribe(item => this.item = item);
  }

  goBack(): void {
    this.location.back();
  }

  Save(): void {
    this.itemService.updateItem(this.item)
      .subscribe(() => this.goBack());
  }

}
