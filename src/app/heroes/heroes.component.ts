import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  sortBy: string = 'id';

  constructor(private heroService: HeroService) { }

  ngOnInit() {    
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  
  sortHero(sortBy: string){
    this.sortBy = sortBy
    this.sort();
  }
  sort() {
    if(this.sortBy === 'name')
      this.heroes.sort((a,b) => a.name.localeCompare(b.name));

    if(this.sortBy === 'id')
      this.heroes.sort((a,b) => a.id > b.id ? 1 : -1);

    if(this.sortBy === 'money')
      this.heroes.sort((a,b) => a.money > b.money ? 1 : -1);

    if(this.sortBy === 'life')
      this.heroes.sort((a,b) => a.life > b.life ? 1 : -1);
  }
}