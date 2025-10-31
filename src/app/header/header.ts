import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Header {
  mobileMenuOpen = false;
  a = 0;

  toggleMobileMenu(){
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

}
