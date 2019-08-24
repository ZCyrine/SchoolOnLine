import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallComponent } from './showall.component';

describe('ShowallComponent', () => {
  let component: ShowallComponent;
  let fixture: ComponentFixture<ShowallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
