import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navlinks: any[] = [
    {
      name: 'Home',
    },
    {
      name: 'Company',
    },
    {
      name: 'Portfolio',
    },
    {
      name: 'Services',
    },
    {
      name: 'Contact Us',
    },
  ];
}
