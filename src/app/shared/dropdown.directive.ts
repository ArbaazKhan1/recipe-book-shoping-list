import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

/*
  This directive is to add css class on an element that listens to clicks and toggles some porperty 
*/
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  //host binding allows for us to dynammically attach/detach a css class. the class we want is "open"
  @HostBinding('class.open') isOpen= false;

  //HostListener is listening to the click on the documnet (html page), and on the the element we want to click
  @HostListener('document:click', ['$event']) toggleOpen(event: Event){
    //if the elementRef that has been clicked contains the dropdown element the open dropdown, else keep isOpen false
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) {}

}
