import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {MinePage} from './mine.page';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
    selector: 'app-mine',
    templateUrl: './mine.component.html',
    styleUrls: ['./mine.component.scss'],
    animations: [trigger('circle', [
        state('start', style({'opacity': 1})),
        state('end', style({'opacity': 0})),
        transition('start => end', [
            animate('1s')
        ]),
        transition('end => start', [
            animate('0.5s')
        ])
    ])]
})
export class MineComponent implements OnInit {

    isOpen = true;

    constructor(
        private modalCtrl: ModalController
    ) {
    }

    ngOnInit() {
    }

    toggle() {
        this.isOpen = !this.isOpen;
    }

    async openModal() {
        const modal = await this.modalCtrl.create({
            component: MinePage,
            componentProps: {value: 123}
        });
        return await modal.present();
    }

}
