import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-land-page',
  imports: [RouterOutlet],
  templateUrl: './land-page.component.html',
  styleUrl: './land-page.component.css'
})
export class LandPageComponent {
  title = "teste";
  constructor(private router: Router) { }

  redirectTeste() {
    this.router.navigate(['/tasks']);
  }
}
