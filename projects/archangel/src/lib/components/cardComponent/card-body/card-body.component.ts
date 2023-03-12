import { Component, Input } from '@angular/core';

@Component({
  selector: 'archangel-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss']
})
export class CardBodyComponent {
  @Input() scale : boolean = false
}
