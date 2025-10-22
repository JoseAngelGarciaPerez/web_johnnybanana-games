import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Home {

}
