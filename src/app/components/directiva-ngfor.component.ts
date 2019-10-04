import { Component } from '@angular/core';

@Component({
    selector: 'app-directiva-ngfor',
    template: `
        <h3>Desjuiciados</h3>
        <ul>
            <li *ngFor="let nombre of nombres">{{ nombre }}</li>
        </ul>
    `
})

export class DirectivaNgForComponent {
    nombres: String [] = [
        'Neith', 'Nicolas', 'Camila', 'Alirio'
    ]
}