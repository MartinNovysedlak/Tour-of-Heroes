import { Location } from '@angular/common';
import { Item } from './../items/item';
import { HeroService } from './../hero.service';
import { ItemService } from './../item.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-shop',
  templateUrl: './item-shop.component.html',
  styleUrls: ['./item-shop.component.css']
})
export class ItemShopComponent implements OnInit {
  
  items: Item[];
  hero: Hero;


  constructor(
    private itemService: ItemService, 
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
    ) {}

  ngOnInit(): void {
    this.getItems();
    this.getHero();
  }

  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => this.items = items);
  }
  
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  buy(item: Item): void{
    this.hero.money -= item.price;
    this.hero.items.push(item); 
    this.location.back();
  }
}
