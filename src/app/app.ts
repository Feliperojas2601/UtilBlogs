import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogService } from './app.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    blogService = inject(BlogService);
}
