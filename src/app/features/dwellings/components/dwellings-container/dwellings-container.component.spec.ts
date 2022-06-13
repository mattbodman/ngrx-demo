import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwellingsContainerComponent } from './dwellings-container.component';

describe('DwellingsContainerComponent', () => {
  let component: DwellingsContainerComponent;
  let fixture: ComponentFixture<DwellingsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwellingsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwellingsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
