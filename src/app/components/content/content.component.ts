import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  data = {
	  name: 'Juan Carlos Jiménez Gutiérrez',
	  profession: 'Analista y Desarrollador de Sistemas de Información FrontEnd/BackEnd Developer',
	  images: [ '../assets/images/me.jpg' ],
  }
}