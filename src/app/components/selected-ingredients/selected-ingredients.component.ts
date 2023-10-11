import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ingredient } from '../../types/enums/ingredients.enum';
import { Burger } from '../../types/interfaces/burger.interface';
import { BurgerService } from 'src/app/services/burger.service';
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NormalizeEnumPipe } from 'src/app/pipes/normalize-enum.pipe';
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { BurgerSize } from 'src/app/types/enums/burger-size.enum';
import { MatStepper } from '@angular/material/stepper';
import { Subscription } from 'rxjs';
import { calculateBurgerPrice } from 'src/app/helpers/calculate-price.helper';

@Component({
  selector: 'app-selected-ingredients',
  standalone: true,
  imports: [CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    NormalizeEnumPipe,
    MatButtonToggleModule,],
  templateUrl: './selected-ingredients.component.html',
  styleUrls: ['./selected-ingredients.component.scss']
})
export class SelectedIngredientsComponent implements OnChanges, AfterViewInit, OnDestroy {
  @Input() selectedIngredients: Ingredient[] = []
  @Output() handleDeleteIngredient: EventEmitter<Ingredient> =
    new EventEmitter<Ingredient>()

  size: BurgerSize = BurgerSize.MEDIUM
  activeOrder: Burger[] = []
  subscription: Subscription = new Subscription()

  constructor(
    private burgerService: BurgerService,
    private matStepper: MatStepper
  ) {

    console.log('CONSTRUCTOR')
  }

  onDeleteIngredient(ingredient: Ingredient) {
    this.handleDeleteIngredient.emit(ingredient)
  }

  onSizeChange(event: any) {
    this.size = event.value
  }

  saveBurger() {
    this.burgerService.updateActiveOrder([
      ...this.activeOrder,
      {
        id: Date.now(),
        size: this.size,
        ingredients: this.selectedIngredients,
        name: 'Burger',
        image: '',
        price: calculateBurgerPrice(this.size, this.selectedIngredients)
      },
    ])
    setTimeout(() => {
      this.matStepper.next()
    })
  }

  saveBurgerAndMakeAnother() {
    debugger
    this.burgerService.updateActiveOrder([
      ...this.activeOrder,
      {
        id: Date.now(),
        size: this.size,
        ingredients: this.selectedIngredients,
        name: 'Burger',
        image: '',
        price: calculateBurgerPrice(this.size, this.selectedIngredients)
      },
    ])

    this.selectedIngredients.forEach((i) =>
      this.handleDeleteIngredient.emit(i)
    )
  }

  onReset() {
    this.selectedIngredients.forEach((i) =>
      this.handleDeleteIngredient.emit(i)
    )
  }

  ngOnInit() {

    this.subscription = this.burgerService.activeOrder$.subscribe(
      (order: Burger[]) => {
        this.activeOrder = order
      }
    )
  }

  ngOnChanges() {
    console.log('ON CHANGES', this.selectedIngredients)
  }

  ngAfterViewInit() {
    console.log('NG AFTER VIEW INIT')
  }

  ngOnDestroy() {
    console.log('NG ON DESTROY')
    this.subscription.unsubscribe()
  }

}
