import { Component, inject } from '@angular/core';
import { MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule, MatTabNav, MatTabLink } from '@angular/material/tabs';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbar,
    RouterLink,
    MatAnchor,
    MatButtonModule,
    MatButtonToggleModule,
    RouterLinkActive,
    MatTabsModule,
    MatTabLink,
    RouterLink,
    NgClass,
  ],
  providers: [MatTabNav],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  _router = inject(Router);

  navigateTo(route: string) {
    console.log(route);
    this._router.navigateByUrl(route);
  }
}
