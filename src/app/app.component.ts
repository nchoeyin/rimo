import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RouterModule} from '@angular/router';
import { FlowbiteService } from './shared/services/flowbite.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'rimo';
  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      flowbite.initFlowbite();
    });
  }
}
