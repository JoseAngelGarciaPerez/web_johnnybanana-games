import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Footer } from '../footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Footer, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Home {

  style = {}

  onMouseMove(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    if (!target) return;

    const x = (event.offsetX / target.clientWidth - 0.5) * 20;
    const y = (event.offsetY / target.clientHeight - 0.5) * -20;

    this.style = {
      transform: `rotateX(${y}deg) rotateY(${x}deg) scale(1.05)`
    };
  }

  reset() {
    this.style = {
      transform: 'rotateX(0) rotateY(0) scale(1)'
    };
  }
}
