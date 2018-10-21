import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubStenoComponent } from './sub-steno.component';

describe('MainComponent', () => {
  let component: SubStenoComponent;
  let fixture: ComponentFixture<SubStenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubStenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubStenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
