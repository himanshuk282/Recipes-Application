import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{
    //Function : The element it sits on gets added with a css class and remove the class when we move away
    @HostBinding('class.open') isOpen:boolean = false;

    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }

}