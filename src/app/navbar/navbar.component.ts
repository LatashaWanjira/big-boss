import { Component, OnInit } from '@angular/core';
import * as $ from "jquery"


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $(document).scroll(function() {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
    });
  }

}
