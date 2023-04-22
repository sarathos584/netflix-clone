import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InHeaderComponent } from './in-header.component';

describe('InHeaderComponent', () => {
  let component: InHeaderComponent;
  let fixture: ComponentFixture<InHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
