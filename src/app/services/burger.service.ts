import { Injectable } from '@angular/core';
import { Burger } from '../types/interfaces/burger.interface';
import { Ingredient } from '../types/enums/ingredients.enum';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {
  private activeOrder: BehaviorSubject<Burger[]> = new BehaviorSubject<Burger[]>([])
  activeOrder$: Observable<Burger[]> = this.activeOrder.asObservable()

  // selectedIngredients$: Observable<Ingredient[]> =
  //   this.selectedIngredients$.asObservable()

  updateActiveOrder(order: Burger[]): void {
    this.activeOrder.next(order)
  }


  defaultBurgers: Burger[] = [{
    id: 1,
    name: 'The Pioneer',
    price: 5,
    image: '/assets/pio.jpg',
    ingredients: [
      Ingredient.BACON,
      Ingredient.CARAMELIZED_ONION,
      Ingredient.ONION,
      Ingredient.PICKLES,
      Ingredient.CHILLI
    ]

  }, {

    id: 2,
    name: 'The Godmother',
    price: 6,
    image: '/assets/godmother.jpg',
    ingredients: [

      Ingredient.GOUDA,
      Ingredient.CRUNCHY_BACON,
      Ingredient.SMOKED_BBQ,
      Ingredient.PICKLES
    ]

  },
  {

    id: 3,
    name: 'Mr. Bojangles',
    price: 7,
    image: '/assets/bojangles.jpg',
    ingredients: [
      Ingredient.GRILLED_BACON,
      Ingredient.CARAMELIZED_ONION,
      Ingredient.PICKLES,
      Ingredient.DOUBLE_CHEESE,
      Ingredient.CHILLI
    ]

  },
  {

    id: 4,
    name: 'The Cowboy',
    price: 10,
    image: '/assets/cowboy.jpg',
    ingredients: [
      Ingredient.GRILLED_BACON,
      Ingredient.CARAMELIZED_ONION,
      Ingredient.PICKLES,
      Ingredient.CRUNCHY_BACON
    ]

  },
  {

    id: 5,
    name: 'Jack',
    price: 10,
    image: '/assets/jack.jpg',
    ingredients: [

      Ingredient.GRILLED_BACON,
      Ingredient.CARAMELIZED_ONION,
      Ingredient.PICKLES

    ]
  },
  {

    id: 6,
    name: 'London',
    price: 10,
    image: '/assets/london.jpg',
    ingredients: [

      Ingredient.BACON,
      Ingredient.CHILLI,
      Ingredient.PARMESAN,
      Ingredient.CHEDDER,
      Ingredient.BASIL,
      Ingredient.BBQ
    ]

  }, {

    id: 6,
    name: 'Chicago',
    price: 10,
    image: '/assets/chicago.jpg',
    ingredients: [
      Ingredient.CRUNCHY_BACON,
      Ingredient.GARLIC,
      Ingredient.BASIL,
      Ingredient.BACON,
      Ingredient.DOUBLE_CHEESE
    ]

  }]

  constructor() { }
}
