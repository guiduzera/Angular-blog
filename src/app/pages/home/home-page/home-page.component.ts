import { Component, OnInit } from '@angular/core';
import { Post, mockDataBase } from '../../../../data/dataBaseMock';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  mainPost: Post = { date: '', title: '', description: '', imgUrl: '', id: 0 }
  data: Post[] = [];

  ngOnInit(): void {
    this.consumemockData();
  }
  
  consumemockData(): void {
    this.data = mockDataBase;
    this.mainPost = this.data[0];
    this.data.shift();
  }
}
