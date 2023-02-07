import { Component } from '@angular/core';
import 'jquery';

declare var $:any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})


export class NavBarComponent {

  openCloseNavbar(){
    $('.navbar-collapse').removeClass('show');
  }
}
