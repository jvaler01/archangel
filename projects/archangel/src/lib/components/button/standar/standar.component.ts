import { Component, Input, Attribute } from '@angular/core';

@Component({
  selector: 'archangel-sbtn',
  templateUrl: './standar.component.html',
  styleUrls: ['./standar.component.scss']
})
export class StandarComponent {
  @Input() outline : boolean = false;
  @Input() color : string = '';
  ripple: string= '';
  constructor(@Attribute('rounded') rounded: boolean, @Attribute('ripple') ripple: string){
    this.ripple = ripple;
  }
}
