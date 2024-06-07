import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizadName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`;
  }

  changeHero(hero: string): void{
    this.name = hero;
  }

  changeAge(edad: number): void{
    this.age = edad;
  }

  resetForm(): void{
    this.name = 'ironman';
    this.age = 45;
  }
}
