import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Ingredient } from '../types/enums/ingredients.enum';

@Directive({
  selector: '[appChiliBurger]',
  standalone: true
})
export class ChiliBurgerDirective {
  @Input() ingredients: Ingredient[] = []

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnChanges() {
    if (!this.ingredients?.length) {
      return
    }
    const hasChilli = this.ingredients.includes(Ingredient.CHILLI)

    if (hasChilli) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'border',
        '1px solid red')

    } else {
      this.renderer.removeStyle(
        this.el.nativeElement,
        'border',
      )

    }

  }

}
