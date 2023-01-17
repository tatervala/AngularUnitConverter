import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverteryComponent } from './convertery.component';

describe('ConverteryComponent', () => {
  let component: ConverteryComponent;
  let fixture: ComponentFixture<ConverteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverteryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConverteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
