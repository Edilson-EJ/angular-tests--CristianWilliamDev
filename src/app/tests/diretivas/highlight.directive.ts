import {
  Directive,
  ElementRef,
  inject,
  input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  public highlightColor = input('');

  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngOnInit(): void {
    console.log(this.highlightColor());
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.highlightColor()
    );
  }
}
