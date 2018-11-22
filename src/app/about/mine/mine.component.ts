import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {MinePage} from './mine.page';

@Component({
    selector: 'app-mine',
    templateUrl: './mine.component.html',
    styleUrls: ['./mine.component.scss']
})
export class MineComponent implements OnInit {

    constructor(
        private modalCtrl: ModalController
    ) {
    }

    ngOnInit() {
    }

    async openModal() {
        const modal = await this.modalCtrl.create({
            component: MinePage,
            componentProps: {value: 123}
        });
        return await modal.present();
    }

}
