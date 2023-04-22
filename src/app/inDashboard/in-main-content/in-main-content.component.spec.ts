import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InMainContentComponent } from './in-main-content.component';

describe('InMainContentComponent', () => {
  let component: InMainContentComponent;
  let fixture: ComponentFixture<InMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InMainContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
