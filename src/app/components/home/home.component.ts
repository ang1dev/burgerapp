import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Burger } from '../../types/interfaces/burger.interface';
import { BurgersCardsComponent } from '../burgers-cards/burgers-cards.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router'


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BurgersCardsComponent, MatCardModule, MatButtonModule, RouterLink,],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  burgers: Burger[] = []

}
