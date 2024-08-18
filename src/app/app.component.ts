import { Component } from '@angular/core';
import { Tarefa } from './tarefa';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';

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

  constructor() {
    this.READ_tarefas();
  }

  CREATE_tarefa(descricaoNovaTarefa: string) {
    var novaTarefa = new Tarefa(descricaoNovaTarefa, false);
    this.arrayDeTarefas.unshift(novaTarefa);
  }

  READ_tarefas() {
    this.arrayDeTarefas = [
      new Tarefa('Estudar Angular', false),
      new Tarefa('Estudar TypeScript', true),
      new Tarefa('Estudar JavaScript', false),
      new Tarefa('Estudar HTML', false),
      new Tarefa('Estudar CSS', false),
    ];
  }

  DELETE_tarefa(tarefaAserRemovida: Tarefa) {
    this.arrayDeTarefas.splice(
      this.arrayDeTarefas.indexOf(tarefaAserRemovida),
      1
    );
  }
}
