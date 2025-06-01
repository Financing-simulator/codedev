import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cnpj',
   standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './cnpj.component.html',
  styleUrl: './cnpj.component.scss'
})
export class CnpjComponent {

  cnpj: string = '';
  mensagem: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    @Inject('APP_CONFIG') private config: { apiUrl: string }
  ) {}

  gerarCnpj(): void {
    this.http.get(this.config.apiUrl + '/cpf-cnpj/generate-cnpj', { responseType: 'text' })
      .subscribe({
        next: (cnpj: string) => {
          this.cnpj = cnpj;
          this.mensagem = '';
        },
        error: () => {
          this.mensagem = 'Erro ao gerar CNPJ.';
        }
      });
  }

  validarCnpj(): void {
    if (!this.cnpj) {
      this.mensagem = 'Por favor, insira um CNPJ.';
      return;
    }

    const url = `${this.config.apiUrl}/cpf-cnpj/validate?cnpj=${encodeURIComponent(this.cnpj)}`;
    console.log(url);

    this.http.get<boolean>(url)
      .subscribe({
        next: (valido) => {
          this.mensagem = valido ? 'CNPJ válido!' : 'CNPJ inválido!';
        },
        error: () => {
          this.mensagem = 'Erro ao validar CNPJ.';
        }
      });
  }
}
