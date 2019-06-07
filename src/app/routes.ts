import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { Homepage } from './page/homepage';
import { ComponentSidenav } from './page/component-sidenav';
import { ComponentViewer } from './page/component-viewer/component-viewer';

export const APP_ROUTE: Routes  = [
    { path: '', component: Homepage },
    /*
    { path: 'components', component: ProductListComponent },
    { path: 'cdk', component: ProductListComponent },
    { path: 'guides', component: ProductListComponent },
    */
    {
        path: ':section',
        component: ComponentSidenav,

        children: [
            {
                path: ':id',
                component: ComponentViewer,
            }
        ]        
    }
];