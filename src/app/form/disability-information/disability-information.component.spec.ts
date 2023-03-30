import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabilityInformationComponent } from './disability-information.component';

describe('DisabilityInformationComponent', () => {
  let component: DisabilityInformationComponent;
  let fixture: ComponentFixture<DisabilityInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabilityInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisabilityInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
