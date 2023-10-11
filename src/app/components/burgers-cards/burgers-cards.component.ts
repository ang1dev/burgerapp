import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgersCardComponent } from '../burgers-card/burgers-card.component';
import { MatGridListModule } from '@angular/material/grid-list'
import { Burger } from 'src/app/types/interfaces/burger.interface';
import { BurgerService } from 'src/app/services/burger.service';

@Component({
  selector: 'app-burgers-cards',
  standalone: true,
  imports: [CommonModule, BurgersCardComponent, MatGridListModule],
  templateUrl: './burgers-cards.component.html',
  styleUrls: ['./burgers-cards.component.scss']
})
export class BurgersCardsComponent implements OnInit {
  burgers: Burger[] = []
  breakpoint: number = 3

  constructor(private burgerService: BurgerService) { }

  ngOnInit() {
    this.burgers = this.burgerService.defaultBurgers

  }
  onResize(event: any) {
    this.breakpoint = Math.floor(event.target.innerWidth / 320)

  }

}
