import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePeopleComponent } from './see-people.component';

describe('SeePeopleComponent', () => {
  let component: SeePeopleComponent;
  let fixture: ComponentFixture<SeePeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeePeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
