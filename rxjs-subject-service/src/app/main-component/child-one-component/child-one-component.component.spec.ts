import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOneComponentComponent } from './child-one-component.component';

describe('ChildOneComponentComponent', () => {
  let component: ChildOneComponentComponent;
  let fixture: ComponentFixture<ChildOneComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildOneComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildOneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
