import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './services/http.service.service';
import { User } from './shared/entities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Kyle Rone\'s Portfolio';

  users!: User[];

  constructor(private httpSvc: HttpServiceService){}

  ngOnInit(): void{
    // this.httpSvc.getAllUsers().subscribe((res) =>{
    //   this.users = res;
    // })

  }

  showLinkNotAvailable(){
    alert('This link is not currently available!');
  }
}
