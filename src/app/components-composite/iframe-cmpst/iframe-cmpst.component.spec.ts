import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeCmpstComponent } from './iframe-cmpst.component';

describe('IframeCmpstComponent', () => {
  let component: IframeCmpstComponent;
  let fixture: ComponentFixture<IframeCmpstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IframeCmpstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IframeCmpstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
