import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cpf',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.scss']
})
export class CpfComponent {
  cpf: string = '';
  mensagem: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    @Inject('APP_CONFIG') private config: { apiUrl: string }
  ) {}

  gerarCpf(): void {
    this.http.get(this.config.apiUrl + '/cpf-cnpj/generate-cpf', { responseType: 'text' })
      .subscribe({
        next: (cpf: string) => {
          this.cpf = cpf;
          this.mensagem = '';
        },
        error: () => {
          this.mensagem = 'Erro ao gerar CPF.';
        }
      });
  }

  validarCpf(): void {
    if (!this.cpf) {
      this.mensagem = 'Por favor, insira um CPF.';
      return;
    }

    const url = `${this.config.apiUrl}/cpf-cnpj/validate?cpf=${encodeURIComponent(this.cpf)}`;
    console.log(url);

    this.http.get<boolean>(url)
      .subscribe({
        next: (valido) => {
          this.mensagem = valido ? 'CPF válido!' : 'CPF inválido!';
        },
        error: () => {
          this.mensagem = 'Erro ao validar CPF.';
        }
      });
  }
}
