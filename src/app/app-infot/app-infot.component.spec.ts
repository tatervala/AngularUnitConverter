import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInfotComponent } from './app-infot.component';

describe('AppInfotComponent', () => {
  let component: AppInfotComponent;
  let fixture: ComponentFixture<AppInfotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppInfotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppInfotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
