import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsListComponent } from '../ingredients-list/ingredients-list.component';
import { SelectedIngredientsComponent } from '../selected-ingredients/selected-ingredients.component';
import { Ingredient } from '../../types/enums/ingredients.enum';
import { Subscription } from 'rxjs';
import { BurgerService } from 'src/app/services/burger.service';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [CommonModule,
    IngredientsListComponent,
    SelectedIngredientsComponent],
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  ingredients: Ingredient[] = []
  subscription: Subscription = new Subscription()

  constructor(private burgerService: BurgerService) { }

  ngOnInit() {
    // this.subscription = this.burgerService.selectedIngredients$.subscribe(
    //   (ingredients) => {
    //     this.ingredients = ingredients
    //   }
    // )
  }

  handleSelectIngredients(ingredients: Ingredient[]) {
    this.ingredients = ingredients
  }

  handleDeleteIngredient(ingredient: Ingredient) {
    debugger
    this.ingredients = this.ingredients.filter((i) => i !== ingredient)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}

