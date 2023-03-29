import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialEditionComponent } from './social-edition.component';

describe('SocialEditionComponent', () => {
  let component: SocialEditionComponent;
  let fixture: ComponentFixture<SocialEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialEditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
