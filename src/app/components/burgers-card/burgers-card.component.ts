import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Burger } from 'src/app/types/interfaces/burger.interface';
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'
import { ChiliBurgerDirective } from '../../directives/chili-burger.directive';
import { NormalizeEnumPipe } from 'src/app/pipes/normalize-enum.pipe';

@Component({
  selector: 'app-burgers-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, ChiliBurgerDirective, NormalizeEnumPipe],
  templateUrl: './burgers-card.component.html',
  styleUrls: ['./burgers-card.component.scss']
})
export class BurgersCardComponent {
  @Input() burger: Burger | undefined;

}
