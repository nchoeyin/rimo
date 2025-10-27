import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowbiteNavbarComponent } from './flowbite-navbar.component';

describe('FlowbiteNavbarComponent', () => {
  let component: FlowbiteNavbarComponent;
  let fixture: ComponentFixture<FlowbiteNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowbiteNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowbiteNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
