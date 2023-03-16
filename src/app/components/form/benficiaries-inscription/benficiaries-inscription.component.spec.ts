import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenficiariesInscriptionComponent } from './benficiaries-inscription.component';

describe('BenficiariesInscriptionComponent', () => {
  let component: BenficiariesInscriptionComponent;
  let fixture: ComponentFixture<BenficiariesInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenficiariesInscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenficiariesInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
