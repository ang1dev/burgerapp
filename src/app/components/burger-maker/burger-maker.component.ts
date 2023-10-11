import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper'
import { IngredientsComponent } from '../ingredients/ingredients.component';
import { PreviewOrderComponent } from '../preview-order/preview-order.component';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-burger-maker',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    IngredientsComponent,
    PreviewOrderComponent,
    CheckoutComponent
  ]
  ,
  templateUrl: './burger-maker.component.html',
  styleUrls: ['./burger-maker.component.scss']
})
export class BurgerMakerComponent {

}
