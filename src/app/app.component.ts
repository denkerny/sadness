import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  src = 'http://gosindex.ru/wp-content/uploads/2016/03/Snimok-ekrana-2016-03-01-v-12.09.00.png';

  getNewSrcClick(src: string){
  	this.src = src;
  }
}
