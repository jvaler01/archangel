import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'archangel-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class CardComponent {
  @Input() title = '';
  @Input() scale : boolean = false
}
