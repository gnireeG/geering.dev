import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightbulbIconComponent } from './lightbulb-icon.component';

describe('LightbulbIconComponent', () => {
  let component: LightbulbIconComponent;
  let fixture: ComponentFixture<LightbulbIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightbulbIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightbulbIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
