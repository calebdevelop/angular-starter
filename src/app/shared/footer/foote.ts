import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.less'],
})

export class Footer { }

@NgModule({
  declarations: [Footer],
  exports: [Footer],
  imports: [
    CommonModule
  ]
})
export class FooterModule { }
