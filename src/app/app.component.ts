import { Component } from '@angular/core';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
} )
export class AppComponent {
  title = 'angularanimation01';
  toState = 'state1';
  
  claps: number = 159;
  userClaps: number = 0;
  
  changeState(state: any) {
    this.toState = state;
  }
  
  addClap(){
    this.userClaps++;
    this.claps++;
  }
  
  
  
}
