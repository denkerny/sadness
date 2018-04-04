import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-img',
  templateUrl: './my-img.component.html',
  styleUrls: ['./my-img.component.css']
})
export class MyImgComponent implements OnInit {

@Output() onImgClick = new EventEmitter<string>();
  
  constructor() { }

  src = 'https://avatars.mds.yandex.net/get-pdb/805160/cbf701a3-13eb-41b7-b031-bf1672f3f385/s800';

  onTitleClick(){

  	console.log('clicked');
  	this.onImgClick.emit(this.src);
  }

  ngOnInit() {
  }

}
