import { BurgerSize } from "../enums/burger-size.enum";
import { Ingredient } from "../enums/ingredients.enum";

export interface Burger {
    id: number,
    name: string,
    price: number;
    size?: BurgerSize,
    image: string,
    ingredients: Ingredient[]
}