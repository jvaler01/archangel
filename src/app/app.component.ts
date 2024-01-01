import { Component, ElementRef, HostListener } from '@angular/core';
import { CardBodyComponent, CardComponent, CardContainerComponent, CardExampleComponent, CardHeaderComponent, CardOutTextComponent, StandarComponent } from 'archangel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [CardExampleComponent, CardContainerComponent, CardComponent, CardHeaderComponent, CardBodyComponent, CardOutTextComponent, StandarComponent]
})
export class AppComponent {
  title = 'archangel-workspace';
}
