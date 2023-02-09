import { Component } from '@angular/core';
import 'jquery';

declare var $:any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})


export class NavBarComponent {

  showProjectsSubMenu: boolean = false;

  closeNavbar(){
    $('.navbar-collapse').removeClass('show');
  }

  toggleProjectsSubMenu(button: any){
    this.showProjectsSubMenu = button.target.text.toLowerCase() === "projects";
  }
}
