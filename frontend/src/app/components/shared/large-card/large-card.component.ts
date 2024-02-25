import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-large-card',
  templateUrl: './large-card.component.html',
  styleUrls: ['./large-card.component.scss']
})
export class LargeCardComponent {
  @Input() image:string = "";
  @Input() title:string = "";
  @Input() price:string = "";
  @Input() description:string = "";
  @Input() id!:number;

}
