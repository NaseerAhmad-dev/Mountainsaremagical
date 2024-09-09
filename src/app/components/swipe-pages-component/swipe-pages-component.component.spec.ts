import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipePagesComponentComponent } from './swipe-pages-component.component';

describe('SwipePagesComponentComponent', () => {
  let component: SwipePagesComponentComponent;
  let fixture: ComponentFixture<SwipePagesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwipePagesComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwipePagesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
