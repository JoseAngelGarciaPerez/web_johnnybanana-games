import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from "./header/header";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  Header],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('johnnybananagames-web');
  protected readonly page_name = "JohnnyBanana Games";
  protected readonly creator = "José Ángel García Pérez";

}
