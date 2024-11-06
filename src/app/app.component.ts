import { Component } from '@angular/core';
import { LabelComponent } from './tests/components/label/label.component';
import { HighlightDirective } from './tests/diretivas/highlight.directive';
import { AsyncCompComponent } from './tests/components/async-comp/async-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LabelComponent, HighlightDirective, AsyncCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-tests';
}
