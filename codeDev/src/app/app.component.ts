import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CpfComponent } from './geradores/cpf/cpf.component';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, CpfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'codeDev';
}
