import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  styles: [`
  .fifthElement {
    color: white;
  }`]
})
export class DetailsComponent implements OnInit {
  buttonClicked = false;
  i = 0;
  clicks = []

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(){
    this.buttonClicked = this.buttonClicked === false ? true : false;
    this.i++;
    this.clicks.push(this.i);
  }

  getBackgroundColor(){
    return this.clicks.length > 4 ? 'blue' : 'white';
  }

  isFifthElement(){
    return this.clicks.length > 4;
  }

}
