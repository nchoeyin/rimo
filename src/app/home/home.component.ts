import { Component } from '@angular/core';
import { FlowbiteNavbarComponent } from '../shared/components/flowbite-navbar/flowbite-navbar.component';
import { FlowbiteFooterComponent } from '../shared/components/flowbite-footer/flowbite-footer.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [FlowbiteNavbarComponent, FlowbiteFooterComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
