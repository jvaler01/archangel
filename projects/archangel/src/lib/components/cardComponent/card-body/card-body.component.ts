import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'archangel-card-body',
    templateUrl: './card-body.component.html',
    styleUrls: ['./card-body.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class CardBodyComponent {
  @Input() scale : boolean = false
}
