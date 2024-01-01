import { Component } from '@angular/core';
import { CardOutTextComponent } from '../card-out-text/card-out-text.component';
import { CardBottomComponent } from '../card-bottom/card-bottom.component';
import { CardBodyComponent } from '../card-body/card-body.component';
import { CardHeaderComponent } from '../card-header/card-header.component';
import { CardComponent } from '../card/card.component';
import { CardContainerComponent } from '../card-container/card-container.component';

@Component({
    selector: 'archangel-card-example',
    templateUrl: './card-example.component.html',
    styleUrls: ['./card-example.component.scss'],
    standalone: true,
    imports: [CardContainerComponent, CardComponent, CardHeaderComponent, CardBodyComponent, CardBottomComponent, CardOutTextComponent]
})
export class CardExampleComponent {

}
