import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ComponentPageTitle } from '../page-title/page-title';
import { combineLatest, Subject } from 'rxjs';
import { CaregoryItem, DemoItems } from 'src/app/shared/app-items/app-items';
import {map, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-component-viewer',
  templateUrl: './component-viewer.html',

})

export class ComponentViewer {
  componentDocItem: CaregoryItem;
  sections: Set<string> = new Set(['overview', 'api']);
  private _destroyed = new Subject();

  constructor(_route: ActivatedRoute,
              private router: Router,
              public _componentPageTitle: ComponentPageTitle,
              public demoItems: DemoItems,
              ) {
    // Listen to changes on the current route for the doc id (e.g. button/checkbox) and the
    // parent route for the section (material/cdk).
    combineLatest(_route.params, _route.parent.params).pipe(
        map((p: [Params, Params]) => ({id: p[0]['id'], section: p[1]['section']})),
        map(p => ({doc: demoItems.getItemById(p.id, p.section), section: p.section}),
        takeUntil(this._destroyed))
        ).subscribe(d => {
          this.componentDocItem = d.doc;
          if (this.componentDocItem) {
            this._componentPageTitle.title = `${this.componentDocItem.name}`;
            this.componentDocItem.examples.length ?
                this.sections.add('examples') :
                this.sections.delete('examples');
          } else {
            this.router.navigate(['/' + d.section]);
          }
        });
  }

}

@NgModule({
  declarations: [ComponentViewer],
  exports: [ComponentViewer],
  imports: [
    CommonModule 
  ]
})
export class ComponentViewerModule { }
