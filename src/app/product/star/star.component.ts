import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {


  @Input() rating !:number;
  color:string="gold"

  // Here Rating Value is given by the Parenet Component ie. ListComponent so declare it using @Input()
  constructor() { }

  ngOnInit(): void {

    // if(this.rating>=3 && this.rating <4){
    //   this.color="gold"
    // }else if (this.rating>=4 && this.rating<=5){
    //   this.color="gold"
    // }

  }
  // Child to Parent Data Sharing
  @Output() clickRating= new EventEmitter<number>();

  onClick(){
    this.clickRating.emit(this.rating)
  }

}
