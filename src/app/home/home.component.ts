import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  display:boolean = false;

  constructor() { }

  ngOnInit(): void {
    localStorage.removeItem("jogador");
    localStorage.removeItem("parceiro");
    localStorage.removeItem("avatars");
    localStorage.removeItem("avatarspar");
  }

  showDialog(){
    this.display = true;
  }

}
