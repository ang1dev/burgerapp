import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { BurgerService } from 'src/app/services/burger.service';
import { Observable } from 'rxjs';
import { Burger } from '../../types/interfaces/burger.interface';
import { NormalizeEnumPipe } from 'src/app/pipes/normalize-enum.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms'


@Component({
  selector: 'app-preview-order',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatStepperModule,
    MatIconModule,
    RouterLink,
    NormalizeEnumPipe,
    MatTooltipModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,],
  templateUrl: './preview-order.component.html',
  styleUrls: ['./preview-order.component.scss']
})
export class PreviewOrderComponent {
  activeOrder$: Observable<Burger[]> = new Observable<Burger[]>

  constructor(
    private burgerService: BurgerService
  ) { }
  ngOnInit(): void {
    this.activeOrder$ = this.burgerService.activeOrder$

  }
  calculateTotalPrice(order: Burger[] | null): number {
    if (!order) {
      return 0
    }
    return order.reduce((sum, burger) => (sum += burger.price), 0)
  }
}
