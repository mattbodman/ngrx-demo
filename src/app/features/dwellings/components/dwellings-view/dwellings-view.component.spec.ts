import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwellingsViewComponent } from './dwellings-view.component';

describe('DwellingsViewComponent', () => {
  let component: DwellingsViewComponent;
  let fixture: ComponentFixture<DwellingsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwellingsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwellingsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
