import { Component, Input, Attribute } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'archangel-sbtn',
    templateUrl: './standar.component.html',
    styleUrls: ['./standar.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class StandarComponent {
  @Input() outline : boolean = false;
  @Input() color : string = '';
  ripple: string= '';
  constructor(@Attribute('rounded') rounded: boolean, @Attribute('ripple') ripple: string){
    this.ripple = ripple;
  }
}
