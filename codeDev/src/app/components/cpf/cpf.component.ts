import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // <-- importe aqui
import { RouterModule } from '@angular/router'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cpf',
  imports: [ FormsModule ,FormsModule, RouterModule],
  standalone: true,
  templateUrl: './cpf.component.html',
  styleUrl: './cpf.component.scss'
})
export class CpfComponent {
  constructor(private route: ActivatedRoute) {}  

  cpf: string = '';
  mensagem: string = '';

  gerarCpf(): void {
    // Gera um CPF simples aleatório só para exemplo
    const n = () => Math.floor(Math.random() * 9);
    this.cpf = `${n()}${n()}${n()}.${n()}${n()}${n()}.${n()}${n()}${n()}-${n()}${n()}`;
    this.mensagem = '';
  }

  validarCpf(): void {
    if (!this.cpf) {
      this.mensagem = 'Por favor, insira um CPF.';
      return;
    }
    // Validação básica só pra demo (deve implementar validação real)
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (regex.test(this.cpf)) {
      this.mensagem = 'CPF válido!';
    } else {
      this.mensagem = 'CPF inválido! Formato esperado: XXX.XXX.XXX-XX';
    }
  }
}
