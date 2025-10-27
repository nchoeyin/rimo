import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowbiteFooterComponent } from './flowbite-footer.component';

describe('FlowbiteFooterComponent', () => {
  let component: FlowbiteFooterComponent;
  let fixture: ComponentFixture<FlowbiteFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowbiteFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowbiteFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
