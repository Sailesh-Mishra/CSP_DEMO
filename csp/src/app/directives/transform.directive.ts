import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[transform]'
})
export class Transform {
    @HostBinding('style.backgroundColor')
    backgroundColor = 'transparent';

    @HostBinding('style.color')
    color = 'black';

    @HostListener('mouseenter')
    mouseenter() {
        this.backgroundColor = 'yellow';
        this.color = 'red';
    }

    @HostListener('mouseleave')
    mouseleave() {
        this.backgroundColor = 'transparent';
        this.color = 'black';
    }
}