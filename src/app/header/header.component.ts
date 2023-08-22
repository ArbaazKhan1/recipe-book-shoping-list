import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent {

    collapsed = true;
    @Output() pageSelected = new EventEmitter<number>();
    
    //0 will take you to recipes page and 1 will take you to shopping list page
    onSelect(val: number) {
        this.pageSelected.emit(val);
    }
}