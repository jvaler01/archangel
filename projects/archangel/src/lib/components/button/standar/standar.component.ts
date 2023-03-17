import { Component, Input, Attribute } from '@angular/core';

@Component({
  selector: 'archangel-sbtn',
  templateUrl: './standar.component.html',
  styleUrls: ['./standar.component.scss']
})
export class StandarComponent {
  @Input() outline : boolean = false
  @Input() color : string = ''
  constructor(@Attribute('rounded') rounded: boolean){
    if (rounded) {
      console.log("parameter rounded passed")
    }
  }
}
