import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SECTIONS } from '../app-items/app-items';

const SECTIONS_KEYS = Object.keys(SECTIONS);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.less']
})

export class NavBar {
  get sections() {
    return SECTIONS;
  }

  get sectionKeys() {
    return SECTIONS_KEYS;
  }
}

@NgModule({
  imports: [
    RouterModule,
    MatButtonModule,
    CommonModule
  ],
  exports: [NavBar],
  declarations: [NavBar],
})
export class NavBarModule { }
