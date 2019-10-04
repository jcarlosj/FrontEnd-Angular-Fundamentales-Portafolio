import { Component } from '@angular/core';

@Component({
    selector: 'app-directiva-ngswitch',
    template: `
        <h2>Tecnologia</h2>
        <div [ngSwitch]="tecnologia">
            <div *ngSwitchCase="'angular'">Angular</div>
            <div *ngSwitchCase="'react'">React</div>
            <div *ngSwitchCase="'vue'">Vue</div>
            <div *ngSwitchDefault >None</div>
        </div>
    `
})

export class DirectivaNgSwitchComponent {
    tecnologia: String = "vue";
}