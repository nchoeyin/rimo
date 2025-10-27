import { Component } from '@angular/core';
import { FlowbiteNavbarComponent } from '../shared/components/flowbite-navbar/flowbite-navbar.component';
import { FlowbiteFooterComponent } from '../shared/components/flowbite-footer/flowbite-footer.component';

@Component({
  selector: 'app-home',
  imports: [FlowbiteNavbarComponent, FlowbiteFooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
