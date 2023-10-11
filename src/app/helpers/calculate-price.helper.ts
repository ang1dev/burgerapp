import {
    LARGE_BURGER_PRICE,
    LARGE_INGREDIENT_PRICE,
    MEDIUM_BURGER_PRICE,
    MEDIUM_INGREDIENT_PRICE,
    SMALL_BURGER_PRICE,
    SMALL_INGREDIENT_PRICE
} from "../constants/burger-prices.const";
import { BurgerSize } from "../types/enums/burger-size.enum";
import { Ingredient } from "../types/enums/ingredients.enum";

export function calculateBurgerPrice(
    size: BurgerSize,
    ingredients: Ingredient[]
): number {
    switch (size) {
        case BurgerSize.LARGE:
            return (
                LARGE_BURGER_PRICE + ingredients.length * LARGE_INGREDIENT_PRICE
            )
        case BurgerSize.MEDIUM:
            return (
                MEDIUM_BURGER_PRICE + ingredients.length * MEDIUM_INGREDIENT_PRICE
            )
        case BurgerSize.SMALL:
            return (
                SMALL_BURGER_PRICE + ingredients.length * SMALL_INGREDIENT_PRICE
            )

    }
}