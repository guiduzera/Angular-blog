import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input() imgUrl: string = "https://picsum.photos/seed/picsum/600/300";
  @Input() cardDate: string = "01/01/2021";
  @Input() cardTitle: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.";
  @Input() cardDescription: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.";
  @Input() cardId: string = "0";
}
