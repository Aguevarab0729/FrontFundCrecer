import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthInformationComponent } from './birth-information.component';

describe('BirthInformationComponent', () => {
  let component: BirthInformationComponent;
  let fixture: ComponentFixture<BirthInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
