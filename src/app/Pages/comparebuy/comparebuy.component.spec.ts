import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparebuyComponent } from './comparebuy.component';

describe('ComparebuyComponent', () => {
  let component: ComparebuyComponent;
  let fixture: ComponentFixture<ComparebuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparebuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparebuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
