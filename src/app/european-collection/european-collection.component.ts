import { Component, OnInit } from '@angular/core';
import { Suit } from '../suit'

@Component({
  selector: 'app-european-collection',
  templateUrl: './european-collection.component.html',
  styleUrls: ['./european-collection.component.css']
})
export class EuropeanCollectionComponent implements OnInit {

  suits = [
    new Suit(1, "http://www.baggi.com.tr/wp-content/uploads/2017/03/1-1731-250x250.jpg", "black"),
    new Suit(2, "http://www.baggi.com.tr/wp-content/uploads/2017/03/1-1731-250x250.jpg", "black"),
    new Suit(3, "http://www.baggi.com.tr/wp-content/uploads/2017/03/1-1731-250x250.jpg", "black"),
    new Suit(4, "http://www.baggi.com.tr/wp-content/uploads/2017/03/1-1731-250x250.jpg", "black"),
    new Suit(5, "http://www.baggi.com.tr/wp-content/uploads/2017/03/1-1731-250x250.jpg", "black")
  ]

  constructor() { }

  ngOnInit() {
  }

}
