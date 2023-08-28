import { Directive, HostBinding, HostListener } from '@angular/core';

/*
  This directive is to add css class on an element that listens to clicks and toggles some porperty 
*/
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  //host binding allows for us to dynammically attach/detach a css class. the class we want is "open"
  @HostBinding('class.open') isOpen= false;

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }

}
