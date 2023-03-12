import { NgModule } from '@angular/core';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardComponent } from './card/card.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardOutTextComponent } from './card-out-text/card-out-text.component';
import { CardBottomComponent } from './card-bottom/card-bottom.component';
import { CardExampleComponent } from './card-example/card-example.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CardContainerComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardBottomComponent,
    CardOutTextComponent,
    CardExampleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardContainerComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardBottomComponent,
    CardOutTextComponent,
    CardExampleComponent
  ]
})
export class CardModule { }
