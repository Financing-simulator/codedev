import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopMenuComponent } from './layout/top-menu/top-menu.component';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent,TopMenuComponent],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']})
export class AppComponent {
  title = 'codeDev';
}
