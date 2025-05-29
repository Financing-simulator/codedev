import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cpf',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.scss']
})
export class CpfComponent {
  response: string = '';

  constructor(private http: HttpClient) {} 

  chamarApi(): void {
    const url = "http://localhost:8080/generate-random-cpf"

    this.http.get(url, { responseType: 'text' }).subscribe({
    next: (data: string) => {
      this.response = data;
    },
    error: (erro) => {
      this.response = 'Error: ' + erro.message;
    }
  });

  }
}
