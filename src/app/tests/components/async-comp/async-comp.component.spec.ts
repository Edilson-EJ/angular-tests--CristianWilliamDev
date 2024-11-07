import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncCompComponent } from './async-comp.component';

describe('AsyncCompComponent', () => {
  let component: AsyncCompComponent;
  let fixture: ComponentFixture<AsyncCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsyncCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
