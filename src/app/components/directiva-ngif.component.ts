import { Component } from '@angular/core';

@Component({
    selector: 'app-directiva-ngif',
    template: `
        <div *ngIf="mostrar">
            <h1>Bienvenido</h1>
        </div>
    `
})

export class DirectivaNgIfComponent {
    mostrar: Boolean = true;
}