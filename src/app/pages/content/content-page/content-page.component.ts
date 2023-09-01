import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockDataBase } from '../../../../data/dataBaseMock';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {
  @Input() imgUrl: string = "https://picsum.photos/seed/picsum/600/300";
  @Input() contentTitle: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.";
  @Input() contentDescription: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.";

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.consumeMockDataById(params['id']);
    });
  }

  consumeMockDataById(id: string): void {
    const data = mockDataBase.find(post => post.id === Number(id));
    if (data) {
      this.imgUrl = data.imgUrl;
      this.contentTitle = data.title;
      this.contentDescription = data.description;
    }
  }
}
