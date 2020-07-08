import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {
  @Input('appUppercase') case: string
  @HostListener('blur') onblur() {
    let changedValue = this.case === 'upper' ? this.eleRef.nativeElement.value.toLowerCase() : this.eleRef.nativeElement.value;
    this.renderer.setProperty(this.eleRef.nativeElement, 'value', changedValue);
  }

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    //this.eleRef.nativeElement.value = this.eleRef.nativeElement.value.toUppercase();
  }

}
