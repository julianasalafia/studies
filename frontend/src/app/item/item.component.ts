import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../tarefa';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [NgIf], 
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
emEdicao = false;
@Input() tarefa: Tarefa = new Tarefa("", false);
@Output() removeTarefa = new EventEmitter();
@Output() modificaTarefa = new EventEmitter();
}
