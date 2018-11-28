import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {MinePage} from './mine.page';
import {trigger, state, style, animate, transition, query, stagger} from '@angular/animations';

@Component({
    selector: 'app-mine',
    templateUrl: './mine.component.html',
    styleUrls: ['./mine.component.scss'],
    animations: [trigger('openClose', [
        transition(':enter, * => 0, * => -1', []),
        transition(':increment', [
            query(':enter', [
                style({opacity: 0, width: '0px'}),
                stagger(50, [
                    animate('300ms ease-out', style({opacity: 1, width: '*'})),
                ]),
            ], {optional: true})
        ]),
        transition(':decrement', [
            query(':leave', [
                stagger(50, [
                    animate('300ms ease-out', style({opacity: 0, width: '0px'})),
                ]),
            ])
        ]),
    ])
    ]
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
