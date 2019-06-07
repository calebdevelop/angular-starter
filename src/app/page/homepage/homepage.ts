import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgViewerModule } from 'src/app/shared/svg-viewer/svg-viewer';
import { FooterModule } from 'src/app/shared/footer/foote';
import { ComponentPageTitle } from '../page-title/page-title';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.less']
})

export class Homepage implements OnInit {

  constructor(public _componentPageTitle: ComponentPageTitle){}

  ngOnInit(): void {
    this._componentPageTitle.title = 'Home Page';
  }

}

@NgModule({
  declarations: [Homepage],
  exports: [Homepage],
  imports: [
    FooterModule,
    SvgViewerModule,
    CommonModule
  ]
})
export class HomepageModule { }
