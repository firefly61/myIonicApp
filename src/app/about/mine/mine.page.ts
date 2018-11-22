import {Component, OnInit} from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular';

@Component({
    templateUrl: 'mine.page.html',
    styleUrls: ['mine.component.scss']
})

export class MinePage implements OnInit {
    constructor(
        private navParams: NavParams,
        private modalCtrl: ModalController
    ) {
    }

    ngOnInit() {
    }

    dismiss() {
        this.modalCtrl.dismiss();
    }

}
