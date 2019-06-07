import { Component, NgModule, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatIconModule } from '@angular/material';
import { RouterModule, Params, ActivatedRoute } from '@angular/router';
import { FooterModule } from 'src/app/shared/footer/foote';
import { Observable, combineLatest } from 'rxjs';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DemoItems } from 'src/app/shared/app-items/app-items';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-component-sidenav',
  templateUrl: './component-sidenav.html',
  styleUrls: ['./component-sidenav.less'],
  encapsulation: ViewEncapsulation.None, 
})

export class ComponentSidenav implements OnInit {
  params: Observable<Params>;
   
  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.params = combineLatest(
      this._route.pathFromRoot.map(route => route.params),
      Object.assign);
  }

}

@Component({
  selector: 'app-component-nav',
  templateUrl: './component-nav.html',
  animations: [
    trigger('bodyExpansion', [
      state('collapsed', style({height: '0px', display: 'none'})),
      state('expanded', style({height: '*', display: 'block'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
    ]),
  ],
})

export class ComponentNav implements OnInit {
  
  @Input() params: Observable<Params>;

  constructor(public docItems: DemoItems) {}

  ngOnInit(): void {
    
  }

}

@NgModule({
  declarations: [ComponentSidenav, ComponentNav],
  exports: [ComponentSidenav],
  imports: [
    BrowserAnimationsModule,
    MatIconModule,
    CdkAccordionModule,
    FooterModule,
    RouterModule,
    MatSidenavModule,
    CommonModule
  ]
})
export class ComponentSidenavModule { }
