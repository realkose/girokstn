import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRecordingComponent } from './sub-recording.component';

describe('MainComponent', () => {
  let component: SubRecordingComponent;
  let fixture: ComponentFixture<SubRecordingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubRecordingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
