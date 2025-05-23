import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtComponent } from './edt.component';

describe('EdtComponent', () => {
  let component: EdtComponent;
  let fixture: ComponentFixture<EdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
