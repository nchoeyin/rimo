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

  images = [
    {'title':'Lebron James','src':'/lebron_lakers.webp'},
    {'title': 'tribe','src':'/tribal_art.webp'},
    {'title': 'clash royale','src':'/clash_royale_king.webp'},
    {'title': 'tribe','src':'/tribal_art.webp'},
    {'title': 'clash royale','src':'/clash_royale_king.webp'},
    {'title': 'tribe','src':'/tribal_art.webp'},
    {'title': 'clash royale','src':'/clash_royale_king.webp'},
    {'title': 'tribe','src':'/tribal_art.webp'},
    {'title': 'clash royale','src':'/clash_royale_king.webp'},
  ]
}
