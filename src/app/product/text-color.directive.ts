import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {

  constructor(private element:ElementRef) { }

  @HostListener("mouseover")
   onMouseOver(){
    this.element.nativeElement.style.color="orange"
   }
  @HostListener("mouseout")
   onMouseOut(){
    this.element.nativeElement.style.color="black"
   }

}
