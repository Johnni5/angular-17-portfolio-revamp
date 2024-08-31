import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from "./main-page/main-page.component";
import { IMAGE_CONFIG } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  title = 'portfolio-hp';

}


export class AppModule { }