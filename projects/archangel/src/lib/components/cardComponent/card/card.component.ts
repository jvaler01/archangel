import { Component, Input } from '@angular/core';

@Component({
  selector: 'archangel-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title = '';
  @Input() scale : boolean = false
}
