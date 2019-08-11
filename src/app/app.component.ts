import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  maxSecond = 20;
  currentSecond = 0;
  timer:any;
  constructor(){
    this.currentSecond = this.maxSecond;
  }

  start() {
    this.timer = setInterval(()=>{
      // console.log(1);
      if(this.currentSecond > 0)
            this.currentSecond--;
    },1000);
   
  }
  stop() {
    clearInterval(this.timer);
  }
  restart() {
    clearInterval(this.timer);
    this.currentSecond = this.maxSecond;
  }
}
