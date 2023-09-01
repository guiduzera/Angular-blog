import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input() imgUrl: string = "https://picsum.photos/seed/picsum/600/300";
  @Input() smallCardDate: string = "01/01/2021";
  @Input() smallCardTitle: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.";
  @Input() smallCardId: string = "0";
}
