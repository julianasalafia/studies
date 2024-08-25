import { Component } from '@angular/core';
import { Tarefa } from './tarefa';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TODOapp';
  arrayDeTarefas: Tarefa[] = [];
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:3000';
    this.READ_tarefas();
  }

  CREATE_tarefa(descricaoNovaTarefa: string) {
    var novaTarefa = new Tarefa(descricaoNovaTarefa, false);
    this.http
      .post<Tarefa>(`${this.apiUrl}/api/post`, novaTarefa)
      .subscribe((resultado) => {
        console.log(resultado);
        this.READ_tarefas();
      });
  }

  READ_tarefas() {
    this.http
      .get<Tarefa[]>(`${this.apiUrl}/api/getAll`)
      .subscribe((resultado) => (this.arrayDeTarefas = resultado));
  }

  UPDATE_tarefa(tarefaAserModificada: Tarefa) {
    var indice = this.arrayDeTarefas.indexOf(tarefaAserModificada);
    var id = this.arrayDeTarefas[indice]._id;
    this.http
      .patch<Tarefa>(`${this.apiUrl}/api/update/${id}`, tarefaAserModificada)
      .subscribe((resultado) => {
        console.log(resultado);
        this.READ_tarefas();
      });
  }

  DELETE_tarefa(tarefaAserRemovida: Tarefa) {
    var indice = this.arrayDeTarefas.indexOf(tarefaAserRemovida);
    var id = this.arrayDeTarefas[indice]._id;
    this.http
      .delete<Tarefa>(`${this.apiUrl}/api/delete/${id}`)
      .subscribe((resultado) => {
        console.log(resultado);
        this.READ_tarefas();
      });
  }
}
