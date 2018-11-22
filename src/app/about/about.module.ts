import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AboutPage} from './about.page';
import {MineComponent} from './mine/mine.component';
import {MinePage} from './mine/mine.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: AboutPage}])
    ],
    declarations: [AboutPage, MineComponent, MinePage],
    entryComponents: [MinePage]
})
export class AboutPageModule {
}
