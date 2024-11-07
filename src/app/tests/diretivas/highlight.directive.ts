import {
  Directive,
  ElementRef,
  inject,
  input, OnChanges,
  OnInit,
  Renderer2, SimpleChanges,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnChanges {
  public highlightColor = input('');

  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngOnChanges(changes: SimpleChanges) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.highlightColor()
    );
  }
}
